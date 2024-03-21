import { Calendar } from "@/shadcn/components/ui/calendar";
import { DnDType, ITodoItem } from "@/types/appTypes";
import { useState } from "react";
import { useDrop } from "react-dnd";

const CalendarCustom = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  // const [events, setEvents] = useState<any[]>([]);
  // const [eventDates, setEventDates] = useState<Date[]>([]);
  // const accessToken = localStorage.getItem("authToken");
  // const clientId = import.meta.env.VITE_FLOW_GOOGLE_CLIENT_ID;

  // useEffect(() => {
  //   const initClient = () => {
  //     gapi.client
  //       .init({
  //         clientId: clientId,
  //         discoveryDocs: [
  //           "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
  //         ],
  //         scope: "https://www.googleapis.com/auth/calendar",
  //       })
  //       .then(() => {
  //         // Set the access token
  //         if (accessToken) gapi.client.setToken({ access_token: accessToken });

  //         // Fetch the calendar events
  //         gapi.client.calendar.events
  //           .list({
  //             calendarId: "primary",
  //             timeMin: new Date().toISOString(),
  //             showDeleted: false,
  //             singleEvents: true,
  //             maxResults: 10,
  //             orderBy: "startTime",
  //           })
  //           .then((response: any) => {
  //             // setEvents(response.result.items);
  //             // Extract and set the dates of the events
  //             // const dates = response.result.items.map(
  //             //   (event: any) =>
  //             //     new Date(event.start.dateTime || event.start.date)
  //             // );
  //             // setEventDates(dates);
  //           });
  //       });
  //   };

  //   gapi.load("client:auth2", initClient);
  // }, [accessToken]);

  const [{ isOver, canDrop }, dropRef] = useDrop(() => ({
    accept: DnDType.ITEM,
    drop: (item: ITodoItem, monitor) => {
      if (monitor) {
        console.log(item);
        // addTodoToBasket(basket.title, item.id);
        // removeGlobalToDo(item.id);
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  return (
    <div ref={dropRef}>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className={`rounded-md border transition ease-in duration-150 ${canDrop ? "border-2 border-red-700" : ""} ${isOver ? "scale-105" : ""}`}
      />
    </div>
  );
};

export default CalendarCustom;
