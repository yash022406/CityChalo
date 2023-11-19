import "./buscard.css";
import busphoto from "../assets/bus-photo.avif";
import { firestore } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContextProvider, UserAuth } from "../context/AuthContext";
function BusCard({ data, timeTable }) {
  const {user} = UserAuth();
  const buTimeTable = [
    // weekdays
    {
      key: "b1",
      source: "Ajmeri Gate",
      destination: "LNMIIT",
      time: "7:00AM",
      day: "weekday",
    },
    {
      key: "b2",
      source: "Ajmeri Gate",
      destination: "LNMIIT",
      time: "8:00AM",
      day: "weekday",
    },
    {
      key: "b3",
      source: "LNMIIT",
      destination: "Ajmeri Gate",
      time: "10:00AM",
      day: "weekday",
    },
    {
      key: "b4",
      source: "Ajmeri Gate",
      destination: "LNMIIT",
      time: "11:45AM",
      day: "weekday",
    },
    {
      key: "b5",
      source: "LNMIIT",
      destination: "Ajmeri Gate",
      time: "1:30PM",
      day: "weekday",
    },
    {
      key: "b6",
      source: "Ajmeri Gate",
      destination: "LNMIIT",
      time: "3:45PM",
      day: "weekday",
    },
    {
      key: "b7",
      source: "LNMIIT",
      destination: "Ajmeri Gate",
      time: "5:45PM",
      day: "weekday",
    },
    {
      key: "b8",
      source: "LNMIIT",
      destination: "Ajmeri Gate",
      time: "6:15PM",
      day: "weekday",
    },
    {
      key: "b9",
      source: "Ajmeri Gate",
      destination: "LNMIIT",
      time: "7:00PM",
      day: "weekday",
    },
    {
      key: "b10",
      source: "LNMIIT",
      destination: "Raja Park",
      time: "8:00PM",
      day: "weekday",
    },
    {
      key: "b11",
      source: "Ajmeri Gate",
      destination: "LNMIIT",
      time: "8:30PM",
      day: "weekday",
    },
    {
      key: "b12",
      source: "Raja Park",
      destination: "LNMIIT",
      time: "9:15PM",
      day: "weekday",
    },

    //weekends
    {
      key: "b13",
      source: "Ajmeri Gate",
      destination: "LNMIIT",
      time: "8:00AM",
      day: "weekend",
    },
    {
      key: "b14",
      source: "LNMIIT",
      destination: "Ajmeri Gate",
      time: "8:30AM",
      day: "weekend",
    },
    {
      key: "b15",
      source: "LNMIIT",
      destination: "Raja Park",
      time: "10:30PM",
      day: "weekend",
    },
    {
      key: "b16",
      source: "Ajmeri Gate",
      destination: "LNMIIT",
      time: "10:30AM",
      day: "weekend",
    },
    {
      key: "b17",
      source: "LNMIIT",
      destination: "Ajmeri Gate",
      time: "1:30PM",
      day: "weekend",
    },
    {
      key: "b18",
      source: "LNMIIT",
      destination: "Ajmeri Gate",
      time: "3:00PM",
      day: "weekend",
    },
    {
      key: "b19",
      source: "LNMIIT",
      destination: "Raja Park",
      time: "4:00PM",
      day: "weekend",
    },
    {
      key: "b20",
      source: "LNMIIT",
      destination: "Ajmeri Gate",
      time: "5:00PM",
      day: "weekend",
    },
    {
      key: "b21",
      source: "Raja Park",
      destination: "LNMIIT",
      time: "5:15PM",
      day: "weekend",
    },
    {
      key: "b22",
      source: "LNMIIT",
      destination: "Ajmeri Gate",
      time: "6:15PM",
      day: "weekend",
    },
    {
      key: "b23",
      source: "Ajmeri Gate",
      destination: "LNMIIT",
      time: "6:45PM",
      day: "weekend",
    },
    {
      key: "b24",
      source: "LNMIIT",
      destination: "Raja Park",
      time: "7:45PM",
      day: "weekend",
    },
    {
      key: "b25",
      source: "Ajmeri Gate",
      destination: "LNMIIT",
      time: "8:30PM",
      day: "weekend",
    },
    {
      key: "b26",
      source: "Raja Park",
      destination: "LNMIIT",
      time: "9:15PM",
      day: "weekend",
    },
  ];
  //   console.log(to,from,date)
  // const d=date;
  // var day=date.getWeekDay();
  //   console.log(day)
  const getDayOfWeek = () => {
    if (data?.date) {
      const dateObj = new Date(data.date);
      const daysOfWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      const dayIndex = dateObj.getDay();
      const dayOfWeek = daysOfWeek[dayIndex];
      return dayOfWeek;
    }
    return "";
  };
  // console.log(data?.date)
  // console.log("BusCard Called: ",data)

  var day = getDayOfWeek();
  if (
    day === "Monday" ||
    day === "Tuesday" ||
    day === "Wednesday" ||
    day === "Thursday" ||
    day === "Friday"
  ) {
    day = "weekday";
  } else {
    day = "weekend";
  }
  
  const handleFormSubmit = async (e, id, user) => {
    e.preventDefault();
    try {
      console.log(user.displayName)
      // Store data in Firestore
      const docRef = await addDoc(collection(firestore, "bookings"), {
        data: buTimeTable[id],
        timestamp: serverTimestamp(),
        name: user.displayName,
        email: user.email, 
      });
      toast.success("Booked Successfully");
      console.log("Data stored successfully with ID:", docRef.id);
    } catch (error) {
      console.error("Error storing data:", error);
    }
    // try{
    //   redirect(`/account/${id}`)
    //   console.log('navigated');

    // }
    // catch (error) {
    //   console.error("Error storing data:", error);
    // }
  };

  return (
    <div>
      <div className="titles">
        <div className="available-buses">12 buses available</div>
        <div className="from">From</div>
        <div className="to">Destination</div>
        <div className="arrival-time">Arrival Time</div>
        <div className="duration">Duration</div>
        <div className="fare">Fare</div>
        <div className="seats-available">Seats available</div>
      </div>
      <ToastContainer />
      {timeTable.map((item, id) => {
        if (item.day === day) {
          return (
            <>
              <div className="buscard">
                <div className="data-bus bus-photo">
                  {" "}
                  <img src={busphoto} alt="" />{" "}
                </div>
                <div className="data-bus from-location">{item.source}</div>
                <div className="data-bus to-location">{item.destination}</div>
                <div className="data-bus arrival-time">{item.time}</div>
                <div className="data-bus duration">40min</div>
                <div className="data-bus fare">25 Rs</div>
                <div className="data-bus seats-availble sb">40 seats</div>
                <div className="button">
                  <button
                    className="btn btn-primary"
                    onClick={(e) => handleFormSubmit(e, id, user)}
                  >
                    Book Seats
                  </button>
                </div>
              </div>
            </>
          );
        }
      })}
    </div>
  );
}

export default BusCard;
