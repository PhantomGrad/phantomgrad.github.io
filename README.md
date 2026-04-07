# phantomgrad.github.io

Static website for PhantomGrad — the AI research lab of Prof. Dhruv Kumar at BITS Pilani.

---

## Adding a New Paper Entry

When a paper is accepted or a new preprint is posted, update **three files**:

### 1. `research.html` — add the pub-card

Locate the correct year section (e.g., `<!-- ── 2026 ── -->`). Within a year:
- **Published / workshop papers** go at the **top** of the year section, before preprints.
- **Preprints** go below published papers, ordered by arXiv ID descending (most recent first).

Copy and fill in this template:

```html
<div class="pub-card" data-status="STATUS" data-cat="CATEGORY">
  <div class="pub-title"><a href="PAPER_URL" target="_blank" rel="noopener">PAPER TITLE</a></div>
  <div class="pub-authors">Author One, Author Two, and <strong>Dhruv Kumar</strong></div>
  <div class="pub-venue">VENUE NAME · YEAR</div>
  <div class="pub-links"></div>
</div>
```

If no paper URL is available yet, use plain text for the title (no `<a>` tag):
```html
<div class="pub-title">PAPER TITLE</div>
```

For preprints, add a badge inside `<div class="pub-badges">`:
```html
<div class="pub-badges"><span class="badge badge-preprint">Pre-print</span></div>
```

**`data-status` values:**
| Value | When to use |
|---|---|
| `published` | Accepted at a conference, journal, or workshop |
| `preprint` | arXiv / not yet accepted |

**`data-cat` category codes:**
| Code | Topic |
|---|---|
| `cat1` | AI Agents & LLMs |
| `cat2` | AI for Education |
| `cat3` | AI for SWE (Software Engineering) |
| `cat4` | RL & Training |
| `cat5` | Interpretability |
| `cat6` | Multi-Modal |
| `cat7` | AI for Science |
| `cat8` | Distributed Systems |
| `cat9` | Data Mining |
| `cat10` | AI Safety |

A paper can belong to multiple categories: `data-cat="cat1 cat2"`.

---

### 2. `news.html` — add a news item

Add a new `<div class="news-item">` at the **top** of the `<div class="news-list">` block. Use the month/year of acceptance.

```html
<div class="news-item">
  <span class="news-date">Mon YYYY</span>
  <span class="news-text">PAPER SHORT TITLE accepted at VENUE — one-line description.</span>
  <a class="news-link" href="PAPER_URL" target="_blank" rel="noopener">Paper ↗</a>
</div>
```

If no paper URL is available, link to the publications section instead:
```html
<a class="news-link" href="research.html#publications">View ↗</a>
```

---

### 3. `index.html` — update the publications count

Find the stats strip and increment the `Publications` counter by 1:

```html
<div class="stat-number">57+</div>
<div class="stat-label">Publications</div>
```

---

## Adding a Paper URL Later

When an arXiv or DOI link becomes available for a paper that was added without one, update **two places**:

1. **`research.html`** — wrap the plain-text title in an `<a>` tag:
   ```html
   <div class="pub-title"><a href="URL" target="_blank" rel="noopener">PAPER TITLE</a></div>
   ```

2. **`news.html`** — update the news item link from `research.html#publications` to the actual paper URL.

---

## Promoting a Preprint to Published

When a preprint gets accepted:

1. **`research.html`**:
   - Change `data-status="preprint"` → `data-status="published"`
   - Update `<div class="pub-venue">` to the accepted venue name
   - Remove the `<div class="pub-badges">` line
   - Move the entry to the **top of its year section** (above other preprints), or to the correct year section if the acceptance year differs

2. **`news.html`** — add a new news item announcing the acceptance (do **not** remove the original preprint news item if one exists).

3. **`index.html`** — the count does **not** change (the paper was already counted as a preprint).
