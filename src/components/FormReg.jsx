import { useState } from "react";
function FormReg() {
    const [FormReg, setFormReg] = useState({
        nombre:'',
        domicilio:'',
        nacimiento:'',
        correo:'',
        pass:''
    })
    const hanleInputChange = (event) =>{
        setFormReg({
            ...FormReg,
            [event.target.name]: event.target.value
        })
    }
    const saveReg = (event) => {
        event.preventDefault();
        console.log(FormReg);
    }
    return ( 
        <>
            <h1>Este es el formulario</h1>
            <form onSubmit={saveReg}>
                <div className="mb-3">
                    <label className="form-label">Nombre del cliente</label>
                    <input type="text" className="form-control" name="nombre" onChange={hanleInputChange}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Domicilio</label>
                    <input type="text" className="form-control" name="domicilio" onChange={hanleInputChange}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Fecha de nacimiento</label>
                    <input type="date" className="form-control" name="nacimiento" onChange={hanleInputChange}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Correo</label>
                    <input type="text" className="form-control" name="correo" onChange={hanleInputChange}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Contraseña</label>
                    <input type="password" className="form-control" name="pass" onChange={hanleInputChange}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </>
     );
}

export default FormReg;