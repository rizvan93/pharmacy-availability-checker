import UserCreateForm from "./UserCreateForm";

export default function CreateUserPage() {
  return (
    <>
      <div className="mt-20">
        <h1 className="px-10 font-bold">New User</h1>
        <UserCreateForm />
      </div>
    </>
  );
}
