import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import { Row, Col, Pagination } from "react-bootstrap";
import ArtworkCard from "../../components/ArtworkCard";
import Error from "next/error";

const PER_PAGE = 12;

const Artwork = () => {
  const [artworkList, setArtworkList] = useState(null);
  const [page, setPage] = useState(1);
  const router = useRouter();
  let finalQuery = router.asPath.split("?")[1];

  const { data, error } = useSWR(
    `https://collectionapi.metmuseum.org/public/collection/v1/search?${finalQuery}`
  );

  useEffect(() => {
    if (data) {
      const results = [];
      for (let i = 0; i < data?.objectIDs?.length; i += PER_PAGE) {
        const chunk = data?.objectIDs.slice(i, i + PER_PAGE);
        results.push(chunk);
      }
      setArtworkList(results);
      setPage(1);
    }
  }, [data]);

  const previousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const nextPage = () => {
    if (page < artworkList.length) {
      setPage(page + 1);
    }
  };

  if (error) {
    return <Error statusCode={404} />;
  }

  if (!artworkList) {
    return null;
  }

  return (
    <>
      <Row className="gy-4">
        {artworkList.length > 0 ? (
          artworkList[page - 1].map((currentObjectID) => (
            <Col lg={3} key={currentObjectID}>
              <ArtworkCard objectID={currentObjectID} />
            </Col>
          ))
        ) : (
          <Col>
            <Card>
              <Card.Body>
                <h4>Nothing Here</h4>
                Try searching for something else.
              </Card.Body>
            </Card>
          </Col>
        )}
      </Row>
      {artworkList.length > 0 && (
        <Row>
          <Col className="d-flex justify-content-center">
            <Pagination>
              <Pagination.Prev onClick={previousPage} />
              <Pagination.Item>{page}</Pagination.Item>
              <Pagination.Next onClick={nextPage} />
            </Pagination>
          </Col>
        </Row>
      )}
    </>
  );
};

export default Artwork;
