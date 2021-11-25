import React, {useState} from 'react'


const Contar = ()=>{
    const [count, setCount] = useState(0) //usamos el hook el cual usamos para actualizar
    
    return(
        <>
            <p>numero de clicks {count}</p>
            <button onClick={()=> setCount(count + 1)} >Click</button>
        </>
    )
}

export default Contar;