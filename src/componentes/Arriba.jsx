import "./Arriba.css"
function Arriba(props){
    return(
        <div className="contenedor_arriba">
            <div className="top">
                <div><p className="p1">{props.profesion}</p></div>
                <div><p className="p2">{props.direccion}</p></div>
            </div>
            <p className="correo">{props.correo}</p>
            <p className="telefono">{props.telefono}</p>
            <section className="foto_nombre">
                <img src="img/David Martinez 3.jpg" />
                <div className="apellido">
                    <h1 className="nombre">{props.nombre}</h1>
                    <h1 className="nombre" >{props.apellido}</h1>
                </div>
                
            </section>

        </div>
    )
}
export default Arriba