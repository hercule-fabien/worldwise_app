import {BrowserRouter, Routes, Route} from "react-router-dom";
import Product from "./pages/Product/Product.jsx";
import Pricing from "./pages/Pricing.jsx";
import Homepage from "./pages/Homepage/Homepage.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import AppLayout from "./pages/AppLayout/AppLayout.jsx";
import Login from "./pages/Login/Login.jsx";

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homepage/>}/>
                    <Route path="/product" element={<Product/>}/>
                    <Route path="/pricing" element={<Pricing/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/app" element={<AppLayout/>}>
                        <Route index element={<p>List Of Cities</p>} />
                        <Route path='cities' element={<p>List Of Cities</p>} />
                        <Route path='countries' element={<p>List Of Countries</p>} />
                        <Route path='form' element={<p>Form</p>} />
                    </Route>
                    <Route path="*" element={<PageNotFound/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )

}
