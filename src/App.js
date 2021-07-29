import axios from "axios";
import React, { useState } from "react";
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
import {Container,Header,AppNameComponent,HamImg,SearchComponent,SearchInput,SearchIcon} from './styledcomponents/HeaderComponent'
import {RecipeContainer,RecipeListContainer,RecipeImg,RecipeName,RecipeIngredients,MoreRecipe,PlaceHolder} from './styledcomponents/RecipeContainer'


function App() {
  
  const APP_ID = "a52b4d43";
  const APP_KEY = "e0e5c667605f5e91d8275c973531b80a";
  const [timeId,setTimeId]=useState();
  const [recipeList,setRecipeList]=useState([]);

  const fetchData= async (searchString)=>{
    const response= await axios.get(`https://api.edamam.com/search?q=${searchString}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    setRecipeList(response.data.hits);
    console.log(recipeList);
  }
  const textChange=(e)=>{
     clearTimeout(timeId)
     const timeoutId = setTimeout(()=> fetchData(e.target.value),500);
     setTimeId(timeoutId);
  }
  return (
    <Container >
      <Header>
        <AppNameComponent>
        <HamImg src='/hamburger.svg' />
        Recipe Finder </AppNameComponent> 
        <SearchComponent>
        <SearchIcon src='search-icon.svg'/>
         <SearchInput placeholder='Search for Recipes' onChange={textChange}/>
         </SearchComponent>
         </Header>

         
          <RecipeListContainer>
           {recipeList.length ?
           recipeList.map((data)=>(
             <RecipeComponent data={data.recipe}/>
           )): <PlaceHolder src='/hamburger.svg'/>}
            
          </RecipeListContainer>
          
         
        
      
      
    </Container>
  );
}

const RecipeComponent=(props)=>{
  const {data} =props;
  const [show,setShow]=useState(false);
  const handleClose = () => {
    setShow(false);
  };

  return(
    <div>
      <Dialog open={show}>
      <DialogTitle id="alert-dialog-slide-title">Ingredients</DialogTitle>
      <DialogContent>{data.label}</DialogContent>
      <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          
        </DialogActions>
      </Dialog>
      <RecipeContainer>
           <RecipeImg  src={data.image}/>
            <RecipeName>{data.label}</RecipeName>
            <RecipeIngredients onClick={()=>setShow(true)}>Ingredients</RecipeIngredients>
            <MoreRecipe onClick={()=>window.open(data.url)}>See Complete Recipe</MoreRecipe>
        </RecipeContainer>
    </div>
  )

}

export default App;
