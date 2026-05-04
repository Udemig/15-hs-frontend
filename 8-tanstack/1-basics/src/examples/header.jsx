import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Header = () => {
  //   const { data } = useQuery({
  //     queryKey: ["quotes"],
  //     queryFn: () => axios.get("https://dummyjson.com/quotes1"),
  //   });

  return (
    <header>
      <h1>HEADER</h1>

      {/* <h2>SÖZLER ({data?.data?.quotes?.length})</h2> */}
      <hr />
    </header>
  );
};

export default Header;
