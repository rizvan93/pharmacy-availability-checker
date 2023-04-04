import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function UserInfoPage() {
  const { id } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch(`/api/users/${id}`, {
      headers: {
        Authorization: ["bearer", token],
      },
    })
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <>
      <h1 className="px-10 font-bold">User Details</h1>
      <div className="flex justify-center">
        <table>
          <tr>
            <th className="pr-2 py-2">Name</th>
            <td>{user.name}</td>
          </tr>
          <tr>
            <th className="pr-2 py-2">User ID</th>
            <td>{user.userId}</td>
          </tr>
          <tr>
            <th className="pr-5 py-2">Account Type</th>
            <td>{user.accountType}</td>
          </tr>
        </table>
      </div>
      <div className="flex justify-center py-5">
        <Link to={`/users/${user._id}/edit`}>
          <button className="bg-wAqua hover:bg-wAqua-50 text-white py-2 px-4">
            Edit Details
          </button>
        </Link>
      </div>
    </>
  );
}
