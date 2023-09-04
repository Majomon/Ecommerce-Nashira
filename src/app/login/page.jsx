import React from "react";
import LogoGoogle from "../../../assets/google_logo.png";
import Link from "next/link";
import Image from "next/image";

function page() {
  /*   const onSubmit = (data) => {
    setLoading(true);
    try {
      dispatch(loginUser(data));
      window.localStorage.removeItem("movie");
      window.localStorage.removeItem("cart");
      window.localStorage.removeItem("productCount");
    } catch (error) {
      toast.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleLoginGoogle = async () => {
    setLoading(true);
    try {
      await loginWithGoogle();
      window.localStorage.removeItem("movie");
      window.localStorage.removeItem("cart");
      window.localStorage.removeItem("productCount");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }; */

  return (
    <div className="w-full h-full min-h-screen flex justify-center items-center pt-12">
      <form className="w-[400px] min-h-[550px] h-full relative flex flex-col p-6 bg-light-50 dark:bg-transparent dark:shadow-[0_0_10px_0px_#fff] rounded">
        <div className="mb-6 mt-4 border-b">
          <h2 className="w-full flex justify-center">Ingresá a tu cuenta</h2>
          <form method="POST" action="/api/auth/signin/google">
            <button
              type="submit"
              className="w-full my-10 px-3 flex rounded justify-center items-center bg-green-500 hover:dark:bg-green-400 font-bold text-white"
            >
              <Image src={LogoGoogle} width={40} height={40} alt="Logo" />
              Iniciar sesión con Google
            </button>
          </form>
        </div>
        <div className="flex flex-col mb-4">
          <input
            className="py-2 px-3 rounded w-full"
            type="text"
            placeholder="Ingresa tu email"
          />
        </div>

        <div className="flex flex-col mb-4">
          <div className="w-full relative">
            <input
              className="py-2 px-3 rounded w-full"
              placeholder="Ingresa tu contraseña"
            />
          </div>

          <div className="w-full flex justify-end py-3">
            <Link href="/forgotPassword">
              <span className="text-primary-500 dark:text-primary-500 text-base">
                ¿Olvidaste tu contraseña?
              </span>
            </Link>
          </div>
        </div>

        <button
          className="w-full rounded py-2 px-3 mb-6 bg-primary-600 hover:bg-primary-500 text-white font-semibold"
          type="submit"
        >
          Iniciar Sesión
        </button>
        <div className="w-full flex justify-center space-x-1">
          <p className="text-base text-light-700">¿No tenés cuenta?</p>
          <Link href="/createUser">
            <span className="text-base text-primary-500 dark:text-primary-500">
              Regístrate
            </span>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default page;
