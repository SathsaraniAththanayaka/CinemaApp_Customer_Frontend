import './Home.css'; 
import SearchBar from '../../components/SearchBar/SearchBar';
import NavBar from '../../components/NavBar/NavBar';
import SideBar from '../../components/SideBar/SideBar';
import { useParams} from 'react-router-dom';

function Home() {  
  const { id } = useParams();
  return (
    <div>
      <NavBar/>
      <SearchBar/>
      <SideBar userId = {id}/>
    </div>
  );
}

export default Home;
