import PocketBase, { Admin, Record } from "pocketbase";
interface Props {
  email: string;
  password: string;
}

async function login({ email, password }: Props) {
  // const url = process.env.PB_URL;
  const url = "https://nutritious-receptionist.pockethost.io";
  const pb = new PocketBase(url);

  pb.authStore.clear();
  const authData = await pb
    .collection("users")
    .authWithPassword(email, password);

  //   switch (pb.authStore.model?.constructor) {
  // case Admin:
  //   console.log("Admin");
  // case Record:
  //   console.log("User");
  // default:
  //   console.log("Guest / Not logged in?");
  //   }

  let users;
  try {
    users = await pb.collection("users").getFullList(200 /* batch size */, {
      sort: "-created",
    });
  } catch (e) {
    console.log(e);
  }
  const isValid = pb.authStore.model ? true : false;

  return { authData, users, isValid };
}

export default login;
