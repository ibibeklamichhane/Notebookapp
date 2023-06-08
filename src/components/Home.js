import React from "react";
import AddNote from "./AddNote";



import Notes from "./Notes";
export default function Home(props) {
  const {showAlert} = props // show alert is passed in form of props
  return (
    <>
      
      <Notes showAlert={showAlert} />  {/* show alert as a props between the components*/} 
    </>
  );
}
