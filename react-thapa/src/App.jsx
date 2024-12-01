import { Increment } from "./components/hooks/Increment";
import NetflixSeries, { Footer } from "./components/NetflixSeries";
// import "./components/NetflixSeries.css";
import { ParentChild } from "./components/ParentToChildUpdate";
import { Switch } from "./components/Switch";
import { Users } from "./components/Users";
import { ToDo } from "./components/projects/ToDo/ToDo";

export const App = () => {
  return (
    <section class="container">
      {/* <p className="heading">List Of Netflix Series</p> */}
      <ToDo />
      {/* <Switch /> */}
      {/* <ParentChild /> */}
      {/* <Users /> */}
      {/* <Increment />
      <NetflixSeries />
      <Footer /> */}
    </section>
  );
};
