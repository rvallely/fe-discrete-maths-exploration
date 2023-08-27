import ReactFlow, {
  MiniMap,
  Controls,
  Background,
} from 'reactflow';
import 'reactflow/dist/style.css';
import React from 'react';

const centraliseNodesInLineage = (feNodes, startNode) => {
  console.log('** centralising nodes in lineage **');
  let firstChild = startNode;
  for (let i = feNodes.length - 1; i > 0; i -= 1) {
    // find their parent in the next layer
    const nextParentIndex = feNodes[i - 1].findIndex(({ id }) => id === firstChild.data.parentNode);
    // find sibling in the current layer
    console.log('firstChild: ', JSON.stringify(firstChild));
    const children = feNodes[i].filter(({ data: { parentNode, label } }) => {
      console.log('label: ', label, 'parentNode: ', parentNode);
      return parentNode === firstChild.data.parentNode;
    });
    // calculate the centralisedXIndex of their parent
    console.log(JSON.stringify(
      feNodes[i].map(({ data: { label, parentNode } }) => ({ label, parentNode })),
    ));
    console.log('The children that share a parent are: ', children.map(({ data: { label } }) => label));

    let centralisedParentXPosition;
    if (children.length === 1) {
      centralisedParentXPosition = children[0].position.x + 200;
    } else {
      const [biggerX, smallerX] = children[0].position.x > children[1].position.x
        ? [children[0].position.x, children[1].position.x]
        : [children[1].position.x, children[0].position.x];
      centralisedParentXPosition = (biggerX - smallerX) / 2 + smallerX;
    }

    console.log('centralising node: ', feNodes[i - 1][nextParentIndex].data.label);
    feNodes[i - 1][nextParentIndex].position.x = centralisedParentXPosition;
    // make the parent just centralised the new firstChild
    firstChild = feNodes[i - 1][nextParentIndex];
  }
};
const getPositionEdgeAndParent = (element, previousFeNodeLayer, currentFeNodeLayer, feNodes) => {
  /**
     * TODO: add a check to see if a previous node is at this position if so move it along another 100 or whatever
     * Will also need to make y
     */
  if (!previousFeNodeLayer) {
    return {
      position: { x: 200, y: 0 },
      edge: undefined,
    };
  }
  const parentFeNode = previousFeNodeLayer.find(({ id }) => id === element.previousNode.name);
  const edge = {
    id: `e-${parentFeNode.id}-${element.name}`, source: parentFeNode.id, target: element.name, type: 'straight',
  };
  const position = {};

  if (element.previousNode.position === 'left') {
    // add the default position for a left node element
    position.x = parentFeNode.position.x - 100;

    // centralise the lineage
    if (currentFeNodeLayer.find((
      { position: nodePositionInCurrentLayer },
    ) => nodePositionInCurrentLayer.x === position.x)) {
      position.x = parentFeNode.position.x + 200;
      console.log('postion overlapped, changing now ... ');
      // **** check this is right (it was 200 but was causing overlap with [4, 3, 7, 9, 1, 0, 4, 34, 2, 78, 8] )

      // offest the direct parent by 100
      const parentIndex = feNodes[feNodes.length - 1].findIndex(({ id }) => id === parentFeNode.id);
      console.log('centralising: ', feNodes[feNodes.length - 1][parentIndex].data.label);
      feNodes[feNodes.length - 1][parentIndex].position.x = position.x + 100;
      // start node
      // find their parent in the next layer
      // find sibling in the current layer
      // calculate the centralisedXIndex of their parent
      // reset the parent position.x to the centralised position
      centraliseNodesInLineage(feNodes, feNodes[feNodes.length - 1][parentIndex]);
    }
  } else {
    position.x = parentFeNode.position.x + 100;
  }
  position.y = parentFeNode.position.y + 100;

  return {
    position,
    edge,
    parentNode: parentFeNode.id,
  };
};

const getNodesAndEdges = (iterations) => {
  const nodes = [];
  const edges = [];
  for (const layer in iterations) {
    const currentFeNodeLayer = [];

    for (const element of iterations[layer]) {
      console.log('element: ', element.pivot);
      const {
        position,
        edge,
        parentNode,
      } = getPositionEdgeAndParent(element, nodes[nodes.length - 1], currentFeNodeLayer, nodes);
      if (edge) {
        edges.push(edge);
      }
      currentFeNodeLayer.push({
        id: element.name,
        data: {
          label: element.pivot,
          parentNode,
        },
        position,
        style: { backgroundColor: 'pink', border: 'dashed', borderColor: 'green' },
        width: 140,
      });
    }

    nodes.push(currentFeNodeLayer);
  }
  return {
    nodes: nodes.flat(),
    edges,
  };
};
function QuickSortProcess({ iterations }) {
  const { nodes, edges } = getNodesAndEdges(iterations);

  console.log(JSON.stringify(nodes.map(({ data: { label }, position, id }) => ({
    id,
    label,
    position,
  }))));
  console.log(JSON.stringify(edges));

  return (
    <div style={{
      height: 1000, margin: 30, border: 'dashed', borderColor: 'yellow', position: 'relative', draggable: 'true',
    }}
    >
      <ReactFlow
        style={{ border: 'solid', borderColor: 'green' }}
        nodes={nodes}
        edges={edges}
        selectionOnDrag={false}
        panOnDrag
        nodesDraggable
        nodesConnectable={false}
        snapToGrid
        preventScrolling
        panOnScroll={false}
        zoomOnScroll={false}
        fitView
      >
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
}

export default QuickSortProcess;
