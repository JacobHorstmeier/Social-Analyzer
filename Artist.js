require('dotenv').config();
var PersonalityInsightsV3 = require('watson-developer-cloud/personality-insights/v3');

const {
    USERNAME,
    PASSWORD
} = process.env;


var personalityInsights = new PersonalityInsightsV3({
  version: '2017-10-13',
  username: 'USERNAME',
  password: 'PASSWORD',
  url: 'https://gateway.watsonplatform.net/personality-insights/api'
  
});

var profileParams = {
    content: require('./ColdplayAlbumTracks/sampleAllTracks.txt'),
    content_type:'text/plain',
    consumption_preferences: true
};

personalityInsights.profile(profileParams, function(error, profile) {
    if (error) {
      console.log(error);
    } else {
      console.log(JSON.stringify(profile, null, 2));
    }
  });