import Form from "../zoekform/Form";
import Display from "../randomdisplay/Display";
import "./Backlog.css"
import {useState} from "react"


const Backlog = () => {

     const [searchedClick, setSearchedclick] = useState(false) // standaard de click functie op false zetten

     const searchButtonClicked = () =>{
        setSearchedclick(true)
     } // pas de searchedclick functie op true zetten wanneer we op de knop drukken
 


  return (  // de display en fomrulier weergeven op apparte pagina zodat het beter gesorteerd is
    <section className="backlog__wrap">
      <Form searchButtonClicked={searchButtonClicked}/>
      <Display searchedClick={searchedClick} />
    </section>
  );
}

export default Backlog;
