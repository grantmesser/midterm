fetch("./data.json")
    .then(response => response.json())
    .then(con => loadTeams(con));

function loadTeams(con){
    var teamCard = document.getElementById("col");

    for (let i = 0; i < con.Big10.length; ++i){
        let team = con.Big10[i].Name;
        let record = con.Big10[i].Record;
        let PPG = con.Big10[i].PPG;
        let allowedPPG = con.Big10[i].allowedPPG;
        let RushYPG = con.Big10[i].rushYPG;
        let allowedRYPG = con.Big10[i].allowedRushYPG;
        let PassYPG = con.Big10[i].passYPG;
        let allowedPYPG = con.Big10[i].allowedPassYPG;
        let logo = con.Big10[i].Logo;
        
        let addTeam = document.createElement("div");
        addTeam.classList.add("col");
        addTeam.innerHTML=`
            <div class="card shadow-sm" id="${team}">
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