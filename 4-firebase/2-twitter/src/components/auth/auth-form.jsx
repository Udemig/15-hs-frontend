import { useState } from "react";
import AuthToggle from "./auth-toggle";
import EmailInput from "./email-input";
import ForgotPassword from "./forgot-password";
import PasswordInput from "./password-input";
import SubmitButton from "./submit-button";

const AuthForm = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);

  return (
    <form className="flex flex-col">
      <EmailInput />

      <PasswordInput />

      <ForgotPassword isLoginMode={isLoginMode} />

      <SubmitButton isLoginMode={isLoginMode} />

      <AuthToggle isLoginMode={isLoginMode} setIsLoginMode={setIsLoginMode} />
    </form>
  );
};

export default AuthForm;
