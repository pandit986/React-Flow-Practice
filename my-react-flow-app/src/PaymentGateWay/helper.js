
export const initialNodes = [
    { id: "1", type: "input", position: { x: 100, y: 100 }, data: { amount: "10 LPA" }, type: "PaymentInit" },
    // { id: "2", type: "default", position: { x: 300, y: 100 }, data: { label: "PreProcessing" } },
]

export const initialEdges = [
    { id: "e2-1", source: "1", target: "2", type: "smoothstep", animated: true, style: { stroke: "orange", strokeWidth: 2 } },
]; 