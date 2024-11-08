import React from "react";
import { useState } from "react";
import { InputGroup, Form, Button } from "react-bootstrap";

const AddMovie = ({ onAddMovie }) => {
  const [InputValue, setInputValue] = useState({
    title: "",
    description: "",
    rating: 0,
    Image: "",
  });
  const submitHandler = (e) => {
    // the preventdefault stops the site from reloading when the button is clicked
    e.preventDefault();
    onAddMovie(InputValue);
    setInputValue({
      title: "",
      description: "",
      rating: 0,
      Image: "",
    });
  };
  return (
    <Form onSubmit={submitHandler}>
      <h3> Add a new movie </h3>
      <InputGroup className="mb-3 w-50">
        <InputGroup.Text id="basic-addon1">Title</InputGroup.Text>
        <Form.Control
          placeholder="Enter movie title"
          aria-label="title"
          aria-describedby="basic-addon1"
          value={InputValue.title}
          //   we used the ...inputvalues to seperate the rating from the title and update only the title when there is change
          onChange={(e) => {
            setInputValue({ ...InputValue, title: e.target.value });
          }}
        />
      </InputGroup>

      <InputGroup className="mb-3 w-50">
        <InputGroup.Text id="basic-addon1">Description</InputGroup.Text>
        <Form.Control
          placeholder="Enter movie description"
          aria-label="title"
          aria-describedby="basic-addon1"
          value={InputValue.description}
          //   we used the ...inputvalues to seperate the rating from the title and update only the title when there is change
          onChange={(e) => {
            setInputValue({ ...InputValue, description: e.target.value });
          }}
        />
      </InputGroup>

      <InputGroup className="mb-3 w-50">
        <InputGroup.Text id="basic-addon1">Rating</InputGroup.Text>
        <Form.Control
          type="number"
          min={1}
          max={10}
          step={1}
          placeholder="Enter the rating"
          aria-label="title"
          aria-describedby="basic-addon1"
          value={InputValue.rating}
          //   we used the ...inputvalues to seperate the rating from the title and update only the title when there is change
          onChange={(e) => {
            setInputValue({ ...InputValue, rating: Number(e.target.value) });
          }}
        />
      </InputGroup>

      <InputGroup className="mb-3 w-50">
        <InputGroup.Text id="basic-addon1">Image</InputGroup.Text>
        <Form.Control
          placeholder="Enter Image url"
          aria-label="title"
          aria-describedby="basic-addon1"
          value={InputValue.Image}
          //   we used the ...inputvalues to seperate the rating from the title and update only the title when there is change
          onChange={(e) => {
            setInputValue({ ...InputValue, Image: e.target.value });
          }}
        />
      </InputGroup>

      <Button variant="primary" type="submit">
        Add
      </Button>
    </Form>
  );
};

export default AddMovie;
