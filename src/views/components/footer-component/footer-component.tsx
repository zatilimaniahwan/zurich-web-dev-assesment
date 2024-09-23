import React, { forwardRef, Ref } from "react";

const FooterComponent = forwardRef<
  HTMLDivElement,
  React.HTMLProps<HTMLDivElement>
>((props, ref: Ref<HTMLDivElement>) => (
  <div
    ref={ref}
    className="fixed bottom-0 left-0 w-full bg-gray-100 text-gray-800 p-4 flex justify-between items-center box-border z-[1000]"
    {...props}
  >
    {props.children}
  </div>
));

FooterComponent.displayName = "Footer";

export default FooterComponent;
