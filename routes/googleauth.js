const express=require('express')
const router=express.Router()
const passport=require('passport')
router.get('/google',passport.authenticate('google',{scope:['profile']}))
router.get('/google/callback',passport.authenticate('google',{failureRedirect:'/error'}),(req,res)=>{
    res.redirect('/success',{layout:false})
})
module.exports=router