const express = require("express")
const server = express()

server.use(express.static('public'))

server.use(express.urlencoded({ extended: true}))

const nunjucks = require("nunjucks")
nunjucks.configure("./", {
   express: server, 
   noCache: true,
})

const donors = [
    {
        name: "Diego Fernandes",
        blood: "AB+"
    },
    {
        name: "Cleiton Souza",
        blood: "B+"
    },
    {
        name: "Robson Marques",
        blood: "C"
    },
    {
        name: "Mayk Brito",
        blood: "A-"
    },
]

server.get("/", function(req, res){
    return res.render("index.html", { donors })
})

server.post("/", function(req,res){
    const name = req.body.name
    const email = req.body.email
    const blood = req.body.blood

    donors.push({
        name: name,
        blood: blood,
    })
    return res.redirect("/")
})

server.listen(3000, function(){
    console.log("iniciei o servidor.")
})