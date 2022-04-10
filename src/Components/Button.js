import { Button } from "react-bootstrap";


   
    function ButtonCard({handleName,fullName}) {


        return ( 
      
        <div>
       <Button variant="primary" onClick={()=>handleName(fullName.firstName)}>Go somewhere</Button>
      
      
        </div>
      
        )
      };
        
      
      
      export default ButtonCard;
      