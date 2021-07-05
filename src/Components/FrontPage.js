import { useEffect, useState } from "react";
import axios from "axios";
import "./FrontPage.css";
import { useHistory } from "react-router-dom";


const FrontPage = (props) => {
    const [places, setPlaces] = useState([]);
    const history = useHistory();
    const imageFetcher = () => {
        axios
            .get("https://www.traveller.talrop.works/api/v1/places/")
            .then(function (response) {
                setPlaces(response.data.data);
                console.log(response.data.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    useEffect(imageFetcher, []);

    const renderImages = () => {
        return places.map((place) => (
            <div key={place.id} onClick={()=>history.push(`/${place.id}`)}>
                <img src={place.image} alt={place.name} />
                <h2>{place.name}</h2>
                <p>{place.location}</p>
            </div>
        ));
    };

    return (
        <div className="welcome">
            <h1>Welcome</h1>
            <p>Explore the world around you</p>
            <div className="places">{renderImages()}</div>
        </div>
    );
};

export default FrontPage;
