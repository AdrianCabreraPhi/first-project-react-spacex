import { LaunchItem } from "./LaunchItem";
import * as API from "../services/launches";
import { useState, useEffect } from "react";
import { Header } from "./header";

export function LaunchList() {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    API.getAllLaunches().then(setLaunches).catch(console.log);
  }, []);

  return (
    <>
    <Header />
      {!launches === 0 ? (
        <div>Loading...</div>
      ) : (
        <section>
          {launches.map((launch,idx) => (
            <LaunchItem position={idx} key={idx} {...launch} />
          ))}
        </section>
      )}
    </>
  );
}
