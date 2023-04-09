import * as L from "leaflet";
import NoPharmacist__MedicineAvailable from "../../../assets/mapIcons/NoPharmacist__MedicineAvailable.png";
import NoPharmacist__MedicineLow from "../../../assets/mapIcons/NoPharmacist__MedicineLow.png";
import NoPharmacist_NoMedicine from "../../../assets/mapIcons/NoPharmacist_NoMedicine.png";
import Pharmacist_MedicineAvailable from "../../../assets/mapIcons/Pharmacist_MedicineAvailable.png";
import PharmacistAvailable__MedicineLow from "../../../assets/mapIcons/PharmacistAvailable__MedicineLow.png";
import PharmacistAvailable__NoMedicine from "../../../assets/mapIcons/PharmacistAvailable__NoMedicine.png";
import PharmacistAvailable from "../../../assets/mapIcons/PharmacistAvailable.png";
import PharmacistNotAvailable from "../../../assets/mapIcons/PharmacistNotAvailable.png";

const Icon = L.Icon.extend({
  options: {},
});

const medPharmIcon = new Icon({
  iconUrl: Pharmacist_MedicineAvailable,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const medNoPharmIcon = new Icon({
  iconUrl: NoPharmacist__MedicineAvailable,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const lowMedPharmIcon = new Icon({
  iconUrl: PharmacistAvailable__MedicineLow,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const lowMedNoPharmIcon = new Icon({
  iconUrl: NoPharmacist__MedicineLow,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const pharmIcon = new Icon({
  iconUrl: PharmacistAvailable,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const noPharmIcon = new Icon({
  iconUrl: PharmacistNotAvailable,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

export {
  medPharmIcon,
  medNoPharmIcon,
  lowMedPharmIcon,
  lowMedNoPharmIcon,
  pharmIcon,
  noPharmIcon,
};
