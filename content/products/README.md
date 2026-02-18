# Product Content Guide

Use this folder as the source of truth for product data and images used on the website.

## Folder Layout

`content/products/`
- `_template/` reusable starter for new products
- `<product-slug>/` one folder per real product
  - `product.txt` product details (price, features, compatibility, options)
  - `photos/` product images

## Add a New Product

1. Copy `content/products/_template` to a new folder:
   - Example: `content/products/s13-digital-cluster`
2. Rename the slug line in `product.txt` to match the folder name.
3. Fill out all fields in `product.txt`.
4. Add photos to `photos/`.

## Slug Rules

- Lowercase only
- Use hyphens (`-`) instead of spaces
- Keep it short and descriptive
- Example: `mk2-supra-cluster`

## `product.txt` Field Reference

- `slug`: unique product ID (matches folder name)
- `title`: display name on site
- `status`: use `active` or `draft`
- `base_price_usd`: number only (no `$`)
- `lead_time`: customer-facing estimate
- `short_description`: short marketing summary
- `key_features`: bullet list of core functions
- `compatibility`: vehicle/platform/signal info
- `options`: paid upgrades or variants
- `what_is_included`: what customer receives
- `notes`: install caveats or sales notes
- `images`: filenames expected in `photos/`

## Photo Guidelines

Recommended names:
- `hero.jpg` main image
- `detail-01.jpg`
- `detail-02.jpg`
- `install-01.jpg`

Supported formats:
- `.jpg`
- `.jpeg`
- `.png`
- `.webp`

Tips:
- Keep orientation consistent across a product set
- Use clear close-ups and one installed-in-car shot
- Keep filenames exactly as listed in `images`

## Quick Checklist Before Publishing

- `product.txt` completed with real values
- `base_price_usd` is correct
- listed `images` exist in `photos/`
- no placeholder text left
- slug in folder and file match

