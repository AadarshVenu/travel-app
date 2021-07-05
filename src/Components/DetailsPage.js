import { useEffect, useState } from "react";
import axios from "axios";
import "./FrontPage.css";
import { useParams } from 'react-router-dom'

const DetailsPage = (props) => {
    const [details, setDetails] = useState([]);
    const params = useParams();
    console.log('params',params)

    const detailsFetcher = () => {
        axios
            .get(`https://www.traveller.talrop.works/api/v1/places/view/${params.id}`)
            .then(function (response) {
                setDetails(response.data.data);
                console.log(response.data.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    useEffect(detailsFetcher, []);

    const renderDetails = (details) => {
        return (
            <div>
                <h1>{details.name}</h1>
                <p>{details.description}</p>
            </div>
        )
    };

    return (
        <div>
            {renderDetails(details)}
        </div>
    );
};

export default DetailsPage;
