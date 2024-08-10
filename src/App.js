import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [interests, setInterests] = useState({
    coding: false,
    design: false,
    marketing: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleCheckboxChange = (e) => {
    setInterests({
      ...interests,
      [e.target.name]: e.target.checked,
    });
  };

  return (
    <main>
      <h1>Hi, I'm Eric</h1>
      <img
        alt="My profile pic"
        src="https://cdn.pixabay.com/photo/2023/10/20/03/36/mushrooms-8328101_640.jpg"
      />
      <h2>About Me</h2>
      <p>I Love Nature</p>

      <div>
        <a href="https://github.com">GitHub</a>
        <a href="https://linkedin.com">LinkedIn</a>
      </div>

      <h3>Newsletter Signup</h3>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="coding"
              checked={interests.coding}
              onChange={handleCheckboxChange}
            />
            Coding
          </label>
          <label>
            <input
              type="checkbox"
              name="design"
              checked={interests.design}
              onChange={handleCheckboxChange}
            />
            Design
          </label>
          <label>
            <input
              type="checkbox"
              name="marketing"
              checked={interests.marketing}
              onChange={handleCheckboxChange}
            />
            Marketing
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <h4>Thank you for signing up, {name}!</h4>
          <p>Your interests: {Object.keys(interests)
            .filter((interest) => interests[interest])
            .join(", ") || "None"}</p>
        </div>
      )}
    </main>
  );
}

export default App;
