var app = new Vue({
  el: '#app',
  data: {
    recipes: [
      {
        recipeId: 1111,
        recipe_name: 'Chicken Paprikash',
        calories: '1000',
        fats: '14g'
      },
      {
        recipeId: 1112,
        recipe_name: 'Steak',
        calories: '10010',
        fats: '14g'
      },
      {
        recipeId: 1112,
        recipe_name: 'Herbed Lemon Salmon',
        calories: '10010',
        fats: '14g'
      },
      {
        recipeId: 1112,
        recipe_name: 'Brownies',
        calories: '10010',
        fats: '14g'
      },
      {
        recipeId: 1112,
        recipe_name: 'Meatballs',
        calories: '10010',
        fats: '14g'
      },
      {
        recipeId: 1112,
        recipe_name: 'Mexican Chip Dip',
        calories: '10010',
        fats: '14g'
      }
    ],
    userIngredients: ["eggs", "potatoes", "milk", "pasta", "rice", "beans"]
  }
});

// Homepage - Login Button - Toggles login div
$("#btn-login").click(function(){
  $("#login-input").slideToggle(200);
  $("#login").slideToggle(200);
});

// Homepage - Create Account Button - Toggles create account div
$("#btn-create-account").click(function() {
  $("#login").slideToggle(200);
  $("#create-account-main").slideToggle(200);
});

// Login - Submit button temporarily takes you back to 'home'
$("#login-submit").click(function(){
  $("#view-dashboard").slideToggle(1);
  $("#view-login").slideToggle(1);
});

// Create Account - Sign up with facebook temp taking you back 'home'
$("#signup-facebook").click(function(){
  $("#create-account-main").slideToggle(200);
  $("#login").slideToggle(200);
});

// Create Account - Sign up with facebook temp taking you back 'home'
$("#signup-google").click(function(){
  $("#create-account-main").slideToggle(200);
  $("#login").slideToggle(200);
});
