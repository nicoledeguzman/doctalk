const AppIdeas = () => {
    return(
        <div className="app-ideas">
            <div className="heading-and-desc">
                <h2>Application Ideas</h2>
                <p>We are always looking to expand our platform by increasing our repertoire of intruitive applications. Have an idea for an application that can make your professional medical experience better? Let us know below.</p>
            </div>

            <p>Submit your application idea to <a href="mailto:app-idea@doctalk.com" className="mail-link">app-idea@doctalk.com</a></p>

            <form>
                <label htmlFor="app-type" className="sr-only">Application Type</label>
                <select name="app-type" id="schemeMode">
                    <option>Application Type</option>
                    <option disabled>   </option>
                    <option value="physician-app">Physician Application</option>
                    <option value="organization-app">Organization Application</option>
                </select>

                <label htmlFor="email" className="sr-only">Email</label>
                <input type="email" id="email" name="email" placeholder="Email"/>

                <textarea name="comment" id="comment" cols="70" rows="10" placeholder="Write your message (max. 500 words)" required/>
                <button className="submit">submit</button>
            </form>
        </div>
    );
};

export default AppIdeas;