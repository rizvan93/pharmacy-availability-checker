import { Route, Routes } from "react-router";
import { useState } from "react";
import ConsumersMainPage from "../../Consumers/Index/ConsumersMainPage";
import MedSearchPage from "../../Consumers/MedSearch/MedSearchPage";
import PharmAvailabilityPage from "../../Consumers/PharmAvailability/PharmAvailabilityPage";
import ConsumerSignUpPage from "../../Consumers/Create/ConsumerSignUpPage";
import MedAvailabilityPage from "../../Consumers/MedAvailability/MedAvailabilityPage";
import TopNavBar from "../../../components/NavBar/Consumers/TopNavBar";
import BottomNavBar from "../../../components/NavBar/Consumers/BottomNavBar";

const ConsumersRouter = ({ user }) => {
  const [home, setHome] = useState(true);

  return (
    <>
      <TopNavBar backButton={!home} user={user} />
      <Routes>
        <Route path="/new" element={<ConsumerSignUpPage setHome={setHome} />} />
        <Route
          path="/pharmacists"
          element={<PharmAvailabilityPage setHome={setHome} />}
        />
        <Route
          path="/medicines"
          element={<MedSearchPage setHome={setHome} user={user} />}
        />
        <Route
          path="/medicines/:id"
          element={<MedAvailabilityPage setHome={setHome} />}
        />
        <Route path="/*" element={<ConsumersMainPage setHome={setHome} />} />
      </Routes>
      <BottomNavBar />
    </>
  );
};

export default ConsumersRouter;
