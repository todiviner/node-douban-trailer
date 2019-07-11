const koa = require('koa')
const app = new koa()

app.use(async (ctx, next) => {
  ctx.response.body = '电影首页'
})

app.listen(3000, () => {
  console.log('server running port 3000....')
})