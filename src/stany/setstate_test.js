import React, { useState } from "react";

const NewComponent = () => {
  let [licznik, aktualizuj] = useState(0);
  let [etykietka, zmienTxT] = useState("tu będzie dynamiczny tekst");
};

function setData() {
  console.log("Aktualny stan: ", { licznik });
  aktualizuj(licznik + 1);
  if (etykietka === "Zst Rzeszów") {
    zmienTxT("Programowanie");
  } else {
    zmienTxT("Zst Rzeszów");
  }

  return (
    <div>
      <p>Wartość licznika: {licznik}</p>
      <button onClick={setData}>Inkrementacja</button>
      <p>Stan obiektu: </p>
      <p>{etykietka}</p>
    </div>
  );
}
export default NewComponent;
