let nro = prompt("Ingrese el número de tablas a generar:");

const containerTables = document.querySelector(".container-tables");
addTables(nro);

function addTables(nro) {
  let code = "";
  for (let i = 1; i <= nro; i++) {
    code += `
        <article class="table">
          <h1>Tabla del ${i}</h1>
          <ul class="content-table">`;

    for (let j = 1; j <= 10; j++) {
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
