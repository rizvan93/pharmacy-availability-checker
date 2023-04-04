import BotttomNavBar from "../../../components/ConsumerNavBar/BottomNavBar";
import TopNavBar from "../../../components/ConsumerNavBar/TopNavBar";
import WatsonMedi from "../../../../src/assets/WatsonMedi.png";
import WatsonPharm from "../../../../src/assets/WatsonPharm.png";

export default function ConsumersMainPage() {
  return (
    <div className="bg-wAqua-10 min-h-screen">
    <TopNavBar />
    <br/>

      <div className="container mx-auto p-4 flex flex-col justify-center items-center">
      <div className="bg-white rounded-lg shadow-md p-4 mb-4"><img src={WatsonMedi} width="800"/></div>
      <div className="bg-white rounded-lg shadow-md p-4"><img src={WatsonPharm} width="800"/></div>
      </div>
    <BotttomNavBar />
    </div>
  );
}
