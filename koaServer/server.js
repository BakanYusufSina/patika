const koa = require('koa')
const app = new koa()
const Router = require('koa-router')
const router = new Router()

router.get('/', ctx => {
    ctx.status = 200
    ctx.body = '<h2>Index</h2>'
})

router.get('/hakkimda', ctx => {
    ctx.body = '<h2>Hakkimda</h2>'
})

router.get('/iletisim', ctx => {
    ctx.body = '<h2>Iletisim</h2>'
})
app.use(router.routes())
app.listen(5000, () => {})