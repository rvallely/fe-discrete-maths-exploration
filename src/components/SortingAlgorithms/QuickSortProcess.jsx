/* eslint-disable no-param-reassign */
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
} from 'reactflow';
import 'reactflow/dist/style.css';
import React from 'react';

const getPositionEdgeAndParent = (element, previousFeNodeLayer, currentFeNodeLayer, feNodes) => {
  if (!previousFeNodeLayer) {
    return {
      position: { x: 200, y: 0 },
      edge: undefined,
      updatedFeNodeLayer: currentFeNodeLayer,
    };
  }
  const feParentNode = previousFeNodeLayer.find(({ id }) => id === element.previousNode.name);
  const edge = {
    id: `e-${feParentNode.id}-${element.name}`, source: feParentNode.id, target: element.name, type: 'straight',
  };
  const position = {};
  let positionToRootNode;

  if (element.previousNode.position === 'left') {
    // Add the default position for a node that should be positioned left of its parent.
    position.x = feParentNode.position.x - 95;
    // If the parent of this node is the root (first node in the tree, that has no parent)
    if (feNodes.length === 1) {
      // then the positionToRoot is left.
      positionToRootNode = 'left';
    } else {
      // Otherwise, the positionToRootNode property is inherited from the node's direct parent.
      positionToRootNode = feParentNode.data.positionToRootNode;
    }

    /**
     * If there are nodes already on the layer this node will be added to...
     * */
    if (currentFeNodeLayer.length > 0) {
      /**
       * ...find the furthest right positioned node on the current layer and make sure placing the current node at the
       * default position would be at least 190px away, meaning that placing the node here would not cause overlap.
       * This allows for a 50 px gap between nodes.
       * */
      const [furthestRightOnCurrentLayer] = [...currentFeNodeLayer].sort((a, b) => b.position.x - a.position.x);

      const nodeBeingOverlapped = furthestRightOnCurrentLayer.position.x - 190 < position.x
        ? furthestRightOnCurrentLayer
        : undefined;
      if (nodeBeingOverlapped) {
        /**
         * If there is a node being overlapped, the way nodes are repositioned depends on positionToTheRootNode
         * property. There are four possibilities, only three of which need to be handled.
         *
         * * PTR - position to root
         *
         * 1) Node PTR === left being overlapped by a node PTR === left
         *    In this case, all nodes where PTR is left and an x position of less than the parent (feParentNode)
         *    are moved 190px to the left.
         *
         *    Then the node is placed at the default position (feNodeParent.position.x - 95)
         *
         * 2) Node PTR === left being overlapped by a node PTR === right
         *    This concerns the placement of the first PTR right node on the current layer. The node being placed
         *    will have a left position to its direct parent.
         *    All PTR right nodes move right by 190 px, to allow space to place the node. Then, after its feNodeParent
         *    has moved the position of the node being placed is recalculated to the usual value
         *    (feNodeParent.position.x - 95).
         *
         * 3) Node PTR === right being overlapped by a node PTR === right
         *    This case occurs when placing a PTR right node with the left position to its direct parent, over an
         *    already placed PTR right node with a right position to its direct parent.
         *    To handle this all PTR right nodes with a position.x of more than or equal to the feParentNode postition.x
         *    are moved 190px to the right. Then, after its feNodeParent has moved the position of the node being placed
         *    is recalculated to the usual value (feNodeParent.position.x - 95).
         *
         * 4) Node PTR  === right being overlapped by a node PTR === left
         *    This wouldn't occur and so doesn't need handling. This is because the nodes are placed from left to right,
         *    so a the right PTR nodes are handled and positioned after the left nodes. A left PTR node would never
         *    overlap a right node, as the right PTR node wouldn't exist yet.
         */
        if (nodeBeingOverlapped.data.positionToRootNode === 'left' && positionToRootNode === 'left') {
          feNodes.forEach((layer, i) => {
            layer.forEach((feNode, j) => {
              if (
                feNode.data.positionToRootNode === 'left'
              && feNode.id !== feParentNode.id
              && feNode.position.x < feParentNode.position.x
              ) {
                feNodes[i][j].position.x -= 190;
              }
            });
          });
          currentFeNodeLayer.forEach((feNode, j) => {
            if (feNode.data.positionToRootNode === 'left') {
              currentFeNodeLayer[j].position.x -= 190;
            }
          });
        }
        if (nodeBeingOverlapped.data.positionToRootNode === 'left' && positionToRootNode === 'right') {
          feNodes.forEach((layer, i) => {
            layer.forEach((feNode, j) => {
              if (feNode.data.positionToRootNode === 'right') {
                feNodes[i][j].position.x += 190;
              }
            });
          });
        }
        if (nodeBeingOverlapped.data.positionToRootNode === 'right' && positionToRootNode === 'right') {
          feNodes.forEach((layer, i) => {
            layer.forEach((feNode, j) => {
              if (feNode.data.positionToRootNode === 'right' && feNode.position.x >= feParentNode.position.x) {
                feNodes[i][j].position.x += 190;
              }
            });
          });
        }
        position.x = previousFeNodeLayer.find(({ id }) => id === element.previousNode.name).position.x - 95;
      }
    }
  } else {
    position.x = feParentNode.position.x + 95;
    if (feNodes.length === 1) {
      positionToRootNode = 'right';
    } else {
      positionToRootNode = feParentNode.data.positionToRootNode;
    }
  }

  position.y = feParentNode.position.y + 100;

  return {
    position,
    edge,
    parentNode: feParentNode.id,
    positionToRootNode,
    updatedFeNodeLayer: currentFeNodeLayer,
  };
};

const getNodesAndEdges = (iterations) => {
  const nodes = [];
  const edges = [];

  for (const layer in iterations) {
    if (Object.prototype.hasOwnProperty.call(iterations, layer)) {
      let currentFeNodeLayer = [];

      for (const element of iterations[layer]) {
        const {
          position,
          edge,
          parentNode,
          positionToRootNode,
          updatedFeNodeLayer,
        } = getPositionEdgeAndParent(element, nodes[nodes.length - 1], currentFeNodeLayer, nodes);
        if (edge) {
          edges.push(edge);
        }
        currentFeNodeLayer = updatedFeNodeLayer;
        currentFeNodeLayer.push({
          id: element.name,
          data: {
            label: element.pivot,
            parentNode,
            positionToRootNode,
          },
          position,
          style: { backgroundColor: 'pink', border: 'dashed', borderColor: 'green' },
          width: 140,
          draggable: true,
        });
      }

      nodes.push(currentFeNodeLayer);
    }
  }
  return {
    nodes: nodes.flat(),
    edges,
  };
};
function QuickSortProcess({ iterations }) {
  const { nodes, edges } = getNodesAndEdges(iterations);

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
