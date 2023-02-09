import type { NextPage } from "next";
import { useState } from "react";
import PocketBase from "pocketbase";
import { useRouter } from "next/router";
import { login, logout } from "../utils";
import { useUserState } from "../state/store";

const Home: NextPage = () => {
  const router = useRouter();
  const updateUserData = useUserState((state) => state.updateUserData);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <section>
        <div className="flex h-screen">
          <div className="m-auto h-2/4 w-8/12 border-4 border-black">
            {/*Login*/}
            <form className="grid h-3/4 place-items-center">
              <h2>Welcome!</h2>
              {/*Email*/}
              <section>
                <h3>Email</h3>
                <input
                  value={email}
                  className="rounded-md border-2 border-black "
                  type="text"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </section>
              {/*Password*/}
              <section>
                <h3>Password</h3>
                <input
                  value={password}
                  className="rounded-md border-2 border-black "
                  type="text"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </section>

              <section>
                <h3 className="grid underline">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      login({ email, password })
                        .then((data) => {
                          if (data?.isValid) {
                            updateUserData(data.authData.record);
                            void router.push("/dashboard");
                          } else {
                            console.log(
                              "Invalid Credentials, please try again"
                            );
                          }
                        })
                        .catch((e) => console.log(e));
                    }}
                  >
                    Login
                  </button>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                  >
                    Create an Account
                  </button>
                </h3>
              </section>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
