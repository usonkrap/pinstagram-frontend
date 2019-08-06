import { useState } from "react";

export default defaultVaule => {
  const [value, setValue] = useState(defaultVaule);

  const onChange = e => {
    const {
      target: { value }
    } = e;
    setValue(value);
  };

  return { value, onChange };
};
