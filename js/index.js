//create Element

let imagem = document.createElement("img");

console.log(imagem);

let paragrafo = document.createElement("p");
paragrafo.innerHTML = "HELLO WORLD!";

console.log(paragrafo);


//append Child e remove Child


let p = document.createElement("p");
p.innerHTML = "Olá mundo!";

document.getElementById('conteudo').appendChild(p);
//adicionar elemento

document.getElementById('conteudo').removeChild(p);
//remover elemento

