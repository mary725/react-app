const initialState = [
    {
        id: 1,
        categoryName: "11111",
        children: [
            {
                id: 11,
                categoryName: "11111",
                children: []
            },
            {
                id: 12,
                categoryName: "11111",
                children: []
            }
        ]
    },
    {
        id: 2,
        categoryName: "22222",
        children: []
    }
];

export default function categoriesTree(state = initialState) {
  return state;
};