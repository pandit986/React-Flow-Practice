
export const initialNodes = [
    {
        id: "1",
        position: { x: 100, y: 100 },
        data: { amount: 10 },
        type: "paymentInit",
    },
    {
        id: "2",
        position: { x: 300, y: 100 },
        data: { currency: "$", country: "United States", countryCode: "US" },
        type: "paymentCountry",
    },
    {
        id: "3",
        position: { x: 300, y: 200 },
        data: { currency: "₹", country: "India", countryCode: "INR" },
        type: "paymentCountry",
    },

];

export const initialEdges = [
    // { id: "e1-2", source: "1", target: "2", type: 'default' },
];