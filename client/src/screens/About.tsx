import React, { useEffect, useState } from "react";

// css
import "../styles/Universal.css";

const localHostApiUrl = "http://localhost:5000/api";

const About = () => {
  const [languageData, setLanguageData] = useState({});

  // make a GET request to server for language data
  useEffect(() => {
    (async () => {
      try {
        // get response (promise)
        const res = await fetch(localHostApiUrl);
        console.log("res:");
        console.log(res);
        // convert to JSON
        const data = await res.json();
        console.log("data:");
        console.log(data);
        // use converted JSON as language data
        setLanguageData(data);
      } catch (error) {
        console.log("Error occurred while attempting to make GET request");
        console.log(error);
      }
    })();
  }, []);

  return (
    <article className="articleContainer">
      <div className="titleContainer">
        <p>About page</p>
      </div>
      <div>
        <p>Languages used for this project:</p>
        <p>{JSON.stringify(languageData)}</p>
      </div>
    </article>
  );
};

export default About;
