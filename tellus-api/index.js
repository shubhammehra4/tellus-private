const express = require("express");
const app = express();
const cors = require("cors");
const helmet = require("helmet");
const { Deta } = require("deta");

const db = Deta().Base("tellus-private");

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (_req, res) =>
    res.send(`<h1>TELLUS Private<h1>
            <h2>Shubham Mehra</h2>
            <h3>shubhammehra4@gmail.com<h3>`)
);

app.post("/mail", async (req, res) => {
    try {
        const { name, email, pace, interest, personality, activity, days } = req.body;

        db.put({ name, email, pace, interest, personality, activity, days });

        res.status(200).json({ status: "Done" });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            err: "Something Went Wrong",
        });
    }
});

module.exports = app;
