import React from "react";
import ReactFlow, {
  addEdge,
  Background,
  Controls,
  MiniMap,
  useEdgesState,
  useNodesState,
} from "reactflow";
import "reactflow/dist/style.css";
import { initialEdges, initialNodes } from "./helper";

const PaymentGateWorkFlow = () => {

  // Manage nodes and edges state
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  
  const onConnect = (connection) => {
    console.log(connection);
    let newEdges = { ...connection, animation: true, id: `e${edges.length + 1}`, style: { stroke: "orange", strokeWidth: 2 },};
    // 'addEdge' helps add the new connection into the existing edges state.
    setEdges((prevEdges) => addEdge(newEdges, prevEdges));
  };

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      >
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
};

export default PaymentGateWorkFlow;
