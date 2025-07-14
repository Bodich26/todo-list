import "./App";

import { Footer, Header } from "./widgets";
import { Container } from "./shared";
import { TaskManager } from "./widgets";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-section">
      <Container>
        <Header />
      </Container>
      <main className="flex-1">
        <Container>
          <TaskManager />
        </Container>
      </main>
      <Container>
        <Footer />
      </Container>
    </div>
  );
}

export default App;
