import { Route, Routes } from "react-router";
import ConsumersMainPage from "../../Consumers/Index/ConsumersMainPage";
import MedAvailabilityPage from "../../Consumers/MedChecker/MedAvailabilityPage";
import PharmAvailabilityPage from "../../Consumers/PharmChecker/PharmAvailabilityPage";
import ConsumerSignUpPage from "../../Consumers/Create/ConsumerSignUpPage";

const ConsumersRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<ConsumersMainPage />} />
      <Route path="/new" element={<ConsumerSignUpPage />} />
      <Route path="/pharmacists" element={<PharmAvailabilityPage />} />
      <Route path="/medicines" element={<MedAvailabilityPage />} />
    </Routes>
  );
};

export default ConsumersRouter;
