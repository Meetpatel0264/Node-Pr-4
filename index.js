const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const Student = require("./models/Student");

const app = express();
const PORT = 8000;

connectDB();

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/add-student", (req, res) => {
  res.render("addStudent");
});

app.post("/save-student", async (req, res) => {
  try {
    const { name, email, course, phone } = req.body;

    const existingStudent = await Student.findOne({ email });

    if (existingStudent) {
      return res.send("Email already exists!");
    }

    await Student.create({
      name,
      email,
      course,
      phone,
    });

    res.redirect("/students");
  } catch (error) {
    console.log(error);
    res.send("Something went wrong!");
  }
});

app.get("/students", async (req, res) => {
  const students = await Student.find();
  res.render("students", { students });
});

app.get("/delete/:id", async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.redirect("/students");
});

app.get("/edit/:id", async (req, res) => {
  const student = await Student.findById(req.params.id);
  res.render("editStudent", { student });
});

app.post("/update/:id", async (req, res) => {
  try {
    const { name, email, course, phone } = req.body;

    await Student.findByIdAndUpdate(req.params.id, {
      name,
      email,
      course,
      phone,
    });

    res.redirect("/students");
  } catch (error) {
    console.log(error);
    res.send("Update Failed!");
  }
});

app.get("/view/:id", async (req, res) => {
  const student = await Student.findById(req.params.id);
  res.render("viewStudent", { student });
});

app.listen(PORT, () => {
  console.log(`Server Running On Port http://localhost:${PORT}`);
});