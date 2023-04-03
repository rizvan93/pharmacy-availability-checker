import BotttomNavBar from "../../../components/ConsumerNavBar/BottomNavBar";
import TopNavBar from "../../../components/ConsumerNavBar/TopNavBar";

export default function ConsumersMainPage() {
  return (
    <div className="bg-wAqua-10 min-h-screen">
    <TopNavBar />
    <br/>

      <div className="container mx-auto p-4 flex flex-col justify-center items-center">
      <div className="bg-white rounded-lg shadow-md p-4 mb-4">01</div>
      <div className="bg-white rounded-lg shadow-md p-4">01</div>
      </div>
    <BotttomNavBar />
    </div>
  );
}
