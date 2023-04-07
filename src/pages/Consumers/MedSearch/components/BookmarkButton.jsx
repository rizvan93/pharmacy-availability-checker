import { useEffect, useState } from "react";
import bookmarkIcon from "../../../../assets/buttonIcons/bookmark.png";
import unbookmarkIcon from "../../../../assets/buttonIcons/removeBookmark.png";

const BookmarkButton = ({ id, fieldId, field, removeItem }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    const getConsumer = async () => {
      const token = localStorage.getItem("token");
      const response = await fetch(`/api/consumers/${id}/?field=${field}`, {
        headers: {
          Authorization: ["bearer", token],
        },
      });
      const data = await response.json();
      const bookmarks = data.map((d) => d._id);
      console.log("bookmarks: ", bookmarks);
      console.log("bookmarks.includes(fieldId): ", bookmarks.includes(fieldId));
      console.log("fieldId: ", fieldId);
      if (bookmarks.includes(fieldId)) {
        setIsBookmarked(true);
      }
    };
    getConsumer();
  }, [id, fieldId, field]);

  const toggleBookmark = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch(`/api/consumers/${id}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: ["bearer", token],
      },
      body: JSON.stringify({ bookmarkId: fieldId, field }),
    });
    if (response.ok) {
      setIsBookmarked(!isBookmarked);
      removeItem();
    }
  };

  // if (isBookmarked) {
  //   return (
  //     <button onClick={toggleBookmark} className="bg-teal-200 p-1">
  //       REMOVE BOOKMARK
  //     </button>
  //   );
  // } else {
  //   return (
  //     <button onClick={toggleBookmark} className="bg-teal-200 p-1">
  //       BOOKMARK
  //     </button>
  //   );
  // }
  return (
    <button onClick={toggleBookmark}>
      <img src={isBookmarked ? unbookmarkIcon : bookmarkIcon} />
    </button>
  );
};

export default BookmarkButton;
