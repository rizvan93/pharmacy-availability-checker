import { useEffect, useState } from "react";

const BookmarkButton = ({ id, fieldId, field }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    const getConsumer = async () => {
      const token = localStorage.getItem("token");
      const response = await fetch(`/api/consumers/${id}/?field=${field}`, {
        headers: {
          Authorization: ["bearer", token],
        },
      });
      const bookmarks = await response.json();
      console.log(bookmarks);
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
    }
  };

  if (isBookmarked) {
    return <button onClick={toggleBookmark}>REMOVE BOOKMARK</button>;
  } else {
    return <button onClick={toggleBookmark}>BOOKMARK</button>;
  }
};

export default BookmarkButton;
