import { Route, Routes } from "react-router";
import { useState } from "react";
import ConsumersMainPage from "../../Consumers/Index/ConsumersMainPage";
import MedSearchPage from "../../Consumers/MedSearch/MedSearchPage";
import PharmAvailabilityPage from "../../Consumers/PharmAvailability/PharmAvailabilityPage";
import ConsumerSignUpPage from "../../Consumers/Create/ConsumerSignUpPage";
import MedAvailabilityPage from "../../Consumers/MedAvailability/MedAvailabilityPage";
import TopNavBar from "../../../components/NavBar/Consumers/TopNavBar";
import BottomNavBar from "../../../components/NavBar/Consumers/BottomNavBar";
import Bookmarks from "../../Consumers/Bookmarks/Bookmarks";

const ConsumersRouter = ({ user, setUser }) => {
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
          element={<MedSearchPage setHome={setHome} />}
        />
        <Route
          path="/medicines/:id"
          element={<MedAvailabilityPage setHome={setHome} />}
        />
        <Route
          path="/*"
          element={
            <ConsumersMainPage
              user={user}
              setUser={setUser}
              setHome={setHome}
            />
          }
        />
        <Route path="/bookmarks" element={<Bookmarks />} />
      </Routes>
      <BottomNavBar />
    </>
  );
};

export default ConsumersRouter;
