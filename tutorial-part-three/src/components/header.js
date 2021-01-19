import React from "react"

export default function Header(props) 
{
    return <h1 style={{ backgroundColor:'slategrey', color: 'white' }}>{props.headerText}</h1>
}