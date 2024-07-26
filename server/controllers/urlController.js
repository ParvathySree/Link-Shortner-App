import { nanoid } from "nanoid";
import urlModel from "../models/urlModel.js"


const generateUniqueId = async() => {
    let shortIdNew;
    let isUnique = false;
  
    while (!isUnique) {
      shortIdNew = nanoid(12); 
      console.log(shortIdNew)
      const existingUrl = await urlModel.findOne({ shortId : shortIdNew });
      if (!existingUrl) {
        isUnique = true; 
      }
    }
    return shortIdNew;
}
const addAndShortenURL = async(req,res) => {
    try{
        const originalUrl = req.body.originalURL;
        let userData = await urlModel.findOne({originalUrl : req.body.originalURL})
        if(!userData){
            const shortId = await generateUniqueId();
            const newUrl = new urlModel({
                originalUrl,
                shortId,
              });
        await newUrl.save();
        console.log(`http://localhost:5000/${shortId}`)
            return res.json({success:true, data:{shortUrl: `http://localhost:5000/${shortId}`} });
        }else{
            return res.json({ success:true,data:{shortUrl: `http://localhost:5000/${userData.shortId}` }});
        }
    }
    catch(e){
        console.error('Error adding and shortening URL:', e.message);
        res.json({success:false,message:e.message})
    }
}

const redirectToOriginalUrl = async (req, res) => {
    try {
      const { shortId } = req.params;
  

      const urlData = await urlModel.findOne({ shortId: shortId });
  
      if (urlData) {

        return res.redirect(urlData.originalUrl);
      } else {

        return res.status(404).json({ error: 'URL not found' });
      }
    } catch (error) {

      console.error('Error during redirection:', error.message);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  

export {addAndShortenURL,redirectToOriginalUrl}