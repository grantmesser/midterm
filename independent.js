fetch("./data.json")
    .then(response => response.json())
    .then(con => loadTeams(con));

function loadTeams(con){
    var teamCard = document.getElementById("col");

    for (let i = 0; i < con.Independent.length; ++i){
        let team = con.Independent[i].Name;
        let record = con.Independent[i].Record;
        let PPG = con.Independent[i].PPG;
        let allowedPPG = con.Independent[i].allowedPPG;
        let RushYPG = con.Independent[i].rushYPG;
        let allowedRYPG = con.Independent[i].allowedRushYPG;
        let PassYPG = con.Independent[i].passYPG;
        let allowedPYPG = con.Independent[i].allowedPassYPG;
        let logo = con.Independent[i].Logo;
        
        let addTeam = document.createElement("div");
        addTeam.classList.add("col");
        addTeam.innerHTML=`
            <div class="card shadow-sm">
                <img src=${logo} alt="independent" width="400" 
                height="500">
                <div class="card-body">
                    <p class="card-text"><strong>${team}</strong></p>
                        <ul>
                            <li>Record: ${record}</li>
                            <li>Points per game: ${PPG}</li>
                            <li>Allowed Points per game: ${allowedPPG}</li>
                            <li>Rush yards per game: ${RushYPG}</li>
                            <li>Allowed rush yards per game: ${allowedRYPG}</li>
                            <li>Pass yards per game: ${PassYPG}</li>
                            <li>Allowed pass yards per game: ${allowedPYPG}</li>
                        </ul>
                        </div>
                </div>
            </div>
        `
        teamCard.appendChild(addTeam);
    }
}