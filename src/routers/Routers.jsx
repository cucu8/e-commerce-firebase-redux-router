import { Routes, Route } from "react-router-dom";
import { Home, Shop, Navigation, SignIn, SignUp } from "../pages";


const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigation />}>
                <Route index element={<Home />}/>
                <Route path="shop" element={<Shop />}/>
                <Route path="sign-in" element={<SignIn />}/>
                <Route path="sign-up" element={<SignUp />}/>
            </Route>
       </Routes>
    );
};

export default Routers;