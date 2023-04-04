import BotttomNavBar from "../../../components/ConsumerNavBar/BottomNavBar";
import TopNavBar from "../../../components/ConsumerNavBar/TopNavBar";

export default function PharmAvailability() {
  return (
    <>
      <TopNavBar backButton={true} />
      <h1>List of Pharmacists</h1>
      <BotttomNavBar />
    </>
  );
}
