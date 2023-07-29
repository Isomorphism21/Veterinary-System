const url = "http://localhost:4002/animales"

export const getAnimales = async () => {
    try {
        const result = await fetch(url)
        const data = await result.json()
        return data
    } catch (error) {
        console.log(error);
    }
}

const url2 = "http://localhost:4002/juguetes"

export const getJuguetes = async () => {
    try {
        const result = await fetch(url2)
        const data = await result.json()
        return data
    } catch (error) {
        console.log(error);
    }
}

const url3 = "http://localhost:4002/propietario"

export const getVeterinaria = async () => {
    try {
        const result = await fetch(url3)
        const data = await result.json()
        return data
    } catch (error) {
        console.log(error);
    }
}

const url4 = "http://localhost:4002/servicios"

export const getServicios = async () => {
    try {
        const result = await fetch(url4)
        const data = await result.json()
        return data
    } catch (error) {
        console.log(error);
    }
}

const url5 = "http://localhost:4002/facturado"

export const getFinalizado = async () => {
    try {
        const result = await fetch(url5)
        const data = await result.json()
        return data
    } catch (error) {
        console.log(error);
    }
}
//Insertar nueva Info - Metodo PHOST

export const insertarInfo = async (objeto) => {
    console.log(url);
    try {
        await fetch(url, {
            method: "POST",
            body: JSON.stringify(objeto),
            headers: {
                'Content-Type' : 'application/json'
            }
        });
        window.location.href = 'index.html'
    } catch (error) {
        console.log(error);
    }
}

export const insertarJuguete = async (objeto) => {
    console.log(url2);
    try {
        await fetch(url2, {
            method: "POST",
            body: JSON.stringify(objeto),
            headers: {
                'Content-Type' : 'application/json'
            }
        });
        window.location.href = 'index.html'
    } catch (error) {
        console.log(error);
    }
}

export const insertarVeterinaria = async (objeto) => {
    console.log(url3);
    try {
        await fetch(url3, {
            method: "POST",
            body: JSON.stringify(objeto),
            headers: {
                'Content-Type' : 'application/json'
            }
        });
        window.location.href = 'index.html'
    } catch (error) {
        console.log(error);
    }
}

export const insertarServicios = async (objeto) => {
    console.log(url4);
    try {
        await fetch(url4, {
            method: "POST",
            body: JSON.stringify(objeto),
            headers: {
                'Content-Type' : 'application/json'
            }
        });
        window.location.href = 'index.html'
    } catch (error) {
        console.log(error);
    }
}

export const insertarFactura = async (objeto) => {
    try {
        await fetch(url5, {
            method: "POST",
            body: JSON.stringify(objeto),
            headers: {
                'Content-Type' : 'application/json'
            }
        });
        window.location.href = 'index.html'
    } catch (error) {
        console.log(error);
    }
}

//Delete Factura HTTP

export const deleteFactura = async (id) => {
    try {
        await fetch(`${url}/${id}`,{
            method: "DELETE"
        })
        
    } catch (error) {
        console.log(error);
    }
}

export const deleteFactura2 = async (id) => {
    try {
        await fetch(`${url2}/${id}`,{
            method: "DELETE"
        })
        
    } catch (error) {
        console.log(error);
    }
}

export const deleteFactura3 = async (id) => {
    try {
        await fetch(`${url3}/${id}`,{
            method: "DELETE"
        })
        
    } catch (error) {
        console.log(error);
    }
}

export const deleteFactura4 = async (id) => {
    try {
        await fetch(`${url4}/${id}`,{
            method: "DELETE"
        })
        
    } catch (error) {
        console.log(error);
    }
}