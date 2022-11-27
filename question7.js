// What do you need to add to the second argument of a useEffect Hook to limit it
// to running only on the first render? [1 mark]



// use Effect hook represents the life cycle methords that were used in class component style of react but with the
// introducation of the funcational components there was a need of those life cycle methords that's why we can make the useEffect dependant based on the second paramenter
import { useState, useEffect } from "react";
 import ReactDOM from "react-dom/client";

 function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(getData())
   }, [] );

   return <DisplayData data={data} />;
 }

 const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(<App />);
