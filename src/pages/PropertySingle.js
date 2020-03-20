import React from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import Property from "../pages/Property";
import Agents from "../pages/Agents";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import MerrickWay from "../components/Property Single/MerrickWay";
import CoralGables from "../components/Property Single/CoralGables";
import HollywoodBoulevard from "../components/Property Single/HollywoodBoulevard";
import TraditionalRestaurant from "../components/Property Single/TraditionalRestaurant";
import NishiPark from "../components/Property Single/NishiPark";
import FardayWay from "../components/Property Single/FardayWay";
import CentralPark from "../components/Property Single/CentralPark";
import CentralArizona from "../components/Property Single/CentralArizona";
import BoulevardWay from "../components/Property Single/BoulevardWay";
import GablesCoral from "../components/Property Single/GablesCoral";
import MountOlive from "../components/Property Single/MountOlive";
import RinoVenda from "../components/Property Single/RinoVenda";
import AliraRoan from "../components/Property Single/AliraRoan";
import BiscayneBoulevard from "../components/Property Single/BiscayneBoulevard";
import LuxuryApartment from "../components/Property Single/LuxuryApartment";
import CentralHome from "../components/Property Single/CentralHome";
import Nosara from "../components/Property Single/Nosara";
import GrandAvenue from "../components/Property Single/GrandAvenue";
import MontalBela from "../components/Property Single/MontalBela";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function PropertySingle() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/property" exact component={Property} />
        <Route path="/agents" exact component={Agents} />
        <Route path="/blog" exact component={Blog} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/merrick" exact component={MerrickWay} />
        <Route path="/coralGables" exact component={CoralGables} />
        <Route
          path="/hollywoodBoulevard"
          exact
          component={HollywoodBoulevard}
        />
        <Route
          path="/traditionalRestaurant"
          exact
          component={TraditionalRestaurant}
        />
        <Route path="/nishiPark" exact component={NishiPark} />
        <Route path="/fardayWay" exact component={FardayWay} />
        <Route path="/centralPark" exact component={CentralPark} />
        <Route path="/centralArizona" exact component={CentralArizona} />
        <Route path="/boulevardWay" exact component={BoulevardWay} />
        <Route path="/gablesCoral" exact component={GablesCoral} />
        <Route path="/mountOlive" exact component={MountOlive} />
        <Route path="/rinoVenda" exact component={RinoVenda} />
        <Route path="/aliraRoan" exact component={AliraRoan} />
        <Route path="/biscayneBoulevard" exact component={BiscayneBoulevard} />
        <Route path="/luxuryApartment" exact component={LuxuryApartment} />
        <Route path="/centralHome" exact component={CentralHome} />
        <Route path="/nosara" exact component={Nosara} />
        <Route path="/grandAvenue" exact component={GrandAvenue} />
        <Route path="/montalBela" exact component={MontalBela} />
      </Switch>
    </BrowserRouter>
  );
}
export default PropertySingle;
