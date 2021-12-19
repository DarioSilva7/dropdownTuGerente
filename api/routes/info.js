const {Router} = require('express')
const router = Router()
const {getInfo} = require('../controllers/getInfo')

router.get('/', getInfo)


module.exports= router