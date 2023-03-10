/*********************************************************************************
 * WEB422 – Assignment 4
 * I declare that this assignment is my own work in accordance with Seneca Academic Policy.
 * No part of this assignment has been copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Name: Nishant Sharma   Student ID: 150619203   Date: 03/10/2023
 * Github Link: https://github.com/Nisharrk/museum-page
 *
 ********************************************************************************/

import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Home = () => {
  return (
    <div>
      <Row>
        <Col md={6}>
          <Image
            fluid
            rounded
            src="https://upload.wikimedia.org/wikipedia/commons/3/30/Metropolitan_Museum_of_Art_%28The_Met%29-_Central_Park%2C_NYC.jpg"
          />
        </Col>
        <Col md={6}>
          <p>
            The Metropolitan Museum of Art, often referred to simply as "the
            Met," is one of the world's largest and most important art museums.
            It is located on the eastern edge of Central Park in New York City.
          </p>
          <p>
            The museum was founded in 1870 by a group of American citizens who
            wanted to create a museum to rival the great European institutions.
            Today, the Met's collection contains more than two million works of
            art from around the world, spanning 5,000 years of human history.
          </p>
          <p>
            <a
              href="https://en.wikipedia.org/wiki/Metropolitan_Museum_of_Art"
              target="_blank"
              rel="noreferrer"
            >
              Read more on Wikipedia
            </a>
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
