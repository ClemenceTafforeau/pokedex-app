import {Outlet} from "react-router";
import {Header} from "../components/shared/Header.jsx";

export function AppLayout() {
    return (
        <>
            <Header/>
            <Outlet/>
        </>
    )
}