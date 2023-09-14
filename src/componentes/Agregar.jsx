function App() {

    const [todasHabilidades, setTodasHabilidades] = useState([])
    
    function usoDeClick(){
      setTodasHabilidades([...todasHabilidades,<li key={Date.now()}>{nuevaHabilidad}</li>])
      // todasHabilidades.push(nuevaHabilidad)
      // setListaHabilidades(creacionLista, ...creacionLista, nuevaHabilidad)
      // [miArray,nuevaHabilidad]
      // console.log(todasHabilidades)
    }
  
    function agregarHabilidad(e){
      setListaHabilidades(e.target.value)
    }
    const [nuevaHabilidad, setListaHabilidades] = useState("") 
    // let renderList = todasHabilidades.map((habilidad, index)=> (<li key={index}>{habilidad}</li>))
  
    return (
      <>
      <input type='text' value={nuevaHabilidad} onChange={agregarHabilidad}></input>
      {/* <p>{nuevaHabilidad}</p> */}
      <button onClick={usoDeClick}>CAMBIAR </button>
      <ul>{todasHabilidades}</ul>
      </>
    )
  }