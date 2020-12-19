function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function enterpriseFunction() {
    document.getElementById("enterpriseDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.menu-options-btn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

// NAO ESQUECER DE ADICIONAR O MÉTODO POST
{
    /* <form method="post" action="https://consulta.moneyban.com.br/licenciamento.php" name="form">
    	<input type="text" placeholder="Nome Completo" name="cnome">
    	<input type="email" placeholder="E-mail" name="cemail">
    	<input type="tel" placeholder="Telefone" name="cphone">
    	<input type="text" placeholder="Renavam" id="renavam" name="crenavam" maxlength="11">
    	<input type="hidden" name="cparceiro" value="">
    	<input type="hidden" name="cuf" value="PR">
    	<button type="submit" >Consultar Grátis</button>
    </form> */
}