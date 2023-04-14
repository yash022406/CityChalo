import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./signin.css";
const SearchBus = ({ handleAddForm }) => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [places, setPlaces] = useState({
    LNMIIT: [true, true],
    "Narayan Singh Circle": [true, true],
    "Raja Park": [true, true],
    "Ajmeri Gate": [true, true],
  });

  const handleStartingDestChange = ({ target }) => {
    setFrom(target.value);

    const newPlacesState = { ...places };

    if (from !== "") {
      newPlacesState[from][0] = true;
    }

    newPlacesState[target.value][0] = false;
    setPlaces(newPlacesState);
  };

  const handleEndDestChange = ({ target }) => {
    setTo(target.value);
    const newPlacesState = { ...places };
    if (to !== "") {
      newPlacesState[to][1] = true;
    }
    newPlacesState[target.value][1] = false;
    setPlaces(newPlacesState);
  };

  const handleClick = () => {
    const data = {
      id: 1,
      from: from,
      to: to,
    };
    handleAddForm(data);
    setFrom("");
    setTo("");
  };
  return (
    <div className={`w-full`}>
      <h1 className="text-[40px] text-green-900 pt-[90px] flex justify-center">
        Book your Tickets ASAP!
      </h1>
      <div className="w-full h-[140px] flex justify-center mt-[150px] items-center">
        <div className=" border-[0.5px]">
          <select
            className="h-[50px] w-[250px] px-4 text-xl"
            type="text"
            placeholder="FROM"
            value={from}
            onChange={handleStartingDestChange}
          >
            <option value="none" selected hidden>
              FROM
            </option>
            {Object.keys(places).map((place) => {
              return (
                <option value={place} disabled={!places[place][0]}>
                  {place}
                </option>
              );
            })}
          </select>
        </div>
        <div className=" border-[1px]">
          {/* <div className="icon"><i class="fa-solid fa-location-dot" style="color: #298f5e;"></i></div> */}
          <select
            className="h-[50px] w-[250px] px-4 text-xl"
            type="text"
            placeholder="TO"
            value={to}
            onChange={handleEndDestChange}
          >
            <option value="none" selected hidden>
              TO
            </option>
            {Object.keys(places).map((place) => {
              return (
                <option value={place} disabled={!places[place][1]}>
                  {place}
                </option>
              );
            })}
          </select>
        </div>

        <div className=" border-[1px]">
          <input
            className="h-[50px] w-[250px] px-4 text-xl outline-none"
            type="date"
            placeholder="DATE"
          />
        </div>

        <div>
          {/* <Link to='/available_bus' > */}
          <Link to={`/available_bus?from=${from}&to=${to}`}>
            <button
              className="border-[2px] border-green-800 mx-4 font-semibold text-xl rounded-xl h-[50px] w-[150px] searchbusbutton"
              onClick={handleClick}
            >
              Search Buses
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default SearchBus;
