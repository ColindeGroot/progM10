/* helper that loads images from data object and set them in figures */
let iterator = 1;
let classToBeAdded = "";
function getToBerenderedFigures(drinks) {
   let drinksToBeRendered = drinks.map(drink => {
        switch (iterator) {
            case 1:
                classToBeAdded = "galleryCard__figure galleryCard__figure--big";
                break;
            case 2:
                classToBeAdded = "galleryCard__figure galleryCard__figure--middle";
                break;
            case 3:
                classToBeAdded = "galleryCard__figure galleryCard__figure--middle";
                break;
            default:
                classToBeAdded = "galleryCard__figure galleryCard__figure--small";
                break;
        }
        iterator += 1;

        return (
            <figure key={drink.image} className={classToBeAdded}>
                <img className="galleryCard__img" src={drink.image} alt={drink.alt} />
            </figure>
        );
    });
    iterator = 1;
    return drinksToBeRendered;
}

export default getToBerenderedFigures
