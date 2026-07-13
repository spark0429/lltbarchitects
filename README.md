# lltb architects website

This is a static GitHub Pages-ready website.

## Edit text

All visible page text is edited in `content.json`.

- `ui`: choose screen titles, `new material` button text, hover menu labels
- `about`: About lltb title, lead text, and each paragraph section
- `people`: people page lead text and people list
- `projects`: project page lead text, project names, descriptions, and image paths
- `contact`: contact page lead text and contact cards

?쒓? 臾멸뎄??`content.json`?먯꽌 諛붾줈 ?섏젙?섎㈃ ?⑸땲?? ??ν븷 ?뚮뒗 UTF-8濡???ν븯?몄슂.

## Edit colors and materials

Colors are listed in `assets/colors/colors.json`.

Materials are listed in `assets/materials/materials.json`, and the image files live in `assets/materials/`.

When adding a new material image, place the image in `assets/materials/`, then add one item to `assets/materials/materials.json`:

```json
{ "name": "new material", "image": "assets/materials/new-material.jpg" }
```

## Add project images

Put project images under `assets/projects/`, then set the project's `image` value in `content.json`:

```json
"image": "assets/projects/project-01.jpg"
```

## Preview locally

Use the local server URL instead of opening `index.html` directly as a file, because browsers may block JSON loading from `file:///` paths.

```text
http://127.0.0.1:5500/index.html
```

## Publish later on GitHub Pages

Upload these files to a GitHub Pages repository:

- `index.html`
- `styles.css`
- `script.js`
- `content.json`
- `.nojekyll`
- `assets/`

## Project detail pages

Each item in `content.json` under `projects.projects` can include:

- `description`: short text shown on the project list
- `details`: long text shown on the detail page
- `image`: thumbnail image path
- `images`: image paths used by the detail gallery

Example:

```json
"images": [
  "assets/projects/project-01-1.jpg",
  "assets/projects/project-01-2.jpg"
]
```