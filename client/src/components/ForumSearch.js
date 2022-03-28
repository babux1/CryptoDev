import React, { useState } from "react";

function ForumSearch({searchTerm, onSearchChange}) {
  // const [search, setSearch] = useState("");
  return (
    <div className="search">
      <form>
        <label htmlFor="searchbox">Search the forum:{" "}</label>
          <input
            className="forum-search"
            type="text"
            id="searchbox"
            placeholder="Enter search here..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
          />
          {/* <button type="submit">Search</button> */}
      </form>
    </div>
  );
}

export default ForumSearch;
