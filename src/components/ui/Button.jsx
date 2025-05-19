import React from "react";

const Button = ({
  children,
  type = "button",
  onClick = () => {},
  variant = "primary",
  className = "",
  ...props
}) => {
  let styles =
    "px-4 py-1.5 rounded font-medium transition duration-200 focus:outline-none ";

  if (variant === "primary") {
    styles +=
      "inline-flex items-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700";
  } else if (variant === "secondary") {
    styles +=
      "w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2.5 px-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-0.5 flex items-center justify-center";
  } else if (variant === "outline") {
    styles += "border border-teal-600 text-teal-600 hover:bg-teal-50";
  } else if (variant === "danger") {
    styles += "bg-red-600 text-white hover:bg-red-500";
  } else {
    styles += "bg-gray-200 text-black";
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
