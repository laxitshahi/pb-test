import { logout } from "../utils";
import { useRouter } from "next/router";
import Image from "next/image";
import { useUserState } from "../state/store";

const Dashboard = () => {
  const router = useRouter();
  const userData = useUserState((state) => state.userData);
  return (
    <div>
      {/* Header */}
      <header className="mx-10 mt-4 flex justify-between rounded-2xl border-2 border-black p-4">
        <span>Welcome {userData ? userData.name : "NO_NAME"}</span>
        <button
          onClick={() => {
            logout();
            void router.push("/");
          }}
        >
          Logout
        </button>
      </header>

      {/* Body */}
      <section>
        <div>
          <Image
            src={
              typeof userData?.avatar === "string"
                ? `https://nutritious-receptionist.pockethost.io/api/files/users/${userData.id}/${userData.avatar}`
                : "https://nutritious-receptionist.pockethost.io/api/files/users/4tkiwiglmpt25ma/matty_Gkbc7yaN0M.jpeg"
            }
            width={96}
            height={96}
            alt="Profile Picture"
          />
        </div>
      </section>

      <div></div>
    </div>
  );
};

export default Dashboard;
