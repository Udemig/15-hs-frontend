import { CgSpinner } from "react-icons/cg";

const Spinner = ({ designs }) => {
  return (
    <div className={`grid place-items-center my-50 ${designs}`}>
      <CgSpinner className="text-3xl text-red-500 animate-spin" />
    </div>
  );
};

export default Spinner;
