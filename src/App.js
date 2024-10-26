// importing all our stuff
import React from "react";
import { Container, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Name from "../src/Components/Name";
import Price from "../src/Components/Price";
import Description from "../src/Components/Description";
import Picture from "../src/Components/Image";
import NavScrollExample from "../src/Components/Navbar";

// nav bar

function App() {
  const firstName = "Lord Cartel"; // setting the first name

  return (
    <div>
      <NavScrollExample className=" mb-5 " />
      <Container className="mt-5 ">
        <Card
          className="bg-dark text-white
      "
          style={{ width: "60vw", height: "110vh" }}
        >
          {/* putting what we have import and connect in the card body */}
          <Card.Body>
            <Name />
            <Picture />
            <Description />
            <Price />
          </Card.Body>
        </Card>
        {/* putting the ternary operator , if first name display first name else display hello there */}
        <p className="mt-3">
          {firstName ? `Hello, ${firstName}!` : "Hello, there!"}
        </p>
        {firstName}
      </Container>
    </div>
  );
}

// exporting app
export default App;
