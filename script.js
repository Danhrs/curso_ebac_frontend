$(document).ready(function(){

    $("form").on("submit", function(e){
        e.preventDefault();
        const tarefa = $("#tarefa").val();
        $(`ul`).append(`<li class="desriscado">${tarefa}</li>`);
    })

    $("ul").on("click",'li', function(){
        $(this).attr("class", "riscado");
    })
})

