import { Link } from "react-router-dom";
import { toTitleCase } from "../../../utilities/utilities";

const StoreCard = ({ store, field }) => {
  return (
    <div className="mx-2">
      <hr />
      <h1 className="text-lg font-bold text-wPurple">{store.name}</h1>
      <div className="pl-3 leading-none text-wPurple-50">
        <p>{toTitleCase(store.streetAddress)}</p>
        <p>{store?.unitNumber}</p>
        <p>{store.postalCode}</p>
      </div>
      {field === "medicines" ? (
        <p className="text-wAqua">Medicine Available</p>
      ) : null}
      {store.pharmacists.length > 0 ? (
        <ul className="text-wPurple">
          Pharmacists Available:
          {store?.pharmacists.map((p) => (
            <li
              className="mb-1 mr-1 w-20 min-w-fit rounded-full bg-wAqua-50 px-2 py-0.5 text-wAqua-5 hover:bg-wAqua"
              key={p._id}
            >
              <Link to={`/consumers/pharmacists/${p._id}`}>
                {toTitleCase(p.name)}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-wRed">Pharmacist Not Available</p>
      )}
    </div>
  );
};

export default StoreCard;
