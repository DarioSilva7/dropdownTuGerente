const {Router} = require( 'express')
const router = Router()
const routerInfo = require('./info')

router.use('/info',routerInfo)

module.exports= router;