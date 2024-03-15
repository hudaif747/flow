import React from "react";

const CalendarComponent: React.FC = () => {
  // const [events, setEvents] = useState([]);

  // useEffect(() => {
  //   const fetchEvents = async () => {
  //     try {
  //       await gapi.client.load("calendar", "v3");
  //       const response = await gapi.client.calendar.events.list({
  //         calendarId: "primary",
  //         timeMin: new Date().toISOString(),
  //         showDeleted: false,
  //         singleEvents: true,
  //         maxResults: 10,
  //         orderBy: "startTime",
  //       });

  //       setEvents(response.result.items);
  //     } catch (error) {
  //       console.error("Error fetching events:", error);
  //     }
  //   };

  //   gapi.load("client:auth2", () => {
  //     fetchEvents();
  //   });
  // }, []);

  return (
    // <div>
    //   <h2>Upcoming Events</h2>
    //   <ul>
    //     {events.map((event, index) => (
    //       <li key={index}>
    //         {event.summary} ({new Date(event.start.dateTime).toLocaleString()})
    //       </li>
    //     ))}
    //   </ul>
    // </div>
    <></>
  );
};

export default CalendarComponent;
