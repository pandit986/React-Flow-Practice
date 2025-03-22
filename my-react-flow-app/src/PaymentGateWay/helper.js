
export const initialNodes = [
    {
        id: "1",
        position: { x: 100, y: 150 },
        data: { amount: 10 },
        type: "paymentInit",
    },
    {
        id: "2",
        position: { x: 500, y: 100 },
        data: { currency: "$", country: "United States", countryCode: "US" },
        type: "paymentCountry",
    },
    {
        id: "3",
        position: { x: 500, y: 200 },
        data: { currency: "₹", country: "India", countryCode: "INR" },
        type: "paymentCountry",
    },
    {
        id: "4",
        data: { name: "Google Pay", code: "Gp" },
        position: { x: 800, y: 50 },
        type: "PaymentProvider",
    },
    {
        id: "5",
        data: { name: "Stripe", code: "St" },
        position: { x: 800, y: 175 },
        type: "PaymentProvider",
    },
    {
        id: "6",
        data: { name: "Apple Pay", code: "Ap" },
        position: { x: 800, y: 300 },
        type: "PaymentProvider",
    },
    {
        id: "7",
        data: {},
        position: { x: 275, y: -100 },
        type: "paymentProviderSelect",
      },

];

export const initialEdges = [
    // { id: "e1-2", source: "1", target: "2", type: 'default' },
];