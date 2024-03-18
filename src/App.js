 
 import React,{useState} from "react";
 import MessageBox from "./Components/MessageBox";
import { Button, Container } from "react-bootstrap";

function App() {

  const [showMessageBox, setShowMessageBox] = useState(false);


  const messageBoxProps={
    title:"Registration ",
    message:"Registraion completed successfully",
    width:null ,
    height:null, 
    color:null ,
    border: null,
    borderColor:"yellow",
    backgroundColor: "lightgray",
    //position: topLeft || topRight||bottomLeft||bottomRight|| default:center
    // position:"bottomLeft",
    position:"bottomRight",
    // position:"topRight",
    // position:"topLeft",

    // position:"center",
    headerBackgroundColor:"gray",
    titleColor:"white",
  }

  return (
   <>
   
   <Button 
      className="bg-dark text-white b-0 mt-5"
      onClick={() => setShowMessageBox(true)}
      >Show Message</Button>
      {showMessageBox && (
        <MessageBox onClose={() => setShowMessageBox(false)} {...messageBoxProps} />
      )}
   
   </>
    
  );
}

export default App;