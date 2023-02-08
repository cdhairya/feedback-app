import Card from "../shared/Card";

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About this app</h1>
        <p>This is a React app to leave a feedback for a product or service</p>
        <p>Version: 1.0.0</p>
        <p>
          <a href="/">Back to Home</a>
        </p>
      </div>
    </Card>
  );
}

export default AboutPage;