import { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";

import AnimatedText from "./AnimatedText";
import { FaCheckCircle } from "react-icons/fa";
import Image from "next/image";

const Contact = () => {
  const [state, handleSubmit] = useForm("xyzkreey");
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });
  const [showIcon, setShowIcon] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    if (state.succeeded) {
      setShowIcon(true);
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        message: "",
      });
      const timer = setTimeout(() => {
        setShowIcon(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  const handleFormSubmit = event => {
    event.preventDefault();
    handleSubmit(formData);
  };

  return (
    <section className="pt-8 xl:pt-12 pb-32" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col items-center xl:flex-row gap-16">
          <div className="flex-1 mx-auto xl:mx-0 flex flex-col">
            <AnimatedText
              text="Let's Work Together"
              textStyle="h2 mb-12 text-center xl:text-left"
            />
            <form
              onSubmit={handleFormSubmit}
              className="w-full max-w-[480px] mx-auto xl:mx-0 flex flex-col gap-6"
            >
              <div className="flex gap-8">
                <div className="flex-1">
                  <label
                    htmlFor="firstname"
                    className="block mb-2 text-primary text-sm font-medium"
                  >
                    First Name <span className="text-accent">*</span>
                  </label>
                  <input
                    onChange={handleChange}
                    type="text"
                    id="firstname"
                    name="firstname"
                    value={formData.firstname}
                    className="input"
                    placeholder="First Name"
                    required
                  />
                </div>
                <div className="flex-1">
                  <label
                    htmlFor="lastname"
                    className="block mb-2 text-primary text-sm font-medium"
                  >
                    Last Name <span className="text-accent">*</span>
                  </label>
                  <input
                    onChange={handleChange}
                    type="text"
                    id="lastname"
                    name="lastname"
                    value={formData.lastname}
                    className="input"
                    placeholder="Last Name"
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-primary text-sm font-medium"
                >
                  Email <span className="text-accent">*</span>
                </label>
                <input
                  onChange={handleChange}
                  type="text"
                  id="email"
                  name="email"
                  value={formData.email}
                  className="input"
                  placeholder="youremail@email.com"
                  required
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 text-primary text-sm font-medium"
                >
                  Message
                </label>
                <textarea
                  onChange={handleChange}
                  id="message"
                  name="message"
                  value={formData.message}
                  className="textarea"
                  placeholder="Your message"
                  rows={7}
                  required
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>
              <button
                type="submit"
                disabled={state.submitting}
                className="btn btn-accent flex justify-center items-center gap-2"
              >
                {state.submitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <FaCheckCircle
                      className={`absolute text-white text-lg transition-opacity duration-500 ease-in-out ${
                        showIcon ? "opacity-100" : "opacity-0"
                      }`}
                    />
                    <span
                      className={`transition-opacity duration-500 ease-in-out ${
                        showIcon ? "opacity-0" : "opacity-100"
                      }`}
                    >
                      Send message
                    </span>
                  </>
                )}
              </button>
            </form>
          </div>
          <div className="hidden xl:flex relative w-[577px] h-[624px] rounded-lg overflow-hidden">
            <Image
              src="/assets/contact/img.png"
              alt=""
              quality={100}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
