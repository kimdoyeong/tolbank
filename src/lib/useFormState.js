import { useState } from "react";

const useFormState = (val = "") => {
  const [value, setValue] = useState(val);

  const onChange = e => {
    setValue(e.target.value);
  };

  return [value, onChange];
};

export default useFormState;
