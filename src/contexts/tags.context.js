import React, { useState, createContext } from "react";
import defaultTags from "../defaultTags";

export const TagsContext = createContext();

export function TagsProvider(props) {
  const [tagList, setTagList] = useState(defaultTags);

  return (
    <TagsContext.Provider value={{ tagList, setTagList }}>
      {props.children}
    </TagsContext.Provider>
  );
}
