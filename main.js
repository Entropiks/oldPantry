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
