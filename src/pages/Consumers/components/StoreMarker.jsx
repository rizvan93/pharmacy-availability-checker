import { Marker, Popup } from "react-leaflet";

const StoreMarker = ({ store }) => {
  return (
    <Marker position={[store.lat, store.lon]}>
      <Popup>{store.name}</Popup>
    </Marker>
  );
};

export default StoreMarker;
