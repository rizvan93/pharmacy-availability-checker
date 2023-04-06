import { Route, Routes } from "react-router";
import CheckIn from "../../Pharma/CheckIn/CheckIn";
// import CheckOut from "../../Pharma/CheckOut/CheckOut";
import EditDetailsPage from "../../Pharma/Edit/EditDetailsPage";

const PharmacistsRouter = ({ user }) => {
  if (user?.accountType === "Pharmacist") {
    return (
      <Routes>
        <Route path="/:id" element={<CheckIn />} />
        {/* <Route path="/:id/checkout" element={<CheckOut />} /> */}
        <Route path="/:id/edit" element={<EditDetailsPage />} />
    </Routes>
    );
  } else {
    return <h1>Unauthorized</h1>;
  }
};

export default PharmacistsRouter;
