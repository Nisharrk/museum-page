import { Card, Button } from "react-bootstrap";
import Link from "next/link";
import useSWR from "swr";
import Error from "next/error";

const ArtworkCard = ({ objectID }) => {
  const { data, error } = useSWR(
    `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`
  );

  if (error) {
    return <Error statusCode={404} />;
  }

  if (!data) {
    return null;
  }

  const artwork = data;

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={
          artwork.primaryImageSmall ||
          "https://via.placeholder.com/375x375.png?text=[+Not+Available+]"
        }
      />
      <Card.Body>
        <Card.Title>{artwork.title || "N/A"}</Card.Title>
        <Card.Text>
          <strong>Date:</strong> {artwork.objectDate || "N/A"}
          <br />
          <strong>Classification:</strong> {artwork.classification || "N/A"}
          <br />
          <strong>Medium:</strong> {artwork.medium || "N/A"}
        </Card.Text>
        <Link href={`/artwork/${objectID}`} passHref>
          <Button variant="primary">{objectID}</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default ArtworkCard;
