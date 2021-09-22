import React from "react";
import "tailwindcss/tailwind.css";

interface ButtonProps {
  mainType?: "Primary" | "Secondary" | "Outline";
  size?: "small" | "medium" | "large";
  label: string;
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({ mainType, size, label, ...props }: ButtonProps) => {
  let color: string = "bg-blue-500";
  (mainType === "Primary") ? (color="bg-red-500") : color="bg-blue-500"
  return (
    <button
      type="button"
      className={
        `${color} hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`
      }
      
      {...props}
    >
      {label}
    </button>
  );
};
