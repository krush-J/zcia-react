import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PostalCode = () => {
  const navigate = useNavigate();
  const [PostalCode, setPostalCode] = useState("");

  const getInfo = () => {
    const regex = /^\d{6}$/;
    if (!regex.test(PostalCode))
      alert(
        "Post code should be of length 6 only and contain all the digits!"
      );
    else navigate(`/info/${PostalCode}`);
  };

  return (
    <div data-aos="flip-left" className="flex items-center justify-center w-full min-h-screen">
      <div>
        <h1 className="leading-7 pb-2 font-bold">Postal Code</h1>
        <div className="flex min-w-[250px]">
          <div>
            <input
              className="border border-blue-400 border-r-0 rounded w-[150px] text-center sm:text-start sm:w-[300px] p-2 focus:outline-none"
              type="text"
              placeholder="XXXXXX"
              value={PostalCode}
              onChange={(e) => setPostalCode(e.target.value)}
            />
          </div>
          <div>
            <button
              onClick={getInfo}
              className="border bg-blue-400 text-white border-l-0 p-[9px] -mt-[1px] -ml-3 rounded hover:cursor-pointer"
            >
              Click Here
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostalCode;
