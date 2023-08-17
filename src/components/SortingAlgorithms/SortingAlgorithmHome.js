import React, { Component, useEffect, useState } from 'react';
import Flowchart from 'react-simple-flowchart';
import Diagram, { createSchema, useSchema } from 'beautiful-react-diagrams';
import { Button } from 'beautiful-react-ui';

export function SortingAlgorithmHome(){
    // const initialSchema = createSchema({
    // nodes: [
    //     {
    //     id: 'node-1',
    //     content: 'Node 1',
    //     coordinates: [150, 60],
    //     outputs: [ { id: 'port-1', alignment: 'right' } ],
    //     },
    // ]
    // });

    // const CustomRender = ({ id, content, data, inputs, outputs }) => (
    //     <div style={{background: 'blue'}}>
    //     <div style={{textAlign: 'right'}}>
    //         <Button icon="times" size="small" onClick={()=>data.onClick(id)}/>
    //     </div>
    //     <div role="button" style={{padding: '15px'}}>
    //         {content}
    //     </div>
    //     <div style={{marginTop: '10px',display:'flex', justifyContent:'space-between'}}>
    //         {inputs.map((port) => React.cloneElement(port, {style: { width: '25px', height: '25px', background: '#1B263B' }}))}
    //         {outputs.map((port) => React.cloneElement(port, {style: { width: '25px', height: '25px', background: '#1B263B' }}))}
    //     </div>
    //     </div>
    // );

    const initialSchema = createSchema({
        nodes: [
           { id: 'input-1', content: '5', coordinates: [0, 0], },
           { id: 'input-2', content: '2', coordinates: [0, 60], },
           { id: 'input-3', content: '3', coordinates: [0, 120], },
           { id: 'input-4', content: '1', coordinates: [0, 180], },
           { id: 'input-5', content: '4', coordinates: [0, 240], },
           
           { id: 'r1-sort-2-5', content: 'Sort 2 and 5', coordinates: [150, 60], },
           
           { id: 'r2-sort-3-2', content: 'Sort 3 and 2', coordinates: [150, 120], },
           { id: 'r2-sort-3-5', content: 'Sort 3 and 5', coordinates: [300, 120], },
           
           { id: 'r3-sort-1-2', content: 'Sort 1 and 2', coordinates: [150, 180], },
           { id: 'r3-sort-2-3', content: 'Sort 2 and 3', coordinates: [300, 180], },
           { id: 'r3-sort-3-5', content: 'Sort 3 and 5', coordinates: [450, 180], },

           { id: 'r4-sort-4-1', content: 'Sort 4 and 1', coordinates: [150, 240], },
           { id: 'r4-sort-2-4', content: 'Sort 2 and 4', coordinates: [300, 240], },
           { id: 'r4-sort-3-4', content: 'Sort 3 and 4', coordinates: [450, 240], },
           { id: 'r4-sort-4-5', content: 'Sort 4 and 5', coordinates: [600, 240], },
           
           { id: 'output-1', content: '1', coordinates: [150, 300], },
           { id: 'output-2', content: '2', coordinates: [300, 300], },
           { id: 'output-3', content: '3', coordinates: [450, 300], },
           { id: 'output-4', content: '4', coordinates: [600, 300], },
           { id: 'output-5', content: '5', coordinates: [750, 300], },
       
       
         ],
         links: [
         { input: 'input-1',  output: 'r1-sort-2-5', label: '5', readonly: true, className: 'my-custom-link-class' },
         { input: 'input-2',  output: 'r1-sort-2-5', label: '2', readonly: true, className: 'my-custom-link-class' },
         { input: 'r1-sort-2-5',  output: 'r2-sort-3-2', label: '2', readonly: true, className: 'my-custom-link-class' },
         { input: 'input-3',  output: 'r2-sort-3-2', label: '3', readonly: true, className: 'my-custom-link-class' },
         { input: 'r2-sort-3-2',  output: 'r2-sort-3-5', label: '3', readonly: true, className: 'my-custom-link-class' },
         { input: 'r1-sort-2-5',  output: 'r2-sort-3-5', label: '5', readonly: true, className: 'my-custom-link-class' },
         
         { input: 'input-4',  output: 'r3-sort-1-2', label: '1', readonly: true, className: 'my-custom-link-class' },
         { input: 'r2-sort-3-2',  output: 'r3-sort-1-2', label: '2', readonly: true, className: 'my-custom-link-class' },
         { input: 'r2-sort-3-5',  output: 'r3-sort-2-3', label: '3', readonly: true, className: 'my-custom-link-class' },
         { input: 'r2-sort-3-5',  output: 'r3-sort-3-5', label: '5', readonly: true, className: 'my-custom-link-class' },
         
         { input: 'r3-sort-1-2',  output: 'r3-sort-2-3', label: '2', readonly: true, className: 'my-custom-link-class' },
         { input: 'r3-sort-2-3',  output: 'r3-sort-3-5', label: '3', readonly: true, className: 'my-custom-link-class' },
         
         { input: 'r3-sort-1-2',  output: 'r4-sort-4-1', label: '1', readonly: true, className: 'my-custom-link-class' },
         { input: 'input-5',  output: 'r4-sort-4-1', label: '4', readonly: true, className: 'my-custom-link-class' },
         { input: 'r3-sort-2-3',  output: 'r4-sort-2-4', label: '2', readonly: true, className: 'my-custom-link-class' },
         { input: 'r3-sort-3-5',  output: 'r4-sort-3-4', label: '3', readonly: true, className: 'my-custom-link-class' },
         { input: 'r3-sort-3-5',  output: 'r4-sort-4-5', label: '5', readonly: true, className: 'my-custom-link-class' },
         { input: 'r4-sort-4-5',  output: 'output-5', label: '5', readonly: true, className: 'my-custom-link-class' },
         
         { input: 'r4-sort-4-1',  output: 'r4-sort-2-4', label: '4', readonly: true, className: 'my-custom-link-class' },
         { input: 'r4-sort-2-4',  output: 'r4-sort-3-4', label: '4', readonly: true, className: 'my-custom-link-class' },
         { input: 'r4-sort-3-4',  output: 'r4-sort-4-5', label: '4', readonly: true, className: 'my-custom-link-class' },
         { input: 'r4-sort-4-5',  output: 'output-5', label: '5', readonly: true, className: 'my-custom-link-class' },
         
         { input: 'r4-sort-4-1',  output: 'output-1', label: '1', readonly: true, className: 'my-custom-link-class' },
         { input: 'r4-sort-2-4',  output: 'output-2', label: '2', readonly: true, className: 'my-custom-link-class' },
         { input: 'r4-sort-3-4',  output: 'output-3', label: '3', readonly: true, className: 'my-custom-link-class' },
         { input: 'r4-sort-4-5',  output: 'output-4', label: '4', readonly: true, className: 'my-custom-link-class' },
         ]
       });
    
  // create diagrams schema
  const [schema, { onChange }] = useSchema(initialSchema);

  return (
    <div style={{ height: '22.5rem' }}>
      <Diagram schema={schema} onChange={onChange} />
    </div>
  );

    // create diagrams schema
    // const [schema, { onChange, addNode, removeNode }] = useSchema(initialSchema);
    
    // const deleteNodeFromSchema = (id) => {
    //     const nodeToRemove = schema.nodes.find(node => node.id === id);
    //     removeNode(nodeToRemove);
    // };

    // const addNewNode = () => {
    //     const nextNode = {
    //     id: `node-${schema.nodes.length+1}`,
    //     content: `Node ${schema.nodes.length+1}`,
    //     coordinates: [
    //         schema.nodes[schema.nodes.length - 1].coordinates[0] + 100,
    //         schema.nodes[schema.nodes.length - 1].coordinates[1],
    //     ],
    //     render: CustomRender,
    //     data: {onClick: deleteNodeFromSchema},
    //     inputs: [{ id: `port-${Math.random()}`}],
    //     outputs: [{ id: `port-${Math.random()}`}],
    // };
    
    // addNode(nextNode);
    // };
    // return (
    //     <div style={{ height: '22.5rem' }}>
    //     <Button color="primary" icon="plus" onClick={addNewNode}>Add new node</Button>
    //     <Diagram schema={schema} onChange={onChange} />
    //     <p>there's a diagram here</p>
    //     </div>
    // );
}
export default SortingAlgorithmHome;
