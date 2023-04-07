import { homeIcon, homeSelectedIcon } from "../navBarIcons";
import { bookmarksIcon, bookmarksSelectedIcon } from "../navBarIcons";

const Icon = ({ selected, field }) => {
  const icon = {};

  if (field === "home") {
    icon.selected = homeSelectedIcon;
    icon.unselected = homeIcon;
  } else if (field === "bookmarks") {
    icon.selected = bookmarksSelectedIcon;
    icon.unselected = bookmarksIcon;
  }

  const selClass = "border-t-2 border-wAqua";

  return (
    <button className={`mx-auto ${selected ? selClass : ""}`}>
      <img src={selected ? icon.selected : icon.unselected} />
    </button>
  );
};

export default Icon;
