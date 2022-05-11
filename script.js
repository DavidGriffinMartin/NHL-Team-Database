hello = 'Good morning, Dave.'
console.log(hello);

// NHL API (TEAMS)
const TEAMURL = 'https://statsapi.web.nhl.com/api/v1/teams?expand=team.roster';
const $getTeamBtn = $('#getTeamBtn');
const $infoContent = $('#info');
const $namesContent = $('#names');
// GET TEAM FUNCTION
const getTeam = () => {
    $infoContent.empty();
    $namesContent.empty();
$.ajax(TEAMURL).then(function(teamData) {
    console.log('League info is ready!');
    // DECLARE RANDOM INDEX
    const randomIndex = Math.floor(Math.random() * 31);
	console.log('selected Team: ' + randomIndex);
    // CHECK API CONNECTION
    console.log(teamData);
    // CACHE VARIABLES
    const $teamName = teamData.teams[randomIndex].name;
    const $teamAbv = teamData.teams[randomIndex].abbreviation;
    const $teamConf = teamData.teams[randomIndex].conference.name;
    const $teamDiv = teamData.teams[randomIndex].division.name;
    const $teamVenue = teamData.teams[randomIndex].venue.name;
    const $teamEstb = teamData.teams[randomIndex].firstYearOfPlay;
    const $teamSite = teamData.teams[randomIndex].officialSiteUrl;
    const $teamRoster = teamData.teams[randomIndex].roster.roster;
    // APPEND INFO HEADER
    $('#info').append(`<h3>Team Information</h3>`);
    // APPEND LIST ITEMS
    $('#info').append(`<li>${$teamName}</li>`);
    $('#info').append(`<li>Abbreviation: ${$teamAbv}</li>`);
    $('#info').append(`<li>Conference: ${$teamConf}</li>`);
    $('#info').append(`<li>Division: ${$teamDiv}</li>`);
    $('#info').append(`<li>Venue: ${$teamVenue}</li>`);
    $('#info').append(`<li>Established: ${$teamEstb}</li>`);
    $('#info').append(`<li><a href="${$teamSite}">Official Team Site</a></li>`);
    // APPEND ROSTER HEADING
    $('#info').append(`<h3>Active Roster</h3>`);
    // APPEND ROSTER LIST
    $teamRoster.forEach((rosterData) => {
        console.log(rosterData.person.fullName);
        const $names = $('#names');
        $names.text(rosterData.person.fullName);
        $names.append($names);
    })



    console.log($teamRoster);
})};
// EVENT LISTINERS
$getTeamBtn.on('click', getTeam)