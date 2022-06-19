import React from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";

const UpdateAddressModal = (props) => {
  const { updatedAddress, setUpdatedAddress, show, close, updateFunction } =
    props;

  const onValueChange = (e) => {
    //update value by component name and value
    setUpdatedAddress((updatedAddress) => {
      return { ...updatedAddress, [e.target.name]: e.target.value };
    });
  };

  return (
    <Modal show={show} onHide={close}>
      <Modal.Header closeButton>
        <Modal.Title>Detaylar</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Ad</Form.Label>
                <Form.Control
                  onChange={(e) => onValueChange(e)}
                  name="name"
                  value={updatedAddress.name}
                  type="text"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Soyad</Form.Label>
                <Form.Control
                  onChange={(e) => onValueChange(e)}
                  value={updatedAddress.surname}
                  name="surname"
                  type="text"
                />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group>
            <Form.Label>Doğum Günü</Form.Label>
            <Form.Control
              value={
                new Date(updatedAddress.birthDay)?.toJSON()?.substring(0, 10) ||
                ""
              }
              onChange={(e) => onValueChange(e)}
              name="birthDay"
              type="date"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Cinsiyet</Form.Label>
            <Form.Select
              name="gender"
              value={updatedAddress.gender}
              onChange={(e) => onValueChange(e)}
            >
              <option value="erkek">Erkek</option>
              <option value="kadın">Kadın</option>
            </Form.Select>
          </Form.Group>

          <Form.Group>
            <Form.Label>Resim</Form.Label>
            <Form.Control
              value={updatedAddress.image}
              onChange={(e) => onValueChange(e)}
              name="image"
              type="text"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Meslek</Form.Label>
            <Form.Control
              value={updatedAddress.job}
              onChange={(e) => onValueChange(e)}
              name="job"
              type="text"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              value={updatedAddress.email}
              onChange={(e) => onValueChange(e)}
              name="email"
              type="email"
            />
          </Form.Group>

          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Telefon</Form.Label>
                <Form.Control
                  value={updatedAddress.phone}
                  onChange={(e) => onValueChange(e)}
                  name="phone"
                  type="text"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>İş Telefonu</Form.Label>
                <Form.Control
                  value={updatedAddress.workPhone}
                  onChange={(e) => onValueChange(e)}
                  name="workPhone"
                  type="text"
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group>
            <Form.Label>Şehir</Form.Label>
            <Form.Control
              value={updatedAddress.city}
              onChange={(e) => onValueChange(e)}
              name="city"
              type="text"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Adres</Form.Label>
            <Form.Control
              value={updatedAddress.address}
              onChange={(e) => onValueChange(e)}
              name="address"
              type="text"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>İş Adresi</Form.Label>
            <Form.Control
              value={updatedAddress.workAddress}
              onChange={(e) => onValueChange(e)}
              name="workAddress"
              type="text"
            />
          </Form.Group>

          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Instagram</Form.Label>
                <Form.Control
                  value={updatedAddress.instagram}
                  onChange={(e) => onValueChange(e)}
                  name="instagram"
                  type="text"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Twitter</Form.Label>
                <Form.Control
                  value={updatedAddress.twitter}
                  onChange={(e) => onValueChange(e)}
                  name="twitter"
                  type="text"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Facebook</Form.Label>
                <Form.Control
                  value={updatedAddress.facebook}
                  onChange={(e) => onValueChange(e)}
                  name="facebook"
                  type="text"
                />
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={close}>
          Kapat
        </Button>
        <Button variant="primary" onClick={updateFunction}>
          Kaydet
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UpdateAddressModal;
