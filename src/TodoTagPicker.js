import React from "react";
import Dialog from "@material-ui/core/Dialog";
import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core/styles";
import defaultTags from "./defaultTags";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    padding: theme.spacing(1),
  },
}));

export default function TodoTagPicker({
  showTagPicker,
  setShowTagPicker,
  tags,
  setTags,
}) {
  const classes = useStyles();

  const addTag = (tag) => {
    // Add tag to todo and close picker
    setTags([...tags, tag]);
    setShowTagPicker(false);
  };

  const availableTags = defaultTags.filter((tag) => {
    const tagIndex = tags.findIndex((todoTag) => todoTag.id === tag.id);
    return tagIndex === -1;
  });

  return (
    <Dialog open={showTagPicker} onClose={() => setShowTagPicker(false)}>
      <div className={classes.root}>
        {availableTags.map((tag) => (
          <Chip key={tag.id} label={tag.label} onClick={() => addTag(tag)} />
        ))}
        {/* TODO: Add custom tagging */}
      </div>
    </Dialog>
  );
}
