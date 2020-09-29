require("dotenv").config()
const express = require("express")
const db = require("./db/index")
const morgan = require('morgan')


const app = express()

app.use(express.json())

// Get all restaurants
app.get("/api/v1/restaurants", async (req, res) => {
    try {
    const results = await db.query("select * from restaurant")
    console.log(results)
    res.status(200).json({
        status: "success",
        results: results.rows.length,
        data: {
            restaurant: results.rows
        }
    })
    } catch (err) {
        console.log(err)
    }   
    

    
})

//Get a Restaurant
app.get("/api/v1/restaurants/:id", (req, res) => {
    console.log(req.params)
})

//Create a Restaurant

app.post("/api/v1/restaurants", (req, res) => {
    console.log(req.body)
    res.status(201).json({
        status: "succes",
        data: {
            restaurant: "mcdonalds",
        }
    })
})

//Update Restaurants

app.put("/api/v1/restaurants/:id", (req, res) => {
    console.log(req.params.id)
    console.log(body)
    res.status(200).json({
        status: "succes",
        data: {
            restaurant: "mcdonalds",
        }
    })
})

//Delete restaurants

app.delete("/api/v1/restaurants", (req, res) => {
    res.status(204).json({
        status: "success"
    })
})


const port = process.env.PORT || 3001
app.listen(port, () => {
    console.log(`Server is up and listening on port ${port}`)
})

