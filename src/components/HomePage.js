import React, { useState } from 'react';
import FlowChart from './FlowChart';
import NodeContent from './NodeContent';

const HomePage = () => {
  const [elements, setElements] = useState([]);
  const [selectedNode, setSelectedNode] = useState(null);

  const onConnect = (params) => {
    setElements((els) =>
      els.concat({
        id: `edge-${els.length + 1}`,
        source: params.source,
        target: params.target,
        label: 'New edge',
        type: 'custom',
      })
    );
  };

  const onElementsRemove = (elementsToRemove) => {
    setElements((els) => els.filter((el) => !elementsToRemove.includes(el)));
  };

  const handleNodeClick = (event, node) => {
    setSelectedNode(node);
  };

  const handleNodeDoubleClick = (event, node) => {
    setElements((els) =>
      els.map((el) => {
        if (el.id === node.id) {
          el.data.label = prompt('Enter a new label:', el.data.label);
        }
        return el;
      })
    );
  };

  const handleNodeDelete = (event, node) => {
    setElements((els) => els.filter((el) => el.id !== node.id));
};

const handleNodeAdd = () => {
const newNode = {
    id: `node-${elements.length + 1}`,
    data: { label: 'New node' },
    position: {
    x: Math.random() * window.innerWidth - 100,
    y: Math.random() * window.innerHeight - 100,
    },
    type: 'default',
};
setElements((els) => els.concat(newNode));
};

return (
<div className="App">
<div className="flowchart-wrapper">
<FlowChart
       elements={elements}
       onConnect={onConnect}
       onElementsRemove={onElementsRemove}
       onNodeClick={handleNodeClick}
       onNodeDoubleClick={handleNodeDoubleClick}
       onNodeDelete={handleNodeDelete}
       selectedNode={selectedNode}
     />
</div>
<div className="sidebar-wrapper">
<NodeContent
       node={selectedNode}
       onNodeAdd={handleNodeAdd}
       onNodeDelete={handleNodeDelete}
     />
</div>
</div>
);
};

export default HomePage;
