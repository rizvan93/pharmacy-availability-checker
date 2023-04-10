import { Route, Routes } from "react-router";
import { useState } from "react";
import ConsumersMainPage from "../../Consumers/Index/ConsumersMainPage";
import MedSearchPage from "../../Consumers/MedSearch/MedSearchPage";
import ConsumerSignUpPage from "../../Consumers/Create/ConsumerSignUpPage";
import TopNavBar from "../../../components/NavBar/Consumers/TopNavBar";
import BottomNavBar from "../../../components/NavBar/Consumers/BottomNavBar";
import Bookmarks from "../../Consumers/Bookmarks/Bookmarks";
import AvailabilityPage from "../../Consumers/AvailabilityPage/AvailaibilityPage";
import InfoPage from "../../Consumers/Index/InfoPage";
import PharmacistInfoPage from "../../Consumers/PharmacistInfo/PharmacistInfoPage";

const ConsumersRouter = ({ user, setUser }) => {
  const [home, setHome] = useState(true);
  const [page, setPage] = useState("home");

  return (
    <div className="flex  h-screen flex-col justify-between">
      <TopNavBar backButton={!home} user={user} setUser={setUser} />
      <div className="z-0 flex-1 overflow-y-scroll">
        <Routes>
          <Route
            path="/info"
            element={
              <InfoPage
                setHome={setHome}
                user={user}
                setPage={() => {
                  setPage("info");
                }}
              />
            }
          />
          <Route
            path="/new"
            element={
              <ConsumerSignUpPage
                setHome={setHome}
                setPage={() => {
                  setPage("");
                }}
              />
            }
          />
          <Route
            path="/medicines"
            element={
              <MedSearchPage
                setHome={setHome}
                user={user}
                setPage={() => {
                  setPage("medicines");
                }}
              />
            }
          />
          <Route
            path="/pharmacists/:id"
            element={
              <PharmacistInfoPage setHome={setHome} userId={user?.accountId} />
            }
          />
          <Route
            path="/availability/:field/:id"
            element={
              <AvailabilityPage
                setHome={setHome}
                setPage={setPage}
                userId={user?.accountId}
              />
            }
          />
          <Route
            path="/bookmarks"
            element={
              <Bookmarks
                user={user}
                setPage={() => {
                  setPage("bookmarks");
                }}
              />
            }
          />
          <Route
            path="/*"
            element={
              <ConsumersMainPage
                user={user}
                setUser={setUser}
                setHome={setHome}
                setPage={() => {
                  setPage("home");
                }}
              />
            }
          />
          {/* <Route path="/bookmarks" element={<Bookmarks user={user} />} /> */}
        </Routes>
      </div>
      <BottomNavBar user={user} page={page} />
    </div>
  );
};

export default ConsumersRouter;
