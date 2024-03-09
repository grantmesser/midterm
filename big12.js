fetch("./data.json")
    .then(response => response.json())
    .then(con => loadTeams(con));

function loadTeams(con){
    var teamCard = document.getElementById("col");

    for (let i = 0; i < con.Big12.length; ++i){
        let team = con.Big12[i].Name;
        let record = con.Big12[i].Record;
        let PPG = con.Big12[i].PPG;
        let allowedPPG = con.Big12[i].allowedPPG;
        let RushYPG = con.Big12[i].rushYPG;
        let allowedRYPG = con.Big12[i].allowedRushYPG;
        let PassYPG = con.Big12[i].passYPG;
        let allowedPYPG = con.Big12[i].allowedPassYPG;
        let logo = con.Big12[i].Logo;
        
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