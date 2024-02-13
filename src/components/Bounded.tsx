import React from "react";
import clsx from "clsx";

type BoundedPropType = {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
};

const Bounded = React.forwardRef<HTMLDivElement, BoundedPropType>(
  ({ as: Comp = "section", className, children, ...restProps }, ref) => {
    return (
      <Comp
        ref={ref}
        className={clsx(
          "px-6 py-10 md:px-16 md:py-12 lg:py-6 lg:px-20",
          className
        )}
        {...restProps}
      >
        <div className="mx-auto w-full max-w-7xl">{children}</div>
      </Comp>
    );
  }
);

Bounded.displayName = "Bounded";

export default Bounded;
