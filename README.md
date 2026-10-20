# Gogledd • Cymraeg y Gogledd (North Welsh Learning App)

A verbal-first North Welsh learning mobile application built with **React**, **Vite**, and **Capacitor**. Designed specifically to prioritize spoken conversation, pronunciation feedback, and North Welsh dialect markers without incurring any cloud costs.

---

## 🏔️ Features

- **Zero Cloud Spend Speech Engine:** Uses device-native speech recognition (`webkitSpeechRecognition`) and speech synthesis (`speechSynthesis`) directly in the browser and Android WebView. No OpenAI, Google Cloud, or third-party paid API tokens required.
- **Dialect Detection & Feedback:** Automatically checks whether you speak authentic North Welsh (*rŵan*, *efo*, *isio*, *dallt*, *gen i*, *o*) versus Southern equivalents (*nawr*, *gyda*, *moyn*, *deall*, *gyda fi*, *e*).
- **Phonetic Scoring & Word Pills:** Real-time percentage score, Levenshtein distance matching, and word-by-word visual indicators highlighting which words were pronounced accurately.
- **Labordy Seiniau (Sound Clinic):** Dedicated reference modules and physical tongue/mouth placement guides for difficult Welsh sounds:
  - `[ɬ]` The 'LL' sound (*Llanberis*, *llaw*)
  - `[x]` The 'CH' sound (*chwech*, *chwarae*)
  - `[ɨ]` The Northern 'U' / 'Y' high-central vowel (*tŷ*, *dŵr*, *Cymru*)
  - `[ð]` The 'DD' sound (*heddiw*, *braf*)
  - `[r̥]` The 'RH' sound (*rŵan*, *rhedodd*)
- **Modern Eryri Aesthetic:** Deep slate quarry backgrounds, Snowdonia moss green accents, and Celtic gold highlights.

---

## 🚀 Running Locally & Testing on Your Phone

You can run and test the app immediately on your computer or directly on your phone over Wi-Fi:

```bash
cd C:\Users\ahugh\Gogledd
npm run dev -- --host
```

Vite will display a local IP address (e.g., `http://192.168.1.X:5173`). Open that URL in Chrome on your Android phone to test voice recognition and speech audio right away.

---

## 📱 Generating Your Downloadable Android APK

Because building an Android APK locally requires several gigabytes of Android Studio, Java SDK, and build tools, an automated cloud build workflow is already set up in `.github/workflows/build-apk.yml`:

1. Create a new repository on your GitHub account (e.g., `gogledd-welsh-app`).
2. Push or upload the `C:\Users\ahugh\Gogledd` folder to your repository.
3. GitHub Actions will automatically detect the commit and run the **Build Gogledd Android APK** workflow.
4. Once completed (usually 2–3 minutes), click on the **Actions** tab in your GitHub repository, click on the latest workflow run, and download the **Gogledd-Welsh-App** artifact containing `app-debug.apk`.
5. Transfer or download the `.apk` directly onto your Android phone to install!
