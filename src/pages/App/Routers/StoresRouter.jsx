import { Routes, Route } from "react-router-dom";
import StoresPage from "../../Stores/Index/StoresPage";
import CreateStorePage from "../../Stores/Create/CreateStorePage";
import EditStorePage from "../../Stores/Edit/EditStorePage";

const StoresRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<StoresPage />} />
      <Route path="/new" element={<CreateStorePage />} />
      <Route path="/:id/edit" element={<EditStorePage />} />
    </Routes>
  );
};

export default StoresRouter;
