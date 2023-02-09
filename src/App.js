import React from "react";
import NavBar from "./components/navbar/NavBar.js";
import ItemListContainer from "./components/navbar/ItemListContainer.js";

const App = ()=>{
  const itemListContainer = "Especialistas en denim";
  return (
  <>
  <NavBar />
  <ItemListContainer greeting={itemListContainer}/>
  </>
  )
}
export default App