function App() {
  //JSX : javascript XML
  // A javascript function which returas a html element



  return (
    <div>
      <h1 style={ {color:"red",backgroundColor :"green"}}> I am app.js</h1>
      <p style={{color:"blue"}}> The javascript function returning the html element :: JSX code</p>
      <Func1/>
     

    </div>
  );
}

ReactDOM.render(<App></App>, document.getElementById("root"));
