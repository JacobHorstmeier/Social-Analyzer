require('dotenv').config();
var PersonalityInsightsV3 = require('watson-developer-cloud/personality-insights/v3');
var fs = require('fs');

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
    content: require('.'),
    content_type:'text/plain',
    consumption_preferences: true
};

var albums = [
    'aHeadFullOfDreams'
]
    
var results = [];






// albums.forEach( function(album){

//     fs.readFile(album + '.txt', 'utf8', function(err, data) {
//         if (err) throw err;
//         console.log(data);

//         personalityInsights.profile({
//             // content: require('./aHeadFullOfDreams.txt'),
//             text: data,
//             consumption_preferences: true
//         }, function(error, response) {
//             if (err) {
//               console.log(err);
//             } else {
//                 console.log(album);
//                 console.log(response)

//                 response.album = album;
                
//                 results.push(response);

//                 fs.writeFile('coldplay.json', JSON.stringify(results), function
//             (err) {
//                 if (err) {
//                     return console.log (err)
//                 }
//             })
//             //   console.log(JSON.stringify(profile, null, 2));
//             }
//           });
//     } )
// })
