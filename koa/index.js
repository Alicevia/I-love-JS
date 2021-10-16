import Koa from "./lib/application.js";

let app = new Koa();
app.use(async (ctx, next) => {
  console.log(1);
  ctx.body = "rl";
  await next();
});
app.use((ctx) => {
  console.log(3);
});
app.on("error", (err) => {
  console.log(err);
});
app.listen(3000, () => {
  console.log("3000 ok");
});
