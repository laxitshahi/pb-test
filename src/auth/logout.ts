import pb from "../lib/pocketbase";

const logout = () => {
  pb.authStore.clear();
};

export default logout;
