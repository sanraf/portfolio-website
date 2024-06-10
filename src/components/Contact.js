import React, { useState } from "react";
import "../Styles/Contact.css";
import facebookIcon from "../Assets/facebook.svg";
import copyIcon from "../Assets/icons8-copy-100.png";
import emailIcon from "../Assets/icons8-email-100.png";
import locationIcon from "../Assets/icons8-location-100.png";
import phoneIcon from "../Assets/icons8-phone.svg";
import {
  FaLocationArrow,
  FaEnvelope,
  FaCopy,
  FaPhoneAlt,
} from "react-icons/fa";
import Footer from "../components/Footer";
import { Flip, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

function Contact() {
  const [isCopied, setIsCopied] = useState(false);

  const contact = {
    phone: "0671089950",
    altphone: "0710292391",
    email: "santoschristopher199@gmail.com",
    myLocation: "johannessburg 1520",
  };

  const handleCopy = (textToCopy) => {
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        toast.success(" Copied", {
          position: "top-center",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: 0,
          theme: "dark",
          transition: Flip,
        });
        setTimeout(() => setIsCopied(false), 2000);
      })
      .catch((err) => {
        console.error("Failed to copy:", err);
      });
  };
  return (
    <div className="contact" id="mycontact">
      <div className="contact-title">
        <h1>contact</h1>
      </div>

      <div className="mycontact">
        <div className="column_1">
          <div className="icon-Wrapper-1">
            <Link to={`mailto:${contact.email}`}>
              <h5>
                <FaEnvelope />
                {contact.email}
              </h5>
            </Link>

            <FaCopy
              className="copyIcon"
              onClick={() => handleCopy(contact.email)}
            />
          </div>

          <div className="icon-Wrapper-2">
            <Link to={`tel:${contact.phone}`}>
              <h5>
                <FaPhoneAlt />
                {contact.phone}
              </h5>
            </Link>
            <FaCopy
              className="copyIcon"
              onClick={() => handleCopy(contact.phone)}
            />
          </div>
        </div>

        <div className="column_2">
          <div className="icon-Wrapper-2">
            <Link to={`tel:${contact.altphone}`}>
              <h5>
                <FaPhoneAlt />
                {contact.altphone}
              </h5>
            </Link>
            <FaCopy
              className="copyIcon"
              onClick={() => handleCopy(contact.altphone)}
            />
          </div>

          <div className="icon-Wrapper-3">
            <h5>
              <FaLocationArrow />
              {contact.myLocation}
            </h5>
            <FaCopy
              className="copyIcon"
              onClick={() => handleCopy(contact.myLocation)}
            />
          </div>
        </div>
      </div>

      <Footer />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Flip}
      />
    </div>
  );
}

export default Contact;
