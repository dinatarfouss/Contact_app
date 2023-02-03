import React, { useState } from "react";

function EditList(props){
    const [name,setName] = useState(props.elmEdited.name);
    const [age,setAge] = useState(props.elmEdited.age);
    const [gender,setGender] = useState(props.elmEdited.gender);
    const Modifier = ()=>{
        props.setEditClicked(false);
        props.infos.map(info=> props.elmEdited === info && (info.name = name, info.age = age, info.gender = gender))
    }
    return(
        props.infos.map(elm => elm === props.elmEdited && 
                    <tr>
                        <td><input className="form-control bg-light" type="text" placeholder="write new name" onChange={(e)=>setName(e.target.value)} value={name} /></td>
                        <td><input className="form-control bg-light" type="text" placeholder="write new age"  onChange={(e)=>setAge(e.target.value)} value={age}/></td>
                        <td><input className="form-control bg-light" type="text" placeholder="write new gender" onChange={(e)=>setGender(e.target.value)} value={gender}/></td>
                        <td><button className="btn btn-light bg-light" onClick={Modifier}>Edit</button></td>
                   </tr> 
    )
    )
}
export default EditList;