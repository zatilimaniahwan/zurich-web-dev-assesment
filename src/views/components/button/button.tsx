import React from "react";

const Button = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ children, ...props }, ref) => (
  <button
    ref={ref}
    className="text-white border-none rounded-md px-5 py-2 text-base cursor-pointer transition-colors duration-300 ease-in-out shadow-md hover:bg-opacity-90"
    {...props}
  >
    {children}
  </button>
));

Button.displayName = "Button";

export default Button;
