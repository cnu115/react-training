import logo from './logo.svg';
import './App.css';
import Toolbar from './ContextApi/Toolbar';
import Test from './ContextApi/Test';
import ThemeProvider from './ContextApi/ThemeProvider';

function App() {
  return (
    <div className="App">
      <ThemeProvider>
          <Toolbar />
          <Test />
      </ThemeProvider>
    </div>
  );
}

export default App;
