
import './App.css';


import TodoList from './component/TodoList';
import LoginForm from './component/LoginForm';
import RegistrationForm from './component/RegistrationForm';
import SurveyForm from './component/SurveyForm';
import SearchFilter from './component/SearchFilter';
import SettingsForm from './component/SettingsForm';
import ShoppingCart from './component/ShoppingCart';
import ImageGallery from './component/ImageGallery';
import ContactList from './component/ContactList';


function App() {
  const imageUrls = [
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgnXqvD-_BPJv9HHDcyeJ3daV-DUWFB3sEug&s',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgnXqvD-_BPJv9HHDcyeJ3daV-DUWFB3sEug&s',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA1BbUFcPJ3sC1KVud8HJEHAtcK3K4adDBhg&s',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA1BbUFcPJ3sC1KVud8HJEHAtcK3K4adDBhg&s',
'https://thumbs.dreamstime.com/b/lamborghini-veneno-supercar-mystical-forest-filled-ancient-trees-lamborghini-veneno-supercar-mystical-forest-292518568.jpg',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-7O83ZdTjYNjB_VVGpCNZm-vUhWET7DL0tKy5C0BHP4crb7wFbJeTz_F88IxF2lwlsUQ&usqp=CAU'
  ];
  return (
   <>
   <TodoList/>
   <br></br>
   <hr></hr>
  < LoginForm/>
  <br></br>
   <hr></hr>
   <RegistrationForm/>
   <br></br>
   <hr></hr>
   <SurveyForm/>
   <br></br>
   <hr></hr>
   <SearchFilter/>
   <br></br>
   <hr></hr>
   <SettingsForm/>
   <br></br>
   <hr></hr>
   <ShoppingCart/>
   <br></br>
   <hr></hr>
   <ImageGallery imageUrls={imageUrls} />  
   <br></br>
   <hr></hr> 
    <ContactList />
    
    </>

  );
}

export default App;
