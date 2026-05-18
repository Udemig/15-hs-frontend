import delay from "@/utils/delay";

const Register = async () => {
  await delay(3000);
  throw new Error("İçerik bulunamadı");

  return <div>Register</div>;
};

export default Register;
