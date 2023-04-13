import { Link } from "react-router-dom";
import { useState } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import './signin.css';
const SearchBus = ({ handleAddForm }) => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const handleChange1 = ({ target }) => {
    setFrom(target.value);
  };
  const handleChange2 = ({ target }) => {
    setTo(target.value);
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
  console.log("fiter", from);
  console.log("asd", to);

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
            onChange={handleChange1}
          >
            <option value="none" selected hidden>FROM</option>
            <option value="LNMIIT">LNMIIT</option>
            <option value="Narayan Singh Circle">Narayan Singh Circle</option>
            <option value="Raja Park">Raja Park</option>
            <option value="Ajmeri Gate">Ajmeri Gate</option>
          </select>
        </div>
        <div className=" border-[1px]">
        {/* <div className="icon"><i class="fa-solid fa-location-dot" style="color: #298f5e;"></i></div> */}
          <select
            className="h-[50px] w-[250px] px-4 text-xl"
            type="text"
            placeholder="TO"
            value={to}
            onChange={handleChange2}
          >
          <option value="none" selected hidden>TO</option>
            <option value="Ajmeri Gate">Ajmeri Gate</option>
            <option value="Narayan Singh Circle">Narayan Singh Circle</option>
            <option value="Raja Park">Raja Park</option>
            <option value="LNMIIT">LNMIIT</option>
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
