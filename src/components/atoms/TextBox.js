import React from "react";
import "./styles-atoms.css";

const TextBox = ({ title, titlePink, text, color }) => {
  // Simple function to turn email addresses into clickable mailto links
  const formatText = (text) => {
    const emailRegex = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;
    const parts = text.split(emailRegex);

    return parts.map((part, index) => {
      if (emailRegex.test(part)) {
        return (
          <a key={index} href={`mailto:${part}`} style={{ color: "#ED7782" }}>
            {part}
          </a>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <div className="text-box">
      {(title || titlePink) && (
        <div className="title" style={{ color }}>
          <div className="title-text">
            {titlePink && <p style={{ color: "#ED7782" }}>{titlePink}</p>}
            {title && <p>{title}</p>}
          </div>
        </div>
      )}
      {text && (
        <div className="content" style={{ color }}>
          <div className="content-text" style={{ whiteSpace: "pre-line" }}>
            {formatText(text)}
          </div>
        </div>
      )}
    </div>
  );
};

export default TextBox;
