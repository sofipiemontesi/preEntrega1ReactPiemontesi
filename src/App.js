import React from "react";
import NavBar from "./components/navbar/NavBar.js";
import ItemListContainer from "./components/navbar/ItemListContainer.js";

const App = ()=>{
  /*const ItemListContainer = "los mejores jeans";*/
  return (
  <>
  <NavBar greeting={ItemListContainer}/>
  <ItemListContainer/>;
  </>
  )
}
export default App