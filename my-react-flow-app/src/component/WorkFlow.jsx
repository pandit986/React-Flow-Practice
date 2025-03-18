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

const WorkFlow = () => {
  // Manage nodes and edges state
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

// This function is called when a new connection is made
  const onConnect = (connection) => {
    console.log(connection);
    let newEdges = { ...connection, animation: true, id: `e${edges.length + 1}`,style: { stroke: "orange", strokeWidth: 2 }  };
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

export default WorkFlow;
