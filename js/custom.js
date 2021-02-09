// var content_holder = document.getElementById('main-content');
// var heading = document.createElement('h3');
// var prase = document.createElement('p');

// heading.innerHTML = "Lorem ipsum dolor sit,";
// prase.innerHTML = "rem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit provident dolor numquam repellendus placeat quibusdam doloremque, beatae eveniet dolorum dicta aspernatur ea odio, assumenda accusantium cupiditate obcaecati autem aut nesciunt aperiam dignissimos rem veniam ut. Voluptatem, nostrum. Veniam unde autem esse mollitia deserunt dolorum";
// content_holder.appendChild(heading);
// content_holder.appendChild(prase);


var u_name = document.myform.c_name;
var u_Email = document.myform.c_email;
var msg = document.getElementById("message");



function validation(){
    if(u_name.value.length < 3){
         msg.innerHTML= "Username length should be 5 or grater than 5";
         msg.style.color="red";
         msg.style.fontSize="10px";
    }
    else{
       msg.innerHTML="";
    }
}




