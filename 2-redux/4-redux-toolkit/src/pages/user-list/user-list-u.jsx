import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUsers } from "../../redux/slices/user-slice-u";

const UserListU = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return <div>UserListU</div>;
};

export default UserListU;
