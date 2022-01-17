import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Comics } from "./pages/Comics";
import Comic from "./pages/Comic";
import { Characters } from "./pages/Characters";
import Character from "./pages/Character";
import { Creators } from "./pages/Creators";
import Creator from "./pages/Creator";
import { MarvelEvents } from "./pages/MarvelEvents";
import MarvelEvent from "./pages/MarvelEvent";
import Serie from "./pages/Serie";
import { Series } from "./pages/Series";
import Storie from "./pages/Storie";
import { Stories } from "./pages/Stories";

export const Routes:React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/characters/:id" element={<Character />} />
        <Route path="/comics" element={<Comics />} />
        <Route path="/comics/:id" element={<Comic />} />
        <Route path="/creators" element={<Creators />} />
        <Route path="/creators/:id" element={<Creator />} />
        <Route path="/events" element={<MarvelEvents />} />
        <Route path="/events/:id" element={<MarvelEvent />} />
        <Route path="/series" element={<Series />} />
        <Route path="/series/:id" element={<Serie />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/stories/:id" element={<Storie />} />
      </Switch>
    </BrowserRouter>
  );
}