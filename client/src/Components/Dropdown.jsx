import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getInfo} from '../Actions/getInfo';
// import { resetText } from '../Actions/resetText';
import styles from './dropdown.module.css'
import axios from 'axios'
import Card from './Card';

export default function Dropdown(){
    const dispatch = useDispatch()
    var [info, setInfo]= useState([])
    var [info2, setInfo2]= useState([])

    const [popUp, setPopUp]= useState(false)
    const [open, setOpen]= useState(false)
    const [busqueda, setBusqueda]= useState("")
   
    const [selection, setSelection] = useState([]);
    
    const peticion= async ()=>{
       const {data} = await axios.get("https://rickandmortyapi.com/api/character")
        setInfo(data.results);
        setInfo2(data.results);
    }

    useEffect(()=>{
        peticion()
    },[])
    //     dispatch(getInfo())
    //     console.log(info)
    // },[dispatch])
    // var info= useSelector(state=> state.allInfo)

    const handleClick=()=>{
        setOpen(!open)
    }

    function handleOnClick(item) {
        console.log(item,"EL ITEM")
        setSelection(item)
    }

    let classActive = open? styles.active  : null

    const handleClickPopup = ()=>{
        dispatch(getInfo())
        setPopUp(!popUp)
    }
    let classActivePopup = popUp? styles.active  : null

    const handleChange=(e)=>{
        let value = e.target.value
        setOpen(true)
        setBusqueda(value)
        filtrar(value)
    }

    const filtrar=arg=>{
        let rtaBusqueda= info2.filter(el=>{
            if ( el.name.toLowerCase().includes( arg.toLowerCase() ) ){
                return el
            }
        })
        setInfo(rtaBusqueda)
    }
    
    const handleClickAdd=(e)=>{
        busqueda.length>3 &&
        setInfo2( [...info2,{ name: busqueda }])
    }

return(
    <div className={styles.filtersMenu + " " + classActive}>
        <input placeholder='Ingresar busqueda'  onChange={e=>handleChange(e)} /*onKeyDown={(e) => handleKeyDown(e)}*/></input>
              <button onClick={handleClick} >🔽</button>
             
        
        <div className={styles.isClose + " " + classActivePopup }>

            <button onClick={handleClickPopup}>Agregar</button>
            
            <div className={styles.popup} >
                <p>{busqueda}</p>
                <button onClick={e=> handleClickAdd(e)}>Ok</button>
            </div>
            <hr></hr>
                <ul>
                    {
                        info?.map(el=>(
                            <label key={el.id} >
                                <button type='button' onClick={()=>handleOnClick(el)}>
                                    <span>
                                        {el.name}
                                    </span>
                                </button>
                            </label>
                        ))
                    }
                </ul>
        </div>

        {
            
            <Card id={selection.id} name={selection.name} gender={selection.gender} image={selection.image} species={selection.species} status={selection.status} />   
        }

    </div>
    )
}