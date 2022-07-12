import React, { useState } from "react";

export default function Navbar() {
  const [currentPage, setCurrentPage] = useState("Home");

  function pageHandler(e) {
    // console.log(typeof e.target.id); String
    setCurrentPage(e.target.id);
    console.log(currentPage);
  }

  return (
    <div>
      <a onClick={pageHandler} id="Home">
        Home
      </a>
      <a onClick={pageHandler} id="KnowledgeBase">
        Knowledge Base
      </a>
      <a onClick={pageHandler} id="ServerStatus">
        Server Status
      </a>
      <a onClick={pageHandler} id="Chat">
        Chat
      </a>
      <a onClick={pageHandler} id="Documents">
        Documents
      </a>
      <a onClick={pageHandler} id="Login">
        Login
      </a>
    </div>
  );
}
