// Publication filter — no dependencies
(function () {
  const buttons = document.querySelectorAll('.filter-btn');
  const cards   = document.querySelectorAll('.pub-card');
  const countEl = document.getElementById('pub-count');

  function updateCount() {
    const visible = document.querySelectorAll('.pub-card:not(.hidden)').length;
    if (countEl) countEl.textContent = visible;
  }

  buttons.forEach(btn => {
    btn.addEventListener('click', function () {
      buttons.forEach(b => b.classList.remove('active'));
      this.classList.add('active');

      const cat = this.dataset.cat;
      cards.forEach(card => {
        if (cat === 'all') {
          card.classList.remove('hidden');
        } else {
          const cats = (card.dataset.cat || '').split(' ');
          card.classList.toggle('hidden', !cats.includes(cat));
        }
      });
      updateCount();
    });
  });

  updateCount();
})();
