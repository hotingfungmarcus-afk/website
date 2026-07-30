# Shop photos

Photos of the physical store, shown in the "Our Shop" section on the home page.
Only `shop-1` is in use right now, so the panel shows a single still.

**Best format:** landscape, ~1600 × 2000 px (fills a tall half-screen panel), optimised PNG/JPG.

```
images/shop/
└── shop-1.png    ← + shop-1.webp for the site
```

To go back to a cross-fade, add `shop-2.png` (plus a `.webp` copy) and one
matching `<img>` line in the `.shops__photos` block in `index.html` — the
rotation starts by itself once a second photo is there. Until a photo exists,
a labelled placeholder tile shows in its place.
