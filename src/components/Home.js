import {Link} from 'react-router-dom';

const Home = () => {

    const submitChange = (e) => {
        e.preventDefault();
    }

    return(
        <div>
            <p><span>A space for physicians</span> to collaborate with each other and organizations</p>

            <form onSubmit={submitChange}>
                <label htmlFor="email" className="sr-only">Please enter your email</label>
                <input type="email" id="email" required />

                <button type="submit">Register</button>
            </form>

            <Link to="/log-in">Already have an account?</Link>
        </div>
    );
;}

export default Home;