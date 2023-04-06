import * as L from "leaflet";

const Icon = L.Icon.extend({
  options: {},
});

const medPharmIcon = new Icon({
  iconUrl: "/src/assets/mapIcons/Pharmacist_MedicineAvailable.png",
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const medNoPharmIcon = new Icon({
  iconUrl: "/src/assets/mapIcons/NoPharmacist__MedicineAvailable.png",
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const lowMedPharmIcon = new Icon({
  iconUrl: "/src/assets/mapIcons/PharmacistAvailable__MedicineLow.png",
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const lowMedNoPharmIcon = new Icon({
  iconUrl: "/src/assets/mapIcons/NoPharmacist__MedicineLow.png",
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const pharmIcon = new Icon({
  iconUrl: "/src/assets/mapIcons/PharmacistAvailable.png",
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const noPharmIcon = new Icon({
  iconUrl: "/src/assets/mapIcons/PharmacistNotAvailable.png",
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
