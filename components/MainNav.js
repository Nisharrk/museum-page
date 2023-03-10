import { useRouter } from "next/router";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Container,
} from "react-bootstrap";

export default function MainNav() {
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    const searchField = event.target.search.value;
    router.push(`/artwork?title=true&q=${searchField}`);
  };

  return (
    <>
      <Navbar expand="lg" className="fixed-top navbar-dark bg-dark">
        <Container>
          <Navbar.Brand>Nishant Sharma</Navbar.Brand>
          <Navbar.Toggle aria-controls="main-nav" />
          <Navbar.Collapse id="main-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/" passHref={true} legacyBehavior={true}>
                Home
              </Nav.Link>
              <Nav.Link href="/search" passHref={true} legacyBehavior={true}>
                Advanced Search
              </Nav.Link>
            </Nav>
            <Form onSubmit={handleSubmit} className="d-flex">
              <FormControl
                type="text"
                placeholder="Search"
                name="search"
                className="mr-2"
              />
              <Button type="submit" variant="outline-light">
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
      <br />
    </>
  );
}
