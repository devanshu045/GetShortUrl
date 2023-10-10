const {shortid } = require('shortid');
const URL = require('../model/url');
async function handleGenNewShortUrl (){
          const shorID = shortid(8);
          const body = req.body;
          if(!body) return res.status(400).json({error: 'Please enter url'}); 

          await URL.create({
            shortUrl: shorID,
            redirectUrl:body.url,
            visitHistory:[],
          })
          return res.json({id: shorID});
}



module.exports = {
    handleGenNewShortUrl,

}