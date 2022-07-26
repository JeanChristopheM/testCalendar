import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import { events } from "./events";

function App() {
  // Local State
  // -----------
  const [value, setValue] = useState(new Date());
  const [theme, setTheme] = useState("-dark");
  const [rEvents, setREvents] = useState([]);

  // Handlers
  // --------
  const handleSwitchTheme = () => {
    setTheme((old) => (old === "-dark" ? "-light" : "-dark"));
  };
  const onChange = (nextValue) => {
    setValue(nextValue);
    console.log(nextValue);
  };
  const handleFillEvents = (args) => {
    const { date } = args;

    const rLocalEvents = events.filter(
      (e) => e.date.getTime() === date.getTime()
    );

    if (!rLocalEvents || rLocalEvents.length === 0) return;
    return (
      <div className="event">
        <div className="blip"></div>
        <div className="popup">
          <ul className="event--labels">
            {rLocalEvents.map((r) => (
              <li key={r.id}>{r.label}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  // Effects
  // -------
  useEffect(() => {
    if (!value) setREvents([]);
    else setREvents(events.filter((e) => e.date.getTime() === value.getTime()));
  }, [value, setREvents]);

  return (
    <div className="App">
      <div className="toggle">
        <button onClick={handleSwitchTheme}>Switch {theme} theme</button>
      </div>
      <div className={`calendarContainer theme${theme}`}>
        <Calendar
          onChange={onChange}
          locale="fr-FR"
          minDetail="year"
          tileContent={handleFillEvents}
          defaultValue={new Date()}
        />
      </div>

      <div className="resultsContainer">
        {rEvents.length !== 0 && (
          <>
            <p>
              Le {value.toLocaleString().slice(0, 10)} vous avez comme tâches :{" "}
            </p>
            <ul>
              {rEvents.map((r) => (
                <li>
                  {r.label} :{" "}
                  <a href={`entityType/${r.id}/details`}>taskId={r.id}</a>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
