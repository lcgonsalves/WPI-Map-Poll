import React from "react";
import {Link} from "react-router-dom";
import "../css/Home.css";

const Home = props => {

    return (
        <div className="home">
            <Link to="/survey">
                <div className="survey">
                    <h1>SURVEY</h1>
                </div>
            </Link>
            <Link to="/vis">
                <div className="visualization">
                    <h1>VIS</h1>
                </div>
            </Link>
        </div>
    );

};

export default Home;
