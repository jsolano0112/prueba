const nameList = [
    {
        name:"Juana",
        lastname: "Solano"
    },
    {
        name:"Nancy",
        lastname: "Rice"
    }
]

const fullnames = nameList.map(function(nameList){
    return `${nameList.name} ${nameList.lastname}`
})

console.log(fullnames);
