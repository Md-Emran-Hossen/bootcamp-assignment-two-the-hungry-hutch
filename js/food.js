const loadData = (inputText)  => {

    // const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=potato`;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputText}`;
     fetch(url)
     .then(res =>res.json())
     .then(data => showMeals(data.meals))
     .catch(error => console.log("Error:", error))
 }
 
 loadData();
 
 const showMeals = (meals) => {
   
     let container = document.getElementById("resultContainer");
     container.innerHTML = '';
     meals.forEach(meal => {
         let mealCard = document.createElement('div');
         mealCard.classList = 'card bg-base-100 shadow-xl';
 
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
                <button class="btn btn-primary"> Add to Cart </button>
            </div>
            
         </div>
        `;
         container.appendChild(mealCard);
     });
 }