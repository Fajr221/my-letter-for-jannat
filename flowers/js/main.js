console.log("JS file loaded!");

onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = ('KANBGHIIK ASBA3 DYALI').split('')
    const titleElement = document.getElementById('title');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 300); // 1000ms delay
      }
    }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};