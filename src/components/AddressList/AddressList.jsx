import React, { useState } from "react";
import AddressListItem from "./AddressListItem";
import "./Address.css";

const AddressList = (props) => {
  return (
    <div className="address_list">
      {props.filterAddresses.map((x) => (
        <AddressListItem
          key={x.id}
          address={x}
          addresses={props.addresses}
          setAddresses={props.setAddresses}
        />
      ))}
    </div>
  );
};

export default AddressList;
