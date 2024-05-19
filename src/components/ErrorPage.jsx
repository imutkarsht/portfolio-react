import { useRouteError } from "react-router-dom"
import Header from "./Header";
import { MdOutlineLinkOff } from "react-icons/md";
import { Link } from "react-router-dom";
const ErrorPage = () =>{
    const err = useRouteError();
    return (
        <>
            <Header />
            <div className="flex flex-col fl items-center  h-[calc(100vh-4rem)] dark:bg-slate-800 justify-center p-5">
                <MdOutlineLinkOff size={200} className="dark:text-white" />
                <h2 className="md:text-xl text-lg dark:text-white">Oops! Look Like I forgot to code that page</h2>
                <p  className="flex items-center text-3xl dark:text-white justify-between  mt-3">
                    <span className="text-red-500 text-4xl ml-1">
                    {err.status} - &nbsp;
                    </span>
                    {err.statusText}
                </p>
                <p 
                    className="text-xl dark:text-gray-100"
                >
                    Go back to &nbsp;
                    <Link to={"/"} className="text-2xl text-emerald-500 underline">
                        Home page
                    </Link>
                </p>
            </div>
        </>
    )
}

export default ErrorPage;