import React, {useState} from "react"
import Map from "../components/Map"
import {MyNewWindow} from "../components/MyNewWindow"

export default () => {
  const [isPopOut, setIsPopOut] = useState(false);

  return (
    <>
      <Map />
      <button
        style={{
          marginBottom: "20px" ,
          padding:'10px',
          borderRadius: '5px',
        }}
        onClick={() => {
          setIsPopOut(!isPopOut)
        }}
      >
        Pop Out google map:{isPopOut.toString()}
      </button>
      {isPopOut && (
        <MyNewWindow>
          <Map />
        </MyNewWindow>
      )}
    </>
  )
};
