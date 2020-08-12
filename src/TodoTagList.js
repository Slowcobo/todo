import React from "react";
import Chip from "@material-ui/core/Chip";

export default function TodoTagList({ tags, setTags }) {
  // Remove tag from the todo
  const removeTag = (tagId) => {
    const newTags = tags.filter((tag) => tag.id !== tagId);
    setTags(newTags);
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
