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
    <div className="min-w-full">
      <h1 className="font-bold">User Details</h1>
      <div className="flex justify-center">
        <table>
          <tbody>
            <tr>
              <th className="py-2 pr-2">Name</th>
              <td>{user.name}</td>
            </tr>
            <tr>
              <th className="py-2 pr-2">User ID</th>
              <td>{user.userId}</td>
            </tr>
            <tr>
              <th className="py-2 pr-5">Account Type</th>
              <td>{user.accountType}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex justify-center py-5">
        <Link to={`/users/${user._id}/edit`}>
          <button className="bg-wAqua px-4 py-2 text-white hover:bg-wAqua-50">
            Edit Details
          </button>
        </Link>
      </div>
    </div>
  );
}
