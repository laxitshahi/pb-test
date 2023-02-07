import type { Admin, Record } from "pocketbase";
import PocketBase from "pocketbase";
import { logout } from "../utils";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

const Dashboard = () => {
  const router = useRouter();
  // const url = process.env.PB_URL as string;
  const url = "https://nutritious-receptionist.pockethost.io";
  const pb = new PocketBase(url);
  const [userData, setUserData] = useState<Record | Admin | null>(null);

  useEffect(() => {
    const data = pb.authStore.model ?? null;
    if (!data) void router.push("/");
    setUserData(data);
  }, []);

  console.log(userData);
  return (
    <div>
      {/* Header */}
      <header className="mx-10 mt-4 flex justify-between rounded-2xl border-2 border-black p-4">
        <span>Welcome {userData?.name}</span>
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
              "https://nutritious-receptionist.pockethost.io/api/files/users/4tkiwiglmpt25ma/matty_Gkbc7yaN0M.jpeg"
            }
            width={96}
            height={96}
            alt="Picture of a boy"
          />
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
