export const FormularioTareas = ({handleInputChange, handleSubmit, descripcion}) => {
    
    return (
        <>
            <h3>Agregar tarea</h3>
            <hr />
            <div className="mb-3">
                <form onSubmit={(e) => handleSubmit(e)}>
                    <label htmlFor="exampleInputText1" className="form-label">Descripción</label>
                    <input onChange={(e) => handleInputChange(e)} name="descripcion" value={descripcion} type="text" className="form-control" id="exampleInputText1" aria-describedby="descripcionTexto" />
                    <div id="descripcionTexto" className="form-text text-light">Agrega la descripcion de la tarea</div>
                    <div className="d-grid gap-2">
                        <button type="submit" className="btn btn-success mt-3 btn-lg">Agregar</button>
                    </div>
                </form>
            </div>
        </>
    )
}
