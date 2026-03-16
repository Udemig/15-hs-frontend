const ForgotPassword = ({ isLoginMode }) => {
  // todo: kayma

  if (!isLoginMode) return;

  return (
    <>
      <button type="button" className="text-end text-sm text-gray-500 hover:text-gray-400 mt-2 cursor-pointer">
        Şifreni mi unuttun ?
      </button>
    </>
  );
};

export default ForgotPassword;
