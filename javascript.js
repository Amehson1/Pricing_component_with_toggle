const handle = document.getElementById('handle');
const checkbox = document.getElementById('toggle');

  handle.addEventListener('click', function() {
    checkbox.checked = !checkbox.checked;
    handle.classList.toggle('translate-x-full');

    if (checkbox.checked) {
      // Code to handle the monthly option being selected
      console.log('Monthly selected');
    } else {
      // Code to handle the annually option being selected
      console.log('Annually selected');
    }
  });
