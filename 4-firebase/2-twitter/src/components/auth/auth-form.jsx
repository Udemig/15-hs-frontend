import { useState } from "react";
import AuthToggle from "./auth-toggle";
import EmailInput from "./email-input";
import ForgotPassword from "./forgot-password";
import PasswordInput from "./password-input";
import SubmitButton from "./submit-button";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

const AuthForm = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      if (isLoginMode) {
        // giriş yapma
        const res = await signInWithEmailAndPassword(auth, email, password);

        // maili doğrulanmamışsa bildirim
        if (!res.user.emailVerified) return toast.warning("Lütfen e-postsa adresinizi, gelen mail ile doğrulayın");

        // anasayfaya yönlendir
        navigate("/home");

        // bildirim gönder
        toast.success("Oturum açıldı");
      } else {
        // kayıt olma
        const res = await createUserWithEmailAndPassword(auth, email, password);

        // doğrulama epostası gönder
        await sendEmailVerification(res.user);

        // giriş yapmda moduna geç
        setIsLoginMode(true);

        // bildirim gönder
        toast.info("E-posta adresinize doğrulama maili gönderildi");
      }
    } catch (err) {
      const text =
        err.code === "auth/email-already-in-use"
          ? "Bu e-posta adresi zaten kullanımda"
          : err.code === "auth/weak-password"
            ? "Şifreniz yeterince güçlü değil"
            : err.code === "auth/invalid-credential"
              ? "Giriş bilgileriniz hatalı"
              : err.code;

      toast.error(text);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <EmailInput />

      <PasswordInput />

      <ForgotPassword isLoginMode={isLoginMode} />

      <SubmitButton isLoginMode={isLoginMode} />

      <AuthToggle isLoginMode={isLoginMode} setIsLoginMode={setIsLoginMode} />
    </form>
  );
};

export default AuthForm;
