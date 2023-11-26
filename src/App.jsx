import {BrowserRouter, Routes, Route} from "react-router-dom";
import Product from "./pages/Product.jsx";
import Pricing from "./pages/Pricing.jsx";
import Homepage from "./pages/Homepage.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import PageNav from "./components/PageNav/PageNav.jsx";
import AppLayout from "./pages/AppLayout.jsx";

export default function App() {
    return (
        <>
            <BrowserRouter>
                <PageNav />
                <Routes>
                    <Route path="/" element={<Homepage/>}/>
                    <Route path="/product" element={<Product/>}/>
                    <Route path="/pricing" element={<Pricing/>}/>
                    <Route path="/app" element={<AppLayout/>}/>
                    <Route path="*" element={<PageNotFound/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )

}
