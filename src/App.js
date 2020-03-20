import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Property from "./pages/Property";
import Agents from "./pages/Agents";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Footer from "../src/components/Footer";
import PropertySingle from "./pages/PropertySingle";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/property" component={Property} />
        <Route path="/agents" component={Agents} />
        <Route path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
        <Route path="/merrick" component={PropertySingle} />
        <Route path="/coralGables" component={PropertySingle} />
        <Route path="/hollywoodBoulevard" component={PropertySingle} />
        <Route path="/traditionalRestaurant" component={PropertySingle} />
        <Route path="/nishiPark" component={PropertySingle} />
        <Route path="/FardayWay" component={PropertySingle} />
        <Route path="/centralPark" component={PropertySingle} />
        <Route path="/centralArizona" component={PropertySingle} />
        <Route path="/boulevardWay" component={PropertySingle} />
        <Route path="/gablesCoral" component={PropertySingle} />
        <Route path="/mountOlive" component={PropertySingle} />
        <Route path="/rinoVenda" component={PropertySingle} />
        <Route path="/aliraRoan" component={PropertySingle} />
        <Route path="/biscayneBoulevard" component={PropertySingle} />
        <Route path="/luxuryApartment" component={PropertySingle} />
        <Route path="/centralHome" component={PropertySingle} />
        <Route path="/nosara" component={PropertySingle} />
        <Route path="/grandAvenue" component={PropertySingle} />
        <Route path="/montalBela" component={PropertySingle} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
