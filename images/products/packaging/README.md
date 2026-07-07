# Packaging photos

One photo per packaging option shown on each product's detail page
(`product.html?p=<slug>`). Filenames are `<product-slug>-<option-number>.png`,
numbered in the same order the options are listed in `product.html` → `PRODUCTS`.

**Best format:** 4:5 portrait, ~1000 × 1250 px, optimised PNG/JPG.

```
images/products/packaging/
├── bare-mochi-1.png       ← 6-Piece Box   (HK$30–32)
├── bare-mochi-2.png       ← 12-Piece Box  (HK$40–42)
├── stuffed-mochi-1.png    ← 4-Piece Box   (HK$32)
├── stuffed-mochi-2.png    ← 6-Piece Box   (HK$45)
├── stuffed-mochi-3.png    ← 8-Piece Box   (HK$60)
├── stuffed-mochi-4.png    ← 12-Piece Box  (HK$84)
├── custard-pudding-1.png  ← Single Cup    (HK$38)
├── custard-pudding-2.png  ← Any 3 · Bundle (HK$105)
├── liege-waffle-1.png     ← Original 經典原味          (HK$20)
├── liege-waffle-2.png     ← Rich Cocoa Chocolate 香濃朱古力 (HK$22)
└── liege-waffle-3.png     ← Kyoto Hojicha 京都焙茶     (HK$24)

(Flan Tart is marked "coming soon" — no packaging photos needed yet.)
```

Prices and option names live in `product.html` (the `PRODUCTS` object) — edit there.
