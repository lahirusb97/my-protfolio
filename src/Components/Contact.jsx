import React, { useRef, useState, useEffect } from "react";
import { useContext } from "react";
import { NavigationRef } from "../Context/NavigationRef";
import emailjs from "@emailjs/browser";
import { ChakraBaseProvider, ChakraProvider, useToast } from "@chakra-ui/react";
import { Snackbar } from "@mui/material";
import { CircularProgress } from "@chakra-ui/react";
import { createStandaloneToast } from "@chakra-ui/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Contact() {
  const { contactRef } = useContext(NavigationRef);
  const [loading, setLoading] = useState(false);

  const form = useRef();
  const notify = () => toast("Message Sent");
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_85tsk5n",
        "template_2mmutjf",
        form.current,
        "q7Cv19-KkxAIDYykU"
      )
      .then(
        (result) => {
          setLoading(false);

          toast.success("Message Sent", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        },
        (error) => {
          setLoading(false);
          toast.error("Error check your internet connection", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      );
  };
  return (
    <div
      ref={contactRef}
      className="bg-bgShade flex justify-center flex-col items-center "
    >
      <h1 className="mb-8 text-white font-semibold text-lg">Contact</h1>
      <form
        ref={form}
        onSubmit={sendEmail}
        className=" flex flex-col md:grid grid-cols-2 grid-rows-2 items-end gap-2"
      >
        <input
          name="user_name"
          placeholder="Name"
          className="bg-white text-black  font-semibold p-4 w-80 h-2/1 col-start-1 col-end-1 row-span-1"
        />

        <input
          name="user_email"
          type="email"
          placeholder="Email"
          className="bg-white text-black font-semibold  p-4 w-80 row-start-2 row-end-2 col-start-1 col-end-1"
        />

        <textarea
          name="message"
          placeholder="Message"
          className="bg-white text-black font-semibold  p-2 w-80 h-full row-start-1 row-end-3 col-start-2 col-end-2"
        />
        {loading ? (
          <ChakraBaseProvider>
            <CircularProgress
              className="p-2 text-lg sm:p-4 sm:text-xl font-semibold text-bgShade block row-start-3 row-end-4  mb-4 col-start-1 col-end-3"
              isIndeterminate
              color="red.500"
              size="50px"
            />
          </ChakraBaseProvider>
        ) : (
          <button
            type="submit"
            className=" bg-maineyellow p-2 text-lg sm:p-4 sm:text-xl font-semibold text-bgShade block row-start-3 row-end-4  mb-4 col-start-1 col-end-3"
          >
            Send
          </button>
        )}
      </form>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="light"
      />
    </div>
  );
}
