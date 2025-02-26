import React from "react";
import { FiPhone, FiMapPin, FiMail } from "react-icons/fi";
import { useForm, ValidationError } from "@formspree/react";

export default function Career() {
  const [state, handleSubmit] = useForm("xzzdllop");

  if (state.succeeded) {
    return (
      <div className="flex flex-col items-center text-center p-6 bg-gray-100 rounded-lg shadow-md">
        <div className="text-[#54d119] text-5xl">🎉</div>
        <h2 className="text-xl md:text-2xl font-semibold text-[#54d119] mt-3">
          Thank You!
        </h2>
        <p className="text-gray-600 mt-2">
          Your message has been received. We'll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center px-4 py-12 bg-white">
      <div className="max-w-6xl w-full flex flex-wrap-reverse lg:grid grid-cols-1 lg:grid-cols-12 gap-6 bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
        {/* Left Section - Contact Details */}
        <div className="p-6 lg:col-span-4 bg-white flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#54d119] mb-4">
            Let's Connect
          </h2>
          <p className="text-gray-600 mb-4">
            Have a project in mind? Reach out to us via phone, email, or visit our office.
          </p>
          <div className="space-y-4">
            <ContactItem icon={<FiPhone />} title="+923364987786" subtitle="Call us: Sat - Thu 1pm - 9pm" />
            <ContactItem icon={<FiMapPin />} title="Sargodha Road, Faisalabad" subtitle="M57 Pearl City" />
            <ContactItem icon={<FiMail />} title="hr@broshtech.com" subtitle="Drop us a line anytime!" />
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="p-6 lg:col-span-8 bg-white">
          <>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#54d119] mb-4">
              Make an Online Enquiry
            </h2>
            <p className="text-gray-600 mb-4">
              Have a question or project idea? Fill out the form below, and we'll get back to you.
            </p>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField type="text" name="name" placeholder="Full Name" />
              <InputField type="email" name="email" placeholder="Email Address" />
              <InputField type="text" name="subject" placeholder="Subject" />
              <InputField type="date" name="date" placeholder="Preferred Date" />
              <textarea
                name="message"
                placeholder="Your Message"
                className="col-span-1 md:col-span-2 p-4 bg-gray-100 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#54d119] transition-all duration-300"
              ></textarea>
              <ValidationError prefix="Message" field="message" errors={state.errors} />
              <button
                type="submit"
                disabled={state.submitting}
                className="col-span-1 md:col-span-2 bg-black hover:bg-gray-900 text-white font-semibold py-3 rounded-lg transition-all duration-300 flex items-center justify-center"
              >
                Send Message
              </button>
            </form>
          </>
        </div>
      </div>
    </div>
  );
}

function ContactItem({ icon, title, subtitle } : any) {
  return (
    <div className="flex items-center space-x-3 bg-gray-100 p-3 rounded-lg shadow-md transition-all duration-300">
      <div className="text-[#54d119] text-2xl">{icon}</div>
      <div>
        <p className="text-lg font-semibold text-[#54d119]">{title}</p>
        <p className="text-gray-600 text-sm">{subtitle}</p>
      </div>
    </div>
  );
}

function InputField({ type, name, placeholder } : any) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className="p-3 bg-gray-100 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#54d119] transition-all duration-300 w-full"
    />
  );
}
