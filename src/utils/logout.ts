import PocketBase from "pocketbase";
const logout = () => {
  const url = "https://nutritious-receptionist.pockethost.io";
  const pb = new PocketBase(url);
  pb.authStore.clear();
};

export default logout;
