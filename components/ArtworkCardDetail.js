import { Card } from "react-bootstrap";
import Link from "next/link";
import useSWR from "swr";
import Error from "next/error";

const ArtworkCardDetail = ({ objectID }) => {
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
    <Card>
      {artwork.primaryImage && (
        <Card.Img variant="top" src={artwork.primaryImage} />
      )}
      <Card.Body>
        <Card.Title>{artwork.title || "N/A"}</Card.Title>
        <Card.Text>
          <strong>Date:</strong> {artwork.objectDate || "N/A"}
          <br />
          <strong>Classification:</strong> {artwork.classification || "N/A"}
          <br />
          {artwork.medium && (
            <>
              <strong>Medium:</strong> {artwork.medium}
              <br />
            </>
          )}
          <strong>Artist:</strong>{" "}
          {artwork.artistDisplayName ? (
            <>
              <Link href={artwork.artistWikidata_URL} passHref>
                <a target="_blank" rel="noreferrer">
                  {artwork.artistDisplayName}
                </a>
              </Link>
            </>
          ) : (
            "N/A"
          )}
          <br />
          <strong>Credit Line:</strong> {artwork.creditLine || "N/A"}
          <br />
          <strong>Dimensions:</strong> {artwork.dimensions || "N/A"}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ArtworkCardDetail;
