const message = "Hello from React Script by using React 17!!!";

// const div = document.querySelector(".container");
// div.innerHTML = "<h1>${message}</h1>";

//React 18 Code
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<h1>{message}</h1>);

//React 17 need to render
ReactDOM.render(<h1>{message}</h1>, document.querySelector(".container"));
