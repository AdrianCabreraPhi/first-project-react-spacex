import "./App.css";
import {LaunchList} from './components/LaunchList';
import {LaunchDetails} from './components/LaunchDetails'
import { Routes, Route } from "react-router-dom";

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LaunchList />} />
        <Route path="launch/:launchId" element={<LaunchDetails />} />
      </Routes>
    </>
  );
}
