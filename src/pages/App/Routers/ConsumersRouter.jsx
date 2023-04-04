import { Route, Routes } from "react-router";
import ConsumersMainPage from "../../Consumers/Index/ConsumersMainPage";
import MedSearchPage from "../../Consumers/MedSearch/MedSearchPage";
import PharmAvailabilityPage from "../../Consumers/PharmAvailability/PharmAvailabilityPage";
import ConsumerSignUpPage from "../../Consumers/Create/ConsumerSignUpPage";
import MedAvailabilityPage from "../../Consumers/MedAvailability/MedAvailabilityPage";

const ConsumersRouter = () => {
  return (
    <Routes>
      <Route path="/new" element={<ConsumerSignUpPage />} />
      <Route path="/pharmacists" element={<PharmAvailabilityPage />} />
      <Route path="/medicines" element={<MedSearchPage />} />
      <Route path="/medicines/:id" element={<MedAvailabilityPage />} />
      <Route path="/*" element={<ConsumersMainPage />} />
    </Routes>
  );
};

export default ConsumersRouter;