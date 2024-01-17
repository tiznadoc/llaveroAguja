import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header/Header';
import SocialMediaLinks from './components/SocialMediaLinks';

function App() {
  return (
    <div className='App'>
      <Header 
        socialMediaLinks={SocialMediaLinks()}
      />
    </div>
  );
}

export default App;