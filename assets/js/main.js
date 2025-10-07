// Liste des produits (simulée - sera remplacée par la base de données plus tard)
const products = [
  { id: 1, name: "Smartphone Android", price: "120000 CFA", image: "assets/images/phone.jpg" },
  { id: 2, name: "Écouteurs Bluetooth", price: "15000 CFA", image: "assets/images/earbuds.jpg" },
  { id: 3, name: "Ordinateur portable HP", price: "250000 CFA", image: "assets/images/laptop.jpg" },
  { id: 4, name: "Montre connectée", price: "35000 CFA", image: "assets/images/watch.jpg" },
  { id: 5, name: "Clavier mécanique RGB", price: "20000 CFA", image: "assets/images/keyboard.jpg" },
  { id: 6, name: "Caméra de sécurité Wi-Fi", price: "40000 CFA", image: "assets/images/camera.jpg" },
];

// Sélection des éléments HTML
const productList = document.getElementById("productList");
const searchInput = document.getElementById("searchInput");

// Fonction d'affichage des produits
function displayProducts(filteredProducts) {
  productList.innerHTML = "";
  filteredProducts.forEach(prod => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    productCard.innerHTML = `
      <img src="${prod.image}" alt="${prod.name}">
      <h3>${prod.name}</h3>
      <p>Prix : ${prod.price}</p>
      <button class="btn">Ajouter au panier</button>
    `;
    productList.appendChild(productCard);
  });
}

// Afficher tous les produits au chargement
displayProducts(products);

// Barre de recherche
searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();
  const filtered = products.filter(prod => prod.name.toLowerCase().includes(value));
  displayProducts(filtered);
});
