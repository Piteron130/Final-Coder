/*

// HTML CSS/BOOSTRAP JS JSON 

Codigo limpio, funciones que no se utilicen. Sacar los clg..
No Alerts
los inputs deben existir. nada de prompt

Objetos y Arrays (Metodos de Array)
Funciones y condicionales
DOM y Eventos
//SINTAXIS AVANZADAS > OPERADORES TERNARIOS
Librerias > SweetAlert2
Promesas con fetch
Carga de json o apis externa

*/

const rutina = {
    musculacion: "Clase de Musculación",
    calistenia: "Clase de Calistenia",
    crossfit: "Clase de Crossfit",
    precio: {
        musculacion: 1500,
        calistenia: 3000,
        crossfit: 4500,
    }
}


const clasesCompradas = {
    musculacion: false,
    calistenia: false,
    crossfit: false
}

async function cursosx() {

    const accesoMusculacion = document.getElementById('accesoMusculacion');

    accesoMusculacion.addEventListener('click', (event) => {
        if (!clasesCompradas.musculacion) {
            event.preventDefault();
            Swal.fire({
                icon: "error",
                title: "SIN ACCESO",
                text: "¡Debes pagar Musculación!",
                footer: '<a href="index.html">¿Como compro clases?</a>'
            });
        } else {
            //console.log("Permitido");
            window.location.href = "musculacion.html";
        }
    });

    const accesoCalistenia = document.getElementById('accesoCalistenia');

    accesoCalistenia.addEventListener('click', (event) => {
        if (!clasesCompradas.calistenia) {
            event.preventDefault();
            Swal.fire({
                icon: "error",
                title: "SIN ACCESO",
                text: "¡Debes pagar Calistenia!",
                footer: '<a href="index.html">¿Como compro clases?</a>'
            });
        } else {
            //console.log("Permitido");
            window.location.href = "calistenia.html";
        }
    });

    const accesoCrossfit = document.getElementById('accesoCrossfit');

    accesoCrossfit.addEventListener('click', (event) => {
        if (!clasesCompradas.crossfit) {
            event.preventDefault();
            Swal.fire({
                icon: "error",
                title: "SIN ACCESO",
                text: "¡Debes pagar Crossfit!",
                footer: '<a href="index.html">¿Como compro clases?</a>'
            });
        } else {
            //console.log("Permitido");
            window.location.href = "crossfit.html";
        }
    });
}
cursosx()



async function logout() { //Agregar SweetAlert

    Swal.fire({
        title: "¿Estas seguro?",
        text: "Si sales, perderas tus datos!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Cerrar sesión"
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: "Cerrando sesión",
                text: "Te estamos dirigiendo..",
                icon: "success"
            });
            setTimeout(() => { //Luego de cerrar sesión te dirige hacia aquí
                window.location.href = "login.html";
            }, 3000);
        }
    });

}


async function clases() {
    rutinas.addEventListener("click", () => { //Declaramos función botón al click

        let contenedor = document.createElement("div")
        contenedor.innerHTML = `

    <div class="clases">


        <h1>Clases disponibles:</h1>

       <h4>${rutina.musculacion}</h4>
       <p>Precio: $${rutina.precio.musculacion}</p>
       <button class="btn btn-outline-warning" onclick="comprarMusculacion()" >Comprar</button>

       <h4>${rutina.calistenia}</h4>
       <p>Precio: $${rutina.precio.calistenia}</p>
       <button class="btn btn-outline-warning" onclick="comprarCalistenia()" >Comprar</button>

       <h4>${rutina.crossfit}</h4>
       <p>Precio: $${rutina.precio.crossfit}</p>
       <button class="btn btn-outline-warning" onclick="comprarCrossfit()">Comprar</button>

       <section class="container-fluid footer_section">
       <p>
           &copy; 2023 - Creador y diseñador de la pagina
           <p><a href="https://www.linkedin.com/in/pedro-rocha-25179921b/"><strong>Pedro Rocha</strong></a></p>
       </p>
   </section>

        
        <div>
    `
        document.body.appendChild(contenedor) //Este campo agregará un DIV. de formulario Boostrap
    })
}
clases()

function comprarMusculacion() { //Función con SweetAlert y timer para cargar en proceso de compras
    Swal.fire({
        title: "Comprar curso de Musculación",
        imageUrl: "https://atopedegym.com/wp-content/uploads/2013/03/rutinas-ganar-musculo.jpg",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image :/",
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: "Comprar",
        denyButtonText: `Denegar`
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire("Gracias por tu compra!", "Podras seleccionar este curso en 'Clases'", "success");

            clasesCompradas.musculacion = true

            setTimeout(() => { //Luego de la compra te dirige hacia aquí
                //window.location.href = "index.html";
            }, 4000);
        } else if (result.isDenied) {
            Swal.fire("No compraste el curso", "", "error");
            setTimeout(() => { //Luego de la compra te dirige hacia aquí
                window.location.href = "index.html";
            }, 3000);
        }
    });

}

function comprarCrossfit() { //Función con SweetAlert y timer para cargar en proceso de compras
    Swal.fire({
        title: "Comprar curso de Crossfit",
        imageUrl: "https://phantom-marca.unidadeditorial.es/891a70bafeb2834a69ed9bd337a65c22/resize/828/f/jpg/assets/multimedia/imagenes/2023/05/30/16854328329701.jpg",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image :/",
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: "Comprar",
        denyButtonText: `Denegar`
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire("Gracias por tu compra!", "Podras seleccionar este curso en 'Clases'", "success");

            clasesCompradas.crossfit = true

            setTimeout(() => { //Luego de la compra te dirige hacia aquí
                // window.location.href = "musculacion.html";
            }, 4000);
        } else if (result.isDenied) {
            Swal.fire("No compraste el curso", "", "error");
            setTimeout(() => { //Luego de la compra te dirige hacia aquí
                window.location.href = "index.html";
            }, 3000);
        }
    });

}

function comprarCalistenia() { //Función con SweetAlert y timer para cargar en proceso de compras
    Swal.fire({
        title: "Comprar curso de Calistenia",
        imageUrl: "https://phantom-marca.unidadeditorial.es/e26e5af8213a0060a2dc87a63ce63e4b/resize/414/f/jpg/assets/multimedia/imagenes/2020/08/25/15983487939829.jpg",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image :/",
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: "Comprar",
        denyButtonText: `Denegar`
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire("Gracias por tu compra!", "Podras seleccionar este curso en 'Clases'", "success");

            clasesCompradas.calistenia = true

            setTimeout(() => { //Luego de la compra te dirige hacia aquí
                // window.location.href = "musculacion.html";
            }, 4000);
        } else if (result.isDenied) {
            Swal.fire("No compraste el curso", "", "error");
            setTimeout(() => { //Luego de la compra te dirige hacia aquí
                window.location.href = "index.html";
            }, 3000);
        }
    });

}


async function Login() {
    const login = document.querySelector("#login");

    login.addEventListener("click", () => {
        let contenedor = document.createElement("div");
        contenedor.innerHTML = `
            <div class="container">
                <h1>Datos personales</h1>
                <div class="form-floating">
                    <select class="form-select" id="genero" aria-label="Floating label select example">
                        <option value="" selected>Selecciona el género aquí</option>
                        <option value="Femenino">Femenino</option>
                        <option value="Masculino">Masculino</option>
                        <option value="Otro">Otro</option>
                    </select>
                    <label for="genero">Indícanos tu género</label>
                </div>
                <form action="">
                    <label class="form-label">Nombre</label>
                    <input type="text" class="form-control" id="name" placeholder="Nombre">
                    <label class="form-label">Apellido</label>
                    <input type="text" class="form-control" id="apellido" placeholder="Apellido">
                    <label class="form-label">Peso</label>
                    <input type="text" class="form-control" id="peso" placeholder="En kilogramos (48.6)">
                    <label class="form-label">Altura</label>
                    <input type="text" class="form-control" id="altura" placeholder="(en cm, por ej: 170)">
                    <button type="submit" class="btn btn-success" id="boton">Cargar datos</button>
                </form>

                <footer>
                <section class="container-fluid footer_section">
                    <p>
                        &copy; 2023 - Creador y diseñador de la pagina
                        <p><a href="https://www.linkedin.com/in/pedro-rocha-25179921b/"><strong>Pedro Rocha</strong></a></p>
                    </p>
                </section>
            </footer>

            </div>
        `;
        document.body.appendChild(contenedor);

        const formulario = document.querySelector("form");
        const nombre = document.querySelector("#name");
        const apellido = document.querySelector("#apellido");
        const peso = document.querySelector("#peso");
        const altura = document.querySelector("#altura");
        const genero = document.querySelector("#genero");

        formulario.addEventListener("submit", validarFormulario);

        function validarFormulario(e) {
            e.preventDefault();

            // Verificar campos vacíos
            if (
                nombre.value.trim() === '' ||
                apellido.value.trim() === '' ||
                peso.value.trim() === '' ||
                altura.value.trim() === '' ||
                genero.value === ''
            ) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Por favor... ¡Completa los campos!",
                    footer: '<a href="login.html">¡Recordá completar con datos reales!</a>'
                });
                return; // Detiene la ejecución si hay campos vacíos
            }

            const datos = { //Datos personales
                nombre: nombre.value,
                apellido: apellido.value,
                peso: peso.value,
                altura: altura.value,
                genero: genero.value
            };

            //Convertir datos a cadena de JSON
            const datosJSON = JSON.stringify(datos);
            localStorage.setItem('Registro', datosJSON);


            contenedor.remove();
            window.location.href = "index.html";


        }
    });
}
Login()

// Obtener los datos guardados en el localStorage
const datosJSON = localStorage.getItem('Registro');

// Convertir los datos de JSON a un objeto JavaScript
const datos = JSON.parse(datosJSON);



//  Alimentación

async function nutricion() {


    const metros = datos.altura / 100
    IMC = datos.peso / (metros * metros)

    let salud = ''
    if (IMC < 18.5) {
        salud = 'Bajo peso';
    } else if (IMC >= 18.5 && IMC < 25) {
        salud = 'Saludable';
    } else if (IMC >= 25 && IMC < 30) {
        salud = 'Sobrepeso';
    } else {
        salud = 'Obesidad';
    }

    const nutricion = document.querySelector("#nutricion")
    nutricion.addEventListener("click", () => { //Declaramos función botón al click

        let contenedor = document.createElement("div")
        contenedor.innerHTML = `

        <div class="container">


            <h4>Bienvenido al sector de Nutrición ${datos.nombre}:</h4>

            <p>Tu estado de salud es: <strong>${salud}</strong> </p>
            <p>Genero: <strong>${datos.genero}</strong> </p>
            <a>Tu peso es de: <strong>${datos.peso} kg</strong></a>
            <p>Tu altura es de: <strong>${datos.altura} cm</strong></p>
            <p>Tu Indice de Masa Corporal es de: <strong>${IMC.toFixed(2)}</strong> </p> 


            <button id="subirPeso" class="btn btn-outline-primary" onclick="subirPeso()" > Subir de peso </button>
            <button id="bajarPeso" class="btn btn-outline-primary" onclick="bajarPeso()"> Bajar de peso </button>

            <div >
            `
        document.body.appendChild(contenedor) //Este campo agregará un DIV. de formulario Boostrap

    })
}
nutricion()

async function subirPeso() {

    try {
        const response = await fetch("./data.json") //Conexión a JSON
        if (!response.ok) {
            throw new Error("No es posible cargar los datos")
        }

        const data = await response.json()
        const subir = data.subir //JSON, "subir" platos caloricos
        const bajar = data.bajar //JSON "bajar" platos no caloricos

        const subirPeso = document.querySelector("#subirPeso") //Del botón #subirPeso
        subirPeso.addEventListener("click", () => { //Cuando se hace click al botón:


            let contenedor = document.createElement("div")
            contenedor.innerHTML = `

    <div class="recetas">


        <h4>Recetas <strong>HIPER CALORICAS</strong> para ${datos.nombre}:</h4>

        <p>Comida: <strong> ${subir[0].comida} </strong> </p>
        <p>Descripción: <strong> ${subir[0].descripcion} </strong> </p>
        <p>Calorias: <strong> ${subir[0].calorias} </strong> </p>
        <p>Proteina: <strong> ${subir[0].proteina} </strong> </p>
        <p>Carbohidratos: <strong> ${subir[0].carbohidratos} </strong> </p>
        <a href="">
        <img src="${subir[0].image}" alt="Imagen no disponible"></a> 
        <button id="subirpeso" class="btn btn-outline-primary"> Receta </button>

        <p>Comida: <strong> ${subir[1].comida} </strong> </p>
        <p>Descripción: <strong> ${subir[1].descripcion} </strong> </p>
        <p>Calorias: <strong> ${subir[1].calorias} </strong> </p>
        <p>Proteina: <strong> ${subir[1].proteina} </strong> </p>
        <p>Carbohidratos: <strong> ${subir[1].carbohidratos} </strong> </p>
        <a href="">
        <img src="${subir[1].image}" alt="Imagen no disponible"></a> 
        <button id="subirpeso" class="btn btn-outline-primary"> Receta </button>

        <p>Comida: <strong> ${subir[2].comida} </strong> </p>
        <p>Descripción: <strong> ${subir[2].descripcion} </strong> </p>
        <p>Calorias: <strong> ${subir[2].calorias} </strong> </p>
        <p>Proteina: <strong> ${subir[2].proteina} </strong> </p>
        <p>Carbohidratos: <strong> ${subir[2].carbohidratos} </strong> </p>
        <a href="">
        <img src="${subir[2].image}" alt="Imagen no disponible"></a> 
        <button id="subirpeso" class="btn btn-outline-primary"> Receta </button>

        <p>Comida: <strong> ${subir[3].comida} </strong> </p>
        <p>Descripción: <strong> ${subir[3].descripcion} </strong> </p>
        <p>Calorias: <strong> ${subir[3].calorias} </strong> </p>
        <p>Proteina: <strong> ${subir[3].proteina} </strong> </p>
        <p>Carbohidratos: <strong> ${subir[3].carbohidratos} </strong> </p>
        <a href="">
        <img src="${subir[3].image}" alt="Imagen no disponible"></a> 
        <button id="subirpeso" class="btn btn-outline-primary"> Receta </button>

        <p>Comida: <strong> ${subir[4].comida} </strong> </p>
        <p>Descripción: <strong> ${subir[4].descripcion} </strong> </p>
        <p>Calorias: <strong> ${subir[4].calorias} </strong> </p>
        <p>Proteina: <strong> ${subir[4].proteina} </strong> </p>
        <p>Carbohidratos: <strong> ${subir[4].carbohidratos} </strong> </p>
        <a href="">
        <img src="${subir[4].image}" alt="Imagen no disponible"></a> 
        <button id="subirpeso" class="btn btn-outline-primary"> Receta </button>

        <section class="container-fluid footer_section">
        <p>
            &copy; 2023 - Creador y diseñador de la pagina
            <p><a href="https://www.linkedin.com/in/pedro-rocha-25179921b/"><strong>Pedro Rocha</strong></a></p>
        </p>
    </section>

        <div >
        `
            document.body.appendChild(contenedor) //Este campo agregará un DIV. de formulario Boostrap

        })
    } catch (error) {
        console.log("No es posible cargar los datos");
    }
}



async function bajarPeso() {

    try {
        const response = await fetch("./data.json") //Conexión a JSON
        if (!response.ok) {
            throw new Error("No es posible cargar los datos")
        }

        const data = await response.json()
        const subir = data.subir //JSON, "subir" platos caloricos
        const bajar = data.bajar //JSON "bajar" platos no caloricos


        const bajarPeso = document.querySelector("#bajarPeso") //Del botón #bajarPeso
        bajarPeso.addEventListener("click", () => { //Cuando se hace click al botón:


            let contenedor = document.createElement("div")
            contenedor.innerHTML = `

    <div class="recetas">


        <h4>Recetas <strong>BAJAS EN CALORIAS</strong> para ${datos.nombre}:</h4>

        <p>Comida: <strong> ${bajar[0].comida} </strong> </p>
        <p>Descripción: <strong> ${bajar[0].descripcion} </strong> </p>
        <p>Calorias: <strong> ${bajar[0].calorias} </strong> </p>
        <p>Proteina: <strong> ${bajar[0].proteina} </strong> </p>
        <p>Carbohidratos: <strong> ${bajar[0].carbohidratos} </strong> </p>
        <a href="">
        <img src="${bajar[0].image}" alt="Imagen no disponible"></a> 
        <button id="bajarpeso" class="btn btn-outline-primary"> Receta </button>

        <p>Comida: <strong> ${bajar[1].comida} </strong> </p>
        <p>Descripción: <strong> ${bajar[1].descripcion} </strong> </p>
        <p>Calorias: <strong> ${bajar[1].calorias} </strong> </p>
        <p>Proteina: <strong> ${bajar[1].proteina} </strong> </p>
        <p>Carbohidratos: <strong> ${bajar[1].carbohidratos} </strong> </p>
        <a href="">
        <img src="${bajar[1].image}" alt="Imagen no disponible"></a> 
        <button id="bajarpeso" class="btn btn-outline-primary"> Receta </button>

        <p>Comida: <strong> ${bajar[2].comida} </strong> </p>
        <p>Descripción: <strong> ${bajar[2].descripcion} </strong> </p>
        <p>Calorias: <strong> ${bajar[2].calorias} </strong> </p>
        <p>Proteina: <strong> ${bajar[2].proteina} </strong> </p>
        <p>Carbohidratos: <strong> ${bajar[2].carbohidratos} </strong> </p>
        <a href="">
        <img src="${bajar[2].image}" alt="Imagen no disponible"></a> 
        <button id="bajarpeso" class="btn btn-outline-primary"> Receta </button>

        <p>Comida: <strong> ${bajar[3].comida} </strong> </p>
        <p>Descripción: <strong> ${bajar[3].descripcion} </strong> </p>
        <p>Calorias: <strong> ${bajar[3].calorias} </strong> </p>
        <p>Proteina: <strong> ${bajar[3].proteina} </strong> </p>
        <p>Carbohidratos: <strong> ${bajar[3].carbohidratos} </strong> </p>
        <a href="">
        <img src="${bajar[3].image}" alt="Imagen no disponible"></a> 
        <button id="bajarpeso" class="btn btn-outline-primary"> Receta </button>

        <p>Comida: <strong> ${bajar[4].comida} </strong> </p>
        <p>Descripción: <strong> ${bajar[4].descripcion} </strong> </p>
        <p>Calorias: <strong> ${bajar[4].calorias} </strong> </p>
        <p>Proteina: <strong> ${bajar[4].proteina} </strong> </p>
        <p>Carbohidratos: <strong> ${bajar[4].carbohidratos} </strong> </p>
        <a href="">
        <img src="${bajar[4].image}" alt="Imagen no disponible"></a> 
        <button id="" class="btn btn-outline-primary"> Receta </button>

        <footer>
        <section class="container-fluid footer_section">
            <p>
                &copy; 2023 - Creador y diseñador de la pagina
                <p><a href="https://www.linkedin.com/in/pedro-rocha-25179921b/"><strong>Pedro Rocha</strong></a></p>
            </p>
        </section>
    </footer>

        <div >
        `
            document.body.appendChild(contenedor) //Este campo agregará un DIV. de formulario Boostrap

        })
    } catch (error) {
        console.log("No es posible cargar los datos");
    }
}