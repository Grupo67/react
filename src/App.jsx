import React from 'react'
import Props, {Xt} from './components/Props'
import Obj   from './components/Obj_props'
import Func  from './components/Fun_props'

const App= ()=>{
    //funcion
    const mostrar = (nombre)=>{
        alert('hola ' + nombre)
    }
    //objeto
    const user ={
        nombre: 'Isabella Gomez',
        edad: 6,
        color: 'Azul'
    }

    //variables
    const nombre= 'juan'
    const edad  =  33
    return(
        <div>
            <h1>Hola Estoy En React</h1>
            <a href="https://www.youtube.com/watch?v=-dI4oTssDhE">YOUTUBE</a>
            <Props nombre = {nombre} edad= {edad}/>
            <Obj userInfo={user}/>
            <Xt />
            <Func saludar = {mostrar} userInfo={user}/>
        </div>
        
    )
}

export default App;