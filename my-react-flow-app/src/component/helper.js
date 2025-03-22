export const initialNodes = [
  { id: "1", type: "input", position: { x: 100, y: 100 }, data: { label: "Start" } },
  { id: "2", type: "default", position: { x: 300, y: 100 }, data: { label: "PreProcessing" } },
  { id: "3", type: "default", position: { x: 600, y: 10 }, data: { label: "Processing" } },
  {
    id: "4", type: "default", position: { x: 500, y: 100 }, data: { label: "End" }, style: { backgroundColor: "lightblue", color: "black", borderRadius: "8px", padding: 10, border: "2px solid blue" },
  },
];

export const initialEdges = [
  { id: "e1-2", source: "1", target: "2", type: "smoothstep", label: 'to the', animated: true, style: { stroke: "orange", strokeWidth: 2 } },
  { id: "e2-3", source: "2", target: "3", type: "smoothstep", label: 'to the', animated: true, style: { stroke: "red", strokeWidth: 2 } },
];