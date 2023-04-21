import React from 'react';
import { EdgeText } from 'react-flow-renderer';

const Edge = ({ data }) => {
  return (
    <>
      <div className="edge">
        <EdgeText>{data.label}</EdgeText>
      </div>
    </>
  );
};

export default Edge;
