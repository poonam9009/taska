import React from 'react';
import './Listitem.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
function Listitem(props){
    const items = props.items
    const itemlist = items.map(item=> {
        return (
            <div className = "list" key = {item.key}>
                <p>
                    <input type ="text"
                    id = {item.key}
                    value = {item.text}
                    onChange =  {(e)=>{
                        props.setUpdate(e.target.value,item.key)
                    }}
                    />
                <span> 
                <FontAwesomeIcon className="faicons" onClick={() => {
                props.deleteItem(item.key)
                }} icon="trash" />
                </span>
                </p>
            </div>
        )
    })
    return(
        <div className = "listitem">
            {itemlist}
        </div>
    )
}

export default Listitem;