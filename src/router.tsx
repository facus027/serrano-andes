import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import IndexView from "./view/IndexView";


export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout />}>
                    <Route index path="/" element={<IndexView />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
