import React from "react";
import Card from "../components/shared/Card";

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About Page</h1>
        <p>
          This is a react app, to leave Feedback or ratings for product or
          service
        </p>
        <p>1.0.0</p>
      </div>

      <div>
        <a href="/App">Back to Home</a>
      </div>
    </Card>
  );
}

export default AboutPage;
