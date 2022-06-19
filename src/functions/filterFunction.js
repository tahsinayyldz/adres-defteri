export const filterAddresses = (addresses, search, gender) => {
  let filteredAddresses = addresses;

  if (search != "") {
    filteredAddresses = addresses.filter(
      (x) =>
        x.name.toLowerCase().includes(search) ||
        x.surname.toLowerCase().includes(search) ||
        (x.name.toLowerCase() + " " + x.surname.toLowerCase()).includes(
          search
        ) ||
        x.city.toLowerCase().includes(search) ||
        x.job.toLowerCase().includes(search) ||
        x.email.toLowerCase().includes(search)
    );
  }

  if (gender != "") {
    filteredAddresses = filteredAddresses.filter((x) => x.gender == gender);
  }

  return filteredAddresses;
};
