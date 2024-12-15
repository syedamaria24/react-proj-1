import React from "react";
import ReactDom from "React-dom/client";

const RootDiv = document.getElementById("root");

ReactDom.createRoot(RootDiv).render(
  <div>
    <h1>Welcome to React!</h1>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCQKodBxML0ziQaSQPb13eQ3NAHp_-i38QqYjLoj94pfca28jfVQTEafgqCZ_KfQWDV6g&usqp=CAU" alt="" />
    <p> <b>React is a popular JavaScript library for building user interfaces, particularly single-page applications (SPAs). It’s developed and maintained by Facebook.</b></p>
    <h2>Key-Points</h2>
      <h5>* Component-Based Architecture</h5>
      <p>UI is divided into reusable components, each managing its own state and logic.
        Components can be functional or class-based.</p>
       <h5>* Virtual DOM</h5>
       <p>React uses a lightweight copy of the real DOM to optimize updates and rendering.</p>
       <h5>* Declarative Syntax</h5>
       <p>Write declarative code to describe "what" the UI should look like, and React handles the "how."</p>
       <h5>* State and Props</h5>
       <p>State: Internal data managed by the component.
          Props: Data passed from parent to child components.</p>
       <h5>* Unidirectional Data Flow</h5>
        <p>Data flows in a single direction (parent to child), making the application predictable.</p>
       <h5>* React Hooks (Functional Components)</h5>
       <p>Introduced in React 16.8 to manage state and lifecycle in functional components. Examples: useState, useEffect.</p>
       <h5>* React Ecosystem</h5>
       <p>Commonly used with tools like Redux, React Router, and Context API for state management and routing.</p>
  </div>
);