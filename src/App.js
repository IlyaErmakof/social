import './App.css';
import MainContent from './components/MainContent';
import SideBar from './components/Sidebar';

function proper(world){
  world.toLowerCase()
  let ab = []
  for(let i = world.length; i>=0; i--)
  {
    ab.push(world[i])
  }
  let resilt = ab.join('')
  return resilt
}
console.log(proper('ava98saa'))

function App() {
  return (
    <div className="wrapper">
      <SideBar />
      <MainContent />
    </div>
  );
}

export default App;
