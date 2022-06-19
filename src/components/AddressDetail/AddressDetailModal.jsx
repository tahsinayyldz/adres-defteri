import React from "react";
import { Modal, Button } from "react-bootstrap";
import { calculateAge } from "../../functions/calculateAge";

import "./AddressDetail.css";

const AddressDetailModal = (props) => {
  const { address, show, close } = props;
  return (
    <Modal show={show} onHide={close}>
      <Modal.Header closeButton>
        <Modal.Title>Detaylar</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="address_card_col">
          <div className="address_card_image_div">
            <img
              className="address_card_image"
              src={
                address.image ||
                "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
              }
            />
          </div>
          <br />
          <span className="address_card_title">{`${address.name}  ${address.surname}`}</span>
          <span className="address_card_text">{`Şehir: ${address.city}`}</span>
          <span className="address_card_text">{`Meslek: ${address.job}`}</span>
          <span className="address_card_text">{`Doğum Tarihi: ${new Date(
            address.birthDay
          ).toLocaleDateString()} - ${calculateAge(address.birthDay)}`}</span>
          <span className="address_card_text">{`Cinsiyet: ${address.gender}`}</span>
          <br />
          <span className="address_card_text">{`Email: ${address.email}`}</span>
          <span className="address_card_text">{`Telefon: ${address.phone}`}</span>
          <span className="address_card_text">{`İş Telefonu: ${address.workPhone}`}</span>
          <br />
          <span className="address_card_text">{`Adres: ${address.address}`}</span>
          <span className="address_card_text">{`İş Adresi: ${address.workAddress}`}</span>
          <br />
          <span className="address_card_text">{`instagram: ${address.instagram}`}</span>
          <span className="address_card_text">{`twitter: ${address.twitter}`}</span>
          <span className="address_card_text">{`facebook: ${address.facebook}`}</span>{" "}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={close}>
          Kapat
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddressDetailModal;
