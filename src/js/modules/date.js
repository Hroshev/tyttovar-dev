const dataElement = document.getElementById('data');

if (dataElement) {
  dataElement.innerHTML = `<p>Всі права захищені © ${new Date().getFullYear()}</p>`;
}