import React from "react";

// type Props = {};

function Login() {
  return (
    <section>
      <div className="flex h-screen">
        <div className="w-8/12 m-auto border-4 border-black h-2/4">
          {/*Login*/}
          <section className="grid h-3/4 place-items-center">
            <h2>Welcome!</h2>
            {/*Email*/}
            <section>
              <h3>Email</h3>
              <input
                className="border-2 border-black rounded-md "
                type="text"
              />
            </section>

            {/*Email*/}
            <section>
              <h3>Password</h3>
              <input
                className="border-2 border-black rounded-md "
                type="text"
              />
            </section>

            <section>
              <h3 className="underline hover:decoration-4">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    // void router.push("/hello");
                  }}
                >
                  Create an Account
                </button>
              </h3>
            </section>
          </section>
        </div>
      </div>
    </section>
  );
}

export default Login;
