const express = require("express");
const app = express();

//date route
app.get("/api/:date?", (req, res) => {
    const dateParam = req.params.date;
    let date;

    if (!dateParam) {
        date = new Date();
    } else if (!NaN(dateParam)) {
        date = new Date(parseInt(dateParam))
    } else {
        date = new Date(dateParam)
    }


    //check if date is valid
    if (date.toString() === "Invalid Date") {
        return res.status(400).json({
            status: "error",
            message: "Invalid date"
        });
    }


    return res.status(200).json({
        status: "success",
        unix: date.getTime(),
        utc: date.toUTCString()
    });


});