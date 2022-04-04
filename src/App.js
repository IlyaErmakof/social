import './App.css';
import MainContent from './components/MainContent';
import SideBar from './components/Sidebar';

function App() {
  return (
    <div className="wrapper">
      <SideBar />
      <MainContent />
    </div>
  );
}

export default App;
