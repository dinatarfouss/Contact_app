import React, { useRef, useState } from "react";
import AddToList from "./AddToList";
import "./styl.css";

function App(){
    const [searchName,setSearchName] = useState("");
    const [searching,setSearching] = useState(false);

    const [name,setName] = useState("");
    const [age,setAge] = useState("");
    const [gender,setGender] = useState("");
    const [infos,setInfos] = useState([])
    const nameRef = useRef("");
    const ageref = useRef("");
    const genderref = useRef("");
    const ajouter = (e)=>{
        e.preventDefault()
        setInfos([...infos,{name: name, age: age, gender: gender}]);
        e.target.elements.FullName.value = "";  // Pour vide  input (name) apres ajoutation d'un elm
        ageref.current.value = "";              // Pour vide  input (age) apres ajoutation d'un elm
        genderref.current.value = "";           // Pour vide  input (gender) apres ajoutation d'un elm
        setSearching(false)
    }


    const Recherche =()=>{
        setSearching(true);
        document.getElementsByClassName("th-Spcial")[0].remove();
       
    }

    
    return(
        <>
        <div className="container">
            <form className="d-flex" onSubmit={(e)=>ajouter(e)}>
                <input className="form-control m-4" type="text" name="FullName" placeholder="Full Name" onChange={(e)=>setName(e.target.value)} ref={nameRef}/>
                <input className="form-control m-4" type="text" name="Age" placeholder="Numero" onChange={(e)=>setAge(e.target.value)} ref={ageref}/>
                <input className="form-control m-4" type="text" name="Gender" placeholder="Ville" onChange={(e)=>setGender(e.target.value)} ref={genderref}/>
                <button className="btn btn-danger m-4" type="submit">Add</button>
            </form>
            <div className="divsearch d-flex justify-content-center bg-dark">
                <input className="form-control m-4 w-50" type="text" placeholder="Chercher par ville" onChange={(e)=>setSearchName(e.target.value)}/>
                <button className="btn btn-danger m-4" onClick={Recherche}>Search</button>
            </div>
            <table className="table table-bordered mt-5 bg-danger text-light">
                <tr>
                    <th>Full Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th className="text-center th-Spcial" colSpan="2">Actions</th>
                </tr>
                {searching === true ?  infos.map( info => searchName === info.gender && <tr>
                                                                                    <td>{info.name}</td>
                                                                                    <td>{info.age}</td>
                                                                                    <td>{info.gender}</td>
                                                                                   </tr> 
                                                                                    ) :<AddToList infos = {infos} setInfos = {setInfos}/>   }
                
            </table>
        </div>
        </>
    )
}

export default App;