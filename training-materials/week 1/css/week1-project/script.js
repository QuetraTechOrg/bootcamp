function openMenu() {
  const menu = document.getElementById("menu");
  const openMenuIcon = document.getElementById("openIcon");
  const closeMenuIcon = document.getElementById("closeIcon");
  menu.style.display = "block";
  openMenuIcon.style.display = "none";
  closeMenuIcon.style.display = "block";
}
function closeMenu() {
  const menu = document.getElementById("menu");
  const openMenuIcon = document.getElementById("openIcon");
  const closeMenuIcon = document.getElementById("closeIcon");
  menu.style.display = "none";
  openMenuIcon.style.display = "block";
  closeMenuIcon.style.display = "none";
}
