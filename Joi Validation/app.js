const express = require("express");
const app = express();
const {userModel, validateModel} = require("./models/user");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/users", async (req, res) => {
    let { name, email, password, age, contact } = req.body;
    const { error } = validateModel({ name, email, password, age, contact });
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
    let user = new userModel({ name, email, password, age, contact });
    await user.save();
    res.send(user);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
