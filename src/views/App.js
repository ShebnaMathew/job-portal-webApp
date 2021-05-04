import {Provider} from "react-redux"; // Automatically passes the store to all child components
import store from "../redux/store"; // The store and main reducer
import {useSelector} from "react-redux";
import JobPortal from "../components/JobPortal";

//import { useEffect } from "react";

/*
const requestActivity = async (url) => {
  let response = await fetch(url);
  let activityData = await response.json();
  return activityData
}
*/

const App = () => {
  
  
  /*
  useEffect(() => {
    requestActivity("https://jobs.github.com/positions.json?description=python").then(current => {
      console.log(current)
    })
  },[])
  */

  return(
  <Provider store={store}>
      <JobPortal />
  </Provider>
  )
}
export default App;
