import React from "react";

// This function takes JSON data from Contentful and replaces the line break
// character with HTML line break tags.

const ReplaceLineBreakChar = (props) => {
  try {
    if (!props.text) {
      return <></>; // return an empty fragment if the text is undefined or null
    }
    const textWithNewLines = props.text.replace(/\n/g, "<br />");
    return <div dangerouslySetInnerHTML={{ __html: textWithNewLines }} />;
  } catch (error) {
    console.error("This text might be empty " + error);
    return <> </>; // return an empty fragment if there's an error
  }
};

export default ReplaceLineBreakChar;
