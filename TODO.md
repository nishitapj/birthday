# Birthday Surprise - Task Progress

## Storybook Background Replacement
- [x] index.html: Replaced `<video class="storybook-video">` with `<div class="storybook-bg">`
- [x] style.css: Replaced `.storybook-video` rule with `.storybook-bg` rule (static image background using `story-bg.png`)
- [x] style.css: Updated `.storybook-overlay` gradient to premium dark overlay `rgba(10,10,20,.45)` / `rgba(25,15,35,.55)`
- [x] Kept glass Storybook card (`.book`) above the background

## Photo Reveal Restore (follow-up)
- [x] index.html: Removed `.flash`, `.reveal-dark`, `.reveal-fx` effect layers
- [x] style.css: `.photo` restored to original flip/spin entrance (`translateY(120px) scale(.1) rotate(-720deg)`)
- [x] style.css: Restored original desktop `.cardN.show` collage positions
- [x] style.css: Removed `.photo-stack.focus` blur rule
- [x] style.css: Removed glass/glow blur panel from `.message-text` (back to original)
- [x] script.js: Photo Reveal flow simplified to: gift -> 5 photos -> centered message -> Storybook

## Unmodified
- Landing Page
- Gift Scene
- Storybook (beyond background swap)
- Page transitions, messages, buttons, JavaScript logic, layout

