import React from "react";

type HeaderComponentProps = React.HTMLProps<HTMLDivElement> & {
  children?: React.ReactNode;
};

const HeaderComponent = React.forwardRef<HTMLDivElement, HeaderComponentProps>(
  ({ children, ...props }, ref) => (
    <div
      ref={ref}
      className="fixed top-0 left-0 w-full bg-gray-100 text-gray-800 p-4 flex flex-wrap justify-between items-center box-border z-[1000]"
      {...props}
    >
      {children}
    </div>
  )
);

HeaderComponent.displayName = "Header";

export default HeaderComponent;
