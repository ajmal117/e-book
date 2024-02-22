import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import {
  Button,
  Checkbox,
  Label,
  TextInput,
  Textarea,
  Select,
} from "flowbite-react";
import { Link } from "react-router-dom";

const EditBooks = () => {
  const { id } = useParams();
  const { bookTitle, authorName, imageUrl, category, description, bookPdfUrl } =
    useLoaderData();

  const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "Romance",
    "Mistery",
    "Programming",
    "Science Fiction",
    "Fantasy",
    "Horror",
    "Biography",
    "Autobiography",
    "History",
    "self-help",
    "Memoir",
    "Business",
    "Children Books",
    "Travel",
    "Religion",
    "Art and design",
  ];

  const [selectedBookCategory, setSelectedBookCategory] = useState(
    bookCategories[0]
  );
  const handleChangeSelectedValue = (event) => {
    console.log(event.target.value);
    setSelectedBookCategory(event.target.value);
  };

  // handle book submission
  const handleUpdateBook = (event) => {
    event.preventDefault();

    const form = event.target;

    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageUrl = form.imageUrl.value;
    const category = form.categoryName.value;
    const description = form.description.value;
    const bookPdfUrl = form.bookPdfUrl.value;

    const updateBookObj = {
      bookTitle,
      authorName,
      imageUrl,
      category,
      description,
      bookPdfUrl,
    };
    // console.log(bookObj);
    fetch(`https://e-book-pied.vercel.app/book/${id}`, {
      method: "PATCH",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(updateBookObj),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        alert("Book data update successfully !!!");
        
      });
  };

  return (
    <div className="px-4 my-12">
      <h1 className="mb-8 text-3xl font-bold">Update the book data</h1>

      <form
        onSubmit={handleUpdateBook}
        className="flex lg:w-[1180px] flex-col flex-wrap gap-4"
      >
        {/* first row */}
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput
              id="bookTitle"
              name="bookTitle"
              type="text"
              placeholder="Book name"
              defaultValue={bookTitle}
              required
              // shadow
            />
          </div>
          {/* author name */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput
              id="authorName"
              name="authorName"
              type="text"
              placeholder="Author name"
              defaultValue={authorName}
              required
              // shadow
            />
          </div>
        </div>
        {/* second row */}
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="imageUrl" value="Image Url" />
            </div>
            <TextInput
              id="imageUrl"
              name="imageUrl"
              type="text"
              placeholder="Book image URL"
              defaultValue={imageUrl}
              required
              // shadow
            />
          </div>
          {/* category */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Book Category" />
            </div>
            <Select
              name="categoryName"
              id="inputState"
              className="w-full rounded-lg"
              value={selectedBookCategory}
              onChange={handleChangeSelectedValue}
            >
              {bookCategories.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </div>
        </div>

        {/* book description */}

        <div>
          <div className="mb-2 block">
            <Label htmlFor="description" value="Book Description" />
          </div>
          <Textarea
            id="description"
            name="description"
            type="text"
            placeholder="Write your book description. . ."
            defaultValue={description}
            className="w-full"
            required
            rows={6}
          />
        </div>

        {/* book PDF link */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookPdfUrl" value="Book PDF URL" />
          </div>
          <TextInput
            id="bookPdfUrl"
            name="bookPdfUrl"
            type="text"
            placeholder="Book pdf link"
            defaultValue={bookPdfUrl}
            required
          />
        </div>

        <Button type="submit" className="mt-5">
          Update Book
        </Button>
      </form>
    </div>
  );
};

export default EditBooks;
