const container = document.getElementById("container");

//NAVBAR

const nav = document.getElementById("navbar");

function navbar() {
  nav.innerHTML = `
<h2>Chilean Thai</h2>
    <button id="nav-toggle" class="nav-toggle" aria-label="Abrir menú" aria-expanded="false">
      <i class="fa-solid fa-bars"></i>
    </button>
    <div class="button_navbar" id="nav-links">
        <button id="inicio">Inicio</button>
        <button id="menu-btn">Menu</button>
        <button id="reserva-btn">Reservacion</button>
        <button id="contacto-btn">Contacto</button>
		</div>`;
}

navbar();

const navToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");

function cerrarMenuMovil() {
  if (window.innerWidth <= 1199 && navLinks && navToggle) {
    navLinks.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  }
}

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const menuAbierto = navLinks.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(menuAbierto));
  });
}
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
btnInicio.addEventListener("click", () => {
  home();
  cerrarMenuMovil();
});

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
btnContacto.addEventListener("click", () => {
  contacto();
  cerrarMenuMovil();
});

//FOOTER

const foot = document.getElementById("footer");

function footer() {
  foot.innerHTML = `
	<h3>ChileanThai</h3>
    <p>Contacto : xxxxxxx@gmail.com</p>
    <p>Telefono Contacto : +56912312312</p>
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

btnMenu.addEventListener("click", () => {
  cargarMenu();
  cerrarMenuMovil();
});

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
        <label for="personas">Cantidad de personas:</label>
<select id="personas" name="personas" required>
    <option value="">Selecciona</option>
    <option value="1">1 persona</option>
    <option value="2">2 personas</option>
    <option value="3">3 personas</option>
    <option value="4">4 personas</option>
    <option value="5">5 personas</option>
    <option value="6">6 personas</option>
    <option value="7">7 personas</option>
    <option value="8">8 personas</option>
    <option value="9+">Más de 8 personas</option>
</select>
        <label for="reserva">Selecciona una fecha:</label>
        <input type="text" id="reserva" name="reserva" placeholder="Selecciona fecha y hora" required>
        <button type="submit">Enviar</button>
    </form>.`;

  const inputReserva = document.getElementById("reserva");

  if (!inputReserva) return;

  if (typeof flatpickr === "function") {
    flatpickr(inputReserva, {
      enableTime: true,
      time_24hr: true,
      dateFormat: "Y-m-d H:i",
      minDate: "today",
      minTime: "11:00",
      maxTime: "22:00",
      minuteIncrement: 15,
      disable: [
        (date) => date.getDay() === 0 || date.getDay() === 1
      ],
    });
  }
}

const btn_reserva = document.getElementById("reserva-btn");

btn_reserva.addEventListener("click", () => {
  reserva();
  cerrarMenuMovil();
});
