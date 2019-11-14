var app = new Vue({
  el: '#app',
  data: {
    "Recipes": {
    "Chicken_Paprikash": {
      "id": 12345,
      "Nutrition": {
        "Calories": "1001",
        "Fats": "35g"
      },
      "Ingredient": [
        "eggs",
        "apples",
        "bananas",
        "chicken",
        "milk"
      ]
    },
    "Chicken_Casserole": {
      "id": 12345,
      "Nutrition": {
        "Calories": "442",
        "Fats": "12g"
      },
      "Ingredient": [
        "staples",
        "cheese",
        "thats it"
      ]
    }
  }
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
