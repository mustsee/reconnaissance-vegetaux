const graminees = [
  {
    famille : "poaceae",
    genre : "stipa",
    espece : "tenuifolia",
    cultivar : "-",
    nom_commun : "stipe, cheveux d'ange"
  },
]

const tbodyGraminees = document.querySelector("#graminees tbody");

graminees.forEach((graminee, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${index + 1}</td>
        <td>${graminee.famille}</td>
        <td>${graminee.genre}</td>
        <td>${graminee.espece}</td>
        <td>${graminee.cultivar}</td>
        <td>${graminee.nom_commun}</td>
    `;

    tbodyGraminees.appendChild(row);
});