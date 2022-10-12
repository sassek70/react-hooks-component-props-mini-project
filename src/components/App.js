import React from "react";
import blogData from "../data/blog";
import About from "./About";
import ArticleList from "./ArticleList";
import Header from "./Header";

console.log(blogData);

function App() {
  const { id, name, posts, image, about } = blogData
  return (
    <div className="App">
     <Header name={ name }/>
     <About image={ image} about ={ about }/>
     <ArticleList posts={ posts }  id={ id } 
    //  title={ title } date={ date } preview={ preview }
     />
     
    </div>
  );
}

export default App;
