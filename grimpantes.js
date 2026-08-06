const grimpantes = [
  {
    famille : "hydrangeaceae",
    genre : "hydrangea",
    espece : "anomala",
    cultivar : "subsp. petiolaris",
    nom_commun : "hortensia grimpant"
  },
  {
    famille : "apocynaceae",
    genre : "trachelospermum",
    espece : "jasminoides",
    cultivar : "-",
    nom_commun : "jasmin étoilé, faux jasmin, trachelosperme"
  },
]

const tbodyGrimpantes = document.querySelector("#grimpantes tbody");

grimpantes.forEach((grimpante, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${index + 1}</td>
        <td>${grimpante.famille}</td>
        <td>${grimpante.genre}</td>
        <td>${grimpante.espece}</td>
        <td>${grimpante.cultivar}</td>
        <td>${grimpante.nom_commun}</td>
    `;

    tbodyGrimpantes.appendChild(row);
});