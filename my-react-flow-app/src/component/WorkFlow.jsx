import React from "react";
import ReactFlow, {
  addEdge,
  Background,
  Controls,
  MiniMap,
  Panel,
  NodeToolbar,
  NodeResizer,
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
    let newEdges = {
      ...connection,
      animation: true,
      id: `e${edges.length + 1}`,
      style: { stroke: "orange", strokeWidth: 2 },
    };
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
        
        {/* Panel component positioned in the top-right */}
        <Panel position="top-right">
          <div style={{ background: "white", padding: 10, borderRadius: 5 }}>
            Panel Content
          </div>
        </Panel>

        {/* NodeToolbar attached to a node (ensure a node with id "1" exists) */}
        <NodeToolbar nodeId="1">
          <div style={{ background: "lightgray", padding: 5 }}>Node Toolbar</div>
        </NodeToolbar>

        {/* NodeResizer for the same node */}
        <NodeResizer nodeId="1" isVisible={true} />

        {/* Two Background components with different variants */}
        <Background variant="lines" />
      </ReactFlow>
    </div>
  );
};

export default WorkFlow;
