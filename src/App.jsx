import './App.css';
import { Card } from './components/card/Card';
import image1 from './images/image1.jpeg' 
import image2 from './images/image2.jpeg'
import image3 from './images/image3.jpeg'
import image4 from './images/image4.jpeg'
import image5 from './images/image5.jpeg'
import image6 from './images/image6.jpeg' 
function App() {
  const cards = [
    {
      url:image1,
      title:"Hibiscus",
      description:"This is one type of flower."
    },
    {
      url:image2,
      title:"Rose",
      description:"This is one type of flower."
    },
    {
      url:image3,
      title:"lotus",
      description:"This is one type of flower."
    },
    {
      url:image4,
      title:"Italian Aster",
      description:"This is one type of flower."
    },
    {
      url:image5,
      title:"Sunflower",
      description:"This is one type of flower."
    },
    {
      url:image6,
      title:"Dahlias",
      description:"This is one typeof flower."
    },
  ]
  return (
     <div className="app">
       {
         cards.map((card,index)=><Card key={index} card={card}/>)
        }
     </div>
  );
}

export default App;