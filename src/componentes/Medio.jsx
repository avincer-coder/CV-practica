import { useState } from "react"
import "./Medio.css"
function Medio(props){

    const Agregar = () =>{
        // []
        // [correr] 
        // [caminar]
        // Manten mi array y agrega el elemento del input
        // [correr, caminar]
        setListaHabilidades([...ListaHabilidades, letrasInputText])
        console.log(ListaHabilidades)
        setLetrasInputText("")
    }
    const CapturaDeTexto = (event) =>{
        setLetrasInputText(event.target.value)
        // console.log(letrasInputText)
    }
    const contenidoLista = ()=>{
        setBtnMostrarLista(!btnMostrarLista) 
        // console.log(btnMostrarLista)
    }

    const [letrasInputText, setLetrasInputText ] = useState("")
    const [btnMostrarLista, setBtnMostrarLista] = useState(true)
    const [ListaHabilidades, setListaHabilidades] = useState([])
    // let ListaDePrueba = ["Correr", "Nadar", "Bailar", "Comer"]
    // console.log(ListaDePrueba)

    return(
        <div className="contenedor_medio">
            <div className="modal">
                <p className="medio_izquierdo">{props.izquierda}</p>
                <input value={letrasInputText} onChange={CapturaDeTexto} className="input_texto" placeholder="Ingresa una nueva habilidad..." type="text">{props.input}</input>
                <button className="btn_modal" onClick={Agregar}>Agregar</button>
                <button className="btn_esconder_modal" onClick={contenidoLista} >Click para mostrar lista</button>
                {btnMostrarLista && (
                    <ul>
                        {ListaHabilidades.map((Habilidad, index) => 
                        <li key={index}>{Habilidad}</li>)}
                    </ul>
                )}
            </div>
            <section className="medio_derecho">
                <h2>{props.subtitulo}</h2>
                <p className="parrafo3">{props.parrafo3}</p>
                <p className="skills">{props.skills}</p>
                <ul className="contenedor_listas">
                    <li className="lista_medio">{props.lista1}</li>
                    <li className="lista_medio">{props.lista2}</li>
                    <li className="lista_medio">{props.lista3}</li>
                </ul>
                <ul className="contenedor_listas">
                    <li className="lista_medio">{props.lista4}</li>
                    <li className="lista_medio">{props.lista5} </li>
                </ul>
            </section>
        </div>
    )
}
export default Medio