"use client";
import React from "react";
import Image from "next/image";
import emailjs from "emailjs-com";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const disabled = email === "" || message === "";
  const { showToast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const templateParams = {
      from_email: email,
      message: message
    };

    console.log(email, message);

    emailjs
      .send(
        "service_9uvrgqw",
        "template_4rfkx6d",
        templateParams,
        "3eb1_Vaf_9T4NQbc0"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setEmail("");
          setMessage("");
          showToast({ title: "✅ Your message has been sent!" });
        },
        (error) => {
          console.error("FAILED...", error);
          showToast({
            title: "Failed to send message",
            description: "Please try again later.",
            variant: "destructive"
          });
        }
      );
  };
  return (
    <section className="w-full min-h-screen flex justify-center mt-20">
      <div className="relative min-h-screen flex justify-center items-center w-full lg:mx-20">
        <Image
          src="/terminal.png"
          alt="terminal"
          fill
          style={{ objectPosition: "center" }}
          // or className="object-contain object-center"
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-screen w-full max-w-xl px-8 py-6">
          <h3 className="text-4xl text-white font-bold text-center">
            Contact Me
          </h3>

          <p className="mt-4 text-gray-400 text-md md:text-xl text-center lg:text-2xl overflow-auto">
            Interested in working together or have any questions? I&apos;d love
            to hear from you!
          </p>
          <form
            onSubmit={handleSubmit}
            className="w-full  px-6 py-6 rounded-2xl flex flex-col justify-center mx-auto"
            method="POST"
          >
            <label htmlFor="email" className="mb-2 text-gray-400 font-bold">
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              placeholder="name@aol.com"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full  px-3 py-2 rounded-md bg-neutral-200 text-black focus:outline-none focus:ring-2 focus:ring-indigo-500  placeholder: italic"
            />

            <label
              htmlFor="message"
              className="mt-8 mb-2 text-gray-400 font-bold"
            >
              Your Message
            </label>
            <textarea
              className="placeholder: italic w-full  px-3 py-2 rounded-md resize-y h-40 bg-neutral-200 text-black focus:outline-none focus:ring-2 focus:ring-indigo-500 "
              value={message}
              name="message"
              id="message"
              placeholder="Leave a comment ..."
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            <button
              className="inline-flex justify-center items-center px-4 py-2 mt-10 rounded-md bg-zinc-800 text-white hover:bg-indigo-500
          disabled:bg-zinc-900 disabled:text-gray-400 disabled:cursor-not-allowed hover:text-white disabled:border-white hover:border-indigo-500 border-1 border-white transition-colors"
              disabled={disabled}
              type="submit"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
