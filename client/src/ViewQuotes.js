import React, { useState, useEffect } from "react";

const ViewQuotes = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:2323/api/quotes/get`, {
      method: "get",
      headers: { "Content-type": "application/json" },
    }).then((response) =>
      response.json().then((data) => {
        setData(data);
        console.log(data);
      })
    );
  }, []);

  return (
    <>
      {data.map((data) => {
        return (
          <div key={data._id}>
            <h3>{data.author}</h3>
            <h4>{data.text}</h4>
          </div>
        );
      })}
    </>
  );
};

export default ViewQuotes;
