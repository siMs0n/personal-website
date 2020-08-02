import React, { useState } from "react";

const Footer = () => (
  <footer>
    <p>
      How much did you like this website on the{" "}
      <a
        href="https://xkcd.com/2329/"
        target="_blank"
        rel="noopener noreferrer"
      >
        universal rating scale
      </a>
      ?
    </p>
    <form
      action="https://formsubmit.co/2cb84eca8120fdd81cf404924b8ceb8a"
      method="POST"
      id="rating-form"
    >
      <select
        name="Rating"
        //onChange={() => document.getElementById("rating-form").submit()}
        style={{ marginBottom: "2rem" }}
      >
        {options.map(ratingOption => (
          <option value={ratingOption} key={ratingOption}>
            {ratingOption}
          </option>
        ))}
      </select>
      <input type="hidden" name="_captcha" value="false"></input>
      <input type="text" name="_honey" style={{ display: "none" }}></input>
    </form>
    <p style={{ color: "#C0C0C0" }}>
      Website designed and built by me.
      <br />© Simon Nielsen
    </p>
  </footer>
);

const options = [
  "1",
  "2",
  "Strongly disagree",
  "F",
  "⭐",
  "Extinct",
  "Tall",
  "2",
  "G",
  "Critical",
  "☹️",
  "3",
  "Endangered",
  "⭐⭐",
  "PG",
  "Disagree",
  "VG",
  "4",
  "Grande",
  "5",
  "PG-13",
  "😐",
  "6",
  "T for Teen",
  "7",
  "⭐⭐⭐",
  "Agree",
  "Venti",
  "8",
  "Least concern",
  "☺️",
  "A",
  "Strongly agree",
  "Category 5",
  "EF-5",
  "NC-17",
  "UNC",
  "AA",
  "⭐⭐⭐⭐",
  "A+",
  "S",
  "AAA",
  "10",
  "10.0",
  "11",
];

export default Footer;
