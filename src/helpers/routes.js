import Login from "../components/Login";
import Register from "../components/Register";
// import Home from "../components/Home";
import ForgetPassword from "../components/ForgetPassword";
import ResetPassword from "../components/ResetPassword";

export const routes = [
    // {
    //     exact: true,
    //     name: "home",
    //     path: "/",
    //     component: Home,
    // },
    {
        exact: true,
        name: "login",
        path: "/",
        component: Login,
    },
    {
        exact: true,
        name: "register",
        path: "/register",
        component: Register,
    },
    {
        exact: true,
        name: "forgetPassword",
        path: "/forget/password",
        component: ForgetPassword,
    },
    {
        exact: true,
        name: "resetPassword",
        path: "/reset/password/:token",
        component: ResetPassword,
    }
]