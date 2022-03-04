var names_of_the_students = [];
 function submit() {
    var names_with_prefix_array = [];


    for (counter = 1; counter<= 4; counter=counter+1) {
        var name = document.getElementById("name_of_student_" + counter).value;
        console.log(name);
        names_of_the_students.push(name);

    

    }
     console.log(names_of_the_students);
        var len = names_of_the_students.length;
    for (counter = 0; counter < len; counter++) {
        names_with_prefix_array.push("<h4> Name - " + names_of_the_students[counter] + "</h4>");
        console.log(names_with_prefix_array);
    }

    document.getElementById("display_name_with_commas").innerHTML = names_with_prefix_array;

    var remove_commas = names_with_prefix_array.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML = remove_commas;

    document.getElementById("SubmitButton").style.display= "none";
    document.getElementById("SortButton").style.display = "inline-block";
 }

 function sorting() {
     names_of_the_students.sort();
     console.log(names_of_the_students);
     var names_with_prefix_array = [];
     var len = names_of_the_students.length;
     for (counter = 0; counter < len; counter++) {
         names_with_prefix_array.push("<h4> Name - " + names_of_the_students[counter] + "</h4>");
         console.log(names_with_prefix_array);
     }
 
     document.getElementById("display_name_with_commas").innerHTML = names_with_prefix_array;
 
     var remove_commas = names_with_prefix_array.join(" ");
     console.log(remove_commas);
     document.getElementById("display_name_without_commas").innerHTML = remove_commas;
}

function new_update() {
    document.getElementById("display_name_without_commas").innerHTML = "<h1>" + names_of_the_students + "</h1>";
}

    
 