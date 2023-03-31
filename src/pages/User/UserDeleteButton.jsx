export default function UserDeleteButton({ id, delUser }) {
    const handleDelete = async () => {
      const response = await fetch(`/api/users/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      await response.json();
      delUser(id);
    };
  
    return <button onClick={handleDelete}>Delete</button>;
  }