export const filterCircuitsByTitle = (nameToBeSearched, toBeSearchedArray) =>{
    return toBeSearchedArray.filter(circuit => {
        if(circuit.title.toUpperCase().indexOf(nameToBeSearched.toUpperCase()) !== -1 ){ 
            //als de text (ongeacht hood/kleine letters) gelijk is aan de circuit naam geeft het het circuit terug
            return circuit;
        }
    });
}

export const filterCircuitsByPlatform = (platformToBeSearched, toBeSearchedArray) => {
    return toBeSearchedArray.filter(circuit => {
        let found = false; //standaard niks gevonden zodat er geen product opkomt zonder te zoeken
        circuit.platforms.forEach(platform => {
            if(platform.toUpperCase() === platformToBeSearched.toUpperCase()){
                found = true;
            }
            // vrijwel hetzelfde als de title functie
        });
        if(found === true){
            return circuit; // als er wel een circuit gevonden is geven we deze terug
        }
    } );
}

