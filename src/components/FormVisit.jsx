import { useState } from "react";
function FormVisit() {
    const [FormVisit, setFormVisit] = useState({
        nombre:'',
        fecha:'',
        hora:''
    })
    const hanleInputChange = (event) =>{
        setFormVisit({
            ...FormVisit,
            [event.target.name]: event.target.value
        })
    }
    const saveVisit = (event) => {
        event.preventDefault();
        console.log(FormVisit);
    }
    return ( 
        <>
        <div className="form-cita">
            <form onSubmit={saveVisit}>
                <div className="mb-3">
                    <label className="form-label">Nombre del cliente</label>
                    <input type="text" className="form-control" name="nombre" onChange={hanleInputChange}/>
                    <div className="form-text text-danger fw-bold">Para cancelar debe hacerlo con 1 dia de anticipacion.</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Fecha</label>
                    <input type="date" className="form-control" name="fecha" onChange={hanleInputChange}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Hora</label>
                    <input type="time" className="form-control" name="hora" onChange={hanleInputChange}/>
                </div>
                <button type="submit" className="btn btn-primary">Agendar Visita</button>
            </form>
        </div>
        </>
     );
}

export default FormVisit;