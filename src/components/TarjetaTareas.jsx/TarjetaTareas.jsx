// import { useState } from "react";

export const TarjetaTareas = ({tarea, index, handleCambiar, handleEliminar, id}) => {
    // area de funcionalidades

    // estado inicial en elq eu conviene iniciar con false
    // desestructuramos el state
    // const[state,setState] = useState(false);
    // acostumbrarse a hacer cambios, se usara state en app para poder enviarlo a la barra de progreso

    // const clickHandler = () =>{
    //     setState(!state);
    // }
    

    // todo return debe ir jsx
    return (
        <>
            {/* <div className="container">
                <div className="row"> */}
                    <div className="col">
                        <div className={tarea.realizado ? "card border-0 mt-4 mb-4 bg-success text-light" : "card border-0 bg-secondary mt-4 mb-4 text-light"}>
                            <div className="card-body ">
                                <h5 className="card-title">Tarea: {id+1}</h5>
                                <p className="card-text">{tarea.descripcion}</p>
                                <div className="d-grid gap-2 mt-5">
                                    <button className="btn btn-dark" type="button" onClick={() => handleEliminar(index)}>Borrar</button>
                                    <button className={tarea.realizado ? "btn btn-info" : "btn btn-success"} type="button" onClick={() => handleCambiar(index)}>{tarea.realizado ? "Marcar como incompleto" : "Marcar como terminada" }</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="col">
                        <div className={state? "card py-4 mt-4 mb-4 bg-success text-light" : "card py-4 mt-4 mb-4"} style={{ width: "18rem" }}>
                            <div className="card-body ">
                                <h5 className="card-title">Tarea: {index}</h5>
                                <p className="card-text">{tarea}</p>
                                <div className="d-grid gap-2 mt-5">
                                    <button className="btn btn-dark" type="button">Borrar</button>
                                    <button className={state?"btn btn-danger":"btn btn-info"} type="button" onClick={clickHandler}>{state? "Marcar como no terminado":"Marcar como terminada"}</button>
                                </div>
                            </div>
                        </div>
                    </div> */}
                {/* </div>
            </div> */}
        </>
    )
}
