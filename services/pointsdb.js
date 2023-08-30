const fs = require("fs")

function getAllPoints() {
    return JSON.parse( fs.readFileSync("pointsdb.json") )
}

function getAllUserPointsById(id) {
    const points = JSON.parse(fs.readFileSync("pointsdb.json"))
    const list = filterById(points, id);
    return list }
function filterById(array, id) {
    return array.filter(item => item.id === id);
}

function insertPoint(newPoint){
    const points = JSON.parse(fs.readFileSync("pointsdb.json"))
    const newListPoints = [... points, newPoint]
    fs.writeFileSync("pointsdb.json", JSON.stringify(newListPoints))
}


module.exports = {
    getAllPoints,
    getAllUserPointsById,
    insertPoint
}