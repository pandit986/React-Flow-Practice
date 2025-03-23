import React from "react";
import ReactFlow, {
  addEdge,
  Background,
  Controls,
  MiniMap,
  useEdgesState,
  useNodesState,
  Panel, // Import Panel from React Flow
} from "reactflow";
import "reactflow/dist/style.css";
import { initialEdges, initialNodes } from "./helper";
import PaymentInit from "./components/PaymentInit";
import PaymentCountry from "./components/PaymentCountry";
import PaymentProvider from './components/PaymentProvider'
import PaymentProviderSelect from "./components/PaymentProviderSelect";
import CustomEdge from "./components/CustomEdge";

const nodesType = {
  'paymentInit' : PaymentInit,
  'paymentCountry' : PaymentCountry,
  'PaymentProvider' : PaymentProvider,
  'paymentProviderSelect':PaymentProviderSelect
}

const edgeTypes = {
  customEdge: CustomEdge,
};

const PaymentGateWorkFlow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = (connection) => {
    let newEdges = { 
      ...connection, 
      id: `e${edges.length + 1}`, 
      type:"customEdge", 
      animated: true, 
      style: { stroke: "orange", strokeWidth: 2 }
    };
    setEdges((prevEdges) => addEdge(newEdges, prevEdges));
  };

  const exportFlow = () => {
    const data = { nodes, edges };
    const jsonData = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonData], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "reactflow-export.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  const importFlow = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => {
      try {
        const data = JSON.parse(reader.result);
        if (data.nodes && data.edges) {
          setNodes(data.nodes);
          setEdges(data.edges);
        } else {
          console.error("Invalid file format");
        }
      } catch (error) {
        console.error("Error parsing file:", error);
      }
    };
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
        nodeTypes={nodesType}
        edgeTypes={edgeTypes}
      >
        <MiniMap />
        <Controls />
        <Background />

        {/* Panel for Export and Import */}
        <Panel position="top-right">
          <button onClick={exportFlow} style={{ marginRight: 10 }}>Export</button>
          <input type="file" onChange={importFlow} accept=".json" />
        </Panel>
      </ReactFlow>
    </div>
  );
};

export default PaymentGateWorkFlow;
