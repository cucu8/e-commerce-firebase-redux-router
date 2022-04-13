import { Routes, Route } from "react-router-dom";
import { Home, Shop, Navigation, SignIn } from "../pages";


const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigation />}>
                <Route index element={<Home />}/>
                <Route path="shop" element={<Shop />}/>
                <Route path="sign-in" element={<SignIn />}/>
            </Route>
       </Routes>
    );
};

export default Routers;