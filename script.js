hello = 'Good morning, Dave.'
console.log(hello)


// NHL API
const URL = 'https://statsapi.web.nhl.com/api/v1/teams'
$.ajax(URL).then(function(data) {
    // CHECK API CONNECTION
    console.log('League info is ready!');
    console.log(data);
    // DECLARE VARIABLES
    const $wshName = data.teams[13].name;
    const $wshAbv = data.teams[13].abbreviation;
    const $wshConf = data.teams[13].conference.name;
    const $wshDiv = data.teams[13].division.name;
    const $wshVenue = data.teams[13].venue.name;
    const $wshEstb = data.teams[13].firstYearOfPlay
    const $wshSite = data.teams[13].officialSiteUrl
    // APPEND LIST ITEMS
    $('#info').append(`<li>Team name: ${$wshName}</li>`)
    $('#info').append(`<li>Abbreviation: ${$wshAbv}</li>`)
    $('#info').append(`<li>Conference: ${$wshConf}</li>`)
    $('#info').append(`<li>Division: ${$wshDiv}</li>`)
    $('#info').append(`<li>Venue: ${$wshVenue}</li>`)
    $('#info').append(`<li>Established: ${$wshEstb}</li>`)
    $('#info').append(`<li><a href="${$wshSite}">Official Team Site</a></li>`)
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