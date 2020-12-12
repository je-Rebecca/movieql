const people =[
    {
    name:"Rebecca",
    age: 20,
    gender:"female"
    },
    {
    name:"Ken",
    age: 25,
    gender:"male"
     },
    {
     name:"Jack",
     age: 30,
     gender:"male"
     }
];

const resolver= {
    Query :{
        people: () => people
    }
};

export default resolver;