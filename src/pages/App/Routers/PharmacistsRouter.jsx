import { Route, Routes } from "react-router";
import CheckIn from "../../Pharma/CheckIn/CheckIn";
import CheckOut from "../../Pharma/CheckOut/CheckOut";

const PharmacistsRouter = ({ user }) => {
  if (user?.accountType === "Pharmacist") {
    return (
      <Routes>
        <Route path="/:id" element={<CheckIn />} />
        <Route path="/:id/checkout" element={<CheckOut />} />
      </Routes>
    );
  } else {
    return <h1>Unauthorized</h1>;
  }
};

export default PharmacistsRouter;
