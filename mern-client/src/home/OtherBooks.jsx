import React, { useState, useEffect } from "react";
import BookCards from "../components/BookCards";

const OtherBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("https://e-book-pied.vercel.app/all-books")
      .then((res) => res.json())
      .then((data) => setBooks(data.slice(4, 10)))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <BookCards books={books} headline="Other Books" />
    </>
  );
};

export default OtherBooks;
