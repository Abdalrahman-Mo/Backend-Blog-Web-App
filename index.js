import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.render("index.ejs", {
    currentPage: "Home",
  });
});

app.get("/home", (req, res) => {
  res.render("index.ejs", {
    currentPage: "Home",
  });
});
app.get("/myposts", (req, res) => {
  res.render("index.ejs", {
    currentPage: "Posts",
  });
});
app.get("/contact", (req, res) => {
  res.render("index.ejs", {
    currentPage: "Contact",
  });
});

app.listen(PORT, () => {
  console.log(`Server running in port ${PORT}`);
});
