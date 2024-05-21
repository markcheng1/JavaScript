// Assignment Code
var num_type_flag ;
var num_type_flag1;
var num_type;
var numeric_type;
var upper_case_type;
var lower_case_type;
var spec_char_type;
var pass_len = " ";
var display_text ="";
var password;
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  password = false
  clear_write_password();
  password = generatePassword();
  while ((password == null) || (password == false)) {
    
    if (password == null) {
    return;
    } else if (password == false) {
      password = generatePassword();
    }
  }
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
function clear_write_password() {
  var password = "";
  var passwordText = document.querySelector("#password");
  passwordText.value = "";
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
function generatePassword(){
  //var pass_len =""; 
  var temp_type;
  var temp_flag;
  var temp_pass;
  var password_string ="";
  pass_len = pass_length();
  while ((pass_len == null) || (pass_len == false))  {
    if (pass_len == null) {
      return null;
    }  else if (pass_len == false) {  
      pass_len = pass_length();
    }  
  }
 
  display_text = "number";
  temp_flag = check_all_func();
  if (temp_flag == null) {
    return null;
  }
  numeric_type = num_type;
  num_type = "";

  display_text = 'upper case character';  
  temp_flag = check_all_func();
  if (temp_flag == null) {
      return null;
  }
  upper_case_type = num_type;
  num_type = "";

  display_text = 'lower case character';  
  temp_flag = check_all_func();
  if (temp_flag == null) {
      return null;
  }
  lower_case_type = num_type;
  num_type =""; 

  display_text = 'special character';  
  temp_flag = check_all_func();
  if (temp_flag == null) {
      return null;
  }
  spec_char_type = num_type;
  num_type ="";
  if ((numeric_type == "N") && (upper_case_type == "N") && (lower_case_type == "N") && (spec_char_type == "N")) {
    alert("You must choose at least one data type for password, please try again");
    return false;
  }
    password_string = create_pass(pass_len,numeric_type,lower_case_type,upper_case_type,spec_char_type);
    //alert('password string '+password_string);
    return password_string;

  
}
function pass_length(){
  var pass_len_local;
  pass_len_local = prompt("Please input the length of the password (8 to 128 character)");
  if (pass_len_local == null) {
    return null;
  }
  if ((pass_len_local.trim() == "") || (isNaN(pass_len_local) == true)) {
    alert("Invalid input, please input again");
     return false;
  } else if ((pass_len_local < 8) || (pass_len_local >128))      {
     alert("Password must between 8 to 128 characters, please input again ");
     return false;
  } else {
    return pass_len_local;
  }
}
function check_all_func() {
  num_type_flag = false;
  num_type_flag1 = false;

  while (num_type_flag != true){ 
    validate_flag = validate_func(display_text);
    if (validate_flag == null) {
      return null;
    }
    num_type_flag = validate_flag;
  }  
 
  num_type_flag = validate_flag;
  return validate_flag;
 
}
function validate_func(display_text) {
  num_type = prompt("Do you want to include " + display_text + " in the password ? (Y or N)");  
   if (num_type == null) {
     return null;
   }
 
  num_type_flag = check_invalid_input(num_type); 
  
  if (num_type_flag == null){
   // validate_func(display_text);
     return null;
  } else if (num_type_flag == false) {
    return false;
  }

  num_type_flag1 = check_Y_N(num_type);
  if (num_type_flag1 == false) {
    //validate_func(display_text);
     return false;
  } else {
      return true;
  }
  }
function check_invalid_input(char_type){
  if (char_type == null) {
    return null;
  } else if (char_type.trim() == "") {
      alert("Invalid input, please input again");
      return false;
  } else {
    return true;
  }
}
function check_Y_N(char_type){
   //var char_type;
   if ((char_type.toUpperCase()!=="Y") && (char_type.toUpperCase()!=="N")){
      alert("Invalid input, please input again");
      return false;
    } else {
      num_type = char_type.toUpperCase();
      return true;
   }
  }

function create_pass(pass_len,numeric_type,lower_case_type,upper_case_type,spec_char_type)  {
  var password_string = "";
  while (pass_len >0) {
    if (numeric_type == "Y") {
      const numeric = ['0','1','2','3','4','5','6','7','8','9'];
      temp_pass = Math.floor(Math.random()*numeric.length);
      password_string = password_string + numeric[temp_pass];
      //alert('password string '+password_string);
      temp_pass = "";
      pass_len--;
   }
   if ((upper_case_type == "Y") && (pass_len >0)) {
    const upper_case = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    temp_pass = Math.floor(Math.random()*upper_case.length);
    password_string = password_string + upper_case[temp_pass];
    //alert('password string '+password_string);
    temp_pass = "";
    pass_len--;
   } 
   if ((lower_case_type == "Y") && (pass_len > 0)) {
    const lower_case = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    temp_pass = Math.floor(Math.random()*lower_case.length);
    password_string = password_string + lower_case[temp_pass];
    //alert('password string '+password_string);
    temp_pass = "";
    pass_len--;
   } 
   if ((spec_char_type == "Y") && (pass_len > 0)) {
    const spec_char = ['!','@','#','$','%' ,'^','&','*','(',')','-','_','+','=','[',']','\','|',','.','`','~','<','>'];
    temp_pass = Math.floor(Math.random()*spec_char.length);
    password_string = password_string + spec_char[temp_pass];
    //alert('password string '+password_string);
    temp_pass = "";
    pass_len--;
   } 
  }
  return password_string;
}
