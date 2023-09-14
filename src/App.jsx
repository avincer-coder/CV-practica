import { useState } from 'react'
import './App.css'
import Arriba from './componentes/Arriba'
import Medio from './componentes/Medio'
import Abajo from './componentes/Abajo'

function App() {


  

  return (
    <>
      <Arriba profesion="Estudiante"
      direccion="43020 W 2324 Av Benito Juarez col. San Agustin Baja california Mexico"
      correo="sebas.elsebas@gmail.com"
      telefono="+52 976 234 8650"
      nombre="MARIO"
      apellido="GARCIA SALAZAR"/>
      <hr nosahde="noshade" ></hr>
      <Medio izquierda="PROFILE"
      subtitulo="AMPLIO CONOCIMIENTO EN EL AREA DE DESAROLLO DE HABILIDADES PARA LA PRODUCTIVIDAD Y DESEMPEÑO."
      parrafo3="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores veniam consectetur tempora. Vitae, facere libero minus deserunt repellendus veritatis laudantium pariatur, perspiciatis, voluptatem id quisquam quos dolore aliquam officia molestiae impedit! Aspernatur sit voluptate exercitationem voluptatum blanditiis culpa ullam earum saepe voluptas animi porro quasi nihil totam expedita, dignissimos ipsa!"
      skills="skills:"
      lista1="Lorem ipsum dolor sit werkjh jdsg tr."
      lista2="Lorem ipsum dolor sit."
      lista3="Lorem ipsum dolor sit."
      lista4="Lorem ipsum dolor sit."
      lista5="Lorem ipsum dolor sit kljsdf sdjfg dsfjhg."
      />
      <hr nosahde="noshade" ></hr>
      <Abajo history="EMPLOYMENT HISTORY"
      empresa="Driver at Albert's Trucking Company, Phoenix"
      fechas="April 2013 - April 2019"
      desempeño1="Lorem ipsum dolor sit amet Lorem ipsum dolor sit."
      desempeño2="Lorem ipsum dolor sit amet amet consectetu."
      desempeño3="Lorem ipsum dolor sit amet."
      desempeño4="Lorem ipsum dolor sit amet elit. Incidunt commodi voluptatibus."/>

      

    </>
  )
}

export default App
