import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./components/DefaultLayout/DefaultLayout";
import { Home } from "./pages/Home/Home";
import { History } from "./pages/History/History";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  );
}
