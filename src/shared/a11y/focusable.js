// @flow
import React, { useRef } from "react";

type Props = {
  onClick: (e: SyntheticKeyboardEvent<HTMLDivElement>) => void,
  disabled?: boolean,
  children: React$Element<*>,
};

export default ({ onClick, disabled, children, ...props }: Props) => {
  const ref = useRef(null);

  const handleClick = (e: SyntheticKeyboardEvent<HTMLDivElement>) => {
    if (disabled) {
      return;
    }
    onClick(e);
  };

  const onKeyPress = (e: SyntheticKeyboardEvent<HTMLDivElement>) => {
    if (ref.current === e.target) {
      const enterOrSpace =
        e.key === "Enter" ||
        e.key === " " ||
        e.key === "Spacebar" ||
        e.which === 13 ||
        e.which === 32;
      if (enterOrSpace) {
        e.preventDefault();
        handleClick(e);
      }
    }
  };
  return (
    <div
      {...props}
      ref={ref}
      role="button"
      tabIndex={disabled ? -1 : 0}
      onClick={handleClick}
      onKeyPress={onKeyPress}
    >
      {children}
    </div>
  );
};
