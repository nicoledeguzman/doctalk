// import AppGallery from './AppGallery.js';
// import { useState, useEffect } from 'react';

const MedTraineeApps = () => {

    // const [ traineeApp, setTraineeApp ] = useState([])

    // useEffect( () => {
    //     // API call here
    //     }
    //   }).then(res => {
    //     setTraineeApp(source of application info);
    //   });
    // }, [] );

    return(
        <div>
            <h2><span className="gray-out">Medical Trainee</span> Applications</h2>
            <p>Read about the many different applications available for medical trainees. Whether you're a resident or a fellow, out intuitive applications carry out our mission of making the lives of all medical professionals that much easier.</p>
            {/* <div>
                !!! if using API, components/AppGallery.js can be changed to better suit the type of information in the API !!!
                {
                    traineeApp.map( (displayApp) => {
                        return(
                            <AppGallery 
                                key={displayApp.x}
                                image={displayApp.x} 
                                imagedesc={displayApp.x}
                                applogo={displayApp.x}
                                title={displayApp.x}
                                description={displayApp.x}
                            />
                        )
                    })
                }
            </div> */}

            {/* below is template only */}
            <div className="app-gallery">
                <img src="" alt="" />
                <div className="logo-and-name">
                    <img src="" alt=""/>
                    <h4>Application Name</h4>
                </div>
                <p>Lorem ipsum dolor sit...</p>
            </div>
        </div>
    );
};

export default MedTraineeApps;