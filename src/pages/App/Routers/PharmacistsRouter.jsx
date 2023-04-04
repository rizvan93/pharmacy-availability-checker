import { Route, Routes } from "react-router";
import CheckIn from "../../Pharma/CheckIn/CheckIn";
import CheckOut from "../../Pharma/CheckOut/CheckOut";
import EditDetailsPage from "../../Pharma/Edit/EditDetailsPage";

const PharmacistsRouter = () => {
  return (
    <Routes>
      <Route path="/:id" element={<CheckIn />} />
      <Route path="/:id/checkout" element={<CheckOut />} />
      <Route path="/:id/edit" element={<EditDetailsPage />} />
    </Routes>
  );
};

export default PharmacistsRouter;
