const nameList = [
    {
        name:"Violet",
        lastname: "Cannon"
    },
    {
        name:"Nancy",
        lastname: "Rice"
    }
]

const fullnames = nameList.map(function(nameList){
    return `${nameList.name} ${nameList.lastname}`
});

console.log(fullnames);