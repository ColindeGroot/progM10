import { useSelector } from "react-redux";

import "./Display.css"

// hier word het gevonden product weergegeven
const Display = (props) => {

    const filteredCircuits = useSelector(state => { return state });
    let randomIndex
    let randomProduct

    let randomcircuit = <section className="display" key=""></section> // onze opbouw van hieronder laten weergeven in een apparte sectie
    

    // uit de array van passende circuits pakken we er telkens eentje uit met de random functie
    if (props.searchedClick=== true) {
        randomIndex = Math.floor(Math.random() * filteredCircuits.length) // length is de lengte van alle circuits die gefilterd zijn. 
        randomProduct = filteredCircuits[randomIndex]
        randomcircuit =  // de manier waarop wij het product laten zien
            <section className="display" key="">
                <h2>{randomProduct.title}</h2>
                <img className="display__img" src={randomProduct.img} alt="" />
                <figure className="display__play">Aanrader!</figure>
            </section>
    }

    return (
        <>
            {randomcircuit} 
        </>
    )
}

export default Display;