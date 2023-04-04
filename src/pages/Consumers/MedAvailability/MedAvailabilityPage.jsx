import { useParams } from "react-router";
import BotttomNavBar from "../../../components/ConsumerNavBar/BottomNavBar";
import TopNavBar from "../../../components/ConsumerNavBar/TopNavBar";
import { MapContainer, TileLayer, useMap } from "react-leaflet";

const MedAvailabilityPage = () => {
  const { id } = useParams();
  return (
    <>
      <TopNavBar backButton={true} />
      <h1>Display Availability in Stores</h1>
      <MapContainer
        className="h-[30vh]"
        center={[1.352638, 103.813529]}
        zoom={9.5}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
      <BotttomNavBar />
    </>
  );
};

export default MedAvailabilityPage;
