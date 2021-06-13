const Careers = () => {
    return(
        <div>
            <div className="careers">
                <h2>Careers</h2>

                <div className="culture">
                    <h3>Culture</h3>
                    <p>Here at Doctalk we believe that supporting the passions and opinions of employees fosters a more diverse and inclusive workplace. Work life integration is a practice that has formed organically throughout the organization, but has since become a huge part of who we are.</p>
                    <p>Doctalk is a place where opposing ideas are not only welcomed but encouraged. We strive to utilize the individual strengths of each team member, but when it comes to critical projects we operate with all hands on deck. The fast-paced work environment at Doctalk is accompanied by out solution-oriented and collaborative culture, where everyone's opinions are incredibly valued.</p>
                </div>

                <div className="company">
                    <h3>Company</h3>
                    <p>After years of working in the medical industry and being frustrated by the lack of connection amongst physicians, and the comprehensiveness of medical data, our founder embarked on a journey to leverage technology to mend the gap between knowledge users and knowledge generators. At Doctalk, we believe that improving patient outcomes starts with a connected network of medical professionals.</p>
                    <p>Doctalk is a shared digital space of collaborative applications that physicians can trust. We are a Toronto-based company with a team that works virtually to explore new opportunities that create greater value for the medical community.</p>
                </div>
            </div>

            <div className="current-openings">
                <h2>Current Openings</h2>
                <a href="#" className="job-position">Senior Full Stack Developer</a>
                <a href="#" className="job-position">Customer Success Lead</a>
                <p>*We are always accepting applications from talented indiciduals who believe they would be an asset to our team. If you are passionate about working with us, send your resume to <a href="mailto:careers@doctalk.com" className="mail-link">careers@doctalk.com</a> and we will reach out when we have a role that's right for you.</p>
            </div>
        </div>
    );
};

export default Careers;