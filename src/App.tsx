import "./App";
import { Footer, Header } from "./widgets";

function App() {
  return (
    <div className="flex flex-col relative min-h-screen bg-section">
      <Header />
      <main className="flex-1">
        <h1>Montserrat</h1>
      </main>
      <Footer />
    </div>
  );
}

export default App;
