import React, { useState } from "react";
import EditList from "./EditList";

function AddToList(props){
    const [EditClicked,setEditClicked] = useState(false);
    const [elmEdited,setElmEdited] = useState("");
    const Modifier = (elm)=>{
        setEditClicked(true);
        setElmEdited(elm)
    }
    const Supprimer = (el)=>{
        const newinfos =  props.infos.filter(info => info !== el);
        props.setInfos(newinfos)
     }
    return(
        
        EditClicked === false ?  
        props.infos.map(elm=> 
                        <tr>
                                <td>{elm.name}</td>
                                <td>{elm.age}</td>
                                <td>{elm.gender}</td>
                                <td><button className="btn btn-light bg-light" onClick={()=>Modifier(elm)}>Edit</button></td>
                                <td><button className="btn btn-light bg-light" onClick={()=>Supprimer(elm)}>Delete</button></td>   
                        </tr>
                    ) : <EditList infos = {props.infos} elmEdited = {elmEdited} setEditClicked = {setEditClicked} setInfos = {props.setInfos}/>
                
    )
}
export default AddToList