const coniferes = [
  {
    famille : "taxaceae",
    genre : "taxus",
    espece : "baccata",
    cultivar : "-",
    nom_commun : "if commun"
  },
]

const tbodyConiferes = document.querySelector("#coniferes tbody");

coniferes.forEach((conifere, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${index + 1}</td>
        <td>${conifere.famille}</td>
        <td>${conifere.genre}</td>
        <td>${conifere.espece}</td>
        <td>${conifere.cultivar}</td>
        <td>${conifere.nom_commun}</td>
    `;

    tbodyConiferes.appendChild(row);
});


