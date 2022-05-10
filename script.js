hello = 'Good morning, Dave.'
console.log(hello)

// NHL API
const URL = 'https://statsapi.web.nhl.com/api/v1/teams';
// GET TEAM BUTTON AND FUNCTION
const $getTeamBtn = $('#getTeamBtn');
// const getTeam = () => {
$.ajax(URL).then(function(data) {
    // CHECK API CONNECTION
    console.log('League info is ready!');
    console.log(data);
    // DECLARE RANDOM INDEX
    const randomIndex = Math.floor(Math.random() * 31)
	console.log(randomIndex)
    // DECLARE VARIABLES
    const $teamName = data.teams[randomIndex].name;
    const $teamAbv = data.teams[randomIndex].abbreviation;
    const $teamConf = data.teams[randomIndex].conference.name;
    const $teamDiv = data.teams[randomIndex].division.name;
    const $teamVenue = data.teams[randomIndex].venue.name;
    const $teamEstb = data.teams[randomIndex].firstYearOfPlay;
    const $teamSite = data.teams[randomIndex].officialSiteUrl;
    // APPEND LIST ITEMS
    $('#info').append(`<li>Team name: ${$teamName}</li>`);
    $('#info').append(`<li>Abbreviation: ${$teamAbv}</li>`);
    $('#info').append(`<li>Conference: ${$teamConf}</li>`);
    $('#info').append(`<li>Division: ${$teamDiv}</li>`);
    $('#info').append(`<li>Venue: ${$teamVenue}</li>`);
    $('#info').append(`<li>Established: ${$teamEstb}</li>`);
    $('#info').append(`<li><a href="${$teamSite}">Official Team Site</a></li>`);
});