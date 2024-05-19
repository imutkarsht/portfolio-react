import { useRouteError } from "react-router-dom"
import Header from "./Header";

const ErrorPage = () =>{
    const err = useRouteError();
    return (
        <>
            <Header />
            <h2>Oops!, Something Went Wrong....</h2>
            <p>
                {err.status} {err.statusText}
            </p>
        </>
    )
}

export default ErrorPage;