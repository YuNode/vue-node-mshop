module.exports = app => {
    const express = require('express')
    const router = express.Router()
    const Category = require('../../models/Category')
    const ItemCategory = require('../../models/ItemCategory')
    const User = require('../../models/User')
    const jwt = require('jsonwebtoken')

    router.get('/category',async(req,res)=>{
        const model = await Category.find().populate('itemcategories itemcategories.seccategories').lean()
        res.send(model)
    })

    router.get('/itemcategory/:id',async(req,res)=>{
        const model = await ItemCategory.find({'category':req.params.id}).populate('seccategories').lean()
        res.send(model)
    })

    router.post('/register',async(req,res)=>{
        const model = await User.create(req.body)
        res.send(model)
    })

    router.post('/login',async(req,res)=>{
        const { username,password } = req.body
        const user = await User.findOne({username})
        if(!user){
            res.status(422).send({
                message:'用户不存在'
            })
        }
        const isValid = require('bcrypt').compareSync(password,user.password)
        if(!isValid){
            res.status(422).send({
                message:'密码错误'
            })
        }
        const token = jwt.sign({id:user._id},app.get('secret'))
        res.send({token})
    })

    app.use('/api/web',router)
}