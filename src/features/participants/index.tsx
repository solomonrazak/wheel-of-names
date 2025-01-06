import React from 'react';

const Participants: React.FC = () => {
  return (
    <div className="w-full">
        <p className="text-center text-white mb-2 font-medium">Add Participant</p>
        <div className="flex gap-2 justify-center">
            <input className="bg-slate-900 w-[15rem] border border-white rounded-md pl-3 text-white" placeholder="Enter participant name"/>
            <button className="py-2 px-2 font-medium rounded-md text-white bg-slate-700">Add</button>
        </div>

    </div>
  )
}

export default Participants