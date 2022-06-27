import React from "react";
import styles from "./Checkbutton.module.css"

export function CheckedIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="192"
      height="192"
      fill="currentColor"
      viewBox="0 0 256 256"
    >
      <path fill="none" d="M0 0H256V256H0z"></path>
      <circle cx="128" cy="128" r="96" opacity="0.2"></circle>
      <circle
        className={styles.checkButtonFill}
        cx="128"
        cy="128"
        r="96"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      ></circle>
      <path
        fill="none"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        d="M172 104L113.3 160 84 132"
      ></path>
    
    </svg>
  );
}

;