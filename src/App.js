import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { addressData } from "./data/addressData";
import AddressList from "./components/AddressList/AddressList";
import Filter from "./components/Filter/Filter";
import { filterAddresses } from "./functions/filterFunction";
import NewAddressModal from "./components/NewAddress/NewAddressModal";

function App() {
  const [addresses, setAddresses] = useState(addressData);

  const [search, setSearch] = useState("");
  const [gender, setGender] = useState("");

  const [newAddressShow, setNewAddressShow] = useState(false);

  const closeNewAddress = () => {
    setNewAddressShow(false);
  };

  return (
    <div>
      <Filter
        search={search}
        setSearch={setSearch}
        gender={gender}
        setGender={setGender}
        onNewClick={() => setNewAddressShow(true)}
      />
      <AddressList
        filterAddresses={filterAddresses(
          addresses,
          search.toLowerCase(),
          gender
        )}
        addresses={addresses}
        setAddresses={setAddresses}
      />
      <NewAddressModal
        addresses={addresses}
        setAddresses={setAddresses}
        show={newAddressShow}
        close={closeNewAddress}
      />
    </div>
  );
}

export default App;
