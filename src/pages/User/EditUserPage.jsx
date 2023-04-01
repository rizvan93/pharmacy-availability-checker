import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserEditForm from "./UserEditForm";

export default function EditStorePage () {
  const { id } = useParams();
  const [users, setUsers] = useState();

  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch(`/api/users/${id}`);
      const user = await response.json();
      setUsers(user);
    };
    getUsers();
  }, [id]);

  return (
    <>
      <h1>Edit Information</h1>
      <UserEditForm />
    </>
  );
};