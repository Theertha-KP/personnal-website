$(document).ready(()=>{
    $('#gform').submit((e)=>{
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "https://script.google.com/macros/s/AKfycbzDf5BZx1HlF6HkjjUN_VPRXUtqud6kgFnRn0rXHHK6BBxAxRYT1FoXdXiHxa5ktjLI/exec",
            data: $("#gform").serialize(),
            
          }).done(function (data) {
           alert("form submitted successfully");
           window.location.reload()
          });
    })
})