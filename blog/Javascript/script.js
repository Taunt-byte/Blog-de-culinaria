const container = document.querySelector(".container")

if(container){

receitas.forEach(receita => {

const card = document.createElement("article")
card.classList.add("card")

card.innerHTML = `
<img src="${receita.imagem}">
<h3>${receita.nome}</h3>
<p>${receita.descricao}</p>
<a href="receita.html?id=${receita.id}">
<button>Ver receita</button>
</a>
`

container.appendChild(card)

})

}