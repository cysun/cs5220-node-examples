const express = require("express");
const app = express();

app.use(express.urlencoded());
app.use(express.json());

const usersRouter = require("./express-users");

function requestLogger(req, res, next) {
  console.log(`${req.method}, ${req.path}`);
  return next();
}

app.use(requestLogger);

app.use("/users", usersRouter);

app.get("/", (req, res) => res.send("Hello CS5220!"));

app.all(
  "/hello",
  (req, res, next) => {
    req.foo = "bar";
    return next();
  },
  (req, res) => {
    res.send(`Hello ${req.foo}`);
  }
);

app.all("/hi", (req, res, next) => {
  return next(new Error("something bad happened"));
});

app.post("/add/:a/:b", (req, res) => {
  res.send(req.params.a + req.params.b);
});

app.use((err, req, res, next) => {
  res.status(500).json({
    msg: err.message,
  });
});

app.listen(3000, () => console.log("Listening on port 3000"));
