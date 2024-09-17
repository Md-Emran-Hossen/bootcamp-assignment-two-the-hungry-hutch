
const loadData = (inputText)  => {

    // const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=potato`;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputText}`;
     fetch(url)
     .then(res =>res.json())
     .then(data => showMeals(data.meals))
     .catch(error => console.log("Error:", error))
 }

 loadData(" ");
 const showMeals = (meals) => {
   
     let container = document.getElementById("resultContainer");
     container.innerHTML = '';
     meals.forEach(meal => {
         let mealCard = document.createElement('div');
        //  mealCard.classList = 'card bg-base-100 shadow-xl';
        mealCard.classList= 'card transition duration-300 ease-in-out hover:scale-110'
 
         mealCard.innerHTML = `
         <figure class="px-5 pt-5">
             <img src= ${meal.strMealThumb} alt= "Image of ${meal.strMeal}" class="rounded-xl" />
         </figure>
         <div class="card-body items-center text-center">
             <h2 class="card-title text-justify"> 
                  Food Name: ${meal.strMeal}!
             </h2>
             <p title="${meal.strInstructions}" class="text-justify" > 
                <span class= "font-bold" > Description: </span> ${meal.strInstructions.slice(0, 150)}...
             </p>
            <div class="card-actions justify-end">
                <button onClick="handleShowDetails(${meal.idMeal})" class="btn btn-light"> 
                    <i class="fa-solid fa-circle-info"></i>
                    <span class = "text-xl" > Details </span>
                </button>
            </div>        
         </div>
        `;
         container.appendChild(mealCard);
     });
 }

const handleShowDetails = (mealId) =>{
    let url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    fetch(url)
        .then(res => res.json())
        .then(data => showMealDetails(data.meals[0]))
        .catch(error => console.log('Error: ', error));
}

const showMealDetails = (meal) =>{

    const showDetailsContainer = document.getElementById("meal-details-container");
    showDetailsContainer.innerHTML = `
    
         <img class="h-96 mx-auto" src="${meal.strMealThumb}" alt="Meal Details image">
         <p class="text-black text-2xl text-center m-5">Name: <span class="font-bold"> ${meal.strMeal} </span></p>
         
          <p class="text-black text-justify">
            <span class= "text-2xl"> Description: </span>
          ${meal.strInstructions}</p>
    
    `;

    show_meal_Details.showModal();
}