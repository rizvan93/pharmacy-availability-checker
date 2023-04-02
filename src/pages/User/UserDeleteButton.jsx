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
  
    return <button onClick={handleDelete} className="bg-wRed hover:bg-[#fca5a5] text-white px-4 rounded-full">Delete</button>;
  }