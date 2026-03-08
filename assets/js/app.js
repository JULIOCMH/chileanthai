const container = document.getElementById("container");

//NAVBAR

const nav = document.getElementById("navbar");

function navbar() {
  nav.innerHTML = `
<h2>Chilean Thai</h2>
    <div class="button_navbar">
        <button id="inicio">Inicio</button>
        <button id="menu-btn">Menu</button>
        <button>Salon</button>
        <button id="reserva-btn">Reservacion</button>
        <button id="contacto-btn">Contacto</button>
		</div>`;
}

navbar();
//INICIO

function home() {
  container.innerHTML = `
    <h1>ChileanThai CCP</h1>
    <div id="pagina-principal">
        <img src="./assets/img/inside.webp" alt="" srcset="">
    </div>`;
}
home();
const btnInicio = document.getElementById("inicio");
btnInicio.addEventListener("click", home);

//CONTACTO

function contacto() {
  container.innerHTML = `
	    <div class="contacto">
    <h1>INFORMACION DE CONTACTO</h1>
    <div id="contacto-card">
        <img src="./assets/img/maps.webp">
        <div class="informacion-card">
            <p>ChileanThai Food</p>
            <p>Direccion : Lomas San Sebastian 255 , Concepcion, Bio-Bio, Chile.</p>
            <p>Telefono : +56912312312</p>
            <p>Facebook : ChileanThai CCP</p>
            <p>Email : chileanthaifood@hotmail.com</p>
        </div>
        </div>
    </div>`;
}

const btnContacto = document.getElementById("contacto-btn");
btnContacto.addEventListener("click", contacto);

//FOOTER

const foot = document.getElementById("footer");

function footer() {
  foot.innerHTML = `
	<h3>ChileanThai</h3>
    <p>Contacto : xxxxxxx@gmail.com</p>
    <div class="font">
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-square-facebook"></i>
        <i class="fa-brands fa-square-whatsapp"></i>
        <i class="fa-solid fa-map-location-dot"></i>
    </div>`;
}

footer();

//TARJETAS Y INFORMACION DE TARJETAS

function cargarMenu() {
  container.innerHTML = `
    <div class="menu-section">
      <h2>Entradas</h2>
      <div class="entradas">
        ${menu.entradas
          .map(
            (item) =>
              `<div class='card'>
            <img src="${item.img}">
            <p>${item.nombre}</p>
            <p>${item.Descripcion}</p>
            <p>$${item.Precio}</p>
          </div>`,
          )
          .join("")}
      </div>
    </div>
    
    <div class="menu-section">
      <h2>Fondos</h2>
      <div class="fondos">
        ${menu.Principal.map(
          (item) =>
            `<div class='card'>
            <img src="${item.img}">
            <p>${item.nombre}</p>
            <p>${item.descripcion}</p>
            <p>$${item.precio}</p> 
          </div>`,
        ).join("")}
      </div>
    </div>
    
    <div class="menu-section">
      <h2>Sopas</h2>
      <div class="sopas">
        ${menu.Sopas.map(
          (item) =>
            `<div class='card'>
            <img src="${item.img}">
            <p>${item.nombre}</p>
            <p>${item.descripcion}</p>
            <p>$${item.precio}</p> 
			   </div>`,
        ).join("")}
      </div>
    </div>
    
    <div class="menu-section">
      <h2>Especiales</h2>
      <div class="especiales">
        ${menu.Especiales.map(
          (item) =>
            `<div class='card'>
            <img src="${item.img}">
            <p>${item.nombre}</p>
            <p>${item.descripcion}</p>
            <p>$${item.precio}</p> 
          </div>`,
        ).join("")}
      </div>
    </div>
    
    <div class="menu-section">
      <h2>Postres</h2>
      <div class="postres">
        ${menu.Postres.map(
          (item) =>
            `<div class='card'>
            <img src="${item.img}">
            <p>${item.nombre}</p>
            <p>${item.descripcion}</p>
            <p>$${item.precio}</p> 
          </div>`,
        ).join("")}
      </div>
    </div>
  `;
}

// Seleccionar botón DESPUÉS de crear navbar
const btnMenu = document.getElementById("menu-btn");

btnMenu.addEventListener("click", cargarMenu);

//RESERVAS

function reserva() {
  container.innerHTML = `
	    <h1>RESERVAS</h1>
    <form class="reservas">
        <label for="nombre">Nombre</label>
        <input type="text" id="nombre" name="nombre" autocomplete="given-name" required>
        <label for="apellido">Apellido</label>
        <input type="text" id="apellido" name="apellido" autocomplete="family-name" required>
        <label for="correo">Correo</label>
        <input type="email" id="correo" name="correo" autocomplete="email" required>
        <label for="telefono">Telefono</label>
        <input type="tel" id="telefono" name="telefono" autocomplete="tel" required>
        <label for="reserva">Selecciona una fecha:</label>
        <input type="datetime-local" id="reserva" name="reserva" required>
        <button type="submit">Enviar</button>
    </form>.`;
}

const btn_reserva = document.getElementById("reserva-btn");

btn_reserva.addEventListener("click", reserva);

const inputReserva = document.getElementById("reserva");

if (inputReserva) {
  const ahora = new Date();

  const year = ahora.getFullYear();
  const month = String(ahora.getMonth() + 1).padStart(2, "0");
  const day = String(ahora.getDate()).padStart(2, "0");
  const hours = String(ahora.getHours()).padStart(2, "0");
  const minutes = String(ahora.getMinutes()).padStart(2, "0");

  // formato requerido por datetime-local: YYYY-MM-DDTHH:MM
  const minDateTime = `${year}-${month}-${day}T${hours}:${minutes}`;

  inputReserva.min = minDateTime;
}
