import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import location from "../assets/images/place.svg";
import "./DetailsPage.css";

const DetailsPage = (props) => {
    const [details, setDetails] = useState([]);
    const params = useParams();

    const detailsFetcher = () => {
        axios
            .get(
                `https://www.traveller.talrop.works/api/v1/places/view/${params.id}`
            )
            .then(function (response) {
                setDetails(response.data.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    useEffect(detailsFetcher, [params.id]);

    const renderDetails = (details) => {
        const gallery = details.gallery ? details.gallery : [];
        return (
            <div>
                <Helmet>
                    <title>{`${details.name} | Moke Travel`}</title>
                </Helmet>
                <div className="details">
                    <h1>{details.name}</h1>
                    <div className="location">
                        <small>{details.category_name}</small>
                        <img src={location} alt="location" />
                        {details.location}
                    </div>
                    <div className="gallery">
                        <img
                            src={details.image}
                            alt={details.name}
                            className="main-image"
                        />
                    <div className="sub-gallery">
                        {gallery.map(image => (
                            <img
                            key={image.id}
                            src={`${image.image}`}
                            alt={image.id}
                            className="sub-gallery-img"
                        />
                        ))}
                    </div>
                    </div>

                    <h2>Place Details</h2>
                    <p>{details.description}</p>
                </div>
            </div>
        );
    };

    return <div>{renderDetails(details)}</div>;
};

export default DetailsPage;
