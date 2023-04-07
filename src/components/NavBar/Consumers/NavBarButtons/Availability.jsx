import { pharmacistIcon, pharmacistSelectedIcon } from "../navBarIcons";
import { medicineIcon, medicineSelectedIcon } from "../navBarIcons";

const Availability = ({ selected, field }) => {
  const icon = {};

  if (field === "medicine") {
    icon.selected = medicineSelectedIcon;
    icon.unselected = medicineIcon;
  } else if (field === "pharmacist") {
    icon.selected = pharmacistSelectedIcon;
    icon.unselected = pharmacistIcon;
  }

  const selClass = "border-t-2 border-wAqua text-wAqua";
  const unselClass = "text-wAqua-50";
  return (
    <button className={`${selected ? selClass : unselClass}`}>
      <div className="flex items-center space-x-0">
        <img src={selected ? icon.selected : icon.unselected} />
        <p className="text-left text-[10px]">
          {field.toUpperCase()} <br /> AVAILABILITY
        </p>
      </div>
    </button>
  );
};

export default Availability;
