import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import StoreMarker from "./StoreMarker";

const StoreMap = ({ stores }) => {
  return (
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
      {stores?.map((s) => (
        <Marker position={[s.lat, s.lon]} key={s._id}>
          <Popup>{s.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default StoreMap;
