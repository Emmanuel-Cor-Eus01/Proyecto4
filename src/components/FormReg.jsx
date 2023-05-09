import { useState } from "react";
import { db1 } from "../services/firestore-form-reg";
import { collection, addDoc } from "firebase/firestore";
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
    const saveReg = async (event) => {
        event.preventDefault();
        console.log(FormReg);
        const docRef = await addDoc(collection(db1, "registro"), FormReg);
        console.log("Documento agregado con el ID", docRef.id);
    }
    return ( 
        <>
        <div className="form-register text-center">
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
                <button type="submit" className="btn btn-primary">Registrar</button>
            </form>
        </div>
        </>
     );
}

export default FormReg;