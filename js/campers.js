export function poblarMascotas(ejemplo){
    ejemplo.forEach(element => {
        const {id, imagen, nombre, edad, raza, color, dueño} = element
        const tr = document.createElement(`tr`)
        tr.innerHTML = `
            <th scope="row">${id}</th>
            <td><img src="../img/${imagen}" class="cuenta"></td>
            <td>${nombre}</td>
            <td>${raza}</td>
            <td>${color}</td>
            <td>${edad}</td>
            <td>${dueño}</td>
            
        `      
        document.querySelector(`.table-group-divider`).appendChild(tr)
    });
}

export function poblarJuguetes(ejemplos){
    ejemplos.forEach(element => {
        const {id, imagen, material, precio, fabricante, nombre, disponibilidad} = element
        const tr = document.createElement(`tr`)
        tr.innerHTML = `
            <th scope="row">${id}</th>
            <td><img src="../img/${imagen}" class="cuenta"></td>
            <td>${nombre}</td>
            <td>${material}</td>
            <td>${precio}</td>
            <td>${fabricante}</td>
            <td>${disponibilidad}</td>
            
        `      
        document.querySelector(`.listaJuguetes`).appendChild(tr)
    })
}

export function poblarVeterinarias(ejemplos){
    ejemplos.forEach(element => {
        const {id, nombre, imagen, direccion, numero, mascota, edad} = element
        const tr = document.createElement(`tr`)
        tr.innerHTML = `
            <th scope="row">${id}</th>
            <td><img src="../img/${imagen}" class="cuenta"></td>
            <td>${nombre}</td>
            <td>${direccion}</td>
            <td>${numero}</td>
            <td>${mascota}</td>
            <td>${edad}</td>
            
        `      
        document.querySelector(`.listaVeterinaria`).appendChild(tr)
        
        const option = document.createElement(`option`)
        option.textContent = `${nombre}`
        option.value = `${id}`
        
        
        document.querySelector(`#facturaMascota`).appendChild(option);
    })
}

export function poblarServicios(ejemplos){
    ejemplos.forEach(element => {
        const {id, nombre, imagen, precio, especialista, trabajadores} = element
        const tr = document.createElement(`tr`)
        tr.innerHTML = `
            <th scope="row">${id}</th>
            <td><img src="../img/${imagen}" class="cuenta"></td>
            <td>${nombre}</td>
            <td>${precio}</td>
            <td>${especialista}</td>
            <td>${trabajadores}</td>
            
        `      
        document.querySelector(`.listaServicios`).appendChild(tr)
    })
}

export function poblarFacturas(ejemplos){
    ejemplos.forEach(element => {
        const {id ,imagen ,nombre, nombreMascota, servicio, precio, especialista} = element
        const tr = document.createElement(`tr`)
        tr.innerHTML = `
            <th scopte="row">${id}</th>
            <td><img src="../img/${imagen}" class="cuenta"></td>
            <td>${nombre}</td>
            <td>${nombreMascota}</td>
            <td>${servicio}</td>
            <td>${especialista}</td>
            <td>${precio}</td>
        ` 
        document.querySelector(`.listaFacturacion`).appendChild(tr)
    })
}


