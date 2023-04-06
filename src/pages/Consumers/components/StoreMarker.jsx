import { useEffect, useState } from "react";
import { Marker, Popup } from "react-leaflet";
import {
  medPharmIcon,
  medNoPharmIcon,
  lowMedPharmIcon,
  lowMedNoPharmIcon,
  pharmIcon,
  noPharmIcon,
} from "../../../assets/mapIcons/mapIcons";

const LOW_STOCK_LEVEL = 10;

const StoreMarker = ({ store }) => {
  const [icon, setIcon] = useState(noPharmIcon);
  const [popUp, setPopUp] = useState([]);

  useEffect(() => {
    if (store.pharmacists) {
      if (store.stock >= LOW_STOCK_LEVEL && store.pharmacists > 0) {
        setIcon(medPharmIcon);
        setPopUp(["Medicine Available", "Pharmacist Available"]);
      } else if (store.stock > 0 && store.pharmacists > 0) {
        setIcon(lowMedPharmIcon);
        setPopUp(["Low Stock", "Pharmacist Available"]);
      } else if (store.stock >= LOW_STOCK_LEVEL && store.pharmacists === 0) {
        setIcon(medNoPharmIcon);
        setPopUp("Medicine Available", "Pharmacist Not Available");
      } else if (store.stock > 0 && store.pharmacists === 0) {
        setIcon(lowMedNoPharmIcon);
        setPopUp(["Low Stock", "Pharmacist Not Available"]);
      }
    } else {
      setIcon(pharmIcon);
      setPopUp(["Pharmacist Available", ""]);
    }
  }, [store]);

  return (
    <Marker position={[store.lat, store.lon]} icon={icon}>
      <Popup>
        <h4>{store.name}</h4>
        {/* <p>{store.streetAddress}</p>
        <p>{store?.unitNumber}</p>
        <p>{store.postalCode}</p> */}
        <ul>
          <li>{popUp[0]}</li>
          <li>{popUp[1]}</li>
        </ul>
      </Popup>
    </Marker>
  );
};

export default StoreMarker;
