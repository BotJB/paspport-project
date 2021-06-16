const express=require('express');
const router=express.Router()
router.get('/',(req,res)=>{
    console.log('yup it is')
res.render('login',{layout:false})

})
module.exports=router