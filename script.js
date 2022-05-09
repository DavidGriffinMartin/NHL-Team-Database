hello = 'Good morning, Dave.'
console.log(hello)


// NHL API
const URL = 'https://statsapi.web.nhl.com/api/v1/teams'
$.ajax(URL).then(function(data) {
    // Check work
    console.log('League info is ready!');
    console.log(data.teams[0]);
    let $result = data.teams[0];
    $('.teams').append(`<li>${$result}</li>`)
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