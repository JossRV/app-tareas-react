export const tareaReducer = (state = [], accion) => {
  switch(accion.type){
    case "add":
        return [...state, accion.payload];
    case "borrar":
        return state.filter((tarea) => tarea.id !== accion.payload);
    case "cambiar":
        return state.map((tarea) => tarea.id === accion.payload ? {...tarea, realizado: !tarea.realizado} : tarea);
    default:
        return state;

  }
}
