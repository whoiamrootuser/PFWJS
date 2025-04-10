document.addEventListener('DOMContentLoaded', async function() {
   const FILE_URL = "https://raw.githubusercontent.com/whoiamrootuser/PFWJS/refs/heads/main/atividades/ex-3/data/me.json";


   //Using XHttpRequest
    const xhr = new XMLHttpRequest();
    await xhr.open("GET", FILE_URL, true);
    const xhrData = JSON.parse(xhr.responseText);

    //Render data
    const xhrElement = document.createElement("div");
    xhrElement.innerHTML = `
        <h2>XHR Data</h2>
        <p>Nome: ${xhrData.nome}</p>
        <p>Idade: ${xhrData.idade}</p>
    `;

    document.body.appendChild(xhrElement);


   //Using async fetch
   const fetchData = (await fetch(FILE_URL)).json();

   const fetchElement = document.createElement("div");
   fetchElement.innerHTML = `
       <h2>Fetch Data</h2>
       <p>Nome: ${fetchData.nome}</p>
       <p>Idade: ${fetchData.idade}</p>
   `;
   document.body.appendChild(fetchElement);


});