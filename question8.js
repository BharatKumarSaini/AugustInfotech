// Complete this component which uses properties. [1 mark]
 function Person(props) {
   return <h1>Hi, I'm {props.name}!</h1>;
 }

const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(<Person name="Jesse"/>);
