# Product photos

Drop product photos here. Filenames must match **exactly** (all lowercase, hyphens,
`.jpg`) or the site will show a labelled placeholder tile instead.

**Best format:** 4:5 portrait, ~1200 × 1500 px, product centred, optimised PNG/JPG (~200–350 KB).

```
images/products/
├── bare-mochi/                      ← 裸麻糬 (rotates through all 3 in one panel)
├── stuffed-mochi/                   ← 包餡麻糬
├── custard-pudding/                 ← 日式布丁 (Japanese Custard Pudding)
├── liege-waffle/                    ← 列日窩夫
└── flan/                            ← 法式吉士撻
    └── vanilla-pecan-flan.png       ← + vanilla-pecan-flan.webp for the site
```

Each product keeps its photos in its own folder (named after the product's URL slug).
Pages reference the optimised `.webp` next to each PNG original — when adding a new
photo, generate a `.webp` copy alongside it and point the page at that.

To add more Bare Mochi flavours later, just drop another `.png` in `bare-mochi/`
and add one matching `<img>` line to that panel in `index.html`.
