require('dotenv').config();
var PersonalityInsightsV3 = require('watson-developer-cloud/personality-insights/v3');


const {
    USERNAME,
    PASSWORD
} = process.env





module.exports = {

    profileGetter: (req, res) => {
        console.log(req.user)
        let { name } = req.body

        const db = req.app.get('db');
        db.getArtistText([name]).then(text => {
            // console.log(text)

            // console.log(` controller`, name)
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
                    // console.log(profile)
                    res.status(200).send(profile)
                    return profile
                }
            })
        })


    },

    savedProfileGetter: (req, res, next) => {
        const db = req.app.get('db');
        
        console.log('savedprofilegetter hit')

        db.getAllSavedProfiles(req.user.id)
            .then(result => {
                console.log(result)
                
                res.status(200).send(result)
            })
            .catch((e) => {
                console.log(e)
                res.status(500).send()
            })
    },

    saveProfile: (req, res, next) => {
        const db = req.app.get('db');
        console.log('save profile just hit')
        const { openness, conscientiousness, extraversion, agreeableness, neuroticism } = req.body.profile;
        const {name} = req.body
        
        db.save_Profile([req.user.id,name, openness, conscientiousness, extraversion, agreeableness, neuroticism])
            .then(() => res.status(200).send())
            .catch((e) =>{
                console.log(e)
                res.status(500).send()
            })
    },

    deleteProfile: (req, res, next) => {
        const db = req.app.get('db');
        const{id} = req.params 
        console.log('delete just hit')

        db.delete_profile([id])
            .then( (profiles) => res.status(200).send(profiles))
            .catch((e) => {
                console.log(e)
                res.status(500).send()
            })
     }

    //  editUser: (req, res, next) => {
    //      const db = req.app.get('db');
    //  }


}