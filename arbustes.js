const arbustes = [
  {
    famille : "caprifoliaceae",
    genre : "abelia",
    espece : "grandiflora",
    cultivar : "-",
    nom_commun : "abélie à grandes fleurs"
  },
  {
    famille : "hydrangeaceae",
    genre : "deutzia",
    espece : "x",
    cultivar : "-",
    nom_commun : "deutzie hybride"
  },
  {
    famille : "celastraceae",
    genre : "euonymus",
    espece : "japonicus",
    cultivar : "-",
    nom_commun : "fusain du Japon"
  },
  {
    famille : "hydrangeaceae",
    genre : "hydrangea",
    espece : "macrophylla",
    cultivar : "-",
    nom_commun : "hortensia à grandes feuilles"
  },
  {
    famille : "lauraceae",
    genre : "laurus",
    espece : "nobilis",
    cultivar : "-",
    nom_commun : "laurier sauce, laurier d'Apollon, laurier noble"
  },
  {
    famille : "lamiaceae",
    genre : "lavandula",
    espece : "angustifolia, officinalis",
    cultivar : "-",
    nom_commun : "lavande vraie, lavande officinale"
  },
  {
    famille : "lamiaceae",
    genre : "perovskia",
    espece : "atriplicifolia",
    cultivar : "-",
    nom_commun : "sauge russe, sauge d'Afghanistan"
  },
  {
    famille : "hydrangeaceae",
    genre : "philadelphus",
    espece : "x",
    cultivar : "-",
    nom_commun : "seringat"
  },
  {
    famille : "lamiaceae",
    genre : "rosmarinus",
    espece : "officinalis",
    cultivar : "-",
    nom_commun : "romarin"
  }
]

const tbodyArbustes = document.querySelector("#arbustes tbody");

arbustes.forEach((arbuste, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${index + 1}</td>
        <td>${arbuste.famille}</td>
        <td>${arbuste.genre}</td>
        <td>${arbuste.espece}</td>
        <td>${arbuste.cultivar}</td>
        <td>${arbuste.nom_commun}</td>
    `;

    tbodyArbustes.appendChild(row);
});