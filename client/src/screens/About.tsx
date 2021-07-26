import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";

// css
import "../styles/Universal.css";
import "../styles/About.css";
import { DoughnutData } from "../types";

const localHostApiUrl = "http://localhost:5000/api";
const productionApiUrl = "/api";
const chartLabel = "Languages used for this project";

const dummyData: DoughnutData = {
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

const blankData: DoughnutData = {
  labels: ["N/A"],
  datasets: [
    {
      label: chartLabel,
      data: [100],
      backgroundColor: ["#71c6d0"],
      hoverOffset: 4,
    },
  ],
};

const doughnutOptions = {
  maintainAspectRatio: false,
};

const About = () => {
  // holds the fetched language data from GitHub API
  const [languageData, setLanguageData] = useState({});
  // holds the chart data to be rendered
  const [doughnutData, setDoughnutData] = useState<DoughnutData>(blankData);

  const generateDoughnutData = (languageData: any) => {
    const newData: DoughnutData = {
      labels: [],
      datasets: [
        {
          label: chartLabel,
          data: [],
          backgroundColor: [],
          hoverOffset: 4,
        },
      ],
    };

    // iterates through the list of available background colours
    let iterator = 0;

    // iterates the object passed in which contains language data
    for (const [languageName, languageUsage] of Object.entries(languageData)) {
      // type guard
      if (typeof languageUsage !== "number") {
        console.log("value within languageData is not a number!");
        return;
      }

      const chosenBackgroundColor =
        dummyData.datasets[0].backgroundColor[iterator];

      newData.labels.push(languageName);
      newData.datasets[0].data.push(languageUsage);
      newData.datasets[0].backgroundColor.push(chosenBackgroundColor);

      // if iterator has iterated through all available background colours,
      // start from the beginning again
      iterator =
        iterator + 1 === dummyData.datasets[0].backgroundColor.length
          ? 0
          : iterator + 1;
    }

    // old code
    // languageData.array.forEach((language: number, index: number) => {});

    return newData;
  };

  // make a GET request to server for language data
  useEffect(() => {
    (async () => {
      try {
        // get response (promise)
        const res = await fetch(productionApiUrl);
        console.log("res:\n", res);
        // console.log(res);

        // convert to JSON
        const data = await res.json();
        console.log("data:\n", data);
        // console.log(data);

        // use converted JSON as language data
        setLanguageData(data);

        // generate proper data for doughnut chart to render
        // using the JSON-converted language data
        const newDoughnutData = generateDoughnutData(data);
        console.log("newDoughnutData:\n", newDoughnutData);

        // if generation of doughnut data was successful
        // set it as the new doughnut data
        if (newDoughnutData) {
          console.log("Doughnut data successfully updated");
          setDoughnutData(newDoughnutData);
        } else {
          // bad value types
          console.log("Doughnut data failed to update");
        }
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
          <Doughnut
            data={doughnutData}
            type="doughnut"
            options={doughnutOptions}
          />
        </div>
      </div>
    </article>
  );
};

export default About;
