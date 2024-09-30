document.querySelectorAll('.form-group').forEach(group => {
  const label = group.querySelector('label');
  const input = group.querySelector('input, textarea');

 
  const showInput = () => {
      group.classList.add('active');
      input.style.display = 'block';
      input.focus();
  };

  label.addEventListener('click', showInput);
  label.addEventListener('mouseenter', showInput);
  label.addEventListener('mouseleave', () => {
      if (!group.classList.contains('active')) {
          input.style.display = 'none';
      }
  });
});
