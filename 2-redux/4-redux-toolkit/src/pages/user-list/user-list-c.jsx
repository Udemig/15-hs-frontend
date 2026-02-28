import axios from "axios";
import { useEffect } from "react";
import { setData, setError, setLoading } from "../../redux/slices/user-slice-c";
import { useDispatch, useSelector } from "react-redux";

const UserListC = () => {
  const { isLoading, error, users } = useSelector((store) => store.userCReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading());

    axios
      .get("https://dummyjson.com/users")
      .then((res) => dispatch(setData(res.data.users)))
      .catch((err) => dispatch(setError(err.message)));
  }, []);

  if (isLoading) return <h1>Yükleniyor..</h1>;

  if (error) return <h1>HATA: {error}</h1>;

  return (
    <div className="flex flex-col">
      {users.map((user) => (
        <div className="flex items-center gap-5 p-5 border-b">
          <img src={user.image} width={50} />
          <h1>
            {user.firstName} {user.lastName}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default UserListC;
