import React from 'react';

const NodeContent = ({ node }) => {
  return (
    <div>
      <h3>Node Content</h3>
      <p>ID: {node.id}</p>
      <p>Label: {node.label}</p>
    </div>
  );
};

export default NodeContent;
