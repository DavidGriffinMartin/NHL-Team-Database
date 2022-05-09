hello = 'Good morning, Dave.'
console.log(hello)


// NHL API
const URL = 'https://statsapi.web.nhl.com/api/v1/teams'
$.ajax(URL).then(function(data) {
    // Check work
    console.log('League info is ready!');
    console.log(data.teams[13]);
    // 
    const $wshName = data.teams[13].name;
    const $wshAbv = data.teams[13].abbreviation;
    const $wshConf = data.teams[13].conference.name;
    const $wshDiv = data.teams[13].division.name;
    const $wshVenue = data.teams[13].venue.name;
    $('#team').append(`<li>Team name: ${$wshName}</li>`)
    $('#team').append(`<li>Abbreviation: ${$wshAbv}</li>`)
    $('#team').append(`<li>Conference: ${$wshConf}</li>`)
    $('#team').append(`<li>Division: ${$wshDiv}</li>`)
    $('#team').append(`<li>Venue: ${$wshVenue}</li>`)
    // console.log(data.teams);
});






































// Guess how old you are by Name
// const URL = 'https://api.agify.io/?name=Dave';

// $.ajax(URL).then(function(data) {
//     // Check work
//     console.log('Space picture is ready!');
//     console.log(data);
// });


// Kanye Quotes
// const URL = 'https://api.kanye.rest';

// $.ajax(URL).then(function(data) {
//     // Check work
//     console.log('Kanye Quote is ready!');
//     console.log(data);
// });


// NASA Picture of the Day
// const URL = 'https://images-api.nasa.gov/GET search?q=space';

// $.ajax(URL).then(function(data) {
//     // Check work
//     console.log('Space picture is ready!');
//     console.log(data);
// });