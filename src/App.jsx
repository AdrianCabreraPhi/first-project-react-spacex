import { useState, useEffect } from "react";
import "./App.css";
import { Header } from "./components/header";
import { LaunchItem } from "./components/LaunchItem";
import * as API from "./services/launches";


export function App() {
  
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    API.getAllLaunches().then(setLaunches);
  }, []);

  return (
    <>
      <Header/>
      <section>
        {launches.map((launch) => (
          <LaunchItem key={launch.flight_number} {...launch} />
        ))}
      </section>
    </>
  );
}


