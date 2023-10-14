function searchItems() {
    var input = document.getElementById("searchInput").value.toLowerCase(); // Obtenha o valor da entrada de pesquisa em letras minúsculas
    var items = document.querySelectorAll(".img"); // Selecione todos os elementos .img

    items.forEach(function(item) {
        var searchValue = item.getAttribute("data-search").toLowerCase(); // Obtenha o valor de data-search do elemento em letras minúsculas
        if (searchValue.includes(input)) {
            item.style.display = "block"; // Mostrar o elemento se houver correspondência
        } else {
            item.style.display = "none"; // Ocultar o elemento se não houver correspondência
        }
    });
}
