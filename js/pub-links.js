// Publication extra links (Code, Blog, Twitter Thread)
// To add a link to a paper, set data-code, data-blog, or data-twitter on the .pub-card element.
// Example: <div class="pub-card" data-cat="cat1" data-code="https://github.com/..." data-blog="https://..." data-twitter="https://...">
// Buttons auto-show when the attribute has a real URL; hidden otherwise.

(function () {
  const extras = [
    { attr: 'data-code',    label: 'Code ↗' },
    { attr: 'data-blog',    label: 'Blog ↗' },
    { attr: 'data-twitter', label: 'Thread ↗' },
  ];

  document.querySelectorAll('.pub-card').forEach(function (card) {
    var linksDiv = card.querySelector('.pub-links');
    if (!linksDiv) return;

    extras.forEach(function (extra) {
      var url = card.getAttribute(extra.attr);
      var a = document.createElement('a');
      a.className = 'pub-link';
      a.textContent = extra.label;
      if (url && url.length > 0 && url !== '#') {
        a.href = url;
        a.target = '_blank';
        a.rel = 'noopener';
      } else {
        a.style.display = 'none';
      }
      linksDiv.appendChild(a);
    });
  });
})();
