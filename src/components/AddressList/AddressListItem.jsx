import React, { useState } from "react";
import { calculateAge } from "../../functions/calculateAge";
import UpdateAddressModal from "../UpdateAddress/UpdateAddressModal";
import "./Address.css";
import AddressDetailModal from "../AddressDetail/AddressDetailModal";
import AskForDeleteModal from "../AskForDeleteModal/AskForDeleteModal";

const AddressListItem = (props) => {
  const { address, addresses, setAddresses } = props;

  const [detailShow, setDetailShow] = useState(false);
  const [updateShow, setUpdateShow] = useState(false);
  const [deleteShow, setDeleteShow] = useState(false);
  const [updatedAddress, setUpdatedAddress] = useState(address);

  const closeDetail = () => {
    setDetailShow(false);
  };

  const closeUpdate = () => {
    setUpdateShow(false);
  };

  const closeDelete = () => {
    setDeleteShow(false);
  };

  const updateFunction = () => {
    if (
      updatedAddress.name !== "" &&
      updatedAddress.surname !== "" &&
      updatedAddress.job !== "" &&
      updatedAddress.city !== "" &&
      updatedAddress.phoneNumber !== ""
    ) {
      const updatedAddressList = addresses.map((x) => {
        if (x.id == address.id) {
          return updatedAddress;
        }
        return x;
      });
      setAddresses(updatedAddressList);
      closeUpdate();
    } else {
      alert("Ad, soyad, meslek, şehir ve telefon numarası boş bırakılamaz!");
    }
  };

  const deleteFunction = () => {
    const updatedAddressList = addresses.filter((x) => x.id != address.id);
    setAddresses(updatedAddressList);
    closeDelete();
  };

  return (
    <div className="address_card">
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
        <div className="address_card_row_a">
          <span className="address_card_title">{`${address.name}  ${address.surname}`}</span>
          <div className="address_card_row_b">
            <button
              onClick={() => setDeleteShow(true)}
              className="address_edit_delete"
            >
              ✗
            </button>
            <button
              onClick={() => setUpdateShow(true)}
              className="address_edit_btn"
            >
              &#9998;
            </button>
            <button
              onClick={() => setDetailShow(true)}
              className="address_edit_btn"
            >
              ☰
            </button>
          </div>
        </div>

        <span className="address_card_text">{`${address.city}`}</span>
        <span className="address_card_text">{`${address.job}`}</span>
        <span className="address_card_text">{`${address.phone}`}</span>
        <span className="address_card_text">{`${new Date(
          address.birthDay
        ).toLocaleDateString()} - ${calculateAge(address.birthDay)}`}</span>
      </div>
      <AddressDetailModal
        show={detailShow}
        close={closeDetail}
        address={address}
      />
      <UpdateAddressModal
        updatedAddress={updatedAddress}
        setUpdatedAddress={setUpdatedAddress}
        show={updateShow}
        close={closeUpdate}
        updateFunction={updateFunction}
      />
      <AskForDeleteModal
        name={address.name + " " + address.surname}
        show={deleteShow}
        close={closeDelete}
        deleteFunction={deleteFunction}
      />
    </div>
  );
};

export default AddressListItem;
