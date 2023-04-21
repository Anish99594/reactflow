import ReactFlow from 'react-flow-renderer';
import Node from './Node';
import Edge from './Edge';

const FlowChart = ({ elements, onElementsRemove, onConnect }) => {
  return (
    <ReactFlow
      elements={elements}
      onElementsRemove={onElementsRemove}
      onConnect={onConnect}
      nodeTypes={{ custom: Node }}
      edgeTypes={{ custom: Edge }}
    />
  );
};

export default FlowChart;
