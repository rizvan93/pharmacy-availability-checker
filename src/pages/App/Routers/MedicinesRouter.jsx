import { Route, Routes } from "react-router";
import MedicinesPage from "../../Medicine/Index/MedicinesPage";
import AddMedicinePage from "../../Medicine/Create/AddMedicinePage";
import EditMedicineForm from "../../Medicine/Edit/EditMedicineForm";

const MedicinesRouter = ({ user }) => {
  if (user?.accountType === "Admin") {
    return (
      <Routes>
        <Route path="/" element={<MedicinesPage />} />
        <Route path="/new" element={<AddMedicinePage />} />
        <Route path="/:id/edit" element={<EditMedicineForm />} />
      </Routes>
    );
  } else {
    return <h1>Unauthorized</h1>;
  }
};

export default MedicinesRouter;
