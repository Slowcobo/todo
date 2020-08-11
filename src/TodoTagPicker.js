import React, { useContext } from "react";
import Dialog from "@material-ui/core/Dialog";
import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core/styles";
import { TagsContext } from "./contexts/tags.context";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    padding: theme.spacing(1),
  },
}));

export default function TodoTagPicker({
  tags,
  setTags,
  showTagPicker,
  setShowTagPicker,
}) {
  const { tagList, setTagList } = useContext(TagsContext);
  const classes = useStyles();

  const handleClick = (clickedTag) => {
    // See if tag was already added
    const tagIndex = tags.findIndex((tag) => tag.id === clickedTag.id);
    // If not, add it to the tag list
    if (tagIndex === -1) setTags([...tags, clickedTag]);
    // Otherwise remove it
    else {
      const newTags = tags.filter((tag) => tag.id !== clickedTag.id);
      setTags(newTags);
    }
  };

  return (
    <Dialog open={showTagPicker} onClose={() => setShowTagPicker(false)}>
      <div className={classes.root}>
        {tagList.map((tag) => (
          <Chip
            key={tag.id}
            label={tag.label}
            onClick={() => handleClick(tag)}
          />
        ))}
      </div>
    </Dialog>
  );
}
