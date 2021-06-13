const Support = () => {
    return(
        <div className="support">
            <div className="heading-and-desc">
                <h2>Support</h2>
                <p>Do you require assistance with any of the platform features or applications? Submit a support ticket and one of out customer service representatives will respond to you in 3-5 business days.</p>
            </div>
            
            <p>Submit your inquiry to <a href="mailto:support@doctalk.com" className="mail-link">support@doctalk.com</a></p>
            
            <form>
                <label htmlFor="name" class="sr-only">Name</label>
                <input type="text" id="name" name="name" placeholder="Name"/>

                <label htmlFor="email" className="sr-only">Email</label>
                <input type="email" id="email" name="email" placeholder="Email"/>

                <textarea name="comment" id="comment" cols="70" rows="10" placeholder="Write your message (max. 500 words)" required/>
                <button className="submit">submit</button>
            </form>
        </div>
    );
};

export default Support;