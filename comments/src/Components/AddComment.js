import React from "react";
import "./AddComment.css";
const AddComment = () => {
  return (
    <div className="comment-main">
      <form>
        <input placeholder="Lütfen yorumunuzu giriniz" type="text"></input>
      </form>
      <button type="submit">Gönder</button>
    </div>
  );
};

export default AddComment;
