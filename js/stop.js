let formulario = document.querySelector(".formulario")

const iniciar = document.querySelector(".iniciar");
const nombre_input = document.querySelector(".nombre_input");

let nameUsser;
iniciar.addEventListener("click", ()=>{
  cronometro();
  ejecutarStop();
  document.querySelector(".form_stop").classList.remove("active")
})
const names = document.getElementById("name");
//const document= document.querySelector(".dc")
names.addEventListener("keyup",(e)=>{
  const nombre_input=document.querySelector(".nombre_input");
  let inputNombre=e.target.value;
  nameUsser = inputNombre;
  nombre_input.innerHTML=  "Hola, "+inputNombre;
  
})

//?  html intercambio de datos para





//? funcionamiento html

const ejecutarStop = ()=>{


  let letra = document.querySelector(".leter")
 

  
  let arr = ['a','b','c','d','e','f','g','h','i','j','k','k','m','n','o','p','q','s','t','u','v','w','x','y','z'];
  let idvalue="";
  let n = 1; // Este valor se puede cambiar, correspondiente a cuantas letras se generan, cámbialo según tus necesidades
  for(let i=0;i<n;i++){
    idvalue+=arr[Math.floor(Math.random()*26)];
    
  }
  letra.innerHTML= idvalue

  let inputs = document.querySelectorAll(".formulario .input")
  let expresion = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/
  };

let datosUsuario = {
  nombreM: "",
  apellidoM: "",
  ciudadM: "",
  colorM: "",
  animalM: "",
  frutaM: "",
  cosaM: "",
}; 

let  campos = {
  nombre: false,
  apellido: false,
  ciudad: false,
  color: false,
  animal: false,
  fruta: false,
  cosa: false
};


  const validarCamposF = (e) => {
    switch (e.target.name) {
      case "nombre":
        datosUsuario.nombreM= e.target.value;
         
           datosForm(expresion.nombre, e.target, "nombre");
       
        break;
  
      case "apellido":
         datosUsuario.apellidoM = e.target.value;
        datosForm(expresion.nombre, e.target, "apellido");
  
        break;
      case "ciudad":
        datosUsuario.ciudadM = e.target.value;
        datosForm(expresion.nombre, e.target, "ciudad");
  
        break;
      case "color":
        datosUsuario.colorM = e.target.value;
        datosForm(expresion.nombre, e.target, "color");
  
        break;
      case "animal":
        datosUsuario.animalM = e.target.value;
        datosForm(expresion.nombre, e.target, "animal");
  
        break;
      case "fruta":
        datosUsuario.frutaM = e.target.value;
        datosForm(expresion.nombre, e.target, "fruta");
  
        break;
      case "cosa":
        datosUsuario.cosaM = e.target.value;
        datosForm(expresion.nombre, e.target, "cosa");
  
        break;
      default:
        break;
    }
  };
    let countPuntos = 0;
  const datosForm = (expresiones, input, campo) => {
    if (expresiones.test(input.value) && idvalue==input.value[0]) {
     
      document.querySelector(`.group__${campo}`).classList.remove("errr");
      countPuntos += 30;
      campos[campo]=true;
    } else {
      document.querySelector(`.group__${campo}`).classList.add("errr");
      countPuntos -= 30
      campos[campo]=false
    }
    return countPuntos
  };
  
  inputs.forEach((element) => {
    element.addEventListener("keyup", validarCamposF);
  });


  formulario.addEventListener("submit",(e)=>{
    
    e.preventDefault();

   if (campos.nombre && campos.apellido && campos.ciudad && campos.color && campos.animal && campos.fruta && campos.cosa) {
       document.querySelector(".n").innerHTML = `Nombre: ${
         nameUsser == "" ? "..." : nameUsser
       }`;
    (document.querySelector(".p").innerHTML = `Puntos: ${Math.abs(countPuntos)}`);
       let getPuntos = document.querySelector(".puntos_submit");
     if (countPuntos >= 600) {
       document.querySelector(".consulG").innerHTML="Ganaste";
       getPuntos.style.color = "green";
      } else {
         document.querySelector(".consulG").innerHTML="Perdiste";
         getPuntos.style.color = "red";
       }
     let repleace = document.querySelector(".repleace");
     let html = ` 
     
     <ul class="List">
     <li>Letra: <strong>${idvalue}</strong></li>
     <li>Nombre:<strong>${datosUsuario.nombreM}</strong></li>
        <li>Apellido<strong>${datosUsuario.apellidoM}</strong></li>
        <li>Ciudad:<strong>${datosUsuario.ciudadM}</strong></li>
        <li>Color:<strong>${datosUsuario.colorM}</strong></li>
        <li>Animal:<strong>${datosUsuario.animalM}</strong></li>
        <li>Fruta:<strong>${datosUsuario.frutaM}</strong></li>
        <li>Cosa:<strong>${datosUsuario.cosaM}</strong></li>
        
        </ul>
        `;
        let puntsUser = Math.abs(countPuntos);
  
      
       setDatos(nameUsser, puntsUser)
        repleace.innerHTML= html;
        document.querySelector(".ventModal").style.display="block";
        document.querySelector(".nuevoJ").addEventListener("click",()=>{
          
          window.location= "stopIndex.html"
          formulario.reset();
          
        });
        
        
      }else{
        alert("Los campos deben de estar completos.")
        
        
      }
      
    })
    
    
  }
  
  let object = []
  function setDatos(valor1, valor2){
    let documento = document.querySelector(".documentoUser").value;
    let datosUser = {"nameuser": valor1, "puntos":valor2 }
    localStorage.setItem("data", JSON.stringify(datosUser));
    let  datos= JSON.parse(localStorage.getItem("data"))
    object.push(datos)

     
    let insertDate = localStorage.setItem(valor1, JSON.stringify(datos))
    let nuevosDatos = JSON.parse(localStorage.getItem(insertDate))

    return valor1, valor2
    
  
  }
  setDatos()
 
  function recorrerLlaves(){
    
    let mostrarDato=[],
    keys = Object.keys(localStorage),
    i=0, key;
    for (; key  = keys[i]; i++) {
      
    mostrarDato.push( key + " = " + localStorage.getItem(key))
      
    
  }
  
  console.log("\n",mostrarDato[0].match())
  
}

  recorrerLlaves()

  
 
 
  
 


tiempoTw ="";
function cronometro() {
  document.querySelector(".puntos").addEventListener("click", ()=>{
   let rQsY = clearInterval(count);
    tiempoTw = document.querySelector(".t").innerHTML = `Tiempo: ${time}s`;

  });

  let time = 0;
  let count = null;

  time = 1 * 60;

  count = setInterval(() => {
    contadorTime();
  }, 1000);

  function contadorTime() {
    time--;
    decrementoTime();
    if (time === 0) {
      clearInterval(count);
       document.querySelector(".ventModal").style.display = "block";
      setTimeout(()=>{
        window.location = "stopIndex.html";
      },2000)

    }
  }
  function decrementoTime() {
    const tiempo = document.getElementById("tiempo");
    let minute = parseInt(time / 60);
    let second = parseInt(time % 60);
    let registroContador = `${minute < 10 ? "0" : ""}${minute}:${
      second < 10 ? "0" : ""
    }${second}`;
    tiempo.textContent = registroContador;
    if (minute <= 0 && second < 20) {
      tiempo.style.color = "red";
    }
  }
}

 


    window.onload = () => {
  

      let load = document.querySelector(".loading__ft");

      load.style.display = "none";
      //  console.log(`resultado.. ${load}`);
    };



