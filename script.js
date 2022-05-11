hello = 'Good morning, Dave.'
console.log(hello);

// NHL API LINKS
const TEAMURL = 'https://statsapi.web.nhl.com/api/v1/teams?expand=team.roster&season=20212022';
const STATSURL = 'https://statsapi.web.nhl.com/api/v1/teams?expand=team.stats';

// CACHE ELEMENTS
const $getTeamBtn = $('#getTeamBtn');
const $infoContent = $('#info');
const $statsContent = $('#stats');
const $namesContent = $('#names');

// GET TEAM FUNCTION
const getRandomTeam = () => {

    // EMPTY CONTENT
    $infoContent.empty();
    $statsContent.empty();
    $namesContent.empty();

    // ACCESS TEAM API
    $.ajax(TEAMURL).then(function(teamData) {
        console.log('League info is ready!');

        // DECLARE RANDOM INDEX
        const $randomIndex = Math.floor(Math.random() * 32);
        console.log('Selected Team: ' + $randomIndex);

        // LOG TEAM DATA
        console.log(teamData);

        // CACHE TEAM DATA SHORT CUT
        const $teamDataShort = teamData.teams[$randomIndex]

        // CACHE TEAM VARIABLES
        const $teamName = $teamDataShort.name;
        const $teamAbv = $teamDataShort.abbreviation;
        const $teamConf = $teamDataShort.conference.name;
        const $teamDiv = $teamDataShort.division.name;
        const $teamVenue = $teamDataShort.venue.name;
        const $teamEstb = $teamDataShort.firstYearOfPlay;
        const $teamSite = $teamDataShort.officialSiteUrl;

        // APPEND INFO HEADER
        $('#info').append(`<h3>Team Information</h3>`);

        // APPEND TEAM INFO
        $('#info').append(`<li>${$teamName}</li>`);
        $('#info').append(`<li>Abbreviation: ${$teamAbv}</li>`);
        $('#info').append(`<li>Conference: ${$teamConf}</li>`);
        $('#info').append(`<li>Division: ${$teamDiv}</li>`);
        $('#info').append(`<li>Venue: ${$teamVenue}</li>`);
        $('#info').append(`<li>Established: ${$teamEstb}</li>`);
        $('#info').append(`<li><a href="${$teamSite}">Official Team Site</a></li>`);

        // ACCESS STATS API
        $.ajax(STATSURL).then(function(statsData) {
            console.log(statsData.teams[$randomIndex].teamStats[0].splits[0].stat);

            // CACHE STATS DATA SHORT CUT
            const $statsDataShort = statsData.teams[$randomIndex].teamStats[0].splits[0].stat
            
            // CACHE STATS VARIABLES
            const $points = $statsDataShort.pts;
            const $wins = $statsDataShort.wins;
            const $losses = $statsDataShort.losses;
            const $overTime = $statsDataShort.ot;
            const $goalsPerGame = $statsDataShort.goalsPerGame;
            const $goalsAgainst = $statsDataShort.goalsAgainstPerGame;
            const $shotsPerGame = $statsDataShort.shotsPerGame;
            const $shotsAllowed = $statsDataShort.shotsAllowed;
            const $powerPlay = $statsDataShort.powerPlayPercentage;
            const $penaltyKill = $statsDataShort.penaltyKillPercentage;
            const $shootPercentage = $statsDataShort.shootingPctg;
            const $savePercentage = $statsDataShort.savePctg;
            const $faceOff = $statsDataShort.faceOffWinPercentage;

            // APPEND STATS HEADER
            $('#stats').append(`<h3>Team Statistics</h3>`);

            // APPEND TEAM STATISTICS
            $('#stats').append(`<li>Points: ${$points}</li>`);
            $('#stats').append(`<li>Wins: ${$wins}</li>`);
            $('#stats').append(`<li>Losses: ${$losses}</li>`);
            $('#stats').append(`<li>Overtime: ${$overTime}</li>`);
            $('#stats').append(`<li>Goals Per Game: ${$goalsPerGame}</li>`);
            $('#stats').append(`<li>Goals Against Per Game: ${$goalsAgainst}</li>`);
            $('#stats').append(`<li>Shots Per Game: ${$shotsPerGame}</li>`);
            $('#stats').append(`<li>Shots Allowed Per Game: ${$shotsAllowed}</li>`);
            $('#stats').append(`<li>Power Play Percentage: ${$powerPlay}%</li>`);
            $('#stats').append(`<li>Penalty Kill Percentage: ${$penaltyKill}%</li>`);
            $('#stats').append(`<li>Shooting Percentage: ${$shootPercentage}%</li>`);
            $('#stats').append(`<li>Save Percentage: ${$savePercentage}%</li>`);
            $('#stats').append(`<li>Face Off Percentage: ${$faceOff}%</li>`);
        });

        // CACHE ROSTER DATA SHORT CUT
        const $teamRoster = teamData.teams[$randomIndex].roster.roster;

        // APPEND ROSTER HEADER
        $('#names').append(`<h3>Active Roster</h3>`);

        // GET ROSTER FUNCTION
        $teamRoster.forEach((rosterData) => {
            const $playerNames = $('<li>');
            $playerNames.text(rosterData.person.fullName);

            // APPEND ROSTER LIST
            $('#names').append($playerNames);
        })

        // LOG ROSTER DATA
        console.log($teamRoster);
    })
};

// EVENT LISTINERS
$getTeamBtn.on('click', getRandomTeam)