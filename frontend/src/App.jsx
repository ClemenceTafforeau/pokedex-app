import './App.css'
import {ROUTES} from "./router/routes.js";
import {BrowserRouter, Routes, Route} from "react-router";
import {AppLayout} from "./layouts/AppLayout.jsx";
import {HomePage} from "./pages/HomePage.jsx";
import {PokemonDetailPage} from "./pages/PokemonDetailPage.jsx";
import {NotFoundPage} from "./pages/NotFoundPage.jsx";

function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route element={<AppLayout/>}>
                <Route path={ROUTES.HOME} element={<HomePage/>}/>
                <Route path={ROUTES.PKMN_DETAIL} element={<PokemonDetailPage/>}/>
                <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
