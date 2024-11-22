"use client";
import Image from "next/image";
import {useRouter} from "next/navigation";

const LoginCard = () => {
  const router = useRouter();
  const handleLogin = () => {
    router.push("/dashboard");
  };

  return (
    <div id="loginCard">
      <div className="w-full  text-center py-3 border-b-black/50 border-b-2">
        <h1 className="text-black/60 font-medium uppercase">Ingrese a su cuenta</h1>
      </div>
      <div className="w-full flex-grow flex flex-col items-center justify-center gap-4 pt-4 pb-8">
        <Image src="/images/logo_blue.png" alt="userIcon" width={80} height={80} />
        <button className="btn btn-primary" onClick={handleLogin}>
          Iniciar Sesión
        </button>
      </div>
    </div>
  );
};

export default LoginCard;
