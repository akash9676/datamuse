import { Route, Routes } from "react-router-dom";
import FetchWord from "./Components/FetchWord";
import Home from "./Components/Home";


export default function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/FetchWord/:id" element={<FetchWord />} />
            </Routes>
        </>
    );
}
