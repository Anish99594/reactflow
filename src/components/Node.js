import React from 'react';
import { Handle } from 'react-flow-renderer';

const Node = ({ data }) => {
  return (
    <div className="node">
      <Handle type="target" position="left" id={`${data.id}-in`} />
      <div className="node-content">
        <p>{data.label}</p>
      </div>
      <Handle type="source" position="right" id={`${data.id}-out`} />
    </div>
  );
};

export default Node;
