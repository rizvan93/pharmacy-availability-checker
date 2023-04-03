import { Route, Routes } from "react-router";
import MedicinesPage from "../../Medicine/Index/MedicinesPage";
import AddMedicinePage from "../../Medicine/Create/AddMedicinePage";
import EditMedicineForm from "../../Medicine/Edit/EditMedicineForm";

const MedicinesRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MedicinesPage />} />
      <Route path="/new" element={<AddMedicinePage />} />
      <Route path="/:id/edit" element={<EditMedicineForm />} />
    </Routes>
  );
};

export default MedicinesRouter;
