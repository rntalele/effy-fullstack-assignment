
const express = require('express');

const router = express.Router();

const demo = async (req,res)=>{
    res.json('hello');
}

router.get('/',demo)


module.exports = router;