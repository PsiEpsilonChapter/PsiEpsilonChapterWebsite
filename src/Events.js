import { React, useState, useEffect } from "react";
import exclamation from "./exclamation.png";

function Events() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://bots.hman.io/fitthetatauevents/json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  var errorPage = (
    <div className="Events">
      <div className="EventsError">
        <img
          style={{ width: "7vw", height: "7vw" }}
          src={exclamation}
          alt="Error"
        />
        <div className="error-content">
          <div>Error</div>{" "}
          <div>
            Unable to fetch Discord Events information. Come back later or
            contact someone from our contacts page.
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      {loading && <div>Loading...</div>}
      {error && errorPage}
      {!loading && !error && data && <div>{/* Render your data here */}</div>}
    </div>
  );
}

export default Events;

