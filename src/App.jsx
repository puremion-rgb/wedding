import React from "react";
import Hero from "./components/Hero";
import Greeting from "./components/Greeting";
import DdayHero from "./components/DdayHero";
import Calendar from "./components/Calendar";
import Family from "./components/Family";
import Timeline from "./components/Timeline";
import Gallery from "./components/Gallery";
import Location from "./components/Location";
import Account from "./components/Account";
import MessageBoard from "./components/MessageBoard";
import Information from "./components/Information";
import Rsvp from "./components/Rsvp";
import Closing from "./components/Closing";
import "./index.css";

export default function App() {
  return (
    <div className="app-wrapper">
      <Hero />
      <Greeting />
      <DdayHero />
      <Calendar />
      <Family />
      <Timeline />
      <Gallery />
      <Location />
      <Account />
      <MessageBoard />
      <Information />
      <Rsvp />
      <Closing />
    </div>
  );
}
