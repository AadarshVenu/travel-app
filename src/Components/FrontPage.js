import { useEffect, useState } from "react";
import axios from "axios";
import "./FrontPage.css";
import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";
import loc from "../assets/images/place.svg";

const FrontPage = (props) => {
    const [places, setPlaces] = useState([]);
    const history = useHistory();
    const imageFetcher = () => {
        axios
            .get("https://www.traveller.talrop.works/api/v1/places/")
            .then(function (response) {
                setPlaces(response.data.data);
                // console.log(response.data.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    useEffect(imageFetcher, []);

    const renderImages = () => {
        return places.map((place) => (
            <div key={place.id} onClick={() => history.push(`/${place.id}`)}>
                <img
                    src={place.image}
                    alt={place.name}
                    className="place-image"
                />
                <h2>{place.name}</h2>
                <div className="icon">
                    <img src={loc} />
                    <p> {place.location}</p>
                </div>
            </div>
        ));
    };

    return (
        <>
            <Helmet>
                <title>Places | Moke Travel</title>
            </Helmet>
            <div className="welcome">
                <h1>Welcome</h1>
                <h4 className="description">Explore the world around you</h4>               
                <div className="places">{renderImages()}</div>
            </div>
        </>
    );
};

export default FrontPage;
