// import List from "./components/Dashboard/DashboardList";
// function App() {
// let lists = ["Movie Title", "Genre", "Forums"];
// const handleSelectedItem = (item:string, index:number) => {
// console.log(item, index);
// }
// return (
// <div>
    //
    // <List lists={lists} heading="List Group" onSelectItem={handleSelectedItem} />
    //
// </div>
// );
// }

import Alert from "./components/Popups/Alert";
import SuccessBtn from "./components/Clickables/SuccessBtn";
import { useState } from "react";

function App() {

const [alertVisible, setAlertVisible] =useState(false);

const print = () =>{
  setAlertVisible(true)
}
return (
<>
    {alertVisible && <Alert onClose={()=> setAlertVisible(false)}>hello World</Alert>}
    <SuccessBtn onClick={print} color="secondary">Make Alert Appear</SuccessBtn>
</>
)
}

export default App;
