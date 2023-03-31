import { Link } from "react-router-dom";

export default function UserPage () {

    return (
        <>
        <h1>User</h1>
        <Link to="/users/new"><button>Add New User</button></Link>
       
        </>
    );
};