import React, { useState } from "react";
import { FaRegEdit } from "react-icons/fa";

const Question: React.FC = () => {
  const [question, setQuestion] = useState<string>("what is your question?");
  const [editable, setEditable] = useState<boolean>(false);

  const handleClick = () => {
    setEditable(true);
  };

  return (
    <div>
      <div className="flex text-white justify-center pt-5 items-center gap-3">
        {!editable ? (
          <>
            <p className="text-[22px]">{question}</p>
            <FaRegEdit
              className="text-[22px] cursor-pointer"
              onClick={handleClick}
            />
          </>
        ) : (
          <input className="bg-slate-600 border-white border rounded-md w-[15rem] py-1 px-2" />
        )}
      </div>
    </div>
  );
};

export default Question;
