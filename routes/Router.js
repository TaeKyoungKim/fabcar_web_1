var router = require('express').Router()
var queryUtil = require('../utils/Util')

router.get('/', async (req, res , next)=>{
    var result  = await queryUtil.queryAllData()
    var resultData  = await JSON.parse(result)
    
    console.log(resultData)
    // res.send(resultData)
    res.render('index', {data:resultData})
})

router.get('/data', async (req, res , next)=>{
    var result  = await queryUtil.queryData()
    var resultData  = await JSON.parse(result)
    
    console.log(resultData)
    // res.send(resultData)
    res.render('data', {data:result})
})

module.exports = router;