# Imfundo Quest

Prototype website for Imfundo Quest, a proposed offline AI tutor app that teaches Grades 10 to 12 through short, game-like lessons for learners in Idutywa, Eastern Cape.

This is a design prototype. Pages open and link to each other. Forms, downloads and sign-ups are not functional and only show a "Prototype only" notice.

## Pages

| Page | File | What it shows |
| --- | --- | --- |
| Home | `index.html` | Hero with app mockup, the connectivity gap in numbers, why Imfundo Quest, how it works, founder note |
| About | `about.html` | Mission statement, story, core problem and market opportunity, values, founder |
| Programmes | `programmes.html` | Planned subjects, the four-step lesson loop, what works offline |
| Teachers' Corner | `teachers.html` | Planned resources, support for teachers, common questions, school visit request |
| Contact | `contact.html` | Contact details and a message form |
| Not found | `404.html` | Page shown for a missing address on GitHub Pages |

## Run it

Open `index.html` in a browser. There is no build step and nothing to install.

## Publish on GitHub Pages

1. Open the repository on GitHub and go to **Settings**, then **Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Select the `main` branch and the `/ (root)` folder, then save.
4. After a minute the site is live at `https://miranics.github.io/Siphelele/`.

## What is not functional

| Element | Behaviour in the prototype |
| --- | --- |
| Contact and school visit forms | Check the fields, then show a notice. Nothing is sent or stored |
| Download buttons in Teachers' Corner | Show a notice. No files exist yet |
| App mockup on the home page | Static picture, not a working app |

## Project structure

```
.
├── index.html, about.html, programmes.html, teachers.html, contact.html, 404.html
└── assets
    ├── css/styles.css     Design tokens, layout and components
    ├── js/main.js         Mobile menu, notices for non-functional buttons, form check
    ├── img                Logo, patterns and cartoon illustrations (all SVG)
    └── fonts              Bricolage Grotesque and Public Sans, self-hosted
```

## Design

| Part | Choice |
| --- | --- |
| Colours | South African flag colours, brightened: blue for structure, gold for actions, green for offline and progress, red for gaps |
| Headings | Bricolage Grotesque |
| Body text | Public Sans |
| Pattern band | Geometric diamond band inspired by Southern African beadwork and wall art |
| Pictures | Original cartoon learners, teachers and a tutor robot, drawn as SVG |

To swap an illustration for a photo, save the photo in `assets/img` and change the file name in the matching `<img>` tag.

## Content to confirm

- [ ] Statistics on the home page: 96.1% is in the Stats SA media release; 70.2% and 1.6% should be checked against the provincial tables in the full General Household Survey 2023 report (P0318)
- [ ] isiXhosa phrases (Molo, Ndingakunceda njani, Enkosi, Wenze kakuhle), reviewed by a first-language speaker
- [ ] The meaning of "GCGO Education" in the market opportunity text, which is left out of the page for now
- [ ] Founder story and short biography
- [ ] How learners install the app, and that a connection is only needed to download new lessons
- [ ] Subject list and grades
- [ ] Contact email address (the current one is a placeholder)

## Fonts

Bricolage Grotesque and Public Sans are licensed under the SIL Open Font License 1.1. The licence files are in `assets/fonts`.
