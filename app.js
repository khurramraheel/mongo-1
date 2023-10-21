let express = require('express');
let User = require('./models/user');

let Product = require('./models/products');

let app = express();
let mongoose = require('mongoose');

// mongoDB summary

// to create a new record
// let usre = new User()
// usre.save();

// to fetch all record
// let users = User.find({})

// to fetch all record with conditions
// let users = User.find({city:"FSD"})
// let users = User.find({city:"FSD", age:{$gt:25}})

// to login
// let usre = User.findOne({
//     email:req.body.email, 
//     password:req.body.password
// })


// to get record by ID 
// let user = User.findById(yahan aapki ID)

// to dlete all records
// User.remove()

// to delete record by ID
// User.findByIdAndDelete(yahan aapkli ID)

// to update reocrd by ID
// User.findByIdAndUpdate(yahan ID, aapka new data ka object)









mongoose.connect('mongodb://localhost:27017/db12').then((connection)=>{
    
let p = new Product();
p.name = "DELL";
p.save()

console.log(connection)
}).catch((err)=>{
    console.log(err)
})

app.use(express.json())

app.put('/user-update', async (req, res)=>{

    await User.findByIdAndUpdate(req.body.id, req.body);
    res.json({})


})

app.delete('/user-delete', async (req, res)=>{

    await User.findByIdAndDelete(req.query.some);
    res.json({
        success:true
    })

})


app.get('/user-lao', async (req, res)=>{

    let users = await User.find();
    res.json(users)

})

app.post('/create-user', async (req, res)=>{

    let nyaUser = new User(req.body);
    await nyaUser.save();

    console.log(req.body)
    res.json({})

})

app.use(express.static('./build'))

app.listen(9080, ()=>{
    console.log('serv erchaling ')
})