import { Routes, Route } from "react-router-dom";
import UserPage from "../../User/UserPage";
import CreateUserPage from "../../User/CreateUserPage";
import UserInfoPage from "../../User/UserInfoPage";
import EditUserPage from "../../User/EditUserPage";

const UsersRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<UserPage />} />
      <Route path="/new" element={<CreateUserPage />} />
      <Route path="/:id" element={<UserInfoPage />} />
      <Route path="/:id/edit" element={<EditUserPage />} />
    </Routes>
  );
};

export default UsersRouter;
