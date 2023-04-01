import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function UserInfoPage() {

  const { id } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch(`/api/users/${id}`)
      .then((response) => response.json())
      .then((data) => setUser(data));
  },[]);

  return (
    <>
      <p>{user.name}</p> 
      <p>{user.email}</p> 
      <p>{user.accountType}</p> 
      <Link to={`/users/${user._id}/edit`}>
            <button>Edit Details</button>
        </Link>
    </>
  );
}