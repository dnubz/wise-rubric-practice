# WiSe Rubric Practice

[Open the study website](https://dnubz.github.io/wise-rubric-practice/)

Practice ReaLm of WiSdom through 19 separate sessions and 365 mixed-format questions. Every one of the original workbook's 330 scored feature criteria has a mapped question. Four blank oral-question slots use explicitly labeled practice substitutes, with another 31 questions covering detailed project requirements.

## Study features

- Multiple-choice quizzes with feedback.
- Long answers, quick recall, and demonstration forms.
- Resumable sections, saved drafts, bookmarks, confidence ratings, and review queues.
- JSON answer backups and Markdown study-note downloads.
- Connected game learning library with explanations, rubric rows, and C# source snapshots.

Answers save in your browser on this device. Use My progress → Export answers / Import backup to transfer them between devices or website addresses. Written answers are self-reviewed; study progress is separate from official rubric grades.

## GitHub Pages

The static website is at the repository root. GitHub Pages publishes the `main` branch, `/` folder. `.nojekyll` keeps the existing assets and reference files intact. No build step or external browser CDN is required.

## Sources and known gaps

The site is based on the supplied scoring workbook, project brief, WiSe learning guide, and game code. Source review does not constitute a new Unity playtest. The website explicitly retains existing boat/deck-chest and fourth terrain walking-sound gaps, along with criteria requiring visual or runtime verification.

To preview locally, serve this directory with `python -m http.server 8876` and open `http://localhost:8876`.
