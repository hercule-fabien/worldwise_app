import {BrowserRouter, Routes, Route} from "react-router-dom";
import Product from "./pages/Product/Product.jsx";
import Pricing from "./pages/Pricing.jsx";
import Homepage from "./pages/Homepage/Homepage.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import AppLayout from "./pages/AppLayout/AppLayout.jsx";
import Login from "./pages/Login/Login.jsx";
import CityList from "./components/CityList/CityList.jsx";
import {useEffect, useState} from "react";
import CountryList from "./components/CountryList/CountryList.jsx";

const URL = "http://localhost:9000/cities";

export default function App() {
    const [cities, setCities] = useState([]);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchCities() {
            try {
                setLoading(true);
                const result = await fetch(URL);
                const data = await result.json();
                setCities(data);
            } catch (e) {
                console.error("couldn't fetch data", e);
            } finally {
                setLoading(false)
            }
        }
        fetchCities();
    }, []);

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Homepage/>}/>
                    <Route path="/product" element={<Product/>}/>
                    <Route path="/pricing" element={<Pricing/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/app" element={<AppLayout/>}>
                        <Route index element={<CityList cities={cities} isLoading={isLoading}/>}/>
                        <Route path='cities' element={<CityList cities={cities} isLoading={isLoading}/>}/>
                        <Route path='countries' element={<CountryList cities={cities} isLoading={isLoading}/>}/>
                        <Route path='form' element={<p>Form</p>}/>
                    </Route>
                    <Route path="*" element={<PageNotFound/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )

}
