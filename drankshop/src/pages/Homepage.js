import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FilterBar from "../components/FilterBar/FilterBar";
import GalleryCard from "../components/GalleryCard/GalleryCard";
import itemsFromDataFile from "../data/items";
const HomePage = (props) => {

    const [items, setItems] = useState([]);
    const [defaultItems, setDefaultItems] = useState([]);

    const onGalleryCardClicked = (collection) => {
       props.onGalleryCardClicked(collection);
    }

    useEffect(() => {
        /* iterator for which card is which */
        let i = 0;
        let types = ["whiskey", "wine", "pizza"];
        const galleryCardsToBeRendered = itemsFromDataFile.map(collection => {
            let temp = (
                <Link key={types[i]} type={types[i]} onClick={() => onGalleryCardClicked(collection)} to={`/product/${types[i]}`}>
                    <GalleryCard  items={collection} />
                </Link>);
             i = i + 1;
            return temp;
        });

        setItems(galleryCardsToBeRendered);
        setDefaultItems(galleryCardsToBeRendered);
    }, []);

    const onFilter = (typeToBeFiltered) => {
        const copy = [...defaultItems];
        const cardsToBeRendered = copy.filter(card => {
            if (card.props.type === typeToBeFiltered) {
                console.log(card);
                return card;
            }
        });
        setItems([cardsToBeRendered]);
    }

    return (
        <>
            <FilterBar onFilter={onFilter}></FilterBar>
            {items}
        </>
    );
}

export default HomePage;
