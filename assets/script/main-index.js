function myFunction(option) {
    if (option === 'personal') {
        document.getElementById("myDropdown").classList.toggle("show");
        document.getElementById("enterpriseDropdown").classList.remove("show")
    } else {
        document.getElementById("enterpriseDropdown").classList.toggle("show");
        document.getElementById("myDropdown").classList.remove("show");
    }
}

function menuMobile() {
    document.getElementById("dropdownMenuMobile").classList.toggle("show");
}

const accordionsInfo = document.querySelectorAll('.info');

function openAccordion({ target: { nextElementSibling } }) {
    const info = nextElementSibling;
    info.style.display = info.style.display === 'none' ? '' : 'none';
}

window.onclick = ({ target }) => {
    if (!target.matches('.accordion')) {
        accordionsInfo.forEach(item => {
            if (item.style.display === '') item.style.display = 'none';
        });
    }
    if (!target.matches('.menu-options-btn')) {
        var dropdown = document.querySelectorAll(".dropdown-content")

        dropdown.forEach(item => {
            if (item.classList.contains('show')) {
                item.classList.remove('show');
            }
        })
    }
}