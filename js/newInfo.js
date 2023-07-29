import { insertarInfo, insertarJuguete, insertarServicios, insertarVeterinaria } from "../apiConnection/API.js"  


const formulario = document.querySelector(`#formulario`)
formulario.addEventListener(`submit`, objetoTodo)

function objetoTodo(e){
    alert("a")
    e.preventDefault()
    //PROPIETARIO
    const nombre1 = document.querySelector(`#nombre1`).value
    const edad1 = parseInt(document.querySelector(`#edad1`).value)
    const direccion1 = document.querySelector(`#direccion1`).value
    const numero1 = parseInt(document.querySelector(`#numero1`).value)
    const mascota1 = document.querySelector(`#mascota1`).value
    const imagen = document.querySelector(`#fotos1`).value
    //JUGUETES
    const nombre2 = document.querySelector(`#nombre2`).value
    const material2 = document.querySelector(`#material2`).value
    const precio2 = document.querySelector(`#precio2`).value
    const fabricante2 = document.querySelector(`#fabricante2`).value
    const disponibilidad2 = parseInt(document.querySelector(`#disponibilidad2`).value)
    const imagen2 = document.querySelector(`#fotos2`).value
    //ANIMALES
    const nombre3 = document.querySelector(`#nombre3`).value
    const edad3 = parseInt(document.querySelector(`#edad3`).value)
    const raza3 = document.querySelector(`#raza3`).value
    const color3 = document.querySelector(`#color3`).value
    const dueño3 = document.querySelector(`#dueño3`).value
    const imagen3 = document.querySelector(`#fotos3`).value
    //SERVICIOS
    const nombre4 = document.querySelector(`#nombre4`).value
    const precio4 = parseInt(document.querySelector(`#precio4`).value)
    const especialista4 = document.querySelector(`#especialista4`).value
    const trabajadores4 = document.querySelector(`#trabajadores4`).value
    const imagen4 = document.querySelector(`#fotos4`).value

    const propietario = {
        nombre: nombre1,
        imagen: imagen,
        edad: edad1,
        direccion: direccion1,
        numero: numero1,
        mascota: mascota1
    }
    console.log(propietario);
    const juguetes = {
        nombre: nombre2,
        imagen: imagen2,
        material: material2,
        precio: precio2,
        fabricante: fabricante2,
        disponibilidad: disponibilidad2
    }
    console.log(juguetes);
    const animales = {
        nombre: nombre3,
        imagen: imagen3,
        edad: edad3,
        raza: raza3,
        color: color3,
        dueño: dueño3
    }
    console.log(animales);
    const servicios = {
        nombre: nombre4,
        imagen: imagen4,
        precio: precio4,
        especialista: especialista4,
        trabajadores: trabajadores4
    }
    console.log(servicios);
    if (validate(propietario) && validate(juguetes) && validate(animales) && validate(servicios)){
        console.log("si pasa");
        return
    }
        console.log("no pasa");

     insertarInfo(animales)  
     insertarJuguete(juguetes)
     insertarVeterinaria(propietario) 
     insertarServicios(servicios)
}

function validate(objeto){
    return !Object.values(objeto).every(element => element !== '')
} 

