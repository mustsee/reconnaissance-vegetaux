const vivaces = [
  {
    famille : "amaryllidaceae",
    genre : "agapanthus",
    espece : "africanus, umbellatus",
    cultivar : "-",
    nom_commun : "agapanthe"
  },
  {
    famille : "caprifoliaceae",
    genre : "centranthus",
    espece : "ruber",
    cultivar : "-",
    nom_commun : "valériane rouge, centranthe rouge, lilas d'Espagne"
  },
  {
    famille : "euphorbiaceae",
    genre : "euphorbia",
    espece : "characias",
    cultivar : "-",
    nom_commun : "euphorbe characias, euphorbe des garrigues"
  },
  {
    famille : "onagraceae",
    genre : "gaura",
    espece : "lindheimeri",
    cultivar : "-",
    nom_commun : "Gaura"
  },
  {
    famille : "geraniaceae",
    genre : "geranium",
    espece : "nombreuses espèces",
    cultivar : "-",
    nom_commun : "géranium vivace"
  },
  {
    famille : "asparagaceae",
    genre : "hosta",
    espece : "nombreuses espèces",
    cultivar : "-",
    nom_commun : "hosta"
  },
  {
    famille : "iridaceae",
    genre : "iris",
    espece : "germanica",
    cultivar : "-",
    nom_commun : "iris des jardins"
  },
  {
    famille : "asteraceae",
    genre : "leucanthemum",
    espece : "maximum",
    cultivar : "-",
    nom_commun : "grande marguerite"
  },
]

const tbodyVivaces = document.querySelector("#vivaces tbody");

vivaces.forEach((vivace, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${index + 1}</td>
        <td>${vivace.famille}</td>
        <td>${vivace.genre}</td>
        <td>${vivace.espece}</td>
        <td>${vivace.cultivar}</td>
        <td>${vivace.nom_commun}</td>
    `;

    tbodyVivaces.appendChild(row);
});