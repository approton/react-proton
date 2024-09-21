const parent = React.createElement(
    "div", 
    {id: "parent"}, 
    [
        React.createElement("div", {id: "child"},
        [ 
            React.createElement("h1", {},"Hello from First Child of  DIV"),
            React.createElement("h2", {}, "Hello World from React")
        ]
    ),
    React.createElement("div", {id: "child2"},
        [ 
            React.createElement("h1", {},"Hello from Second child of DIV"),
            React.createElement("h2", {}, "Hello World from React")
        ])
    ]
);

const heading = React.createElement(
    "h1", 
    {id: "heading"}, 
    "Hello World from React!"
);
//console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
//root.render(heading);

console.log("Rendering from Extrernal File");