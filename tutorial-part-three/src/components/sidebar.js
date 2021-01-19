import React from "react"

/* The sidebar menu */
export default function Sidebar() {
    return (
        <div style={{ width: '130px',
            position: 'fixed',
            zindex: '1',
            top: '20px',
            left: '10px',
            background: '#eee',
            overflowx: 'hidden',
            padding: '8px 0', 
            color: 'slategrey'}}>
            <p>
            Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. 
            Atqui causae gloriatur ius te, id agam omnis evertitur eum. 
            
            </p>
            <SidebarLinks></SidebarLinks>
        </div>
    )
}

/* The navigation menu links */
export function SidebarLinks() {
    return <div style={{padding: '6px 8px 6px 16px',
        textdecoration: 'none',
        fontsize: '25px',
        color: '#818181',
        display: 'block' }}>
            <a href='https://www.google.com/'>Google</a>
        </div>

/* How to make the color change when the mouse hovers over the links? */
}