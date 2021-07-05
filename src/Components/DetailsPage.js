import { useEffect, useState } from "react";
import axios from "axios";
import "./FrontPage.css";

const DetailsPage = () => {
    const [details, setDetails] = useState([]);

    const detailsFetcher = () => {
        axios
            .get("https://www.traveller.talrop.works/api/v1/places/view/38/")
            .then(function (response) {
                setDetails(response.data.data);
                console.log(response.data.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    useEffect(detailsFetcher, []);

    const renderDetails = () => {
        return details.map((detail) => console.log(detail.name));
    };

    return (
        <div>
            {renderDetails()}
            hi
        </div>
    );
};

export default DetailsPage;
