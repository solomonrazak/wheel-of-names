import React, { useState } from "react";

const Participants: React.FC = (
  ) => {
  const [participant, setParticipant] = useState<string>("");
  const [names, setNames] = useState<string[]>([]);
  

 const handleAddName = () => {
    if(participant.trim() !== "" && names.length < 5){
        setNames([...names, participant.trim()]);
        setParticipant("");
    }
 }

 const handleRemoveName = (index: number) => {
    setNames(names.filter((_, i) => i !== index));
  };

  return (
    <div className="w-full">
      <p className="text-center text-white mb-2 font-medium">Add Participant</p>
      <div className="flex gap-2 justify-center">
        <input
          className="bg-slate-900 w-[15rem] border border-white rounded-md pl-3 text-white"
          placeholder="Enter participant name"
          type="text"
          onChange={(e) => setParticipant(e.target.value)}
          value={participant}
        />
        <button className="py-2 px-2 font-medium rounded-md text-white bg-slate-700" onClick={handleAddName}>
          Add
        </button>
      </div>
      <h1 className="text-center font-medium text-white pt-3">Participants</h1>
      <div className="flex gap-2">
        <button className="py-2 px-2 font-medium rounded-md text-white bg-slate-700">
          Shuffle
        </button>
        <button className="py-2 px-2 font-medium rounded-md text-white bg-slate-700">
          Sort
        </button>
      </div>
      <ul>
        {names.map((name, index) => (
          <div key={index} className="flex gap-2 mb-2">
            <div className="bg-white w-[180px] p-1 rounded-md border border-slate-900">
              <p className="text-center font-medium text-[20px]">{name}</p>
            </div>
            <button className="py-2 px-3 font-medium rounded-md text-white bg-slate-700" onClick={() => handleRemoveName(index)}>Del</button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Participants;
