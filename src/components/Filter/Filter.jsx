import React from "react";
import "./Filter.css";

import { Button, Col, Container, Form, Row } from "react-bootstrap";

const Filter = (props) => {
  const { search, setSearch, gender, setGender, onNewClick } = props;

  return (
    <div className="filter-div">
      <Container className="filter">
        <Row>
          <Col>
            <Form.Control
              className="filter_search"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              type="text"
              placeholder="Ara..."
            />
          </Col>
          <Col>
            <Form.Select
              className="filter_select"
              name="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="">Filtre Yok</option>
              <option value="erkek">Erkek</option>
              <option value="kadın">Kadın</option>
            </Form.Select>
          </Col>
          <Col>
            <Button variant="dark" onClick={onNewClick}>
              Yeni
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Filter;
