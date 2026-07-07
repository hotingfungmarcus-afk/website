# Product photos

Drop product photos here. Filenames must match **exactly** (all lowercase, hyphens,
`.jpg`) or the site will show a labelled placeholder tile instead.

**Best format:** 4:5 portrait, ~1200 × 1500 px, product centred, optimised PNG/JPG (~200–350 KB).

```
images/products/
├── bare-mochi/                      ← 裸麻糬 (rotates through all 3 in one panel)
│   ├── matcha-red-bean.png          ← 抹茶蜜紅豆
│   ├── sea-salt-cocoa-crunch.png    ← 奶蓋濃可可
│   └── kuromitsu-kinako.png         ← 黑糖黃豆粉
├── stuffed-mochi.png                ← 包餡麻糬
├── custard-pudding.png              ← 日式布丁 (Japanese Custard Pudding)
├── liege-waffle.png                 ← 列日窩夫
└── flan-tart.png                    ← 法式蛋撻
```

To add more Bare Mochi flavours later, just drop another `.png` in `bare-mochi/`
and add one matching `<img>` line to that panel in `index.html`.
