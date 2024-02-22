import React, { useEffect, useState } from "react";
import { Card } from "flowbite-react";
import { Link } from "react-router-dom";

function Shop() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/all-books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div className="mt-24 px-4 lg:px-24">
      <h1 className="text-5xl font-bold text-center">All Books are Here</h1>
      <div className="my-12 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-cols-1 gap-4 gap-y-8">
        {books.map((book) => (
          <Card className="">
            <img src={book.imageUrl} alt="" className="h-96" />
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {book.bookTitle}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <Link
              to={`/book/${book._id}`}
              className="bg-blue-700 text-white font-semibold py-2 rounded text-center"
            >
              Buy Now
              {/* <button></button> */}
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Shop;
