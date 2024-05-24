"use client";

import Image from "next/image";
import Button from "../ui/button/button";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import { useCallback } from "react";
import RegisterModal from "../modals/RegisterModal/register-modal";
import useLoginModal from "@/hooks/UseLoginModal/useLoginModal";
import useRegisterModal from "@/hooks/UseRegisterModal/userRegisterModal";
import LoginModal from "../modals/LoginModal/login-modal";

export default function Auth() {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();

  const onOpenRegisterModal = useCallback(() => {
    registerModal.onOpen();
  }, [registerModal]);

  const onOpenLoginModal = useCallback(() => {
    loginModal.onOpen();
  }, [loginModal]);

  return (
    <>
      <RegisterModal />
      <LoginModal />
      <div className="grid  grid-cols-1 xl:grid-cols-2 md:grid-cols-2 gap-10 items-center h-screen">
        <Image
          src={"/images/X_icon.svg"}
          alt="X"
          width={450}
          height={450}
          className="justify-self-center hidden md:block"
        />

        <div className="flex flex-col justify-center md:justify-between xl:justify-between gap-6 h-full xl:h-[70vh] md:h-[70vh]">
          <div className="block md:hidden xl:hidden">
            <Image src={"/images/X_icon.svg"} alt="X" width={50} height={50} />
          </div>
          <h1 className="text-6xl font-bold">Happening how</h1>
          <div className="w-full md:w-[60%] xl:w-[60%]">
            <h2 className="font-bold text-3xl mb-4">Join today.</h2>
            <div className="flex flex-col space-y-2">
              <Button
                label={
                  <div className="flex gap-2 items-center justify-center">
                    <FcGoogle />
                    Signup with Google
                  </div>
                }
                fullWidth
                secondary
              />
              <Button
                label={
                  <div className="flex gap-2 items-center justify-center">
                    <AiFillGithub />
                    Signup with Github
                  </div>
                }
                fullWidth
                secondary
              />
              <div className="flex items-center justify-center">
                <div className="h-px bg-gray-700 w-1/2" />
                <p className="mx-4">or</p>
                <div className="h-px bg-gray-700 w-1/2" />
              </div>
              <Button
                label="Create an account"
                fullWidth
                onClick={onOpenRegisterModal}
              />
              <div className="text-[10px] text-gray-400">
                By signing up, you agree to the{" "}
                <span className="text-sky-500">Terms of Service</span> and
                <span className="text-sky-500">Privacy Policy</span>, including{" "}
                <span className="text-sky-500">Cookie Use</span>.
              </div>
            </div>
          </div>
          <div className="w-full md:w-[60%] xl:w-[60%]">
            <h3 className="font-medium text-xl mb-4">
              Already have an account?
            </h3>
            <Button onClick={onOpenLoginModal} label="Sign in" fullWidth outline />
          </div>
        </div>
      </div>
    </>
  );
}
