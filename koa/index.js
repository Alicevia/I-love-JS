import Koa from "./lib/application.js";

let app = new Koa();
app.use((ctx) => {
  ctx.body = "helloworld";
});
app.on("error", (err) => {
  console.log(err);
});
app.listen(3000, () => {
  console.log("3000 ok");
});
