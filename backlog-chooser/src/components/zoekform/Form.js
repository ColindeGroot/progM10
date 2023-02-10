import "./Form.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { filterCircuitsByTitle, filterCircuitsByPlatform } from "../../helpers/filterCircuits";
import { circuits } from "../../data/circuits";

const Form = (props) => {
    const [inputs, setInputs] = useState([ //aanmaken van de input filters en meegeven waar op gefilterd gaat worden
        {
            id: "naam circuit",
            value: "",
            label: "naam circuit", // filteren op label
            filter: filterCircuitsByTitle
        },
        {
            id: "in de buurt van",
            value: "",
            label: "in de buurt van",
            filter: filterCircuitsByPlatform
        },
    ]);

    let dispatch = useDispatch();

    const onInputChanged = (event) => {
        let copy = [...inputs];
        copy.map(input => {
            if (input.id === event.target.id) {
                input.value = event.target.value;
            }
        });
        setInputs(copy);
    }

    const inputsToBeRendered = inputs.map(objectFromStateArray => { // 
        return (
        <div key={objectFromStateArray.id} className="form__wrapper">
            <label className="form__label" htmlFor={objectFromStateArray.id}>{objectFromStateArray.label}</label>
            <input className="form__input" onChange={onInputChanged} id={objectFromStateArray.id} type="text" value={objectFromStateArray.value} />
        </div>);
    })

    const submit = (event) => { // maken van een submit functie die word aangeroepenals wij op de knop drukken
        event.preventDefault();
        let result = circuits;
        inputs.forEach( input => {
            result = input.filter(input.value, result); // resultaat van de input
        });
        props.searchButtonClicked()
        dispatch({
            type: "FILTEREDCIRCUIT",
            payload: result
        })
    }



    return ( // inputs en search knop weergeven
        <form className="form" onSubmit={submit}>
            <div className="form__inputsWrapper">
            {inputsToBeRendered} 
            </div>         
            <button className="form__search" onClick={submit}>Zoeken</button>
        </form>
    )
}

export default Form;