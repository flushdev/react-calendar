import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import momentPlugin from "@fullcalendar/moment";

import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import "@fullcalendar/list/main.css";

import "./style.css";

const Calendar = (props) => {
  const [renderEvents, setRenderEvents] = useState(props.events);
  useEffect(() => {
    setRenderEvents(props.events);
  }, [props.events]);
  return (
    <FullCalendar
      dateClick={props.showPopup}
      eventLimit={true}
      eventClick={function(info) {
        props.showPopup(info);
      }}
      displayEventTime={true}
      slotLabelFormat={[
        { month: "long", year: "numeric" },
        { hour: "numeric", minute: "2-digit" },
      ]}
      eventTimeFormat={{
        hour: "2-digit",
        minute: "2-digit",
        meridiem: true,
      }}
      defaultView='dayGridMonth'
      buttonText={{
        today: "Today",
        prev: "Back",
        next: "Next",
        month: "Month",
        week: "Week",
        day: "Day",
        list: "Agenda",
      }}
      header={{
        left: "today,prev,next",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
      }}
      plugins={[
        momentPlugin,
        dayGridPlugin,
        timeGridPlugin,
        interactionPlugin,
        listPlugin,
      ]}
      // selectable={true}
      events={renderEvents}
      nowIndicator={true}
      eventRender={function(list) {
        if (list.view.type === "listWeek") {
          list.el.style.display = "flex";
          list.el.style.flexDirection = "row";
          list.el.innerHTML += list.event.extendedProps.description
            ? `<td class="fc-list-item-description fc-widget-content">
              ${list.event.extendedProps.description}
              </td>`
            : `<td class="fc-list-item-description fc-widget-content"></td>`;
        }
      }}
    />
  );
};

const mapStateToProps = (state) => ({
  events: state.calendar,
});

export default connect(mapStateToProps)(Calendar);
