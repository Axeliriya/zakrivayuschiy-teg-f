
  const template = document.getElementById('buttons-template');
  const buttons = template.content.cloneNode(true);

  const cards = document.querySelectorAll('.card__buttons');
cards.forEach(card => {
  card.appendChild(buttons.cloneNode(true));
});