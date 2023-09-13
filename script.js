// const btn = document.querySelector(".btn")
// // evento de click
// btn.addEventListener("click", function(e){
//     // resgatar o valor do input mas não enviar o formulário ainda
//     e.preventDefault();

//     const name1 = document.querySelector("#basic-addon1");
//     const doc1 = document.querySelector("#basic-addon2");
//     const cel1 = document.querySelector("#basic-addon3");
//     const caixa1 = document.querySelector("#basic-addon4");
//     const email1 = document.querySelector("#basic-addon5");
//     const keys1 = document.querySelector("#basic-addon6");
//     // passar value onde pode-se utilizar a info dentro do value
//     const name = name1.value;
//     const cpf = doc1.value;
//     const cel = cel1.value;
//     const caixa = caixa1.value;
//     const email = email1.value;
//     const keys = keys1.value;
    
//     console.log(name,cpf,cel,caixa,email,keys)

//     const person = {name,cpf,cel,caixa,email,keys, type: Text
//     }
//     // salvar esses dados em lista json

//     localStorage.setItem("person", JSON.stringify(person));

//     const getPerson = localStorage.getItem("person");

//     console.log(getPerson)

// })

// // ELEMENTOS CAPTURADOS DO SITE
// const person = document.querySelector("#clienteBot")

// person.addEventListener("click", eventos => {
//     eventos.preventDefault();

//     const personData = new FormData(person);
//     // criando os dados
//     const data = Object.fromEntries(personData);

//     console.log(data);
// })

// ELEMENTOS CAPTURADOS DO SITE
const person = document.querySelector("#clienteBot")

person.addEventListener("submit", function(e) {
    e.preventDefault();

    const personData = new FormData(person);
    // criando os dados
    const data = Object.fromEntries(personData);
    // o fetch é um método promiser, que ainda irá acontecer
    fetch('https://reqres.in/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res => res.json()).then(data => console.log(data))
})



