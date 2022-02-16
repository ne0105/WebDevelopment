/*
var addButton = document.getElementById("add");
var input = document.getElementById("enter");
var todoList = document.querySelector("ul");

addButton.addEventListener("click", addItems);

function addItems(){

    if (input.value != ""){
        //make li element
        var li = document.createElement("li");
        //put the input as the text of the element
        li.innerHTML = input.value; 
        //add li element to the list
        todoList.appendChild(li);

        li.addEventListener("click", function(){
            li.classList.toggle("cross");
        });

        li.addEventListener("dblclick", function(){
            this.remove();
        });
    }

    input.value = "";
}
*/

$(document).ready(

    function(){

        $('#add').click(
            function(){
                var toAdd = $('#enter').val();
                if (toAdd !== ""){
                    $('ul').append( '<li>' + toAdd + '</li>' );
                    $('#enter').val('');
                }
            }
        );

        $(document).on('click', 'li', function(){
            $(this).toggleClass('cross');
        });

        $(document).on('dblclick', 'li', function(){
            $(this).remove();
        });
    }

);