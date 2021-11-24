import React from 'react'

const Objeto = (x)=>{
    return(
        <p>
            hola {x.userInfo.nombre} <br />
            tuedad es {x.userInfo.edad} años <br />
            tucolor favorito es {x.userInfo.color}
        </p>
    )
}

export default Objeto;