const pets = [
    {
        name: "rex",
        type: "dog",
        age: 10
    },
    {
        name: "miau",
        type: "cat",
        age: 2
    },
    {
        name: "gulp",
        type: "fish",
        age: 1
    },
    {
        name: "pé de pano",
        type: "horse",
        age: 10
    },
    {
        name: "bolhinha",
        type: "dog",
        age: 2
    },
    {
        name: "tom",
        type: "cat",
        age: 1
    },   
]

//teste com o reduce
// const totalAge = pets.reduce((total, pet) => {
//     return total + pet.age
// },0)

// console.log(totalAge)


//usando tudo junto o map , filter e reduce

const totalAgeDogs = pets
    .filter((pet) => {
        return pet.type === "dog"
})
    .reduce((total, pet) => {
        return total + pet.age
},0)

console.log(totalAgeDogs)