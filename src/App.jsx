import React from "react";
import Hero from "./components/Hero/Hero";
import Greeting from "./components/Greeting/Greeting";
import DdayHero from "./components/DdayHero/DdayHero";
import Calendar from "./components/Calendar/Calendar";
import Family from "./components/Family/Family";
import Timeline from "./components/Timeline/Timeline";
import Gallery from "./components/Gallery/Gallery";
import Location from "./components/Location/Location";
import Account from "./components/Account/Account";
import MessageBoard from "./components/MessageBoard/MessageBoard";
import Information from "./components/Information/Information";
import Rsvp from "./components/Rsvp/Rsvp";
import Closing from "./components/Closing/Closing";
import Qna from "./components/Qna/Qna";
import "./styles/global.css";

export default function App() {
  return (
    <div className="app-wrapper">
      <Hero />
      <Greeting />
      <DdayHero />
      <Calendar />
      <Family />
      <Timeline />
      <Qna />
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
