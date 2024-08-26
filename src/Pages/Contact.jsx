import React, { useState } from "react";
import HeadText from "../components/UI/HeadText";
import { BACKEND_API } from "../utils/constants";
import InputField from "../components/contact-page/InputField";
import TextAreaField from "../components/contact-page/TextAreaField";
import SubmitButton from "../components/contact-page/SubmitButton";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import LoadingPopup from '../components/UI/LoadingPopup'

const Contact = () => {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [message, setMessage] = useState("");
   const [submitting, setSubmitting] = useState(false);
   const [successMessage, setSuccessMessage] = useState("");
   const [errorMessage, setErrorMessage] = useState("");
   const [loading, setLoading] = useState(false);  // Initialize as false
   const [res, setResponse] = useState("");
   const navigate = useNavigate();

   const clearMessages = () => {
      setSuccessMessage("");
      setErrorMessage("");
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      setSubmitting(true);

      const payload = {
         name: name.trim(),
         email: email.trim(),
         message: message.trim(),
      };

      try {
         const response = await fetch(`${BACKEND_API}/api/feedback`, {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
         });

         const result = await response.json();

         if (response.ok) {
            setSuccessMessage(result.message);
            setName("");
            setEmail("");
            setMessage("");
            toast.success(result.message, {
               className:
                  "bg-green-500 text-white dark:bg-slate-900 dark:text-gray-100",
               bodyClassName: "text-sm",
               progressClassName: "bg-white dark:bg-green-500",
               position: "top-center",
            });
            setTimeout(clearMessages, 5000);
         } else {
            throw new Error(
               `Server responded with status ${response.status}: ${result.message}`
            );
         }
      } catch (error) {
         const errorMessage =
            error.message || "Unknown Error! Response is not sent....";
         setErrorMessage(errorMessage);
         toast.error(errorMessage, {
            className:
               "bg-red-500 text-white dark:bg-slate-800 dark:text-gray-100",
            bodyClassName: "text-sm",
            progressClassName: "bg-white dark:bg-red-500",
            position: "top-center",
         });
         setTimeout(clearMessages, 5000);
      } finally {
         setSubmitting(false);
      }
   };

   const handleRestartServer = async () => {
      setLoading(true);  
      try {
         const response = await fetch(`${BACKEND_API}/reload`, {
            method: "GET",
         });

         if (!response.ok) {
            throw new Error("Failed to restart the server.");
         }

         const data = await response.json();
         
         setResponse(data.message);
         toast.success(res, {
            className:
               "bg-green-500 text-white dark:bg-slate-900 dark:text-gray-100",
            bodyClassName: "text-sm",
            progressClassName: "bg-white dark:bg-green-500",
            position: "top-center",
         });
         navigate("/contact");
      } catch (error) {
         toast.error(error.message || "Something went wrong", {
            className:
               "bg-red-500 text-white dark:bg-slate-800 dark:text-gray-100",
            bodyClassName: "text-sm",
            progressClassName: "bg-white dark:bg-red-500",
            position: "top-center",
         });
      } finally {
         setLoading(false);  // Hide loading popup
      }
   };

   return (
      <div className="flex items-center justify-center py-12">
         <ToastContainer 
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            toastClassName={() =>
               "relative flex p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer bg-white text-black dark:bg-gray-900 dark:text-white"
            }
            bodyClassName={() => "text-sm font-white block p-3"}
            progressClassName="bg-blue-500 dark:bg-blue-300"
            closeButton={false}
         />
         <div className="w-full max-w-2xl">
            <HeadText heading="Contact" />
            <form
               onSubmit={handleSubmit}
               className="flex flex-col items-center gap-6 p-6 mt-10 bg-opacity-50 rounded-lg shadow-lg bg-content-1 dark:bg-opacity-20 shadow-gray-400 dark:shadow-gray-700 dark:bg-content-2"
            >
               <InputField
                  label="name"
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
               />
               <InputField
                  label="email"
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
               />
               <TextAreaField
                  label="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Enter your message"
               />
               <SubmitButton submitting={submitting} />
               {successMessage && (
                  <p className="text-green-600">{successMessage}</p>
               )}
               {errorMessage && <p className="text-red-600">{errorMessage}</p>}
            </form>
            <h3 className="p-4 mt-1 text-xs font-semibold text-black dark:text-zinc-400">
               <span className="text-base font-bold text-accent-1 dark:text-accent-2">
                  *
               </span>
               server goes to downtime after inactivity so if your message is
               stuck at submitting please wait for a minute or{" "}
               <button
                  onClick={handleRestartServer}
                  className="underline text-accent-1 dark:text-accent-2"
               >
                  click here
               </button>
            </h3>
         </div>
         <LoadingPopup loading={loading} /> {/* Add the LoadingPopup component */}
      </div>
   );
};

export default Contact;
