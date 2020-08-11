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

export default function TodoTagPicker({ showTagPicker, setShowTagPicker }) {
  const { tagList, setTagList } = useContext(TagsContext);
  const classes = useStyles();

  return (
    <Dialog open={showTagPicker} onClose={() => setShowTagPicker(false)}>
      <div className={classes.root}>
        {tagList.map((tag) => (
          <Chip label={tag.label} onClick="" />
        ))}
      </div>
    </Dialog>
  );
}
