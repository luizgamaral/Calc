$(document).ready(function() {
    console.log("Ready");
    $(".price").change(function() {
        let price = $(this).val();
        let qtd = $(this).parents("tr").find(".qtd").val();
        let total = price * qtd;
        $(this).parents("tr").find(".total").text(total);
    })
})