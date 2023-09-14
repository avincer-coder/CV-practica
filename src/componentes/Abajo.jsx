import "./Abajo.css"
function Abajo(props){
    return(
        <div className="contenedor_abajo">
            <p className="abajo_izquierdo">{props.history}</p>
            <section className="abajo_derecho">
                <h2>{props.empresa}</h2>
                <p className="mes_año">{props.fechas}</p>
                <ul className="lista_abajo">
                    <li>{props.desempeño1}</li>
                    <li>{props.desempeño2}</li>
                    <li>{props.desempeño3}</li>
                    <li>{props.desempeño4}</li>
                </ul>
            </section>
        </div>
    )
}
export default Abajo