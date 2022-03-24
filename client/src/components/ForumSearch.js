import React, { useState } from "react";

function ForumSearch() {
  const [search, setSearch] = useState("");
  return (
    <div className="search">
      <form>
        <label>
          Search the forum:{" "}
          <input
            className="forum-search"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Enter search here..."
          ></input>
        </label>
      </form>
    </div>
  );
}

export default ForumSearch;
