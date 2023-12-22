const container=React.createElement(
    "div",
    {
        id:"Heading1"
        
    },
    "I am in h1 tag",
    React.createElement(
        "div",
        {id:"Heading2"},
        "I am in h2 tag"
    )
)
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(container);

