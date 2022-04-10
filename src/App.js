
import './App.css';
import { fullName,adress,imgProfile } from './Data';
import Adress from './Components/Adress';
import FullName from './Components/fullName';
import ProfilePhoto from './Components/profilePhoto';
import{Card} from "react-bootstrap";
import ButtonCard from './Components/Button';



function App() {

 const handleName=(name)=>
 {
  alert(name)
 }
  return ( 

  <div className="App">

  <Card style={{ width: '18rem' }}>
  <ProfilePhoto imgProfile={imgProfile}/> 
  <Card.Body>
    <Card.Title>
    <FullName fullName={fullName}/>
    </Card.Title>
    <Card.Text>
    <Adress adress={adress}/>  
 
    </Card.Text>
 <ButtonCard handleName={handleName} fullName={fullName}/>
  </Card.Body>
</Card>




  </div>

  )
};
  


export default App;
