import { useState } from "react";
import Header from "./components/header";
import Question from "./features/question";
import Participants from "./features/participants";
import Wheel from "./features/wheel";

function App() {

  const [participants, setParticipants] = useState<string[]>([]);
  const [colors, setColors] = useState<string[]>([])

  const handleUpdateParticipants = (newParticipants: string[]) => {
    setParticipants(newParticipants)
  }
  return (
    <div className="bg-black h-screen">
      <Header />
      <Question />
      <main className="flex px-10 mt-7">
        <div className="w-1/2">
          <Participants onUpdateParticipants={handleUpdateParticipants}/>
        </div>
        <div  className="w-1/2 h-full">
          <Wheel participants={participants} colors={colors}/>
        </div>
      </main>
    </div>
  );
}

export default App;
