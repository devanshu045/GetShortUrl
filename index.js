const express = require('express');
const urlRoute = require('./routes/url');
const {connect} = require('./connect');
const URL = require('./model/url')
const PORT = 8001;

const app = express();


//middle were
app.use(express.json);

//connection to database
connect("mongodb://127.0.0.1:27017/loginform")

//routes
app.use("/",urlRoute);

app.get("/:shorId",async (req, res) => {
     const shortId = req.params.shorId;
     const entry =  await URL.findOneAndUpdate(
        {
            shortId,
        },
        {
            $push:{
                visitHistory:{
                    timestamp: Date.now(),
                }
            }
        }
     )

     res.redirect(entry.redirectURL);
})




app.listen(PORT,()=>{
    console.log('listening on port',PORT);
});