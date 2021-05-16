import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";

// css
import "../styles/Universal.css";
import "../styles/About.css"

const localHostApiUrl = "http://localhost:5000/api";

const data = {
  labels: ["Red", "Blue", "Yellow"],
  datasets: [
    {
      label: "First dataset",
      data: [300, 50, 100],
      backgroundColor: ["#71c6d0", "#000000", "#282c34"],
      hoverOffset: 4,
    },
  ],
};

const options = {
  maintainAspectRatio: false,
};

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
        <div className="doughnutChartContainer">
          <Doughnut data={data} type="doughnut" options={options} />
        </div>
      </div>
    </article>
  );
};

export default About;
