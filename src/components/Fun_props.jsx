import React from 'react'

const Fun_props = (x)=>{
    
    return(
        <button onClick={()=> x.saludar(x.userInfo.nombre)}>saludar</button>
    )
}

export default Fun_props;