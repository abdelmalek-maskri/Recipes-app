import {
    createRoutesFromElements,
    createBrowserRouter,
    Route,
  } from "react-router-dom";
import Home from "./pages/home/Home";
import Search from "./pages/search/Search";
import Create from "./pages/create/Create";
import Recipe from "./pages/receipe/Recipe";
import Navbar from "./components/Navbar";
import ThemeSelector from "./components/ThemeSelector";

export const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<Navbar />}
      >
        <Route>
          <Route index element={<>
                                  <ThemeSelector />
                                  <Home/>
                                </>} 
          />
          <Route
            path="search"
            element={<Search />}
          />
          <Route
            path="create"
            element={<Create />}
          />
          <Route
            path="recipes/:id"
            element={<Recipe/>}
          />
        </Route>
      </Route>
    )
  );
  