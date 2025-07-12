import React, { useState, useEffect } from "react";

const commands = [
  { prefix: "npx", text: "CSE student" },
  { prefix: "npx", text: "MERN Devoloper" },
  { prefix: "npm", text: "ML explorer" },
  { prefix: "npx", text: "Andoid Developer" },
  { prefix: "npx", text: "Web Developer" },
  { prefix: "npx", text: "FreeLancer Developer" },
  { prefix: "npm", text: "Bob The Builer" },
];

const TypingText = () => {
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [display, setDisplay] = useState("");

  const current = commands[index];
  const { prefix, text } = current;

  useEffect(() => {
    const full = `${prefix} ${text}`;
    const base = `${prefix} `;

    let updatedText = isDeleting
      ? text.substring(0, charIndex - 1)
      : text.substring(0, charIndex + 1);

    setDisplay(base + updatedText);

    if (!isDeleting && updatedText === text) {
      setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % commands.length);
    }

    const speed = isDeleting ? 50 : 120;
    const timer = setTimeout(() => {
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, index]);

  return (
    <pre
      style={{
        fontFamily: "monospace",
        fontSize: "22px",
        color: "#e34ba9",
        background: "black",
        padding: "12px",
        borderRadius: "8px",
        width: "fit-content",
      }}
    >
      - {display}
    </pre>
  );
};

export default TypingText;
