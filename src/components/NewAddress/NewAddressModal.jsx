import React, { useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";

const NewAddressModal = (props) => {
  const { addresses, setAddresses, show, close } = props;

  const [newAddress, setNewAddress] = useState({
    id: Math.random(),
    image: "",
    name: "",
    surname: "",
    email: "",
    job: "",
    birthDay: new Date(),
    phone: "",
    workPhone: "",
    address: "",
    city: "",
    workAddress: "",
    instagram: "",
    twitter: "",
    facebook: "",
    gender: "",
  });

  const onValueChange = (e) => {
    setNewAddress((newAddress) => {
      return { ...newAddress, [e.target.name]: e.target.value };
    });
  };

  const saveNewAddress = () => {
    if (
      newAddress.name !== "" &&
      newAddress.surname !== "" &&
      newAddress.job !== "" &&
      newAddress.city !== "" &&
      newAddress.gender !== "" &&
      newAddress.phoneNumber !== ""
    ) {
      let arr = addresses;
      arr.push(newAddress);
      setAddresses(arr);
      setNewAddress({
        id: Math.random(),
        image: "",
        name: "",
        surname: "",
        email: "",
        job: "",
        birthDay: new Date(),
        phone: "",
        workPhone: "",
        address: "",
        city: "",
        workAddress: "",
        instagram: "",
        twitter: "",
        facebook: "",
        gender: "",
      });
      close();
    } else {
      alert("Ad, soyad, meslek, şehir ve telefon numarası boş bırakılamaz!");
    }
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
                  value={newAddress.name}
                  type="text"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Soyad</Form.Label>
                <Form.Control
                  onChange={(e) => onValueChange(e)}
                  value={newAddress.surname}
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
                new Date(newAddress.birthDay)?.toJSON()?.substring(0, 10) || ""
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
              value={newAddress.gender}
              onChange={(e) => onValueChange(e)}
            >
              <option value="">Cinsiyet Seçin</option>
              <option value="erkek">Erkek</option>
              <option value="kadın">Kadın</option>
            </Form.Select>
          </Form.Group>

          <Form.Group>
            <Form.Label>Resim</Form.Label>
            <Form.Control
              value={newAddress.image}
              onChange={(e) => onValueChange(e)}
              name="image"
              type="text"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Meslek</Form.Label>
            <Form.Control
              value={newAddress.job}
              onChange={(e) => onValueChange(e)}
              name="job"
              type="text"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              value={newAddress.email}
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
                  value={newAddress.phone}
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
                  value={newAddress.workPhone}
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
              value={newAddress.city}
              onChange={(e) => onValueChange(e)}
              name="city"
              type="text"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Adres</Form.Label>
            <Form.Control
              value={newAddress.address}
              onChange={(e) => onValueChange(e)}
              name="address"
              type="text"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>İş Adresi</Form.Label>
            <Form.Control
              value={newAddress.workAddress}
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
                  value={newAddress.instagram}
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
                  value={newAddress.twitter}
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
                  value={newAddress.facebook}
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
        <Button variant="primary" onClick={saveNewAddress}>
          Kaydet
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default NewAddressModal;
