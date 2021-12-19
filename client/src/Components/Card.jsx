import React, { useState } from 'react'

export default function Card({id, name=null, gender=null, image=null, status=null, species}) {
    let[data, setData]=useState({})

    const handleCheck=(e)=>{
        let value= e.target.value
        // console.log(e.target,"target")
        if (e.target.checked){
            setData({
                ...data, 
                [e.target.name]: value 
            })
        }
        //  console.log(data,"data")
        else{     
            Object.filter = (mainObject, filterFunction)=>
            Object.keys(mainObject)
                      .filter( (ObjectKey)=>filterFunction(mainObject[ObjectKey]))
                      .reduce( (result, ObjectKey)=> ( result[ObjectKey] = mainObject[ObjectKey], result ), {} );        
        
           setData( Object.filter(data, (el)=> el !== value ) )
        //    console.log(data,"data")
        }
    }
    return (
        <div>
            <div>
            <input onChange={e=> handleCheck(e)}
                    type="checkbox"
                    name="name"
                    value={name}
                    />Nombre
                <h2>{data.name}</h2>
            <input onChange={e=> handleCheck(e)}
                type="checkbox"
                name="image"
                value={image}
                />Imagen
                <img src={data.image} alt=""/>
            </div>

            <div>
                <span>
                <input onChange={e=> handleCheck(e)}
                    type="checkbox"
                    name="gender"
                    value={gender}
                    />Gender
                    <p>{data.gender}</p>
                </span>

                <span>
                <input onChange={e=> handleCheck(e)}
                    type="checkbox"
                    name="status"
                    value={status}
                    />Status
                    <p>{data.status}</p>    
                </span>

                <span>
                <input onChange={e=> handleCheck(e)}
                    type="checkbox"
                    name="species"
                    value={species}
                    />Species
                    <p>{data.species}</p>
                </span>
            </div>

        </div>
    )
}
