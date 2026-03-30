// Publication filter — status (Published / Pre-prints) × topic (cat1–cat10)
// Both filters are independent and combine: a card shows only when it matches both.
(function () {
  var activeCat    = 'all';
  var activeStatus = 'all';
  var countEl      = document.getElementById('pub-count');

  function applyFilters() {
    var visible = 0;
    document.querySelectorAll('.pub-card').forEach(function (card) {
      var cats      = (card.getAttribute('data-cat') || '').split(' ');
      var status    = card.getAttribute('data-status') || 'published';
      var catMatch  = activeCat    === 'all' || cats.indexOf(activeCat)    !== -1;
      var statMatch = activeStatus === 'all' || status === activeStatus;
      if (catMatch && statMatch) {
        card.style.display = '';
        visible++;
      } else {
        card.style.display = 'none';
      }
    });
    if (countEl) countEl.textContent = visible;
  }

  // Status buttons
  document.querySelectorAll('.filter-status').forEach(function (btn) {
    btn.addEventListener('click', function () {
      document.querySelectorAll('.filter-status').forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      activeStatus = btn.getAttribute('data-status');
      applyFilters();
    });
  });

  // Topic buttons
  document.querySelectorAll('.filter-topic').forEach(function (btn) {
    btn.addEventListener('click', function () {
      document.querySelectorAll('.filter-topic').forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      activeCat = btn.getAttribute('data-cat');
      applyFilters();
    });
  });

  applyFilters();
})();
