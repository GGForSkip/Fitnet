// server/index.js

const express = require("express");
const cors = require('cors')
const personalInfoRouter=require("./PersonalInformations/ServicePersonalInfo");
const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());
app.use("/personalInfo",personalInfoRouter);
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
