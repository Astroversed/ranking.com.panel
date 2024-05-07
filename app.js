document.addEventListener("DOMContentLoaded", function() {
  const nombre = sessionStorage.getItem("nombre");
  const curso = sessionStorage.getItem("curso");

  document.getElementById("nombre").textContent = nombre;
  document.getElementById("curso").textContent = curso;
  document.getElementById("tooltipUserName").textContent = nombre;
});

const shrink_btn = document.querySelector(".shrink-btn");
const search = document.querySelector(".search");
const sidebar_links = document.querySelectorAll(".sidebar-links a");
const active_tab = document.querySelector(".active-tab");
const shortcuts = document.querySelectorAll(".sidebar-links h4");
const tooltip_elements = document.querySelectorAll(".tooltip-element");

let activeIndex;

shrink_btn.addEventListener("click", () => {
  document.body.classList.toggle("shrink");
  setTimeout(moveActiveTab, 400);

  shrink_btn.classList.add("hovered");

  setTimeout(() => {
      shrink_btn.classList.remove("hovered");
  }, 500);
});

search.addEventListener("click", () => {
  document.body.classList.remove("shrink");
  search.lastElementChild.focus();
});

function reloadPage() {
  location.reload();
}

function moveActiveTab() {
  const visibleLinks = document.querySelectorAll(".sidebar-links a[data-active]");
  const activeTab = document.querySelector(".active-tab");

  let activeLinkIndex = -1;
  visibleLinks.forEach((link, index) => {
      if (link.classList.contains("active")) {
          activeLinkIndex = index;
      }
  });

  if (activeLinkIndex !== -1) {
      let topPosition = activeLinkIndex * 58 + 2.5;
      if (activeLinkIndex > 4) {
          topPosition += document.querySelector(".sidebar-links h4").clientHeight;
      }

      activeTab.style.top = `${topPosition}px`;
  }
}

function changeLink() {
  sidebar_links.forEach((sideLink) => sideLink.classList.remove("active"));
  this.classList.add("active");

  activeIndex = this.dataset.active;

  moveActiveTab();
}

sidebar_links.forEach((link) => link.addEventListener("click", changeLink));

function showTooltip() {
  let tooltip = this.parentNode.lastElementChild;
  let spans = tooltip.children;
  let tooltipIndex = this.dataset.tooltip;

  Array.from(spans).forEach((sp) => sp.classList.remove("show"));
  spans[tooltipIndex].classList.add("show");

  if (this.offsetParent !== null) { 
  let tooltip = this.parentNode.lastElementChild;
  let spans = tooltip.children;
  let tooltipIndex = this.dataset.tooltip;

  Array.from(spans).forEach((sp) => sp.classList.remove("show"));
  spans[tooltipIndex].classList.add("show");

  tooltip.style.top = `${(100 / (spans.length * 2)) * (tooltipIndex * 2 + 1)}%`;
}
}

tooltip_elements.forEach((elem) => {
  elem.addEventListener("mouseover", showTooltip);
});

const searchInput = document.querySelector(".search input");
const options = document.querySelectorAll(".sidebar-links .tooltip-element a .link");
const allOptions = ["Tercero A", "Tercero B", "Tercero C", "Tercero D", "Tercero E", "Informática", "Enfermería", "Gestión", "Mercadeo", "Modas", "Ebanistería"];

searchInput.addEventListener("keyup", function() {
  const searchText = this.value.toLowerCase();
  options.forEach(option => {
      const text = option.textContent.toLowerCase();
      if (text.includes(searchText)) {
          option.parentNode.style.display = "flex";
      } else {
          option.parentNode.style.display = "none";
      }
  });

  shortcuts.forEach(shortcut => {
      shortcut.style.display = "none";
  });
});

function changeLink() {
  sidebar_links.forEach((sideLink) => sideLink.classList.remove("active"));
  this.classList.add("active");

  activeIndex = this.dataset.active;

  moveActiveTab();

  if (activeIndex === "0") {
      document.getElementById("terceroA-table-container").style.display = "block";
  } else {
      document.getElementById("terceroA-table-container").style.display = "none";
  }

  if (activeIndex === "1") {
      document.getElementById("terceroB-table-container").style.display = "block";
  } else {
      document.getElementById("terceroB-table-container").style.display = "none";
  }

  if (activeIndex === "2") {
      document.getElementById("terceroC-table-container").style.display = "block";
  } else {
      document.getElementById("terceroC-table-container").style.display = "none";
  }

  if (activeIndex === "3") {
      document.getElementById("terceroD-table-container").style.display = "block";
  } else {
      document.getElementById("terceroD-table-container").style.display = "none";
  }

  if (activeIndex === "4") {
      document.getElementById("terceroE-table-container").style.display = "block";
  } else {
      document.getElementById("terceroE-table-container").style.display = "none";
  }
}

function searchTable(filter, tableId) {
const table = document.getElementById(tableId);
const tableRows = table.querySelectorAll("tbody tr");

tableRows.forEach(function(row) {
  const nameCell = row.getElementsByTagName("td")[1];
  const numberCell = row.getElementsByTagName("td")[0];
  if (nameCell && numberCell) {
    const nameValue = nameCell.textContent || nameCell.innerText;
    const numberValue = numberCell.textContent || numberCell.innerText;
    if (
      nameValue.toUpperCase().indexOf(filter) > -1 ||
      numberValue.toUpperCase().indexOf(filter) > -1
    ) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  }
});
}

document.querySelectorAll('.searchNames').forEach(function(searchInput) {
searchInput.addEventListener('input', function() {
  const tableId = searchInput.closest('div[id$="-table-container"]').id;
  const filter = searchInput.value.toUpperCase();
  searchTable(filter, tableId);
});
});

  window.onload = function () {
    const selectedCourse = sessionStorage.getItem('selectedCourse');

    if (selectedCourse) {
      document.getElementById(selectedCourse + '-table-container').style.display = 'block';
    }
  };

          var curso = sessionStorage.getItem("curso");

          document.addEventListener("DOMContentLoaded", function() {
  const nombre = sessionStorage.getItem("nombre");
  const curso = sessionStorage.getItem("curso");

  document.getElementById("nombre").textContent = nombre;
  document.getElementById("curso").textContent = curso;
  document.getElementById("tooltipUserName").textContent = nombre;

  const selectedCourse = sessionStorage.getItem('curso');

  switch (selectedCourse) {
      case "Tercero A":
          document.getElementById("terceroA-table-container").style.display = "block";
          break;
      case "Tercero B":
          document.getElementById("terceroB-table-container").style.display = "block";
          break;
      case "Tercero C":
          document.getElementById("terceroC-table-container").style.display = "block";
          break;
      case "Tercero D":
          document.getElementById("terceroD-table-container").style.display = "block";
          break;
      case "Tercero E":
          document.getElementById("terceroE-table-container").style.display = "block";
          break;
      case "4to Informática A":
          document.getElementById("infA4-table-container").style.display = "block";
          break;
      case "4to Informática B":
          document.getElementById("infB4-table-container").style.display = "block";
          break;
      case "4to Enfermería":
          document.getElementById("enfer4-table-container").style.display = "block";
          break;
      case "4to Gestión":
          document.getElementById("gest4-table-container").style.display = "block";
          break;
      case "4to Mercadeo":
          document.getElementById("merc4-table-container").style.display = "block";
          break;
      case "4to Modas":
          document.getElementById("moda4-table-container").style.display = "block";
          break;
      case "4to Ebanistería":
          document.getElementById("eban4-table-container").style.display = "block";
          break;
      default:
          console.error("Curso no reconocido:", curso);
          break;
  }
});

  document.addEventListener("DOMContentLoaded", function() {
    const selectedCourse = sessionStorage.getItem('curso');
    const sidebarLinks = document.querySelectorAll(".sidebar-links a");

    sidebarLinks.forEach(link => {
      const linkCurso = link.textContent.trim();

      if (linkCurso === selectedCourse) {
        link.classList.add("active");
        const activeIndex = link.getAttribute("data-active");
        moveActiveTab(activeIndex);
      }
    });

    sidebarLinks.forEach(link => {
      link.addEventListener("click", function() {
        const activeIndex = this.getAttribute("data-active");
        moveActiveTab(activeIndex);
      });
    });
  });

function toggleSubMenu(event, submenuId) {
    event.preventDefault();

    var submenu = document.getElementById(submenuId);
    var allSubMenus = document.querySelectorAll('.sub-menu');

    if (submenu.classList.contains('active')) {
        submenu.classList.remove('active');
        submenu.classList.add('hidden');

        setTimeout(function() {
            submenu.style.display = 'none';
        }, 300);

        event.currentTarget.querySelector('.arrow').classList.remove('rotate');
        return;
    }

    allSubMenus.forEach(function(subMenu) {
        subMenu.classList.remove('active');
        subMenu.classList.add('hidden');
        subMenu.previousElementSibling.querySelector('.arrow').classList.remove('rotate');
    });

    submenu.classList.add('active');
    submenu.classList.remove('hidden');
    var arrowIcon = event.currentTarget.querySelector('.arrow');
    arrowIcon.classList.add('rotate');
    submenu.style.display = 'block';
}

function showContent(id) {
    var content = document.getElementById(id);
    content.style.display = 'block';

    var allContents = document.querySelectorAll('.contenido');
    allContents.forEach(function(item) {
      if (item.id !== id) {
        item.style.display = 'none';
      }
    });
  }

function hideSubmenus() {
  const submenus = document.querySelectorAll('.sub-menu');

  submenus.forEach(submenu => {
      submenu.classList.remove('active');
      submenu.classList.add('hidden');
      setTimeout(() => {
          submenu.style.display = 'none';
      }, 300);
      submenu.previousElementSibling.querySelector('.arrow').classList.remove('rotate');
  });
}

document.addEventListener("DOMContentLoaded", function() {
  const tooltipElements = document.querySelectorAll(".tooltip-element");

  tooltipElements.forEach(element => {
      const link = element.querySelector("a");
      const submenuId = link.getAttribute("data-active");
      const submenuIndex = parseInt(submenuId);


      if (submenuIndex >= 0 && submenuIndex <= 4) {
          link.addEventListener("click", function(event) {
              event.preventDefault();
              hideSubmenus();
          });
      }
  });
});

document.addEventListener("DOMContentLoaded", function() {
  var toggleBtn = document.querySelector(".toggle-collapse");
  var collapseContent = document.querySelector(".collapse-content");
  var arrowIcon = document.querySelector(".arrow-collapse");
  
  toggleBtn.addEventListener("click", function() {

    collapseContent.classList.toggle("show");

    if (collapseContent.classList.contains("show")) {
      collapseContent.classList.remove("slide-out");
      collapseContent.classList.add("slide-in");
      arrowIcon.style.transform = "rotate(180deg)";
    } else {
      collapseContent.classList.remove("slide-in");
      collapseContent.classList.add("slide-out");
      arrowIcon.style.transform = "rotate(0deg)";
    }
  });
});

document.addEventListener("DOMContentLoaded", function() {
  var statusElement = document.querySelector('.status.Absoluto');

  statusElement.addEventListener('click', function() {
    statusElement.classList.toggle('active');
  });

  document.addEventListener('click', function(event) {
    if (!event.target.closest('.toggle-collapse')) {
      statusElement.classList.remove('active');
    }
  });
});
