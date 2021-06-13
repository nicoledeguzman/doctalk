// import AppGallery from './AppGallery.js';
// import { useState, useEffect } from 'react';

const OrganizationApps = () => {

    // const [ orgApp, setOrgApp ] = useState([])

    // useEffect( () => {
    //     // API call here
    //     }
    //   }).then(res => {
    //     setOrgApp(source of application info);
    //   });
    // }, [] );

    return(
        <div>
            <h2><span className="gray-out">Organization</span> Applications</h2>
            <p>Read about the many different applications available for organization users. No matter the specialty, our intuitive applications carry out our mission of makinng the lives of all medical professionals that much easier.</p>
            {/* <div>
                !!! if using API, components/AppGallery.js can be changed to better suit the type of information in the API !!!
                {
                    orgApp.map( (displayApp) => {
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

export default OrganizationApps;