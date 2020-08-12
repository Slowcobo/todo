import React, { useState } from "react";
import Chip from "@material-ui/core/Chip";
import defaultTags from "./defaultTags";

export default function TagList({ tags, setTags }) {
  // Add tag to the todo
  const addTag = (tag) => {
    setTags([...tags, tag]);
  };

  // Remove tag from the todo
  const removeTag = (tagId) => {
    const newTags = tags.filter((tag) => tag.id !== tagId);
    setTags(newTags);
  };

  const handleTagClick = (clickedTag) => {
    // See if tag was already added
    const tagIndex = tags.findIndex((tag) => tag.id === clickedTag.id);
    // If not, add it to the tag list
    if (tagIndex === -1) addTag(clickedTag);
    // Otherwise remove it
    else {
      removeTag(clickedTag.id);
    }
  };

  return (
    <div>
      {tags.map((tag) => (
        <Chip
          key={tag.id}
          label={tag.label}
          onDelete={() => removeTag(tag.id)}
        />
      ))}
    </div>
  );
}
