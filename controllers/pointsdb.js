const { getAllPoints, getAllUserPointsById, insertPoint } = require("../services/pointsdb");

function getAllUsersPoints(req, res) {
    try {
        const points = getAllPoints()
        res.send(points)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function getAllUserPoint(req, res) {
    try {
        const id = req.params.id

        if (id && Number(id)) {
            const point = getAllUserPointsById(id)
            res.send(point)
        } else {
            res.status(422)
            res.send("Id inválido")
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    } 
}

function postPoint(req, res){
    try{
        const newPoint = req.body
            insertPoint(newPoint)
            res.status(201)
            res.send("Ponto inserido com sucesso")
        }catch(error){
            res.status(500)
            res.send(error.message)
        }
    }


module.exports = {
    getAllUsersPoints,
    getAllUserPoint,
    postPoint
}
