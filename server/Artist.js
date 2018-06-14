require('dotenv').config();
var PersonalityInsightsV3 = require('watson-developer-cloud/personality-insights/v3');
var fs = require('fs');

const {
    USERNAME,
    PASSWORD
} = process.env;


var personalityInsights = new PersonalityInsightsV3({
  version: '2017-10-13',
  username: '132c9727-eaf0-4439-ba20-f810c05b34ce',
  password: 'caidJMGcPZ4j',
//   url: 'https://gateway.watsonplatform.net/personality-insights/api'
  
});

var profileParams = {
    content: require('./sampleDataJson/SampleData.json'),
    content_type:'application/json',
    raw_scores: true,
    csv_headers: true,
    consumption_preferences: true
};

personalityInsights.profileAsCsv(profileParams, function(error, profile) {
    if (error) {
        console.log(error);
    } else {
        var wstream = fs.createWriteStream('output.csv');
        wstream.write(profile);
        wstream.end();
    }
})



// var albums = [
//     'aHeadFullOfDreams'
// ]
    
// var results = [];






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
