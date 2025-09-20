export const statusCardData = [
  {
    cardTitle: "Customers",
    value: "3,781",
    percentage: "+11.01%",
    type: "increment",
  },
  {
    cardTitle: "Orders",
    value: "1,219",
    percentage: "-0.03%",
    type: "decreament",
  },
  {
    cardTitle: "Revenue",
    value: "$695",
    percentage: "+15.03%",
    type: "increment",
  },
  {
    cardTitle: "Growth",
    value: "30.1%",
    percentage: "+6.08%",
    type: "increment",
  },
];

export const columns = [
  { accessorKey: "name", header: "Name", sortType: "alphanumeric" },
  { accessorKey: "price", header: "Price", sortType: "numeric" },
  { accessorKey: "quantity", header: "Quantity", sortType: "time" },
  { accessorKey: "amount", header: "Amount", sortType: "time" },
];

export const data = [
  {
    name: "ASOS Ridley High Waist",
    price: "$79.49",
    quantity: "82",
    amount: "$6,518.18",
  },
  {
    name: "Marco Lightweight Shirt",
    price: "$128.50",
    quantity: "82",
    amount: "$6,518.18",
  },
  {
    name: "Half Sleeve  Shirt",
    price: "$39.99",
    quantity: "82",
    amount: "$6,518.18",
  },
  {
    name: "Lightweight Jacket",
    price: "$20.00",
    quantity: "82",
    amount: "$6,518.18",
  },
  {
    name: "Marco Shoes",
    price: "$79.49",
    quantity: "82",
    amount: "$6,518.18",
  },
];

export const locations = [
  { name: "New York", coordinates: [-74.006, 40.7128], value: 72000 },
  { name: "San Francisco", coordinates: [-122.4194, 37.7749], value: 39000 },
  { name: "Sydney", coordinates: [151.2093, -33.8688], value: 25000 },
  { name: "Singapore", coordinates: [103.8198, 1.3521], value: 61000 },
];

export const linChartData = [
  { month: "", current: 8, previous: 12, p: 12 },
  { month: "Jan", current: 18, previous: 8, p: 8 },
  { month: "Feb", current: 15, previous: 9, p: 9 },
  { month: "Mar", current: 10, previous: 14, p: 14 },
  { month: "Apr", current: 14, previous: 20 },
  { month: "May", current: 24, previous: 21 },
];
