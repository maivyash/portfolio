import React, { useState, useEffect } from "react";

const commands = [
  { prefix: "npx", text: "CSE student" },
  { prefix: "npx", text: "MERN Developer" },
  { prefix: "npm", text: "ML explorer" },
  { prefix: "npx", text: "Android Developer" },
  { prefix: "npx", text: "Web Developer" },
  { prefix: "npx", text: "Freelancer Developer" },
  { prefix: "npm", text: "Bob The Builder" },
];

const TypingText = () => {
  const [index, setIndex] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [leftText, setLeftText] = useState("");
  const [rightText, setRightText] = useState("");

  const current = commands[index];
  const fullText = `${current.prefix} ${current.text}`;

  useEffect(() => {
    const middle = Math.floor(fullText.length / 2);
    const left = fullText.substring(0, middle);
    const right = fullText.substring(middle);

    let l = "";
    let r = "";

    const totalChars = fullText.length;

    if (!isDeleting) {
      const half = Math.floor(charCount / 2);
      l = left.substring(left.length - half);
      r = right.substring(0, charCount - half);
    } else {
      const half = Math.floor((totalChars - charCount) / 2);
      l = left.substring(left.length - half);
      r = right.substring(0, totalChars - charCount - half);
    }

    setLeftText(l);
    setRightText(r);

    if (!isDeleting && charCount === totalChars) {
      setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && charCount === 0) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % commands.length);
    }

    const speed = isDeleting ? 40 : 100;
    const timer = setTimeout(() => {
      setCharCount((prev) => prev + (isDeleting ? -1 : 1));
    }, speed);

    return () => clearTimeout(timer);
  }, [charCount, isDeleting, index]);

  return (
    <div style={styles.container}>
      <div style={styles.text}>
        <span>{leftText}</span>
        <span>{rightText}</span>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  text: {
    fontFamily: "monospace",
    fontSize: "17px",
    background: "white",
    padding: "8px 16px",
    borderRadius: "8px",
    color: "#e34ba9",
    display: "flex",
    justifyContent: "center",
    minWidth: "220px",
    minHeight: "20px",
  },
};

export default TypingText;
