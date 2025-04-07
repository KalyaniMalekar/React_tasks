import React, { useEffect, useState } from "react";

function Effect3() {
  let [fetchedData, setFetchedData] = useState(null);

  useEffect(() => {
    let fetchData = async () => {
      try {
        let response = await fetch("https://icanhazdadjoke.com/", {
          headers: {
            "Accept": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        let newData = await response.json();
        setFetchedData(newData);
      } catch (error) {
        console.error("Error fetching joke:", error);
        setFetchedData({ joke: "Failed to fetch joke. Please try again!" });
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <h1>Dad Jokes </h1>
      <div className="joke-box">
        <h2>Joke: {fetchedData?.joke || "Loading..."}</h2>
      </div>
    </div>
  );
}

export default Effect3;
