import { useEffect, useState } from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import StoreMarker from "./StoreMarker";

const StoreMap = ({ stores, currentPosition }) => {
  const [center, setCenter] = useState([1.352638, 103.813529]);
  const [zoom, setZoom] = useState(9.5);

  useEffect(() => {
    if (currentPosition) {
      setCenter([currentPosition.latitude, currentPosition.longitude]);
      setZoom(15);
    }
  }, []);

  return (
    <MapContainer
      className="h-[30vh]"
      center={center}
      zoom={zoom}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {stores?.map((s) => (
        <StoreMarker store={s} key={s._id} />
      ))}
    </MapContainer>
  );
};

export default StoreMap;
