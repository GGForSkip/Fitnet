const express = require("express");


const router = express.Router();

router.post("/getDetail", (req, res) => {
    res.json([
        {
            name: "Age",
            value:54,
            misure: "Year"
        },
        {
            name: "Height",
            value: 178,
            misure: "Centimeter"
        },
        {
            name: "Weight",
            value: 78,
            misure: "Kilogram"
        }
    ]);
});

router.get("/getRecord/:id", (req, res) => {
    res.json(
    { 
        records:[
            {
                icons: ['fa-solid fa-drumstick-bite','fa-solid fa-circle-xmark'],
                description: 'Push up in 1 minute',
                record: 98
            },
            {
                icons: ['fa-solid fa-drumstick-bite','fa-solid fa-circle-xmark'],
                description: 'Squat in 1 minute',
                record: 34
            },
            {
                icons: ['fa-regular fa-circle-xmark','fa-solid fa-circle-xmark'],
                description: 'Leg up in 1 minute',
                record: 21
            },
            {
                icons: ['fa-solid fa-drumstick-bite','fa-regular fa-circle-xmark'],
                description: 'Push up in 10 minutes',
                record: 1234
            },
            {
                icons: ['fa-solid fa-drumstick-bite','fa-solid fa-circle-xmark'],
                description: 'Push up in 1 minute',
                record: 98
            },
            {
                icons: ['fa-solid fa-drumstick-bite','fa-solid fa-circle-xmark'],
                description: 'Push up in 1 minute',
                record: 98
            },
            {
                icons: ['fa-solid fa-drumstick-bite','fa-solid fa-circle-xmark'],
                description: 'Push up in 1 minute',
                record: 98
            }
        ]

    });
});

router.post("/updateInfo", (req, res) => {
    res.json(
        {
            field:"age",
            value:56,
            misure: "year"
        }
    );
})

module.exports=router;