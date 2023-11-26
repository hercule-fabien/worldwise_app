import {Link} from "react-router-dom";

function Homepage() {
    return (
        <>
            <h1>WorldWise</h1>
            <Link to="/app">Go to the app</Link>
        </>

    );
}

export default Homepage;