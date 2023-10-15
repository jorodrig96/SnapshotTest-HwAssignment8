import Card from 'react-bootstrap/Card';
import { useState, useEffect } from 'react';

export default function MyGitCard() {
    
const [gitHubName, setGitHubName] = useState('')                     

useEffect(() => {
    fetch('https://api.github.com/users/jorodrig96')
    .then(res => res.json())
    .then(data => {
        setGitHubName(data.name)
    })
    }, []);
    
  return (
    <Card className="bg-dark text-white">
      <Card.Img className='imgCard' src="https://steamuserimages-a.akamaihd.net/ugc/960856720981536415/90FC611EA20B1797EABD82F92508DBB2DAFBBB0E/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>MockFetch-Assignment8</Card.Title>
        <Card.Text>
          Hello, my name is {gitHubName}, & I hope to be doing this as a carreer soon. 
          <p>I'm excited to start this new journey.</p>
          <h6>Yours truly, {gitHubName} :)</h6>
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
};