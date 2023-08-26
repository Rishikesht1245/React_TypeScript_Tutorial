import { useRef, useEffect } from "react";
const DomRef = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  // or we can use the not null if we are sure the value is not going to be null
  // const inputRef = useRef<HTMLInputElement>(null!)
  // then we don't want to use the optional chaining.

  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
};
export default DomRef;
