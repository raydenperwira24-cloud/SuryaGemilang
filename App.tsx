import { Navigation } from "./components/navigation";
import { Hero } from "./components/hero";
import { Services } from "./components/services";
import { Capabilities } from "./components/capabilities";
import { Stats } from "./components/stats";
import { About } from "./components/about";
import { BoardOfDirection } from "./components/board-of-direction";
import { Client } from "./components/client";
import { JobOrder } from "./components/job-order";
import { Maspro } from "./components/maspro";
import { Maintenance } from "./components/maintenance";
import { TableLift } from "./components/table-lift";
import { Production } from "./components/production";
import { QualityControl } from "./components/quality-control";
import { Footer } from "./components/footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <BoardOfDirection />
      <About />
      <Services />
      <JobOrder />
      <Maspro />
      <Maintenance />
      <TableLift />
      <Production />
      <QualityControl />
      <Capabilities />
      <Client />
      <Stats />
      <Footer />
    </div>
  );
}