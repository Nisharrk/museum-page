import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

import { Form, Button } from "react-bootstrap";

const AdvancedSearch = () => {
  const router = useRouter();
  const { register, handleSubmit, formState } = useForm({ mode: "onBlur" });

  const submitForm = (data) => {
    let queryString = "searchBy=true";
    if (data.geoLocation) {
      queryString += `&geoLocation=${data.geoLocation}`;
    }
    if (data.medium) {
      queryString += `&medium=${data.medium}`;
    }
    queryString += `&isOnView=${data.isOnView}`;
    queryString += `&isHighlight=${data.isHighlight}`;
    queryString += `&q=${data.q}`;

    router.push(`/artwork?${queryString}`);
  };

  return (
    <div className="container">
      <h1>Advanced Search</h1>
      <Form onSubmit={handleSubmit(submitForm)}>
        <Form.Group controlId="searchBy">
          <Form.Check
            type="radio"
            label="Artwork"
            name="searchBy"
            value="true"
            {...register("searchBy")}
          />
          <Form.Check
            type="radio"
            label="Artist"
            name="searchBy"
            value="false"
            {...register("searchBy")}
          />
        </Form.Group>
        <Form.Group controlId="geoLocation">
          <Form.Label>Location</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter location"
            {...register("geoLocation")}
          />
        </Form.Group>
        <Form.Group controlId="medium">
          <Form.Label>Medium</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter medium"
            {...register("medium")}
          />
        </Form.Group>
        <Form.Group controlId="isOnView">
          <Form.Check
            type="checkbox"
            label="On View"
            name="isOnView"
            {...register("isOnView")}
          />
        </Form.Group>
        <Form.Group controlId="isHighlight">
          <Form.Check
            type="checkbox"
            label="Highlight"
            name="isHighlight"
            {...register("isHighlight")}
          />
        </Form.Group>
        <Form.Group controlId="q">
          <Form.Label>Search Query</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter search query"
            {...register("q", { required: true })}
            className={`${formState.errors.q ? "is-invalid" : ""}`}
          />
          {formState.errors.q && (
            <Form.Control.Feedback type="invalid">
              This field is required
            </Form.Control.Feedback>
          )}
        </Form.Group>
        <Button type="submit">Search</Button>
      </Form>
    </div>
  );
};

export default AdvancedSearch;
