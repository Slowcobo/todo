import React, { useState, createContext } from "react";
import defaultTags from "../defaultTags";

export const TagsContext = createContext();

export function TagsProvider(props) {
  const [tags, setTags] = useState(defaultTags);

  return (
    <TagsContext.Provider value={{ tags, setTags }}>
      {props.children}
    </TagsContext.Provider>
  );
}
