require("dotenv").config()
const express = require("express")
const db = require("./db/index")
const morgan = require('morgan')
const cors = require('cors')

const app = express()

app.use(cors())
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
app.get("/api/v1/restaurants/:id", async (req, res) => {
    
    
    try {
        const restaurant = await db.query(
          `select * from restaurant where id = $1  `, [req.params.id]
        )  

        const reviews = await db.query(
            `select * from reviews where id = $1  `, [req.params.id]
        ) 

        res.status(200).json({
            status: "succes",
            data: {
                restaurant: restaurant.rows[0],
                reviews: reviews.rows
            },
        })
    } catch(err) {
        console.log(err)
    }

})

//Create a Restaurant

app.post("/api/v1/restaurants", async (req, res) => {

    try {
        const results = await db.query("INSERT INTO restaurant (name, location, price_range) values ($1, $2, $3) returning *", [req.body.name, req.body.location, req.body.price_range] )
        res.status(201).json({
            status: "succes",
            data: {
                restaurant: results.rows[0],
            }
        })
    } catch(err) {
        console.log(err)
    }
    
})

//Update Restaurants

app.put("/api/v1/restaurants/:id", async (req, res) => {

    try {
        const results = await db.query("Update restaurant SET name = $1 , location = $2, price_range = $3 where id = $4 returning *", [req.body.name, req.body.location, req.body.price_range, req.params.id])
        res.status(200).json({
            status: "succes",
            data: {
                restaurant: results.rows[0],
            }
        })
    }  catch(err) {

    }
    
})

//Delete restaurants

app.delete("/api/v1/restaurants/:id", async (req, res) => {

    try {
        const results = await db.query("DELETE FROM restaurant where id = $1 ", [req.params.id])
        res.status(204).json({
            status: "success"
        })
    } catch (err) {
        console.log(err)
    }

    
})




const port = process.env.PORT || 3001
app.listen(port, () => {
    console.log(`Server is up and listening on port ${port}`)
})

