import React, { useState } from "react";

const NewQuotes = () => {
  const [author, setAuthor] = useState("");
  const [quote, setQuote] = useState("");

  const onChangeAuthor = (event) => {
    setAuthor(event.target.value);
  };

  const onChangeQuote = (event) => {
    setQuote(event.target.value);
  };

  const onSubmit = () => {
    fetch("http://localhost:2323/api/quotes/post", {
      method: "post",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        author,
        text: quote,
      }),
    })
      .then((response) => response.json())
      .then((quotes) => {
        if (quotes.id) {
          console.log(quotes);
        }
      });
    console.log(author, quote);
  };
  return (
    <>
      <form>
        <input
          type="text"
          name="author"
          value={author}
          onChange={onChangeAuthor}
        ></input>
        <br />
        <textarea
          name="quote"
          value={quote}
          onChange={onChangeQuote}
        ></textarea>
        <input type="button" value="submit" onClick={onSubmit}></input>
      </form>
    </>
  );
};

export default NewQuotes;
