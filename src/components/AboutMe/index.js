import React from "react";
import Avtar from '../../assets/Avtar.png'

function AboutMe () {
    
    return(
        <section>
            <div className="row justify-content-center">
                <div className="m-4 card-about card-header col-3">
                    <p className="card-body mt-4">
                        Professional with experience in medical, courageous enough to follow the passion and get my feet into full stack web development, the whole new world to me, with self-education and following after boot-camp in the same. Always curious & willing to learn, motivated to participate in problem solving and improvements. Ready to be trained for new tasks to tackle down challenges! 
                        <br/>
                        <br/>
                    </p>
                    <h5 className="m-2">Experties:</h5>
                    JavaScripts, HTML, CSS, jQuery, Bootstrap, Node.js, MySQL, MongoDB, Express.js, React.js
                </div>
            <div className="m-4 card-about card-header col-3">
                <img src={Avtar} className="avtar mt-4" alt="avtar"></img>
            </div>
        </div>
        </section>
    )
}

export default AboutMe;