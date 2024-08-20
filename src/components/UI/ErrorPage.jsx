import { useRouteError } from "react-router-dom"
import { MdOutlineLinkOff } from "react-icons/md";
import { Link } from "react-router-dom";
const ErrorPage = () =>{
    const err = useRouteError();
    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen p-5 dark:bg-primary-2 bg-primary-1">
                <MdOutlineLinkOff size={200} className="dark:text-white" />
                <h2 className="text-lg md:text-xl dark:text-white">Oops! Look Like I forgot to code that page</h2>
                <p  className="flex items-center justify-between mt-3 text-3xl dark:text-white">
                    <span className="ml-1 text-4xl text-red-500">
                    {err.status} - &nbsp;
                    </span>
                    {err.statusText}
                </p>
                <p 
                    className="text-xl dark:text-gray-100"
                >
                    Go back to &nbsp;
                    <Link to={"/"} className="text-2xl underline text-emerald-500">
                        Home page
                    </Link>
                </p>
            </div>
        </>
    )
}

export default ErrorPage;