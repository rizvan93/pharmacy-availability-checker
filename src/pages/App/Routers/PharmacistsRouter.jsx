import { Route, Routes } from "react-router";
import CheckIn from "../../Pharma/CheckIn/CheckIn";
import CheckOut from "../../Pharma/CheckOut/CheckOut";

const PharmacistsRouter = () => {
  return (
    <Routes>
      <Route path="/:id" element={<CheckIn />} />
      <Route path="/:id/checkout" element={<CheckOut />} />
    </Routes>
  );
};

export default PharmacistsRouter;
