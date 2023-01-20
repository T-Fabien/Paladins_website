import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";

// Component
import Navbar from "./components/Navbar";
import Under_Construction from "./components/UnderConstruction";

// Pages
import AllChampionsPage from './pages/AllChampionsPage';
import ChampionPage from "./pages/ChampionPage";
import Homepage from "./pages/HomePage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Homepage />} />
      <Route path="/paladins/champions" element={<AllChampionsPage />} />
      <Route path="/paladins/champions/*" element={<ChampionPage />} />
      <Route path="*" element={<Under_Construction />} />
    </Route>)
  );

  return (
      <RouterProvider router={router}/>
  );
}

// Router
const Root = () => {
  return <>
    <Navbar />
    <Outlet />
  </>;
};

export default App;
