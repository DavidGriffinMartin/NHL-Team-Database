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
const $logoContent = $('.logo');

// GET TEAM FUNCTION
const getRandomTeam = () => {

    // EMPTY CONTENT
    $infoContent.empty();
    $statsContent.empty();
    $namesContent.empty();
    $logoContent.empty();

    // ACCESS TEAM API
    $.ajax(TEAMURL).then(function(teamData) {
        console.log('League info is ready!');

        // DECLARE RANDOM INDEX
        const $randomIndex = Math.floor(Math.random() * 32);
        console.log('Selected Team: ' + $randomIndex);

        // LOG TEAM DATA
        console.log(teamData);

        // APPEND TEAM LOGOS
        if ($randomIndex === 0)
            $('.logo').append(`<img id="image" src="https://content.sportslogos.net/logos/1/18/full/32tfs723a3bes0p0hb4hgcy1u.png" alt=""/>`);
        if ($randomIndex === 1)
            $('.logo').append(`<img id="image" src="https://content.sportslogos.net/logos/1/19/full/3911_new_york_islanders-primary-2018.png" alt=""/>`);
        if ($randomIndex === 2)
            $('.logo').append(`<img id="image" src="https://content.sportslogos.net/logos/1/20/full/new_york_rangers-primary_20006777.png" alt=""/>`);
        if ($randomIndex === 3)
            $('.logo').append(`<img id="image" src="https://content.sportslogos.net/logos/1/22/full/161.png" alt=""/>`);
        if ($randomIndex === 4)
            $('.logo').append(`<img id="image" src="https://content.sportslogos.net/logos/1/24/full/6362_pittsburgh_penguins-primary-2017.png" alt=""/>`);
        if ($randomIndex === 5)
            $('.logo').append(`<img id="image" src="https://content.sportslogos.net/logos/1/3/full/venf9fmhgnsawnxxvehf.png" alt=""/>`);
        if ($randomIndex === 6)
            $('.logo').append(`<img id="image" src="https://content.sportslogos.net/logos/1/4/full/5493_buffalo_sabres-primary-2021.png" alt=""/>`);
        if ($randomIndex === 7)
            $('.logo').append(`<img id="image" src="https://content.sportslogos.net/logos/1/16/full/montreal_canadiens_logo_primary_20001687.png" alt=""/>`);
        if ($randomIndex === 8)
            $('.logo').append(`<img id="image" src="https://content.sportslogos.net/logos/1/21/full/1129_ottawa_senators-primary-2021.png" alt=""/>`);
        if ($randomIndex === 9)
            $('.logo').append(`<img id="image" src="https://content.sportslogos.net/logos/1/28/full/8761_toronto_maple_leafs-primary-2017.png" alt=""/>`);
        if ($randomIndex === 10)
            $('.logo').append(`<img id="image" src="https://content.sportslogos.net/logos/1/6/full/fotih31tn5r345nufo5xxayh3.png" alt=""/>`);
        if ($randomIndex === 11)
            $('.logo').append(`<img id="image" src="https://content.sportslogos.net/logos/1/13/full/8078_florida_panthers-primary-2017.png" alt=""/>`);
        if ($randomIndex === 12)
            $('.logo').append(`<img id="image" src="https://content.sportslogos.net/logos/1/27/full/tampa_bay_lightning_logo_primary_20124022.png" alt=""/>`);
        if ($randomIndex === 13)
            $('.logo').append(`<img id="image" src="https://content.sportslogos.net/logos/1/30/full/llrs2zxi127vkqgcsvfb.png" alt=""/>`);
        if ($randomIndex === 14)
            $('.logo').append(`<img id="image" src="https://content.sportslogos.net/logos/1/7/full/56.png" alt=""/>`);
        if ($randomIndex === 15)
            $('.logo').append(`<img id="image" src="https://content.sportslogos.net/logos/1/11/full/yo3wysbjtagzmwj37tb11u0fh.png" alt=""/>`);
        if ($randomIndex === 16)
            $('.logo').append(`<img id="image" src="https://content.sportslogos.net/logos/1/17/full/lvchw3qfsun2e7oc02kh2zxb6.png" alt=""/>`);
        if ($randomIndex === 17)
            $('.logo').append(`<img id="image" src="https://content.sportslogos.net/logos/1/25/full/187.png" alt=""/>`);
        if ($randomIndex === 18)
            $('.logo').append(`<img id="image" src="https://content.sportslogos.net/logos/1/5/full/4820_calgary_flames-primary-2021.png" alt=""/>`);
        if ($randomIndex === 19)
            $('.logo').append(`<img id="image" src="https://content.sportslogos.net/logos/1/8/full/64.png" alt=""/>`);
        if ($randomIndex === 20)
            $('.logo').append(`<img id="image" src="https://content.sportslogos.net/logos/1/12/full/2728_edmonton_oilers-primary-2018.png" alt=""/>`);
        if ($randomIndex === 21)
            $('.logo').append(`<img id="image" src="https://content.sportslogos.net/logos/1/29/full/2084_vancouver_canucks-primary-2020.png" alt=""/>`);
        if ($randomIndex === 22)
            $('.logo').append(`<img id="image" src="https://content.sportslogos.net/logos/1/1736/full/1651_anaheim_ducks-primary-20141.png" alt=""/>`);
        if ($randomIndex === 23)
            $('.logo').append(`<img id="image" src="https://content.sportslogos.net/logos/1/10/full/dallas_stars_logo_primary_2022_sportslogosnet-4332.png" alt=""/>`);
        if ($randomIndex === 24)
            $('.logo').append(`<img id="image" src="https://content.sportslogos.net/logos/1/14/full/2220_los_angeles_kings-primary-2020.png" alt=""/>`);
        if ($randomIndex === 25)
            $('.logo').append(`<img id="image" src="https://content.sportslogos.net/logos/1/26/full/san_jose_sharks-primary_20099429.png" alt=""/>`);
        if ($randomIndex === 26)
            $('.logo').append(`<img id="image" src="https://content.sportslogos.net/logos/1/9/full/jhepegs329pc7ugyypebl28wg.png" alt=""/>`);
        if ($randomIndex === 27)
            $('.logo').append(`<img id="image" src="https://content.sportslogos.net/logos/1/15/full/8810_minnesota_wild-primary-2014.png" alt=""/>`);
        if ($randomIndex === 28)
            $('.logo').append(`<img id="image" src="https://content.sportslogos.net/logos/1/3050/full/z9qyy9xqoxfjn0njxgzoy2rwk.png" alt=""/>`);
        if ($randomIndex === 29)
            $('.logo').append(`<img id="image" src="https://content.sportslogos.net/logos/1/5263/full/arizona_coyotes_logo_primary_2022_sportslogosnet-8273.png" alt=""/>`);
        if ($randomIndex === 30)
            $('.logo').append(`<img id="image" src="https://content.sportslogos.net/logos/1/6114/full/2684_vegas_golden_knights-primary-2018.png" alt=""/>`);
        if ($randomIndex === 31)
            $('.logo').append(`<img id="image" src="https://content.sportslogos.net/logos/1/6740/full/seattle_kraken_logo_primary_20226314.png" alt=""/>`);

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
            $('#stats').append(`<li>Overtime Losses: ${$overTime}</li>`);
            $('#stats').append(`<li>Goals Per Game: ${$goalsPerGame.toFixed(2)}</li>`);
            $('#stats').append(`<li>Goals Against Per Game: ${$goalsAgainst.toFixed(2)}</li>`);
            $('#stats').append(`<li>Power Play Percentage: ${$powerPlay}%</li>`);
            $('#stats').append(`<li>Penalty Kill Percentage: ${$penaltyKill}%</li>`);
            $('#stats').append(`<li>Shots Per Game: ${$shotsPerGame.toFixed(1)}</li>`);
            $('#stats').append(`<li>Shots Allowed Per Game: ${$shotsAllowed.toFixed(1)}</li>`);
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
            $playerNames.text(rosterData.position.abbreviation + " - " + rosterData.person.fullName + " #" + rosterData.jerseyNumber);

            // APPEND ROSTER LIST
            $('#names').append($playerNames);
        })

        // LOG ROSTER DATA
        console.log($teamRoster);
    })
};

// EVENT LISTINERS
$getTeamBtn.on('click', getRandomTeam)
