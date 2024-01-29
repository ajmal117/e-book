import React, { useEffect, useState } from "react";
import BookCards from "../components/BookCards";

function BestSellerBooks() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/all-books")
      .then((res) => res.json())
      .then((data) => setBooks(data.slice(0, 8)))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <BookCards books={books} headline="Best Seller Books" />
    </>
  );
}

export default BestSellerBooks;
