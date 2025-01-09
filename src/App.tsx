import { useState } from "react";
import Header from "./components/header";
import Question from "./features/question";
import Participants from "./features/participants";
import Wheel from "./features/wheel";

function App() {
  return (
    <div className="bg-black h-screen">
      <Header />
      <Question />
      <main className="flex px-10 mt-7">
        <div className="w-1/2">
          <Participants />
        </div>
        <div  className="w-1/2 h-full">
          <Wheel />
        </div>
      </main>
    </div>
  );
}

export default App;
