import React from 'react';

export default function Saludar(tem){
    return(
        <div>
            <h2>la edad de {tem.nombre} es {tem.edad} años</h2>
        </div>
    )
}

export function Xt(){
    return(
    <h1>Hola soy otra funcion del mismo componente</h1>
    )
}