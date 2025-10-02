import "./style.css";
import React, { useEffect, useState } from "react";
function Home(){
    //estados
    const [departamentos, setDepartamentos] = useState(null);
    const [capitales, setCapitales] = useState(null);
    const [modo, setModo] = useState("capitales");
    //use efect
    useEffect(() => {
    const urlDpt =
      "https://gist.githubusercontent.com/diaztibata/fe3d238ee6b59ef71c8001654441a9f6/raw/4974a1b1cab3ac606dd96aa2d34d6e7c8e007daf/departamentosglobal.json";
    const urlCpt =
      "https://gist.githubusercontent.com/diaztibata/fe3d238ee6b59ef71c8001654441a9f6/raw/4974a1b1cab3ac606dd96aa2d34d6e7c8e007daf/capitalesglobal.json";

    // arrow para guardar datos del .json
    const fetchJson = async (url, setter) => {
      try {
        const resp = await fetch(url);
        if (!resp.ok) throw new Error("Error al cargar JSON: " + resp.status);
        const json = await resp.json();
        setter(json);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchJson(urlDpt, setDepartamentos);
    fetchJson(urlCpt, setCapitales);
  }, []);

    return(
        <>
      <div>
        <button onClick={() => setModo("departamentos")}>
          Mostrar Departamentos
        </button>
        <button onClick={() => setModo("capitales")}>Mostrar Capitales</button>
      </div>

      <div>
        <input
          type="text"
          placeholder="Buscar por nombre..."

        />
      </div>

      <div className="lugar">
        {
            //verificar
            !capitales ? (
                <p>Cargando...</p>
            ) : (
                capitales.data.cpt.map((item) =>(
                    <p key={item.id}>
                        {item.nm}
                    </p>
                )
                )
            )
        }
      </div>
        </>
    )
}
export default Home