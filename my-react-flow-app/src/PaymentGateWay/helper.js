
export const initialNodes = [
    { id: "1", type: "input", position: { x: 100, y: 100 }, data: { amount: "Start" } },
    { id: "2", type: "default", position: { x: 300, y: 100 }, data: { label: "PreProcessing" } },
]

export const initialEdges = [
    { id: "e2-1", source: "2", target: "2", type: "smoothstep", animated: true, style: { stroke: "red", strokeWidth: 2 } },
  ];