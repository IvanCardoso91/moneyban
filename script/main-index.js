function myFunction(option) {
    if (option === 'personal') {
        document.getElementById("myDropdown").classList.toggle("show");
        document.getElementById("enterpriseDropdown").classList.remove("show")
    } else {
        document.getElementById("enterpriseDropdown").classList.toggle("show");
        document.getElementById("myDropdown").classList.remove("show");
    }

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