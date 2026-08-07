const annuelles = [
  {
    famille : "amaranthaceae",
    genre : "amarantus",
    espece : "caudatus",
    cultivar : "-",
    nom_commun : "amarante queue-de-renard, amarante caudée"
  },
  {
    famille : "asteraceae",
    genre : "dahlia",
    espece : "x",
    cultivar : "-",
    nom_commun : "dahlia"
  },
  {
    famille : "asteraceae",
    genre : "helianthus",
    espece : "annuus",
    cultivar : "-",
    nom_commun : "tournesol"
  }
]

const tbodyAnnuelles = document.querySelector("#annuelles tbody");

annuelles.forEach((annuelle, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${index + 1}</td>
        <td>${annuelle.famille}</td>
        <td>${annuelle.genre}</td>
        <td>${annuelle.espece}</td>
        <td>${annuelle.cultivar}</td>
        <td>${annuelle.nom_commun}</td>
    `;

    tbodyAnnuelles.appendChild(row);
});


