import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BusCard from "./BusCard";
import './s.css'
import "./signin.css";
const SearchBus = () => {

  const busTimeTable = [


    // weekdays
    {key: 'b1', source: 'Ajmeri Gate', destination: 'LNMIIT',      time: '7:00AM',     day:'weekday'},
    {key: 'b2', source: 'Ajmeri Gate', destination: 'LNMIIT',      time: '8:00AM',     day:'weekday'},
    {key: 'b3', source: 'LNMIIT',      destination: 'Ajmeri Gate', time: '10:00AM',    day:'weekday'},
    {key: 'b4', source: 'Ajmeri Gate', destination: 'LNMIIT',      time: '11:45AM',    day:'weekday'},
    {key: 'b5', source: 'LNMIIT',      destination: 'Ajmeri Gate', time: '1:30PM',     day:'weekday'},
    {key: 'b6', source: 'Ajmeri Gate', destination: 'LNMIIT',      time: '3:45PM',     day:'weekday'},
    {key: 'b7', source: 'LNMIIT',      destination: 'Ajmeri Gate', time: '5:45PM',     day:'weekday'},
    {key: 'b8', source: 'LNMIIT',      destination: 'Ajmeri Gate', time: '6:15PM',     day:'weekday'},
    {key: 'b9', source: 'Ajmeri Gate', destination: 'LNMIIT',      time: '7:00PM',     day:'weekday'},
    {key: 'b10', source: 'LNMIIT',      destination: 'Raja Park',   time: '8:00PM',     day:'weekday'},
    {key: 'b11', source: 'Ajmeri Gate', destination: 'LNMIIT',      time: '8:30PM',     day:'weekday'},
    {key: 'b12', source: 'Raja Park',   destination: 'LNMIIT',      time: '9:15PM',     day:'weekday'},

    //weekends
    {key: 'b13', source: 'Ajmeri Gate', destination: 'LNMIIT',      time: '8:00AM',     day:'weekend'},
    {key: 'b14', source: 'LNMIIT',      destination: 'Ajmeri Gate', time: '8:30AM',     day:'weekend'},
    {key: 'b15', source: 'LNMIIT',      destination: 'Raja Park',   time: '10:30PM',    day:'weekend'},
    {key: 'b16', source: 'Ajmeri Gate', destination: 'LNMIIT',      time: '10:30AM',    day:'weekend'},
    {key: 'b17', source: 'LNMIIT',      destination: 'Ajmeri Gate', time: '1:30PM',     day:'weekend'},
    {key: 'b18', source: 'LNMIIT',      destination: 'Ajmeri Gate', time: '3:00PM',     day:'weekend'},
    {key: 'b19', source: 'LNMIIT',      destination: 'Raja Park',   time: '4:00PM',     day:'weekend'},
    {key: 'b20', source: 'LNMIIT',      destination: 'Ajmeri Gate', time: '5:00PM',     day:'weekend'},
    {key: 'b21', source: 'Raja Park',   destination: 'LNMIIT',      time: '5:15PM',     day:'weekend'},
    {key: 'b22', source: 'LNMIIT',      destination: 'Ajmeri Gate', time: '6:15PM',     day:'weekend'},
    {key: 'b23', source: 'Ajmeri Gate', destination: 'LNMIIT',      time: '6:45PM',     day:'weekend'},
    {key: 'b24', source: 'LNMIIT',      destination: 'Raja Park',   time: '7:45PM',     day:'weekend'},
    {key: 'b25', source: 'Ajmeri Gate', destination: 'LNMIIT',      time: '8:30PM',     day:'weekend'},
    {key: 'b26', source: 'Raja Park',   destination: 'LNMIIT',      time: '9:15PM',     day:'weekend'}

    
  ]

  const locations = ['LNMIIT', 'RajaPark', 'Ajmeri gate'];

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate]=useState('2015-03-25T12:00:00-06:30')
  const [busData, setBusData]=useState(null)
  const [places, setPlaces] = useState({
    LNMIIT: [true, true],
    // "Narayan Singh Circle": [true, true],
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
  const handleChangeDate = ((event) => {
    setDate(event.target.value)
    // console.log(date)
  });

  const handleClick = () => {

    const data = {
      to: to,
      from: from,
      date: new Date(date),
    }
    setBusData(data)

    setFrom("");
    setTo("");
    setDate('')
  };
  return (
    <div className={`w-full`}>
      {/* <h1 className="text-[40px] text-black-900 pt-[90px] flex justify-center">
        Book your Tickets ASAP!
      </h1> */}
      <div className="form w-full h-[140px]  mt-[150px] ">
        <div className="input ">
          <select
            className="h-[50px] w-[250px] px-10 text-xl"
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
        <div className="input ">
          {/* <div className="icon"><i class="fa-solid fa-location-dot" style="color: #298f5e;"></i></div> */}
          <select
            className="h-[50px] w-[250px] px-10 text-xl"
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
        <div className="input ">
          <input
            className="h-[50px] w-[250px] px-10 text-xl outline-none"
            type="date"
            placeholder="DATE"
            onChange={handleChangeDate}
          />
        </div>


        <div>


            <button
              className="border-[2px] fontc border-green-800 mx-4 font-semibold text-xl rounded-xl h-[50px] w-[150px] searchbusbutton"
              onClick={handleClick}
              

            >
              Search Buses

            </button>

        </div>
      </div>
      
      {busData !== null && <BusCard data={busData} timeTable={busTimeTable} />}
    </div>
  );
};
export default SearchBus;
