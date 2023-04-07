import { Route, Routes } from "react-router";
import { useState } from "react";
import ConsumersMainPage from "../../Consumers/Index/ConsumersMainPage";
import MedSearchPage from "../../Consumers/MedSearch/MedSearchPage";
import ConsumerSignUpPage from "../../Consumers/Create/ConsumerSignUpPage";
import TopNavBar from "../../../components/NavBar/Consumers/TopNavBar";
import BottomNavBar from "../../../components/NavBar/Consumers/BottomNavBar";
import Bookmarks from "../../Consumers/Bookmarks/Bookmarks";
import AvailabilityPage from "../../Consumers/AvailabilityPage/AvailaibilityPage";

const ConsumersRouter = ({ user, setUser }) => {
  const [home, setHome] = useState(true);

  return (
    <>
      <TopNavBar backButton={!home} user={user} setUser={setUser} />
      <Routes>
        <Route path="/new" element={<ConsumerSignUpPage setHome={setHome} />} />
        <Route
          path="/medicines"
          element={<MedSearchPage setHome={setHome} user={user} />}
        />
        <Route
          path="/availability/:field/:id"
          element={<AvailabilityPage setHome={setHome} />}
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
