const arbres = [
  {
    famille : "sapindaceae",
    genre : "acer",
    espece : "campestre",
    cultivar : "-",
    nom_commun : "érable champêtre"
  },
  {
    famille : "sapindaceae",
    genre : "acer",
    espece : "platanoides",
    cultivar : "-",
    nom_commun : "érable plane"
  },
  {
    famille : "sapindaceae",
    genre : "acer",
    espece : "pseudoplatanus",
    cultivar : "-",
    nom_commun : "érable sycomore"
  },
  {
    famille : "sapindaceae",
    genre : "aesculus",
    espece : "hippocastanum",
    cultivar : "-",
    nom_commun : "marronnier d'Inde, marronier blanc"
  },
  {
    famille : "oleaceae",
    genre : "fraxinus",
    espece : "ornus",
    cultivar : "-",
    nom_commun : "frêne à fleurs, orne, orne d'Europe, frêne orne"
  },
  {
    famille : "ginkgoaceae",
    genre : "ginkgo",
    espece : "biloba",
    cultivar : "-",
    nom_commun : "arbre aux 40 écus"
  },
  {
    famille : "magnoliaceae",
    genre : "liriodendron",
    espece : "tulipifera",
    cultivar : "-",
    nom_commun : "tulipier de Virginie"
  },
  {
    famille : "magnoliaceae",
    genre : "magnolia",
    espece : "grandiflora",
    cultivar : "-",
    nom_commun : "magnolia à grandes fleurs, magnolier"
  },
  {
    famille : "fabaceae",
    genre : "robinia",
    espece : "pseudoacacia",
    cultivar : "umbraculifera",
    nom_commun : "robinier faux-acacia, acacia boule"
  },
  {
    famille : "malvaceae",
    genre : "tilia",
    espece : "platyphyllos",
    cultivar : "-",
    nom_commun : "tilleul à grandes feuilles, tilleul de Hollande"
  }
]

const tbodyArbres = document.querySelector("#arbres tbody");

arbres.forEach((arbre, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${index + 1}</td>
        <td>${arbre.famille}</td>
        <td>${arbre.genre}</td>
        <td>${arbre.espece}</td>
        <td>${arbre.cultivar}</td>
        <td>${arbre.nom_commun}</td>
    `;

    tbodyArbres.appendChild(row);
});


