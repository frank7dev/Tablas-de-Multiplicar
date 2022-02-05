// Variables
const containerTables = document.querySelector(".container-tables");
const btnNewTables = document.querySelector("header .btn")

// Functions
// Pedir el nro de tablas
function getTablesNumber(error) {

  let nro;

  if (error)
    nro = prompt("El nro de tablas no puede ser mayor a 20\nIntente de nuevo");
  else
    nro = prompt("Ingrese el número de tablas a generar\n(20 como máximo)");

  if (nro > 20)
    getTablesNumber(true);
  else
    addTables(nro);
}


function addTables(nro) {
  let code = "";
  for (let i = 1; i <= nro; i++) {
    code += `
        <article class="table">
          <h1>Tabla del ${i}</h1>
          <ul class="content-table">`;

    for (let j = 1; j <= 12; j++) {
      code +=
        (i * j) % 2 == 0
          ? `<li class="par">${i} x ${j} = ${i * j}</li>`
          : `<li class="impar">${i} x ${j} = ${i * j}</li>`;
    }

    code += `</ul>
        </article>`;
  }
  containerTables.innerHTML = code;
}

function startApp() {
  getTablesNumber(false);
}

// 3. Event Listeners
function eventListeners() {
  // Cuando el DOM ha cargado
  document.addEventListener('DOMContentLoaded', startApp);

  btnNewTables.addEventListener('click', () => {
    containerTables.innerHTML = "";
    getTablesNumber();
  });
}
eventListeners();
