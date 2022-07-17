import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note"
import notes from "../notes.js"



function App() {
  return (
    <div>
      <Header />
      { notes.map(notePost => (
      <Note
        key={notePost.id}
        title={notePost.title}
        content={notePost.content} 
      />
      ))}
      <Footer />
    </div>
  );
}

export default App;
