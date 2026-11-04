# Gogledd

A speaking-first app for learning North Wales Welsh (Cymraeg y Gogledd).

- See the English, say the Welsh out loud, then check and rate yourself.
- Spaced review: phrases you know come back less often; ones you miss come back within the session.
- 62 phrases in 8 units, each with a sound-it-out spelling and notes on Northern forms and mutations.
- Seiniau: a guide to the Welsh sounds that differ from English.
- Progress is stored on the device. No account, no ads, no network needed.

## Build the Android app

Every push to `main` runs `.github/workflows/build-apk.yml`. When it finishes, open the run under **Actions** and download the **Gogledd-Welsh-App** artifact, which contains `app-debug.apk`.

## Run in a browser

```
npm install
npm run dev
```
