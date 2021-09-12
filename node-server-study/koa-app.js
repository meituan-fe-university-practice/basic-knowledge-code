const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const cors = require('koa2-cors');

const app = new Koa();
app.use(cors()); // 跨域中间件
app.use(bodyParser()); // 解析请求body中间件
app.use(async ctx => {
  console.log('request body:', ctx.request.body);
  // debugger;
  // 响应体内容 == 请求体内容
  ctx.body = {
    x: 1,
    r: ctx.request.body
  };
});

app.listen(3000);

// fetch('http://localhost:3000', {method: 'POST', headers: {'content-type': 'application/json'}, body: JSON.stringify({x: 1})})