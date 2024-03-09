fetch("./data.json")
    .then(response => response.json())
    .then(con => loadTeams(con));

function loadTeams(con){
    var teamCard = document.getElementById("col");

    for (let i = 0; i < con.ACC.length; ++i){
        let team = con.ACC[i].Name;
        let record = con.ACC[i].Record;
        let PPG = con.ACC[i].PPG;
        let allowedPPG = con.ACC[i].allowedPPG;
        let RushYPG = con.ACC[i].rushYPG;
        let allowedRYPG = con.ACC[i].allowedRushYPG;
        let PassYPG = con.ACC[i].passYPG;
        let allowedPYPG = con.ACC[i].allowedPassYPG;
        let logo = con.ACC[i].Logo;
        
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


