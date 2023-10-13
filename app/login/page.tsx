import Link from "next/link";
import Image from "next/image";

import Footer from "../../components/Footer";
import LoginForm from "../../components/Login";

const Login: React.FC = () => {
  return (
    <>
      <div className="flex justify-between items-center h-20 bg-primary px-10 xl:px-18 2xl:px-34">
        <Image
          width={72}
          height={59}
          src={"/images/logo/logo.svg"}
          alt="Logo"
        />
        <Link
          href="#"
          className="inline-flex items-center justify-center rounded-full bg-secondary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
        >
          Visit the Main Site
        </Link>
      </div>
      <div
        className="flex flex-wrap w-full xl:w-3/4 m-auto xl:my-32.5 border border-stroke"
        style={{ boxShadow: "0px 8px 13px rgba(0, 0, 0, 0.07)" }}
      >
        <div className="w-full lg:w-1/2 flex flex-col items-center">
          <div className="px-5 py-8.5">
            <Image
              width={225}
              height={186}
              src={"/images/logo/logo-dark.svg"}
              alt="Logo"
            />
          </div>
          <div className="px-8 py-5">
            <Image
              width={512}
              height={347}
              src={"/images/developer-logo.svg"}
              alt="Developer Logo"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="w-full p-4 py-25 px-17.5">
            <span className="mb-1.5 block font-medium">Admin Panel</span>
            <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
              Sign In to the Admin Panel
            </h2>
            <LoginForm />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
