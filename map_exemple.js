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

const petNames = pets.map((pet) => {
    return pet.name
})

console.log(petNames)