import "./App.css";
import Counter from "./components/Counter/Counter";
import { AppProviders } from "./providers/AppProviders";
//import { Application } from './components/Application/Application';
//import Skills from './components/Skills/Skills';

function App() {
  return (
    <AppProviders>
      <div className="App">
        {/* <Application />
      <Skills skills={["HTML","CSS"]} /> */}
        <Counter />
      </div>
    </AppProviders>
  );
}

export default App;
