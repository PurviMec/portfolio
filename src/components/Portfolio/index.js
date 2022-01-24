import React from "react";
//import Container from 'react-bootstrap/Container';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col'
//import Card from 'react-bootstrap/Card'
import photo from '../../assets/run-buddy.jpg';
import photo2 from '../../assets/medIsearch.jpg';
import photo3 from '../../assets/lastMinutePlanner.jpg';
import photo4 from '../../assets/readme-generator.jpg';
import photo5 from '../../assets/weather-forcast.jpg';
import photo6 from '../../assets/budget-traker.jpg';


function Portfolio () {
    // const [photos] = useState([
    //     {
    //         name: 'medIsearch',
    //         description: 'MEDiSEARCH is a dynamic hospital management tool that provides an efficient way to manage organization-related and medical-related information within ONE app. This application is for internal use only.'
    //     },
    //     {
    //         name: 'Run-Buddy',
    //         description: 'App for runner, who wish to join our fitness classes provided by certified instructors.'
    //     },
    //     {
    //         name: 'Weather-Forcast-App',
    //         description: "This app provides you different city's weather forcast"
    //     },
    //     {
    //         name: 'Last-Minute-Planner',
    //         description: "This app guides people to make plans at last minute with full weather forcast of that day."
    //     },
    //     {
    //         name: 'ReadMe-Generator',
    //         description: "As a developer I develop app to create readMe file for convinience."
    //     },
    //     {
    //         name: 'Budget-Tracker-App',
    //         description: "This app's purpose is to save time while making monthly budge."
    //     }

    // ])
    return(
        <div className="m-5">
            
                <div className="row m-2 justify-content-md-center">
                    <div className="col-lg-3 card ">
                        <img src={photo2} alt="Medisearch app" className=" img" />
                    </div>
                    <div className="col-lg-3 card ">
                        <img src={photo} alt="Run buddy" className=" img" />
                    </div>
                    <div className="col-lg-3 card ">
                        <img src={photo5} alt="Weather forcast app" className=" img" />
                    </div>
                </div>
                <div className="row m-2 justify-content-md-center">
                    <div className="col-lg-3 card ">
                        <img src={photo3} alt="Last-Minute-Planner" className=" img" />
                    </div>
                    <div className="col-lg-3 card  ">
                        <img src={photo4} alt="ReadMe-Generator" className=" img" />
                    </div>
                    <div className="col-lg-3 card ">
                        <img src={photo6} alt="Budget-Tracker-App" className=" img" />
                    </div>
                </div>
           
        </div>
    )
}

export default Portfolio;