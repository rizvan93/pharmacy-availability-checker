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
  const [page, setPage] = useState("home");

  return (
    <>
      <TopNavBar backButton={!home} user={user} setUser={setUser} />
      <Routes>
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
          path="/availability/:field/:id"
          element={<AvailabilityPage setHome={setHome} setPage={setPage} />}
        />
        <Route
          path="/bookmarks"
          element={
            <Bookmarks
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
      </Routes>
      <BottomNavBar user={user} page={page} />
    </>
  );
};

export default ConsumersRouter;
