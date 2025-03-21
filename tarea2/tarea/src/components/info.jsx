import {React, useState} from "react";

function Tarea(){
    const [nombre,setNombre] = useState("")
    const [carnet, setCarnet] = useState("")
    const [curso,setCurso] = useState("")
    const getDatos = ()=>{
        setNombre("Juan Sebastian Higueros de Leon")
        setCarnet("201807344")
        setCurso("Analisis y diseño de sistemas 1")
    }
    return(
        <div className='card-body jusitify-content-center'>
                <button className='btn btn-primary' style={{marginBottom:10}} onClick={getDatos}>Datos</button>
                <div className='d-flex flex-row-reverse'>
                </div>
                <div className='mb-3'>
                    <h1 className="h1 text-center" >{nombre}</h1>
                    <h1 className="h1 text-center" >{carnet}</h1>
                    <h1 className="h1 text-center" >{curso}</h1>
                </div>
                
        </div>
    )
}

export default Tarea