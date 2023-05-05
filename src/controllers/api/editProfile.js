window.addEventListener("load", () => {
    let selectProvincias = document.querySelector("#selectProvincias");
    let selectLocalidades = document.querySelector("#selectLocalidades");
    let API_BASE_URL ="`https://apis.datos.gob.ar/georef/api/`"

    selectProvincias.addEventListener("change", async(event) => {
        let provinceId = event.target.value;
        try {
            const response = await fetch(`https://apis.datos.gob.ar/georef/api/localidades?provincia=${provinceId}&campos=id,nombre&max=5000`);
            const {localidades} = await response.json();
                /* lo voy a necesitar hace si os i para que me traiga las nuevas localidades */

        } catch (error) {
            
        }
        /* ------------- */
        /* try {
            const response = await fetch(`${API_BASE_URL}localidades?provincia=${provinceId}&campos=id,nombre&max=5000`) 
            const { localidades } = await response.json();
            selectLocalidades.innerHTML = "";

            const obtenerOption = (nombre) => {
                return `<option value='${nombre}'>${nombre}</option>`
            }

            localidades.forEach(localidad => {
                selectLocalidades.innerHTML += obtenerOption(localidad.nombre);
            });
        } catch (error) {
            alert("Hubo un error")
            console.error(error)
        } */
        /* ------------- */


        //el fetch mr trar la url de la api 
    //hacemos dos promesas una que me traiga la data de jso y otra que me traiga el &en el datos de la api provincia 
        /* fetch(`https://apis.datos.gob.ar/georef/api/localidades?provincia=${provinceId}&campos=id,nombre&max=5000`)
        .then((res) => res.json())
        .then((data) => {
           const {localidades} = data;
           localidades.forEach(localidad => {
            //
                selectLocalidades.innerHTML = `<option value="3"  `
           });
        })
        .catch((error) => console.log(error)) */
    })

})

