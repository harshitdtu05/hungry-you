

// <div id = "parent">
//   <div id = "child1">
//     "I am h1"
//     "I am h2"
//   </div>
//   <div id = "child2">
//     "I am h1"
//     "I am h2"
//   </div>
// </div> 

    const parent = React.createElement("div", {id : "parent"},[React.createElement("div", {id : "child1"},[React.createElement("H1", {},"I am H1"), React.createElement("H2", {},"I am H2")]), React.createElement("div", {id : "child2"},[React.createElement("H1", {},"I am H1"), React.createElement("H2", {},"I am H2")])])

// const heading = React.createElement("h1", {id : "heading"}, "Hello World from React!");
// id used to add attritube to the tags ̰ ̰ ̰ ̰ ̰ ̰
    const root = ReactDOM.createRoot(document.getElementById("root"));

    root.render(parent);
