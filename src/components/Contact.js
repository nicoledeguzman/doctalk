const Contact = () => {
    return(
        <div>
            <div className="contact-us">
                <div className="heading-and-desc">
                    <h2>Contact Us</h2>
                    <p>Have a general question or inquiry about the platform? Send us an email and one of our customer service representatives will be in contact with you within 3-5 business days.</p>
                </div>

                <p>Submit your inquiry to <a href="mailto:info@doctalk.com" className="mail-link">info@doctalk.com</a></p>

                <form>
                    <div className="form-halves">
                        <label htmlFor="first-name" class="sr-only">First Name</label>
                        <input type="text" id="name" name="name" placeholder="First Name"/>

                        <label htmlFor="last-name" class="sr-only">Last Name</label>
                        <input type="text" id="name" name="name" placeholder="Last Name"/>

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

                    <label htmlFor="email" className="sr-only">Email</label>
                    <input type="email" id="email" name="email" placeholder="Email Address"/>

                    <textarea name="comment" id="comment" cols="70" rows="10" placeholder="Write your message (max. 500 words)" required/>
                    <button className="submit">submit</button>
                </form>
            </div>

            <div className="locations">
                <div className="heading-and-desc">
                    <h2>Locations</h2>
                    <p>Just like our platform, we operate globally. Our main headquarters is based in Toronto, Canada, and we have locations spread across the world.</p>
                </div>

                <div className="hq-location">
                    <p className="bold">Toronto, Canada</p>
                    <p>10 Dundas Street East, 6th Floor, Toronto, ON, M5B 2G9</p>
                </div>
                <div className="hq-location">
                    <p className="bold">New York, United States of America</p>
                    <p>26 Broadway, 8th Floor, New York, New York, 10004</p>
                </div>
                <div className="hq-location">
                    <p className="bold">Sydney, Australia</p>
                    <p>20-40 Meagher St, Chippendale NSW 2008, Australia</p>
                </div>
                <div className="hq-location">
                    <p className="bold">Düsseldorf, Germany</p>
                    <p>Neuer Zollhof 2-6, 40221 Düsseldorf, Germany</p>
                </div>
                <div className="hq-location">
                    <p className="bold">São Paulo, Brazil</p>
                    <p>Alameda Santos, 200 - Bela Vista, São Paulo - SP, 04003-040, Brazil</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;