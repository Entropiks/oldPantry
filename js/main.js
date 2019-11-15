var app = new Vue({
  el: '#app',
  data: {
    recipes: [
      {
        recipeId: 1111,
        recipe_name: 'chicken',
        calories: '1000',
        fats: '14g'
      },
      {
        recipeId: 1112,
        recipe_name: 'steak',
        calories: '10010',
        fats: '14g'
      },
      {
        recipeId: 1112,
        recipe_name: 'fish',
        calories: '10010',
        fats: '14g'
      },
      {
        recipeId: 1112,
        recipe_name: 'ice cream',
        calories: '10010',
        fats: '14g'
      },
      {
        recipeId: 1112,
        recipe_name: 'a shovel',
        calories: '10010',
        fats: '14g'
      },
      {
        recipeId: 1112,
        recipe_name: 'sea urchins',
        calories: '10010',
        fats: '14g'
      }
    ]
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
