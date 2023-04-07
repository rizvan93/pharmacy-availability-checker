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
  return (
    <button>
      <img src={selected ? icon.selected : icon.unselected} />
    </button>
  );
};

export default Icon;
