const express = require('express')
const router = express.Router()
var myArray = require('./itemArray')

router.get('/getItems', (req, res) => {
    res.send(myArray)
})

router.post('/addItem', (req, res) => {
    myArray.push(req.body)
    res.send("item added")
})

router.patch('/update', (req, res) => {
    var newarray=myArray.filter((e)=>e.itemId!=req.body.itemId)
    myArray=[...newarray,req.body]
    res.send("Updated")
})

router.delete('/deleteItem', (req, res)=> {
    var newarray=myArray.filter((e)=>e.itemId!=req.body.itemId)
    myArray=newarray
    res.send("deleted")
})

module.exports = router;