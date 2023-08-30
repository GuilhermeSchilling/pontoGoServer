const express = require('express')
const { getAllUsersPoints, getAllUserPoint, postPoint } = require('../controllers/pointsdb')
const routes = express.Router()
const users = [{
    "id": "999",
    "name": "Admin",
    "email": "admin@brainny.cc",
    "password": "adminregister",
    "roleadmin": true
},
{
    "id": "001",
    "name": "Maria",
    "email": "maria@brainny.cc",
    "password": "mariaregister",
    "roleadmin": false
},
{
    "id": "002",
    "name": "João",
    "email": "joao@brainny.cc",
    "password": "joaoregister",
    "roleadmin": false
},
{
    "id": "003",
    "name": "Amanda",
    "email": "amanda@brainny.cc",
    "password": "adminregister",
    "roleadmin": false
}
]


routes.post('/login', (req, res) => {
    const { email, password } = req.body

    const user = users.find(user => user.email === email && user.password === password)
    if (user) {
        return res.status(200).json(user)
    }
    return res.status(401).json({ message: "Credencial Invalida" })
})

routes.post("/admindashboard", postPoint)

routes.get("/admindashboard", getAllUsersPoints)

routes.get("/admindashboard/:id", getAllUserPoint)



module.exports = routes