import React, { useState } from "react";
import useInput from "../../Hooks/useInput";
import AuthPresenter from "./AuthPresenter";
import { useMutation } from "react-apollo-hooks";
import { LOG_IN } from "./AuthQueries";

export default () => {
  const [action, setAction] = useState("logIn");
  const email = useInput("");
  const firstName = useInput("");
  const lastName = useInput("");
  const userName = useInput("");
  const requestSecret = useMutation(LOG_IN, {
    variables: { email: email.value }
  });

  const onLogin = e => {
    e.preventDefault();

    if (email !== "") {
      requestSecret();
    }
  };

  return (
    <AuthPresenter
      action={action}
      setAction={setAction}
      email={email}
      firstName={firstName}
      lastName={lastName}
      userName={userName}
      onLogin={onLogin}
    />
  );
};
