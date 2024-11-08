import React from "react";
import { InputGroup, Form } from "react-bootstrap";

const Filter = ({ onTitleChange, onRatingChange }) => {
  return (
    <div>
      <h3> Filter by: </h3>
      <InputGroup className="mb-3 w-50">
        <InputGroup.Text id="basic-addon1">Title</InputGroup.Text>
        <Form.Control
          placeholder="Enter the movie title"
          aria-label="title"
          aria-describedby="basic-addon1"
          //   we used the ...inputvalues to seperate the rating from the title and update only the title when there is change
          onChange={(e) => {
            onTitleChange(e.target.value);
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
          placeholder="Enter the movie rating"
          aria-label="Rating"
          aria-describedby="basic-addon1"
          onChange={(e) => {
            onRatingChange(e.target.value);
          }}
        />
      </InputGroup>
    </div>
  );
};

export default Filter;
