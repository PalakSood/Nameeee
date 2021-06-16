	name_of_the_student_array = [];
    
	function submit()
	{
        name_of_the_student_array = [];
        var name_1 = document.getElementById("name1").value;
        var name_2 = document.getElementById("name2").value;
        var name_3 = document.getElementById("name3").value;
        var name_4 = document.getElementById("name4").value;

        name_of_the_student_array.push("Name : "+name_1);
        name_of_the_student_array.push("Name : "+name_2);
        name_of_the_student_array.push("Name : "+name_3);
        name_of_the_student_array.push("Name : "+name_4);

		console.log(name_of_the_student_array);
		
        document.getElementById("display_name").innerHTML = name_of_the_student_array;
        
       //document.getElementById("submit_button").style.display = "none";
     
        document.getElementById("sort_button").style.display = "inline-block";


	}

function sorting()
{
	name_of_the_student_array.sort();
    console.log(name_of_the_student_array);
    document.getElementById("display_name").innerHTML = name_of_the_student_array;
    
    document.getElementById("reverse").style.display = "inline-block";
}
function reverse(){
    name_of_the_student_array.reverse();

    console.log(name_of_the_student_array);
    document.getElementById("display_name").innerHTML = name_of_the_student_array;
    
    document.getElementById("count").style.display = "inline-block";
}

function count(){
    len=name_of_the_student_array.length;
    console.log(len);
    row= "<h1>  Number of Students are : "+len+ " </h1>"
    document.getElementById("display_name").innerHTML=   row;

}