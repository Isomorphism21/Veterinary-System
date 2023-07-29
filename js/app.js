import { getAnimales, getJuguetes, getVeterinaria, getServicios, deleteFactura, deleteFactura2, deleteFactura3, deleteFactura4, getFinalizado, insertarFactura } from "../apiConnection/API.js";
import { poblarMascotas, poblarJuguetes, poblarVeterinarias, poblarServicios, poblarFacturas} from "./campers.js";
(function(){
    document.addEventListener(`DOMContentLoaded`, mostrarAnimales)
    async function mostrarAnimales(){
        const info = await getAnimales()
        const juguetes = await getJuguetes()
        const veterinaria = await getVeterinaria()
        const servicios = await getServicios()
        const facturado = await getFinalizado()
        console.log(info);
        console.log(juguetes);
        console.log(veterinaria);
        console.log(servicios);
        poblarMascotas(info)
        poblarJuguetes(juguetes)
        poblarVeterinarias(veterinaria)
        poblarServicios(servicios)
        poblarFacturas(facturado)
        const inputFacturar = document.querySelector(`#facturaMascota`);
        inputFacturar.addEventListener(`change`, ()=>{
            async function poblar(){
                const infoAnimal = await getAnimales();
                const infoVeterinaria = await getVeterinaria();
                const infoServicios = await getServicios();
                const poblarFactura = document.querySelector('#poblarFactura');
                const div = document.querySelector(`.modal-footer2`)
                
                for (let i = 0; i < infoAnimal.length; i++) {
                    if (infoAnimal[i].id == parseInt(inputFacturar.value)) {
                        const nombrePropie = infoVeterinaria[i].nombre
                        const nombreAnimal = infoAnimal[i].nombre
                        const nombreServicio = infoServicios[i].nombre
                        const precio = parseInt(infoServicios[i].precio)
                        const especialista = infoServicios[i].especialista
                        poblarFactura.innerHTML = `
                            <h2 class="cambiarH2"><strong>El dueño de la mascota:</strong> ${nombrePropie}</h2>
                            <h2 class="cambiarH2"><strong>Nombre de la mascota:</strong> ${nombreAnimal}</h2>
                            <h2 class="cambiarH2"><strong>El servicio de la mascota:</strong> ${nombreServicio}</h2>
                            <h2 class="cambiarH2"><strong>El precio de la mascota:</strong> ${precio}</h2>
                            <h2 class="cambiarH2"><strong>El especialista que lo atendió fue:</strong> ${especialista}</h2>
                        `;
                        div.innerHTML = `
                            <button type="button" class="btn btn-secondary color3 border3 headerr" data-bs-dismiss="modal">Cerrar</button>
                            <button type="submit" data-factura="${infoAnimal[i].id}" class="btn color5 color-heder headerr delete" data-bs-toggle="modal"
                                data-bs-target="#exampleModal2">Facturar</button>
                        `;
                        const serviciosFinalizados = {
                            nombre : nombrePropie,
                            imagen : "chulo.png",
                            nombreMascota : nombreAnimal,
                            servicio : nombreServicio,
                            precio : precio,
                            especialista : especialista
                        }
                        console.log(serviciosFinalizados);
                        const btnBorrar = document.querySelector(`.delete`)
                         btnBorrar.addEventListener(`click`, (e)=>{
                         const camperId = parseInt(e.target.dataset.factura)
                         const confirmar = confirm(`¿Deseas eliminar al camper para que se quede casa?`)
                         if (confirmar){
                            deleteFactura(camperId)
                            deleteFactura2(camperId)
                            deleteFactura3(camperId)
                            deleteFactura4(camperId)
                         }
                            insertarFactura(serviciosFinalizados)
                        })
                        

                        
                    } 
                }
            }
            poblar();
        })
        
    }
    
    
    
})();

