# Vietnam Camera Companion 📷

Your Sony A7C II field guide for street photography in Vietnam. A dark, offline, mobile-first web app (PWA) with a scene wizard, cheat sheet, interactive camera map, a full de-jargoned manual, pre-trip setup checklist, Vietnam lighting guide, and a lens buying guide. Built to be added to your phone's home screen and used with no signal.

**▶ Live: https://doosyy.github.io/vietnam-camera-guide/**

Open that on your phone in Safari (iPhone) or Chrome (Android), then **Share → Add to Home Screen**. After the first load it works fully offline.

## Run it on your computer

```bash
npm install
npm run dev
```

Then open the link it prints (it ends in `/vietnam-camera-guide/`).

## Put it online for free (GitHub Pages)

The app is set up to deploy itself automatically. One-time setup:

1. **Create the repository on GitHub.** Name it exactly `vietnam-camera-guide` (the name matters, the app expects it).
2. **Push this folder to that repo** (`main` branch).
3. On GitHub, go to **Settings → Pages**, and under **Build and deployment → Source**, choose **GitHub Actions**.
4. That's it. Every time you push, it rebuilds and publishes. Your app lives at:
   `https://<your-username>.github.io/vietnam-camera-guide/`

> If you ever want a different repo name, change `repoBase` at the top of `vite.config.ts` to match.

## Add it to your phone (so it works offline)

1. Open the published link in **Safari** (iPhone) or **Chrome** (Android).
2. Tap **Share → Add to Home Screen**.
3. Open it from the new icon. After the first load it works **fully offline**, perfect for Vietnam.

## Where the content lives

All the camera knowledge is in plain data files under `src/data/` (scenes, guide, setup, Vietnam, lenses, glossary, etc.), so it's easy to tweak the wording or numbers without touching the app's code.
