# 💌 A Special Romantic Invitation & Digital Gift

A responsive, single-page romantic dinner invitation and interactive digital gift website crafted with pure HTML5, CSS3, and vanilla JavaScript. Designed to be sent to your partner as an unforgettable digital surprise, and easily hosted for free on **GitHub Pages**.

---

## ✨ Features Included

1. **Cover / Landing Screen (Hero)**
   - Ambient floating hearts and twinkling sparkles.
   - Personalized greeting with your partner's name.
   - "Open Your Gift 🎁" button that unlocks the rest of the page with celebratory confetti and smooth-scrolls to the memories section while starting background music.
2. **Our Memories (3D Flip-Card Gallery)**
   - 6 responsive cards (1 column on mobile, 2 on tablet, 3 on desktop).
   - Tap or click to flip in 3D: front displays your photo, caption, and date badge; back reveals a handwritten romantic note.
   - Built-in graceful fallback so images never show broken icons if missing.
3. **Reasons Why I Love You (Interactive Card Deck)**
   - 3D stacked deck of sweet reasons.
   - Tap or swipe left/right to reveal and discard each card.
   - Live counter (`Reason X of Y`) and a grand finale card (`...and a million more 💖`) with a restart option.
4. **Songs That Remind Me of You 🎶 (Interactive Soundtrack & Mini-Player)**
   - Curated song cards with custom vinyl cover art, song title, artist, personal "why it reminds me of you" message, and direct Spotify/YouTube links.
   - Big round play/pause buttons on each card and tap-to-seek progress bars.
   - Intelligent audio coordination: playing a song automatically pauses background music.
   - Active card visual state: glowing rose-gold border, animated equalizer bars, and pulsing heart badge.
   - Sticky bottom mini-player with previous/next controls, scrubber bar, and auto-play next option (`CONFIG.autoPlayNext`).
   - Graceful fallback: if an audio file is missing or fails to load, it automatically switches to an external link button with zero console errors.
5. **Dinner Invitation Card**
   - Formal wedding-style luxury invitation card with gold borders, ornamental corners, and custom calligraphy.
   - Shows dinner date, time, and your personal heartfelt message.
6. **Interactive RSVP with Playful Runaway "No" Button**
   - Question: *"Will you have dinner with me?"*
   - Playful runaway **"No"** button: flees to a random position on hover/touch, never leaves the screen, shrinks slightly, and cycles through funny excuses (*"Are you sure? 🥺"*, *"Nope, wrong button! 😜"*, etc.).
   - The **"Yes"** button grows larger and pulses with every attempt to tap "No".
   - Clicking **"Yes"** triggers a celebratory full-screen confetti burst, remembers her answer in `localStorage`, and reveals an animated celebration block with a beating heart, dancing emojis, floating balloons, and your heartfelt message.
7. **Digital Gift: Scratch-Off Love Coupons**
   - Scratch-off cards using HTML5 Canvas with metallic rose-gold foil overlay.
   - Scratch using finger (mobile) or mouse (desktop) with touch scroll protection.
   - Auto-reveals when ~50% is scratched with a sparkle burst.
8. **Floating Music Player**
   - Round bottom-right floating button with spinning vinyl heart icon.
   - Toggles background music with graceful error handling if audio is blocked or missing.
9. **Romantic Footer**
   - Closing tribute with floating hearts: *"Made with all my love for [her name] by [your name] 💕"*.

---

## 🛠️ Project Structure

```text
/
├── index.html              # Main HTML markup
├── css/
│   └── styles.css          # Romantic responsive styles & animations
├── js/
│   └── script.js           # Easy-edit CONFIG object & all interactive features
├── assets/
│   ├── photos/
│   │   ├── photo1.jpg - photo6.jpg  # Memory photos
│   │   └── covers/                  # Album cover art (cover1.jpg - cover5.jpg)
│   └── music/
│       ├── song.mp3                 # Background music
│       └── songs/                   # Playlist songs (song1.mp3 - song5.mp3)
└── README.md               # Complete setup & deployment guide
```

---

## 📝 1. How to Personalize Your Website

Everything you need to customize is located in **one single place**: the top of [`js/script.js`](file:///c:/Users/Mubee/Desktop/amwamwamwa/js/script.js).

### A. Editing Text, Dates & Personal Messages
Open [`js/script.js`](file:///c:/Users/Mubee/Desktop/amwamwamwa/js/script.js) and edit the `CONFIG` object at lines 12–110:

```javascript
const CONFIG = {
  partnerName: "Kendra",                // Her name or nickname
  myName: "Tin",                        // Your name

  dinnerDate: "October 12",             // Date of dinner
  dinnerTime: "7:30 PM",                // Reservation time
  personalMessage: "From the very first moment we laughed together...",
  happyMessage: "You just made me the happiest person, Kendra. I can't wait to have dinner with you. 💕 - Tin",

  // Edit or add memories:
  memories: [
    {
      photo: "assets/photos/photo1.jpg",
      caption: "Our Beginning",
      stampTitle: "Where It All Began ❤️",
      date: "Our First Date",
      noteOnBack: "Who knew a simple meeting on Discord would lead me to someone who means so much to me? That's where our story truly began."
    },
    // ... up to 6 memories
  ],

  // Edit or add reasons why you love her:
  reasons: [
    "The way your eyes crinkle with pure joy whenever you laugh at our silly inside jokes.",
    // ... 8-10 reasons
  ],

  // Edit or add coupons:
  coupons: [
    {
      label: "DIGITAL LOVE COUPON #1",
      title: "Free Meal for Today",
      description: "A meal of your choice, on me, babi! 🍔💗",
      code: "FREE-MEAL-01"
    },
    // ... up to 6 coupons
  ]
};
```

### B. Adding Your Real Photos
1. Choose 6 of your favorite photos together.
2. Rename them to `photo1.jpg`, `photo2.jpg`, `photo3.jpg`, `photo4.jpg`, `photo5.jpg`, and `photo6.jpg`.
3. Drop them into the `assets/photos/` folder (replacing the placeholder images).
> **Tip:** Square or 4:3 landscape photos look best!

### C. Adding Background Romantic Music
1. Choose an MP3 of "your song" (e.g., an acoustic or romantic melody).
2. Rename it to `song.mp3`.
3. Drop it into the `assets/music/` folder (replacing the placeholder file).

---

## 💻 2. How to Test Locally

You can test the website immediately on your computer:

### Option A: Double-Click (Simplest)
1. Navigate to the project folder.
2. Double-click [`index.html`](file:///c:/Users/Mubee/Desktop/amwamwamwa/index.html) to open it in your favorite browser (Chrome, Safari, Edge, Firefox).

### Option B: Local Web Server (Recommended for audio testing)
Some browsers have strict local file restrictions for audio playback. You can run a simple local web server:

**Using Python (if installed):**
```bash
python -m http.server 8000
```
Then open `http://localhost:8000` in your browser.

**Using VS Code Live Server:**
If you use VS Code, right-click `index.html` and choose **"Open with Live Server"**.

---

## 🚀 3. How to Publish Free on GitHub Pages (Step-by-Step)

Follow these simple steps to make the website live on the internet so you can send her a link:

### Step 1: Create a GitHub Account & New Repository
1. Go to [github.com](https://github.com) and log in (or sign up for free).
2. Click the **"+"** icon in the top right corner and select **"New repository"**.
3. Choose a cute repository name (e.g., `dinner-for-kendra` or `special-invitation`).
4. Set the repository to **Public** (required for free GitHub Pages).
5. Leave "Add a README file" unchecked (since we already have one).
6. Click **"Create repository"**.

### Step 2: Push Your Files to GitHub
Open PowerShell or your terminal in this project directory:

```bash
# 1. Initialize git (if not already initialized)
git init

# 2. Stage all files
git add .

# 3. Commit your files
git commit -m "Romantic dinner invitation website"

# 4. Set default branch to main
git branch -M main

# 5. Add your repository as remote (replace USERNAME and REPO_NAME with yours)
git remote add origin https://github.com/USERNAME/REPO_NAME.git

# 6. Push to GitHub
git push -u origin main
```

*(Alternatively, you can drag and drop all files directly into the GitHub web interface using the "uploading an existing file" link).*

### Step 3: Enable GitHub Pages
1. Go to your repository page on GitHub.
2. Click on the **Settings** tab (the gear icon at the top right of the repo).
3. In the left sidebar, click on **Pages** (under the "Code and automation" section).
4. Under **"Build and deployment"** > **"Source"**, select **"Deploy from a branch"**.
5. Under **"Branch"**, select `main` from the dropdown and leave the folder set to `/(root)`.
6. Click **Save**.

### Step 4: Get Your Shareable Link
1. Wait 1 to 2 minutes for GitHub to build and publish your site.
2. Refresh the **Pages** settings screen. You will see a banner at the top:
   > **"Your site is live at https://USERNAME.github.io/REPO_NAME/"**
3. Click the link to test it on your phone!
4. Send the link to your partner in a sweet message or convert it to a custom QR code on a card! 💌

---

## 📋 Quick Pre-Flight Checklist Before Sending

Before sharing your link with her, verify you have customized:
- [ ] **`partnerName`**: Her name or pet name.
- [ ] **`myName`**: Your name for the invitation signature and footer.
- [ ] **`dinnerDate`** & **`dinnerTime`**: Exact reservation date and time.
- [ ] **`personalMessage`**: Your heartfelt note on the invitation card.
- [ ] **`happyMessage`**: Custom celebration message displayed after she says Yes.
- [ ] **`memories`**: Photos replaced in `assets/photos/` and personal notes written for the backs of the 6 cards.
- [ ] **`reasons`**: Sweet reasons why you love her in `CONFIG.reasons`.
- [ ] **`songs`**: Verify or replace the 6 songs in `CONFIG.songs` (MP3 files in `assets/music/songs/` and YouTube/Spotify links).
- [ ] **`coupons`**: Romantic gift coupons personalized to her tastes.
- [ ] **`assets/music/song.mp3`**: Replaced with your special background song!

