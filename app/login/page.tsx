import LoginCard from "@/components/login/LoginCard";
import Image from "next/image";

export default function LoginPage() {
  return (
    <section id="login" className="block lg:flex h-svh">
      {/* Left or Top section */}
      <div className="h-[60%] lg:h-full w-full ">
        <video
          src="/videos/loopLogo.mp4"
          className="object-cover h-full w-auto"
          autoPlay
          muted
          loop
        />
      </div>

      {/* Right or Bottom section */}
      <div className="h-[40%] lg:h-full w-full lg:w-[300px] gradient-bg relative flex items-center justify-center ">
        <div className="absolute top-[-30%] lg:top-auto lg:right-[150px]">
          <LoginCard />
        </div>
        <Image
          className="absolute right-5 bottom-5"
          src="/images/logo_blue.png"
          alt="userIcon"
          width={60}
          height={60}
        />
      </div>
    </section>
  );
}
