import { Routes as RouterRoutes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Silly } from "./pages/silly";
import { MoreSilly } from "./pages/more-silly";
import { SillyHeader } from "./components/silly-header";
import { SillyFooter } from "./components/silly-footer";

const Routes = () => (
  <div className="flex min-h-screen flex-col">
    <SillyHeader />
    <main className="flex-1">
      <RouterRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/silly" element={<Silly />} />
        <Route path="/more-silly" element={<MoreSilly />} />
      </RouterRoutes>
    </main>
    <SillyFooter />
  </div>
);

export { Routes };