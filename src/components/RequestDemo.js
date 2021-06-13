const RequestDemo = () => {
    return(
        <div className="request-demo">
            <div className="heading-and-desc">
                <h2>Request a Demo</h2>
                <p>Interested in a demo of the platform? Connect with our sales team and have them walk you through the platform and the many applications that can be found on it.</p>
            </div>

            <p>Submit your request to <a href="mailto:demo@doctalk.com" className="mail-link">demo@doctalk.com</a></p>

            <form>
                <div className="form-halves">
                    <label htmlFor="first-name" class="sr-only">First Name</label>
                    <input type="text" id="first-name" name="first-name" placeholder="First Name"/>

                    <label htmlFor="last-name" class="sr-only">Last Name</label>
                    <input type="text" id="last-name" name="last-name" placeholder="Last Name"/>
                </div>

                <label htmlFor="company" class="sr-only">Company</label>
                <input type="text" id="company" name="company" placeholder="Company"/>

                <label htmlFor="email" className="sr-only">Email</label>
                <input type="email" id="email" name="email" placeholder="Email Address"/>

                <div className="form-halves">
                    <label htmlFor="country" className="sr-only">Country</label>
                    <select name="country" id="schemeMode">
                        <option>Country</option>
                        <option disabled>   </option>
                        <option value="canada">Canada</option>
                        <option value="usa">United States of America</option>
                    </select>

                    <label htmlFor="city" className="sr-only">City</label>
                    <select name="city" id="schemeMode">
                        <option>City</option>
                        <option disabled>   </option>
                        <option value="toronto">Toronto</option>
                        <option value="newyork">New York</option>
                    </select>
                </div>

                <textarea name="comment" id="comment" cols="70" rows="10" placeholder="Write your message (max. 500 words)" required/>
                <button className="submit">submit</button>
            </form>
        </div>
    );
};

export default RequestDemo;