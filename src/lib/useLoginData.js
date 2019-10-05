import { useSelector } from "react-redux";

function useLoginData() {
  const { success, data } = useSelector(state => {
    return {
      data: state.auth.data,
      token: state.auth.token,
      success: state.auth.success
    };
  });
  if (!success) return false;
  return {
    username: data.username,
    id: data.id
  };
}

export default useLoginData;
