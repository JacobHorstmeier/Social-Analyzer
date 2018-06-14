require('dotenv').config();
var PersonalityInsightsV3 = require('watson-developer-cloud/personality-insights/v3');


const {
    USERNAME,
    PASSWORD
} = process.env





module.exports = {

    profileGetter: (req, res) => {
        let {name} = req.body

        const db = req.app.get('db');
        db.getArtistText([name]).then(text => {
            console.log(text)
            
            console.log(` controller`, name)
            var personalityInsights = new PersonalityInsightsV3({
                version: '2017-10-13',
                username: USERNAME,
                password: PASSWORD,
                //   url: 'https://gateway.watsonplatform.net/personality-insights/api'
                
            });
            var profileParams = {
                content: text[0].watsondata,
                content_type: 'text/plain',
                consumption_preferences: false
            };
            
            personalityInsights.profile(profileParams, function (error, profile) {
                if (error) {
                    console.log(error);
                } else {
                    console.log(profile)
                    res.status(200).send(profile)
                    return profile
                }
            })
        })


    }




}