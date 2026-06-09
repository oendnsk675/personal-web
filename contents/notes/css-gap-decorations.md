---
title: 'CSS Gap Decorations'
description: ''
categories: ['CSS']
date: 2026/06/09
---

# Background

[Chrome 149](https://developer.chrome.com/release-notes/149#css_gap_decorations) stable membawa CSS gap decorations, fitur untuk memberi style pada gap di layout seperti `grid` dan `flexbox`.

Sebelum fitur ini, gap sering disiasati dengan elemen tambahan, pseudo-element, atau background yang rumit. Sekarang gap bisa dihias langsung lewat CSS, mirip konsep `column-rule` di multi-column layout.

Fitur ini menambah beberapa properti baru, seperti:

- `column-rule-inset`
- `row-rule-inset`
- `column-rule-visibility-items`
- `row-rule-visibility-items`

Selain itu, fitur ini juga mendukung animasi untuk `rule-width`, `rule-color`, dan `inset`.

# Illustration

## Before

```css
.list {
  display: grid;
  gap: 16px;
}

.item {
  position: relative;
}

.item:not(:last-child)::after {
  content: '';
  position: absolute;
  right: -8px;
  top: 0;
  width: 1px;
  height: 100%;
  background: #d1d5db;
}
```

Gap decoration sering butuh elemen tambahan atau pseudo-element supaya garis pemisah bisa muncul di antara item.

## After

```css
.list {
  display: grid;
  gap: 16px;
  column-rule: 1px solid #d1d5db;
  column-rule-inset: 8px;
}
```

Dengan gap decorations, dekorasi gap ditulis langsung di container. Hasilnya lebih bersih, lebih mudah dirawat, dan lebih dekat ke intent desain.

