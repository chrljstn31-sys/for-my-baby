/**
 * ==============================================================================
 * ROMANTIC DINNER INVITATION & DIGITAL GIFT
 * Pure Vanilla JavaScript | Zero External Libraries
 * ==============================================================================
 *
 * 💌 EASY-EDIT CONFIGURATION GUIDE:
 * Simply change the values in the CONFIG object below to personalize your gift!
 * Everything on the website updates automatically from this single object.
 */

const CONFIG = {
  // --------------------------------------------------------------------------
  // 1. PERSONAL DETAILS
  // --------------------------------------------------------------------------
  partnerName: "Kendra",                // Her name / nickname
  myName: "Tin",                        // Your name

  // --------------------------------------------------------------------------
  // 2. DINNER INVITATION DETAILS
  // --------------------------------------------------------------------------
  dinnerDate: "October 12",             // Date of your special dinner
  dinnerTime: "7:30 PM",                // Time of your reservation
  personalMessage: "From the very first moment we laughed together, you made my world infinitely brighter. I want to celebrate us, celebrate you, and take you out for an evening as magical as you are.",

  // --------------------------------------------------------------------------
  // 3. RSVP CELEBRATION SETTINGS
  // --------------------------------------------------------------------------
  happyMessage: "You just made me the happiest person, Kendra. I can't wait to have dinner with you. 💕 - Tin",

  // --------------------------------------------------------------------------
  // 4. OUR MEMORIES (6 flip cards)
  //
  // 💌 HOW TO CUSTOMIZE EACH MEMORY CARD (FOR BEGINNERS):
  // - photo: The image path in assets/photos/ (e.g. "assets/photos/photo1.jpg").
  // - caption: The title on the FRONT of the card (underneath the photo).
  // - date: The date badge on the front photo (replace the placeholder with your real date!).
  // - stampTitle: The cute postage stamp label on the BACK of the card (dashed border with heart).
  // - noteOnBack: The romantic handwritten message revealed when she taps/clicks the card.
  // --------------------------------------------------------------------------
  memories: [
    // Card 1 - Reminder: Put your real date below (e.g. the day you met on Discord)
    {
      photo: "assets/photos/photo1.jpg",
      caption: "Our Beginning",
      stampTitle: "Where It All Began ❤️",
      date: "Our First Date",
      noteOnBack: "Who knew a simple meeting on Discord would lead me to someone who means so much to me? That's where our story truly began."
    },
    // Card 2 - Reminder: Put your real date below (e.g. your favorite Valorant night)
    {
      photo: "assets/photos/photo2.jpg",
      caption: "Valorant Nights",
      stampTitle: "Our Valorant Nights 🎮",
      date: "Summer Nights",
      noteOnBack: "Valorant became more than just our favorite game. It became another way to spend time together, even from miles away."
    },
    // Card 3 - Reminder: Put your real date below (e.g. when you shared your favorite Marvel watch party)
    {
      photo: "assets/photos/photo3.jpg",
      caption: "Marvel Moments",
      stampTitle: "Our Marvel Universe 🦸🏻‍♂️",
      date: "The Road Trip",
      noteOnBack: "No matter how far apart we are, sharing our favorite Marvel movies and series makes it feel like we're right there beside each other."
    },
    // Card 4 - Reminder: Put your real date below (e.g. the date of a memorable FaceTime call)
    {
      photo: "assets/photos/photo4.jpg",
      caption: "FaceTime Moments",
      stampTitle: "Our FaceTime Moments 📱",
      date: "Golden Hour",
      noteOnBack: "Even when we have nothing to talk about, I'm happy just seeing you. With you, even silence feels special."
    },
    // Card 5 - Reminder: Put your real date below (e.g. the date of a favorite late-night conversation)
    {
      photo: "assets/photos/photo5.jpg",
      caption: "Midnight Talks",
      stampTitle: "Talks Until Midnight 🌙",
      date: "Cozy Mornings",
      noteOnBack: "We lose track of time talking, but I never regret staying up late. Every conversation brings me closer to you, and ends my day with a happy heart."
    },
    // Card 6 - Reminder: Put your real date below (e.g. an anniversary date or promise date)
    {
      photo: "assets/photos/photo6.jpg",
      caption: "Forever Together",
      stampTitle: "No Distance, Just Us ♾️",
      date: "Forever & Always",
      noteOnBack: "Miles may keep us apart for now, but they could never change how much you mean to me. Someday, our calls will turn into hugs, and I'll finally get to love you right beside me. Until then, I'll keep choosing you, every single day."
    }
  ],

  // --------------------------------------------------------------------------
  // 5. REASONS WHY I LOVE YOU (Interactive card stack)
  // --------------------------------------------------------------------------
  reasons: [
    {
      title: "Reason #1 — Your Happiness",
      note: "The way your eyes crinkle with pure joy whenever you laugh at our silly inside jokes."
    },
    {
      title: "Reason #2 — Our Little World",
      note: "Even through a screen, you make me feel like I'm right where I belong."
    },
    {
      title: "Reason #3 — Our Shared Adventures",
      note: "From playing Valorant together to sharing our favorite Marvel stories, I love having a world that's ours."
    },
    {
      title: "Reason #4 — The Little Things",
      note: "Your good mornings, random updates, and little messages are some of my favorite parts of every day."
    },
    {
      title: "Reason #5 — Your Love",
      note: "You make me feel loved in ways that miles could never take away."
    },
    {
      title: "Reason #6 — The Way You Understand Me",
      note: "I love that I can share my thoughts, my silly side, and even my quiet moments with you."
    },
    {
      title: "Reason #7 — Choosing You",
      note: "Even when things aren't perfect, you're still the person I want to understand, grow with, and choose."
    },
    {
      title: "Reason #8 — Our Future",
      note: "I love dreaming about the day when goodnight kisses won't need a screen and holding you won't be just a wish."
    },
    {
      title: "Reason #9 — Simply You",
      note: "Beyond everything you do and everything we share, I love you because you're you, and there's no one else I'd rather have this love with."
    }
  ],

  // --------------------------------------------------------------------------
  // 5B. SONGS THAT REMIND ME OF YOU (Our Soundtrack)
  // --------------------------------------------------------------------------
  songsSubtitle: "Every one of these is you. 💕",
  autoPlayNext: true, // Automatically play the next song when one ends
  songs: [
    {
      title: "Fly Me to the Moon",
      artist: "Frank Sinatra",
      audioFile: "assets/music/songs/song1.mp3",
      coverImage: "assets/photos/covers/cover1.jpg",
      whyItReminds: "Loving you makes even the simplest moments feel magical, and if I could go anywhere in the universe, I'd still choose to have you by my side. ❤️",
      externalLink: "https://youtu.be/Cj0Tzu7duAE"
    },
    {
      title: "All the Stars",
      artist: "SZA & Kendrick Lamar",
      audioFile: "assets/music/songs/song2.mp3",
      coverImage: "assets/photos/covers/cover2.jpg",
      whyItReminds: "Even when things between us get difficult and doubts make everything complicated, you're still the person I want to share my dreams with and the one I hope to keep choosing through all the challenges we face. ❤️",
      externalLink: "https://youtu.be/yvOh7vVqlaE"
    },
    {
      title: "Ngiti",
      artist: "The Juans",
      audioFile: "assets/music/songs/song3.mp3",
      coverImage: "assets/photos/covers/cover3.jpg",
      whyItReminds: "Your smile has a special way of making my day better, and no matter how tiring or difficult things get, seeing you smile makes everything feel a little lighter and reminds me how lucky I am to have you in my life. ❤️",
      externalLink: "https://youtu.be/wmCoPfHTsK8"
    },
    {
      title: "Kabisado",
      artist: "IV of Spades",
      audioFile: "assets/music/songs/song4.mp3",
      coverImage: "assets/photos/covers/cover4.jpg",
      whyItReminds: "Even from miles away, I want to keep learning every little thing about you until I know your habits, your smiles, and the little things that make you you by heart.",
      externalLink: "https://youtu.be/uyC8mS5MHkk"
    },
    {
      title: "She Will Be Loved",
      artist: "Maroon 5",
      audioFile: "assets/music/songs/song5.mp3",
      coverImage: "assets/photos/covers/cover5.jpg",
      whyItReminds: "I want you to know that even on the days when you feel tired, misunderstood, or unsure of yourself, I'll still see the beautiful person you are and do my best to make you feel loved and appreciated. ❤️",
      externalLink: "https://youtu.be/OqkD30kxLMQ"
    }
  ],

  // --------------------------------------------------------------------------
  // 6. DIGITAL GIFT: SCRATCH-OFF COUPONS (4-6 items redeemable anytime)
  // --------------------------------------------------------------------------
  coupons: [
    {
      label: "DIGITAL LOVE COUPON #1",
      title: "Free Meal for Today",
      description: "A meal of your choice, on me, babi! 🍔💗",
      code: "FREE-MEAL-01"
    },
    {
      label: "DIGITAL LOVE COUPON #2",
      title: "Unlimited Buhat sa VALORANT",
      description: "Your personal carry! Let's win games together, babi! 🎮💗",
      code: "VALORANT-CARRY-02"
    },
    {
      label: "DIGITAL LOVE COUPON #3",
      title: "Unlimited Warm Hugs",
      description: "Tight, warm hugs anytime, even from miles away. 🫂💗",
      code: "WARM-HUGS-03"
    },
    {
      label: "DIGITAL LOVE COUPON #4",
      title: "Unlimited Kisses",
      description: "Forehead, cheek, and endless kisses when we meet! 💋💗",
      code: "UNLIMITED-KISSES-04"
    },
    {
      label: "DIGITAL LOVE COUPON #5",
      title: "Wildcard Wish",
      description: "One wish granted! Tell me what your heart desires, babi. ✨💝",
      code: "WILDCARD-WISH-05"
    },
    {
      label: "DIGITAL LOVE COUPON #6",
      title: "Your Personal Comfort Day",
      description: "I'll listen, comfort you, and remind you how loved you are. 🩷🫂",
      code: "COMFORT-DAY-06"
    }
  ]
};

// ==============================================================================
// APPLICATION LOGIC & CONTROLLERS
// ==============================================================================

document.addEventListener("DOMContentLoaded", () => {
  initAmbientDecorations();
  populateConfigData();
  initUnlockLanding();
  initMusicPlayer();
  initMemoriesGallery();
  initReasonsDeck();
  initSongsPlayer();
  initRsvpPlayground();
  initScratchCoupons();
  initScrollReveal();
});

// ------------------------------------------------------------------------------
// POPULATE ALL DATA FROM CONFIG INTO HTML
// ------------------------------------------------------------------------------
function populateConfigData() {
  // Page Title & Meta Tags dynamically updated from CONFIG
  if (CONFIG.partnerName) {
    document.title = `A Special Invitation for ${CONFIG.partnerName} 💕`;
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.content = `A Special Invitation for ${CONFIG.partnerName} 💕`;
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.content = `A romantic dinner invitation and digital gift crafted with all my love for ${CONFIG.partnerName}.`;
  }

  // Hero Section
  safeSetText("hero-partner-name", CONFIG.partnerName);

  // Songs Section Subtitle
  safeSetText("songs-subtitle", CONFIG.songsSubtitle);

  // Invitation Card
  safeSetText("invite-partner-name", CONFIG.partnerName);
  safeSetText("invite-date", CONFIG.dinnerDate);
  safeSetText("invite-time", CONFIG.dinnerTime);
  safeSetText("invite-personal-message", `"${CONFIG.personalMessage}"`);
  safeSetText("invite-my-name", CONFIG.myName);

  // Footer Credits
  safeSetText("footer-partner-name", CONFIG.partnerName);
  safeSetText("footer-my-name", CONFIG.myName);

  // RSVP Celebration Message
  renderHappyMessage(false);
}

function safeSetText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

// ------------------------------------------------------------------------------
// 1. COVER / LANDING UNLOCK SEQUENCE
// ------------------------------------------------------------------------------
function initUnlockLanding() {
  const unlockBtn = document.getElementById("unlock-btn");
  const giftBoxWrapper = document.getElementById("gift-box-wrapper");
  const mainContent = document.getElementById("main-content");
  const scrollCue = document.getElementById("scroll-cue");

  const handleUnlock = () => {
    // Play celebratory mini burst
    confettiBurst(window.innerWidth / 2, window.innerHeight * 0.6, 40);

    // Smooth unlock animation on main content
    if (mainContent) {
      mainContent.classList.remove("is-locked");
      mainContent.classList.add("is-unlocked");
      mainContent.setAttribute("aria-hidden", "false");
    }

    if (scrollCue) {
      scrollCue.classList.add("is-visible");
    }

    // Try starting background music upon first user interaction
    playAudioSafely();

    // Smooth scroll to memories section
    setTimeout(() => {
      const firstSection = document.getElementById("memories-section");
      if (firstSection) {
        firstSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 450);
  };

  if (unlockBtn) unlockBtn.addEventListener("click", handleUnlock);
  if (giftBoxWrapper) giftBoxWrapper.addEventListener("click", handleUnlock);
}

// ------------------------------------------------------------------------------
// 2. BACKGROUND MUSIC PLAYER CONTROLLER
// ------------------------------------------------------------------------------
let isMusicPlaying = false;

function initMusicPlayer() {
  const musicBtn = document.getElementById("music-toggle-btn");
  const audio = document.getElementById("bg-music");

  if (!musicBtn || !audio) return;

  // Handle missing audio source gracefully without console errors
  audio.addEventListener("error", () => {
    musicBtn.title = "Music file not found in assets/music/song.mp3";
    updateMusicButtonState(false);
  });

  musicBtn.addEventListener("click", () => {
    if (isMusicPlaying) {
      pauseAudioSafely();
    } else {
      playAudioSafely();
    }
  });
}

function playAudioSafely() {
  const audio = document.getElementById("bg-music");
  if (!audio) return;

  try {
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          isMusicPlaying = true;
          updateMusicButtonState(true);
        })
        .catch(() => {
          // Autoplay was prevented or audio file missing
          isMusicPlaying = false;
          updateMusicButtonState(false);
        });
    }
  } catch (e) {
    isMusicPlaying = false;
    updateMusicButtonState(false);
  }
}

function pauseAudioSafely() {
  const audio = document.getElementById("bg-music");
  if (!audio) return;

  try {
    audio.pause();
    isMusicPlaying = false;
    updateMusicButtonState(false);
  } catch (e) {
    // Ignore error
  }
}

function updateMusicButtonState(playing) {
  const musicBtn = document.getElementById("music-toggle-btn");
  const muteBadge = document.getElementById("music-mute-badge");
  if (!musicBtn) return;

  if (playing) {
    musicBtn.classList.add("is-playing");
    if (muteBadge) muteBadge.style.display = "none";
  } else {
    musicBtn.classList.remove("is-playing");
    if (muteBadge) muteBadge.style.display = "block";
  }
}

// ------------------------------------------------------------------------------
// 3. OUR MEMORIES: 3D FLIP CARD GALLERY
// ------------------------------------------------------------------------------
function initMemoriesGallery() {
  const grid = document.getElementById("memories-grid");
  if (!grid || !Array.isArray(CONFIG.memories)) return;

  grid.innerHTML = "";

  CONFIG.memories.forEach((mem, index) => {
    const card = document.createElement("div");
    card.className = "memory-card scroll-reveal";
    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `Memory card: ${mem.caption}. Tap to flip.`);

    // Fallback SVG data URI if photo is missing
    const fallbackSvg = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="%23FFF0F5"/><stop offset="100%" stop-color="%23FFD6E0"/></linearGradient></defs><rect width="600" height="400" fill="url(%23g)"/><text x="50%" y="45%" font-size="48" text-anchor="middle" fill="%23E85D75">💖</text><text x="50%" y="62%" font-family="sans-serif" font-size="22" font-weight="bold" text-anchor="middle" fill="%234A2E35">${encodeURIComponent(mem.caption)}</text><text x="50%" y="74%" font-family="sans-serif" font-size="14" text-anchor="middle" fill="%23855C67">assets/photos/photo${index + 1}.jpg</text></svg>`;

    card.innerHTML = `
      <div class="memory-card-inner">
        <!-- Front Side -->
        <div class="memory-card-front">
          <div class="memory-photo-container">
            <img 
              src="${mem.photo}" 
              alt="${mem.caption}" 
              class="memory-photo" 
              loading="lazy"
            />
            <span class="memory-date-badge">${mem.stampTitle || mem.date}</span>
          </div>
          <div class="memory-info">
            <h3 class="memory-caption">${mem.caption}</h3>
            <span class="memory-tap-hint">Tap to read note 💌</span>
          </div>
        </div>

        <!-- Back Side (Sweet handwritten note) -->
        <div class="memory-card-back">
          <div class="memory-stamp">
            <span class="stamp-heart" aria-hidden="true">❤</span>
            <span class="stamp-title-text">${mem.stampTitle || mem.date}</span>
          </div>
          <div class="memory-note-wrapper">
            <p class="memory-note ${mem.noteOnBack && mem.noteOnBack.length > 150 ? 'is-long-note' : ''}">“${mem.noteOnBack}”</p>
          </div>
          <span class="memory-flip-back-hint">Tap to flip back ↺</span>
        </div>
      </div>
    `;

    // Gracefully handle missing images with SVG fallback
    const img = card.querySelector(".memory-photo");
    if (img) {
      img.addEventListener("error", function () {
        this.src = fallbackSvg;
      }, { once: true });
      if (img.complete && img.naturalWidth === 0 && mem.photo) {
        img.src = fallbackSvg;
      }
    }

    // Toggle 3D flip on click / tap / keyboard enter
    const toggleFlip = () => {
      card.classList.toggle("is-flipped");
    };

    card.addEventListener("click", toggleFlip);
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleFlip();
      }
    });

    grid.appendChild(card);
  });
}

// ------------------------------------------------------------------------------
// 4. REASONS WHY I LOVE YOU: INTERACTIVE CARD STACK
// ------------------------------------------------------------------------------
let currentReasonIndex = 0;

function initReasonsDeck() {
  const stackContainer = document.getElementById("card-stack");
  const counterEl = document.getElementById("reasons-counter");
  const nextBtn = document.getElementById("reasons-next-btn");
  const prevBtn = document.getElementById("reasons-prev-btn");

  if (!stackContainer || !Array.isArray(CONFIG.reasons)) return;

  const totalReasons = CONFIG.reasons.length;

  function renderDeck() {
    stackContainer.innerHTML = "";

    // Show current card and up to 3 cards behind it for depth
    const visibleCardsCount = Math.min(3, totalReasons - currentReasonIndex + 1);

    if (currentReasonIndex >= totalReasons) {
      // Reached End Card
      if (counterEl) counterEl.textContent = "Forever & Always 💕";
      if (nextBtn) nextBtn.style.display = "none";
      if (prevBtn) prevBtn.style.display = "inline-flex";

      const endCard = document.createElement("div");
      endCard.className = "deck-card end-card";
      endCard.style.zIndex = "10";
      endCard.style.transform = "none";
      endCard.innerHTML = `
        <div class="deck-card-heart-icon">💖✨</div>
        <p class="deck-card-text">...and a million more reasons I discover in you every single day.</p>
        <button id="replay-reasons-btn" class="btn btn-secondary btn-sm" style="margin-top: 1rem;">
          Read Again from Start ↺
        </button>
      `;

      stackContainer.appendChild(endCard);

      const replayBtn = endCard.querySelector("#replay-reasons-btn");
      if (replayBtn) {
        replayBtn.addEventListener("click", () => {
          currentReasonIndex = 0;
          renderDeck();
          if (nextBtn) nextBtn.style.display = "inline-flex";
        });
      }
      return;
    }

    if (counterEl) {
      counterEl.textContent = `Reason ${currentReasonIndex + 1} of ${totalReasons}`;
    }
    if (nextBtn) nextBtn.style.display = "inline-flex";
    if (prevBtn) prevBtn.disabled = currentReasonIndex === 0;

    // Render from bottom to top so top card is on top
    for (let i = visibleCardsCount - 1; i >= 0; i--) {
      const idx = currentReasonIndex + i;
      if (idx >= totalReasons) continue;

      const card = document.createElement("div");
      card.className = "deck-card";

      // Calculate 3D stacking effect
      const offsetY = i * 12;
      const scale = 1 - i * 0.05;
      const rot = (i % 2 === 0 ? 1 : -1) * (i * 2);
      card.style.zIndex = `${10 - i}`;
      card.style.transform = `translateY(${offsetY}px) scale(${scale}) rotate(${rot}deg)`;
      card.style.opacity = `${1 - i * 0.15}`;

      const item = CONFIG.reasons[idx];
      const titleText = (typeof item === "object" && item && item.title)
        ? item.title
        : `Reason #${idx + 1}`;
      const rawNote = (typeof item === "object" && item && item.note)
        ? item.note
        : (typeof item === "string" ? item : "");
      const cleanNote = rawNote.replace(/^[“"']+|[”"']+$/g, "").trim();

      card.innerHTML = `
        <div class="deck-card-number">${titleText}</div>
        <div class="deck-card-heart-icon">💌</div>
        <p class="deck-card-text">“${cleanNote}”</p>
        <span class="deck-card-footer">Tap or swipe for next 💕</span>
      `;

      if (i === 0) {
        // Only attach swipe & tap handlers to the top active card
        attachCardSwipe(card, () => advanceReason(1));
      }

      stackContainer.appendChild(card);
    }
  }

  function advanceReason(direction) {
    if (direction > 0 && currentReasonIndex < totalReasons) {
      const topCard = stackContainer.querySelector(".deck-card");
      if (topCard) {
        topCard.classList.add("swiped-left");
        setTimeout(() => {
          currentReasonIndex++;
          renderDeck();
        }, 320);
      } else {
        currentReasonIndex++;
        renderDeck();
      }
    } else if (direction < 0 && currentReasonIndex > 0) {
      currentReasonIndex--;
      renderDeck();
    }
  }

  // Next & Prev button listeners
  if (nextBtn) {
    nextBtn.addEventListener("click", () => advanceReason(1));
  }
  if (prevBtn) {
    prevBtn.addEventListener("click", () => advanceReason(-1));
  }

  renderDeck();
}

/**
 * Touch swipe and mouse drag gesture handler for cards
 */
function attachCardSwipe(cardEl, onSwipeNext) {
  let startX = 0;
  let startY = 0;
  let isDragging = false;
  let moved = false;

  const onStart = (e) => {
    isDragging = true;
    moved = false;
    const point = e.touches ? e.touches[0] : e;
    startX = point.clientX;
    startY = point.clientY;
    cardEl.style.transition = "none";
  };

  const onMove = (e) => {
    if (!isDragging) return;
    const point = e.touches ? e.touches[0] : e;
    const diffX = point.clientX - startX;
    const diffY = point.clientY - startY;

    if (Math.abs(diffX) > 8 || Math.abs(diffY) > 8) {
      moved = true;
    }

    const rot = diffX * 0.08;
    cardEl.style.transform = `translate(${diffX}px, ${diffY * 0.3}px) rotate(${rot}deg)`;
  };

  const onEnd = (e) => {
    if (!isDragging) return;
    isDragging = false;
    cardEl.style.transition = "transform 0.4s ease, opacity 0.4s ease";

    const point = e.changedTouches ? e.changedTouches[0] : e;
    const diffX = point.clientX - startX;

    if (Math.abs(diffX) > 80) {
      // Swiped far enough
      if (diffX > 0) {
        cardEl.classList.add("swiped-right");
      } else {
        cardEl.classList.add("swiped-left");
      }
      setTimeout(onSwipeNext, 300);
    } else if (!moved) {
      // Clean tap/click advances the card
      onSwipeNext();
    } else {
      // Reset position
      cardEl.style.transform = "translate(0px, 0px) rotate(0deg)";
    }
  };

  cardEl.addEventListener("mousedown", onStart);
  window.addEventListener("mousemove", onMove);
  window.addEventListener("mouseup", onEnd);

  cardEl.addEventListener("touchstart", onStart, { passive: true });
  cardEl.addEventListener("touchmove", onMove, { passive: true });
  cardEl.addEventListener("touchend", onEnd);
}

// ------------------------------------------------------------------------------
// 4B. SONGS THAT REMIND ME OF YOU: INTERACTIVE PLAYLIST & MINI-PLAYER
// ------------------------------------------------------------------------------
const sharedSongAudio = new Audio();
sharedSongAudio.preload = "metadata";
let currentTrackIdx = -1;
let isCurrentTrackPlaying = false;

function initSongsPlayer() {
  const songsGrid = document.getElementById("songs-grid");
  if (!songsGrid || !Array.isArray(CONFIG.songs)) return;

  songsGrid.innerHTML = "";

  const playIconSvg = `<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>`;
  const pauseIconSvg = `<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>`;
  const fallbackCoverSvg = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300"><defs><linearGradient id="cg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="%23FFF0F5"/><stop offset="100%" stop-color="%23FFD6E0"/></linearGradient></defs><rect width="300" height="300" fill="url(%23cg)"/><circle cx="150" cy="150" r="100" fill="none" stroke="%23E85D75" stroke-width="2" stroke-opacity="0.3"/><text x="150" y="165" font-size="52" text-anchor="middle" fill="%23E85D75">🎶</text></svg>`;

  CONFIG.songs.forEach((song, index) => {
    const card = document.createElement("div");
    card.className = "song-card scroll-reveal";
    card.id = `song-card-${index}`;

    const coverSrc = song.coverImage || fallbackCoverSvg;
    const hasAudio = Boolean(song.audioFile);
    const hasLink = Boolean(song.externalLink);

    let controlsMarkup = "";
    if (hasAudio) {
      controlsMarkup = `
        <div class="song-action-area" id="song-action-area-${index}">
          <div class="song-controls-row" id="song-controls-row-${index}">
            <button 
              class="song-play-btn" 
              id="song-play-btn-${index}" 
              aria-label="Play ${song.title} by ${song.artist}" 
              aria-pressed="false"
              title="Play track"
            >
              <span class="song-btn-icon">${playIconSvg}</span>
            </button>
            <div class="song-progress-wrapper" id="song-progress-wrapper-${index}">
              <div 
                class="song-progress-bar" 
                id="song-progress-bar-${index}" 
                role="progressbar" 
                aria-label="Seek progress for ${song.title}" 
                tabindex="0"
              >
                <div class="song-progress-fill" id="song-progress-fill-${index}"></div>
              </div>
              <div class="song-time-row">
                <span id="song-time-cur-${index}">0:00</span>
                <span id="song-time-dur-${index}">0:00</span>
              </div>
            </div>
          </div>
          ${hasLink ? `
            <div class="song-link-row" id="song-link-row-${index}">
              <a href="${song.externalLink}" target="_blank" rel="noopener noreferrer" class="song-external-link">
                Listen on Spotify / YouTube ↗
              </a>
            </div>
          ` : ""}
          <div class="song-fallback-container" id="song-fallback-container-${index}" style="display: none;">
            ${hasLink ? `
              <a href="${song.externalLink}" target="_blank" rel="noopener noreferrer" class="song-external-btn-fallback">
                Listen on Spotify / YouTube 🎧
              </a>
            ` : ""}
          </div>
        </div>
      `;
    } else if (hasLink) {
      controlsMarkup = `
        <div class="song-action-area" id="song-action-area-${index}">
          <a href="${song.externalLink}" target="_blank" rel="noopener noreferrer" class="song-external-btn-fallback">
            Listen on Spotify / YouTube 🎧
          </a>
        </div>
      `;
    }

    card.innerHTML = `
      <div class="song-card-header">
        <div class="song-cover-wrapper">
          <img 
            src="${coverSrc}" 
            alt="${song.title} album cover" 
            class="song-cover-img" 
            loading="lazy"
            onerror="this.onerror=null; this.src='${fallbackCoverSvg}';"
          />
          <div class="song-vinyl-overlay"></div>
          <span class="song-playing-heart" aria-hidden="true">💖</span>
          <div class="song-equalizer" aria-hidden="true">
            <span class="eq-bar"></span>
            <span class="eq-bar"></span>
            <span class="eq-bar"></span>
            <span class="eq-bar"></span>
          </div>
        </div>

        <div class="song-header-meta">
          <span class="song-badge">Track 0${index + 1}</span>
          <h3 class="song-title">${song.title}</h3>
          <p class="song-artist">${song.artist}</p>
        </div>
      </div>

      <div class="song-why-box">
        <p class="song-why-text">"${song.whyItReminds}"</p>
      </div>

      ${controlsMarkup}
    `;

    songsGrid.appendChild(card);

    // Bind play button if available
    if (hasAudio) {
      const playBtn = card.querySelector(`#song-play-btn-${index}`);
      if (playBtn) {
        playBtn.addEventListener("click", () => {
          toggleSongPlayback(index);
        });
      }

      const progressBar = card.querySelector(`#song-progress-bar-${index}`);
      if (progressBar) {
        attachProgressBarSeek(progressBar);
      }
    }
  });

  // Attach Mini-Player event listeners
  initMiniPlayerControls();

  // Attach shared audio event listeners
  attachSharedAudioEvents();
}

function toggleSongPlayback(index) {
  if (currentTrackIdx === index) {
    if (isCurrentTrackPlaying) {
      pauseSongTrack();
    } else {
      resumeSongTrack();
    }
  } else {
    playSongTrack(index);
  }
}

function playSongTrack(index) {
  if (index < 0 || index >= CONFIG.songs.length) return;
  const song = CONFIG.songs[index];

  if (!song.audioFile) {
    if (song.externalLink) {
      window.open(song.externalLink, "_blank", "noopener,noreferrer");
    }
    return;
  }

  // IMPORTANT: Automatically pause the site's global background music!
  pauseAudioSafely();

  currentTrackIdx = index;
  sharedSongAudio.src = song.audioFile;

  try {
    const playPromise = sharedSongAudio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          isCurrentTrackPlaying = true;
          updateAllSongCardsUI();
          updateMiniPlayerUI();
        })
        .catch(() => {
          // Play rejected (e.g. mobile policy or audio missing)
          isCurrentTrackPlaying = false;
          updateAllSongCardsUI();
          updateMiniPlayerUI();
          handleAudioPlaybackError(index);
        });
    }
  } catch (err) {
    isCurrentTrackPlaying = false;
    updateAllSongCardsUI();
    updateMiniPlayerUI();
    handleAudioPlaybackError(index);
  }
}

function resumeSongTrack() {
  if (currentTrackIdx < 0) {
    playSongTrack(0);
    return;
  }

  // Ensure global background music is paused
  pauseAudioSafely();

  try {
    const playPromise = sharedSongAudio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          isCurrentTrackPlaying = true;
          updateAllSongCardsUI();
          updateMiniPlayerUI();
        })
        .catch(() => {
          isCurrentTrackPlaying = false;
          updateAllSongCardsUI();
          updateMiniPlayerUI();
          handleAudioPlaybackError(currentTrackIdx);
        });
    }
  } catch (err) {
    isCurrentTrackPlaying = false;
    updateAllSongCardsUI();
    updateMiniPlayerUI();
  }
}

function pauseSongTrack() {
  try {
    sharedSongAudio.pause();
    isCurrentTrackPlaying = false;
    updateAllSongCardsUI();
    updateMiniPlayerUI();
  } catch (err) {}
}

function handleAudioPlaybackError(index) {
  const card = document.getElementById(`song-card-${index}`);
  if (!card) return;

  const controlsRow = card.querySelector(`#song-controls-row-${index}`);
  const linkRow = card.querySelector(`#song-link-row-${index}`);
  const fallbackContainer = card.querySelector(`#song-fallback-container-${index}`);

  if (controlsRow) controlsRow.style.display = "none";
  if (linkRow) linkRow.style.display = "none";
  if (fallbackContainer) fallbackContainer.style.display = "block";
}

function updateAllSongCardsUI() {
  const playIconSvg = `<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>`;
  const pauseIconSvg = `<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>`;

  CONFIG.songs.forEach((song, idx) => {
    const card = document.getElementById(`song-card-${idx}`);
    if (!card) return;

    const playBtn = card.querySelector(`#song-play-btn-${idx}`);
    const isThisPlaying = (idx === currentTrackIdx) && isCurrentTrackPlaying;

    if (isThisPlaying) {
      card.classList.add("is-playing");
      if (playBtn) {
        playBtn.classList.add("is-active");
        playBtn.setAttribute("aria-pressed", "true");
        playBtn.setAttribute("aria-label", `Pause ${song.title} by ${song.artist}`);
        const iconSpan = playBtn.querySelector(".song-btn-icon");
        if (iconSpan) iconSpan.innerHTML = pauseIconSvg;
      }
    } else {
      card.classList.remove("is-playing");
      if (playBtn) {
        playBtn.classList.remove("is-active");
        playBtn.setAttribute("aria-pressed", "false");
        playBtn.setAttribute("aria-label", `Play ${song.title} by ${song.artist}`);
        const iconSpan = playBtn.querySelector(".song-btn-icon");
        if (iconSpan) iconSpan.innerHTML = playIconSvg;
      }
    }
  });
}

function updateMiniPlayerUI() {
  const miniPlayer = document.getElementById("songs-mini-player");
  if (!miniPlayer || currentTrackIdx < 0) return;

  const song = CONFIG.songs[currentTrackIdx];
  if (!song) return;

  // Show mini-player and offset floating music button
  miniPlayer.classList.add("is-active");
  document.body.classList.add("has-active-mini-player");

  // Track metadata
  const thumb = document.getElementById("mini-player-thumb");
  const title = document.getElementById("mini-player-title");
  const artist = document.getElementById("mini-player-artist");

  if (thumb) {
    thumb.src = song.coverImage || "";
  }
  if (title) title.textContent = song.title;
  if (artist) artist.textContent = song.artist;

  // Play/Pause icon toggle in mini-player
  const playIcon = document.getElementById("mini-play-icon");
  const pauseIcon = document.getElementById("mini-pause-icon");

  if (isCurrentTrackPlaying) {
    if (playIcon) playIcon.style.display = "none";
    if (pauseIcon) pauseIcon.style.display = "block";
  } else {
    if (playIcon) playIcon.style.display = "block";
    if (pauseIcon) pauseIcon.style.display = "none";
  }
}

function initMiniPlayerControls() {
  const miniPlayBtn = document.getElementById("mini-play-btn");
  const miniPrevBtn = document.getElementById("mini-prev-btn");
  const miniNextBtn = document.getElementById("mini-next-btn");
  const miniCloseBtn = document.getElementById("mini-close-btn");
  const miniProgressBar = document.getElementById("mini-progress-bar");

  if (miniPlayBtn) {
    miniPlayBtn.addEventListener("click", () => {
      if (isCurrentTrackPlaying) {
        pauseSongTrack();
      } else {
        resumeSongTrack();
      }
    });
  }

  if (miniPrevBtn) {
    miniPrevBtn.addEventListener("click", () => {
      if (CONFIG.songs.length === 0) return;
      const prevIdx = (currentTrackIdx - 1 + CONFIG.songs.length) % CONFIG.songs.length;
      playSongTrack(prevIdx);
    });
  }

  if (miniNextBtn) {
    miniNextBtn.addEventListener("click", () => {
      if (CONFIG.songs.length === 0) return;
      const nextIdx = (currentTrackIdx + 1) % CONFIG.songs.length;
      playSongTrack(nextIdx);
    });
  }

  if (miniCloseBtn) {
    miniCloseBtn.addEventListener("click", () => {
      pauseSongTrack();
      const miniPlayer = document.getElementById("songs-mini-player");
      if (miniPlayer) miniPlayer.classList.remove("is-active");
      document.body.classList.remove("has-active-mini-player");
    });
  }

  if (miniProgressBar) {
    attachProgressBarSeek(miniProgressBar);
  }
}

function attachProgressBarSeek(barEl) {
  const handleSeek = (e) => {
    if (!sharedSongAudio.duration || isNaN(sharedSongAudio.duration)) return;
    const rect = barEl.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clickRatio = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    sharedSongAudio.currentTime = clickRatio * sharedSongAudio.duration;
  };

  barEl.addEventListener("click", handleSeek);
}

function attachSharedAudioEvents() {
  // Time updates
  sharedSongAudio.addEventListener("timeupdate", () => {
    const cur = sharedSongAudio.currentTime || 0;
    const dur = sharedSongAudio.duration || 0;
    const pct = dur > 0 ? (cur / dur) * 100 : 0;
    const curStr = formatAudioTime(cur);
    const durStr = dur > 0 ? formatAudioTime(dur) : "0:00";

    // Active Card Progress
    if (currentTrackIdx >= 0) {
      const fill = document.getElementById(`song-progress-fill-${currentTrackIdx}`);
      const curEl = document.getElementById(`song-time-cur-${currentTrackIdx}`);
      const durEl = document.getElementById(`song-time-dur-${currentTrackIdx}`);
      if (fill) fill.style.width = `${pct}%`;
      if (curEl) curEl.textContent = curStr;
      if (durEl && dur > 0) durEl.textContent = durStr;
    }

    // Mini Player Progress
    const miniFill = document.getElementById("mini-progress-fill");
    const miniCurEl = document.getElementById("mini-current-time");
    const miniDurEl = document.getElementById("mini-duration-time");
    if (miniFill) miniFill.style.width = `${pct}%`;
    if (miniCurEl) miniCurEl.textContent = curStr;
    if (miniDurEl && dur > 0) miniDurEl.textContent = durStr;
  });

  // Track finished
  sharedSongAudio.addEventListener("ended", () => {
    if (CONFIG.autoPlayNext) {
      const nextIdx = (currentTrackIdx + 1) % CONFIG.songs.length;
      playSongTrack(nextIdx);
    } else {
      isCurrentTrackPlaying = false;
      updateAllSongCardsUI();
      updateMiniPlayerUI();
    }
  });

  // Graceful error handling
  sharedSongAudio.addEventListener("error", () => {
    if (currentTrackIdx >= 0) {
      handleAudioPlaybackError(currentTrackIdx);
    }
  });
}

function formatAudioTime(seconds) {
  if (isNaN(seconds) || seconds < 0) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s < 10 ? '0' : ''}${s}`;
}

// ------------------------------------------------------------------------------
// 5. RSVP PLAYGROUND: RUNAWAY "NO" BUTTON & CELEBRATORY "YES"
// ------------------------------------------------------------------------------
function initRsvpPlayground() {
  const playground = document.getElementById("rsvp-playground");
  const noBtn = document.getElementById("rsvp-no-btn");
  const yesBtn = document.getElementById("rsvp-yes-btn");
  const confirmCard = document.getElementById("rsvp-confirmation-card");

  if (!playground || !noBtn || !yesBtn || !confirmCard) return;

  // Check if RSVP was previously accepted in localStorage
  try {
    const savedRsvp = localStorage.getItem("romantic_rsvp_accepted");
    if (savedRsvp === "true") {
      confirmCard.classList.remove("hidden");
      playground.style.display = "none";
      renderHappyMessage(false);
    }
  } catch (e) {
    // LocalStorage blocked (e.g. private mode)
  }

  const funnyExcuses = [
    "Are you sure? 🥺",
    "Try again 😏",
    "Nope, wrong button! 😜",
    "Think again 💕",
    "Wait, look at the other button! 👈",
    "Nice try! Can't click me 🏃💨",
    "You know you want to! 🥰",
    "Almost had me! 🙈",
    "Only YES allowed! 💖"
  ];

  let excuseIndex = 0;
  let noScale = 1.0;
  let yesScale = 1.0;

  const moveNoButton = (e) => {
    if (e && e.type === "touchstart") {
      e.preventDefault(); // Prevent accidental tap on mobile
    }

    noBtn.classList.add("is-fleeing");

    // Cycle funny text
    noBtn.textContent = funnyExcuses[excuseIndex % funnyExcuses.length];
    excuseIndex++;

    // Shrink No button slightly, grow Yes button
    noScale = Math.max(0.65, noScale - 0.05);
    yesScale = Math.min(1.35, yesScale + 0.06);

    yesBtn.style.transform = `scale(${yesScale})`;

    // Get boundaries of the playground container
    const rect = playground.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();

    // Calculate maximum safe bounds inside container
    const maxLeft = rect.width - btnRect.width - 20;
    const maxTop = rect.height - btnRect.height - 10;

    const randomX = Math.floor(Math.random() * Math.max(20, maxLeft));
    const randomY = Math.floor(Math.random() * Math.max(20, maxTop));

    noBtn.style.left = `${Math.max(10, randomX)}px`;
    noBtn.style.top = `${Math.max(10, randomY)}px`;
    noBtn.style.transform = `scale(${noScale})`;
  };

  // Runaway triggers
  noBtn.addEventListener("mouseenter", moveNoButton);
  noBtn.addEventListener("touchstart", moveNoButton, { passive: false });
  noBtn.addEventListener("click", (e) => {
    e.preventDefault();
    moveNoButton(e);
  });

  // Clicking "Yes"
  yesBtn.addEventListener("click", () => {
    // Launch full celebratory confetti burst
    confettiBurst(window.innerWidth / 2, window.innerHeight * 0.5, 120);

    // Save state in localStorage
    try {
      localStorage.setItem("romantic_rsvp_accepted", "true");
    } catch (e) {
      // Ignore localStorage error
    }

    // Hide runaway buttons and reveal confirmation card
    playground.style.display = "none";
    confirmCard.classList.remove("hidden");

    // Play typewriter celebration message
    renderHappyMessage(true);

    // Scroll smoothly to confirmation details
    setTimeout(() => {
      confirmCard.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 250);
  });
}

/**
 * Renders the celebratory happy message with typewriter effect
 * @param {boolean} animate - Whether to animate typewriter effect (false on page reload)
 */
function renderHappyMessage(animate = true) {
  const msgEl = document.getElementById("celebration-happy-message");
  if (!msgEl) return;

  let msg = CONFIG.happyMessage || `You just made me the happiest person, ${CONFIG.partnerName}. I can't wait to have dinner with you. 💕 - ${CONFIG.myName}`;
  msg = msg.replace(/\{partnerName\}/g, CONFIG.partnerName)
           .replace(/\{myName\}/g, CONFIG.myName);

  const prefersReduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!animate || prefersReduced) {
    msgEl.textContent = msg;
    msgEl.classList.remove("is-typing");
    return;
  }

  // Typewriter effect
  msgEl.textContent = "";
  msgEl.classList.add("is-typing");
  let charIdx = 0;
  if (msgEl._typeTimer) clearInterval(msgEl._typeTimer);

  msgEl._typeTimer = setInterval(() => {
    if (charIdx < msg.length) {
      msgEl.textContent += msg.charAt(charIdx);
      charIdx++;
    } else {
      clearInterval(msgEl._typeTimer);
      msgEl._typeTimer = null;
      msgEl.classList.remove("is-typing");
    }
  }, 28);
}

// ------------------------------------------------------------------------------
// 7. DIGITAL GIFT: SCRATCH-OFF COUPONS (Canvas-based)
// ------------------------------------------------------------------------------
function initScratchCoupons() {
  const grid = document.getElementById("coupons-grid");
  if (!grid || !Array.isArray(CONFIG.coupons)) return;

  grid.innerHTML = "";

  CONFIG.coupons.forEach((coupon, index) => {
    const card = document.createElement("div");
    card.className = "coupon-card scroll-reveal";

    card.innerHTML = `
      <div class="coupon-underlay">
        <span class="coupon-badge">${coupon.label || `DIGITAL LOVE COUPON #${index + 1}`}</span>
        <h3 class="coupon-title">${coupon.title}</h3>
        <p class="coupon-desc">${coupon.description}</p>
        <span class="coupon-code-badge">CODE: ${coupon.code}</span>
        <div class="coupon-revealed-sparkle" aria-hidden="true">✨</div>
      </div>
      <canvas class="coupon-canvas" aria-label="Scratch card overlay. Scratch with finger or mouse."></canvas>
    `;

    grid.appendChild(card);

    const canvas = card.querySelector(".coupon-canvas");
    setupScratchCanvas(canvas, card);
  });
}

function setupScratchCanvas(canvas, card) {
  const ctx = canvas.getContext("2d");
  let isDrawing = false;
  let isRevealed = false;

  function resizeCanvas() {
    const rect = card.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
    drawScratchCover();
  }

  function drawScratchCover() {
    // Rose-gold / silver metallic gradient
    const grad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    grad.addColorStop(0, "#E8C3C8");
    grad.addColorStop(0.5, "#F7E1D7");
    grad.addColorStop(1, "#D4AF37");

    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Decorative sparkling instructions
    ctx.fillStyle = "#855C67";
    ctx.font = "bold 15px 'Poppins', sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("✨ Scratch to Reveal ✨", canvas.width / 2, canvas.height / 2 - 10);

    ctx.font = "12px 'Poppins', sans-serif";
    ctx.fillStyle = "#A3707D";
    ctx.fillText("Use finger or mouse", canvas.width / 2, canvas.height / 2 + 16);
  }

  // Initial draw
  requestAnimationFrame(resizeCanvas);
  window.addEventListener("resize", () => {
    if (!isRevealed) resizeCanvas();
  });

  function scratch(x, y) {
    if (isRevealed) return;
    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(x, y, 24, 0, Math.PI * 2, false);
    ctx.fill();
  }

  function getCoords(e) {
    const rect = canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return {
      x: clientX - rect.left,
      y: clientY - rect.top
    };
  }

  function checkScratchPercentage() {
    if (isRevealed) return;

    try {
      const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imgData.data;
      let transparentPixels = 0;
      const totalPixels = data.length / 4;

      // Sample every 16th pixel for high performance
      for (let i = 3; i < data.length; i += 16) {
        if (data[i] === 0) {
          transparentPixels += 4;
        }
      }

      const percent = (transparentPixels / totalPixels) * 100;

      // Once ~50-55% is scratched, auto-reveal completely
      if (percent > 52) {
        isRevealed = true;
        card.classList.add("is-revealed");

        // Small sparkle burst at card position
        const rect = card.getBoundingClientRect();
        confettiBurst(rect.left + rect.width / 2, rect.top + rect.height / 2, 25);
      }
    } catch (e) {
      // Ignore getImageData security error on file:// origin if applicable
    }
  }

  // Mouse Events
  canvas.addEventListener("mousedown", (e) => {
    isDrawing = true;
    const { x, y } = getCoords(e);
    scratch(x, y);
  });

  window.addEventListener("mousemove", (e) => {
    if (!isDrawing) return;
    const { x, y } = getCoords(e);
    scratch(x, y);
  });

  window.addEventListener("mouseup", () => {
    if (isDrawing) {
      isDrawing = false;
      checkScratchPercentage();
    }
  });

  // Touch Events (Prevent scroll while scratching)
  canvas.addEventListener("touchstart", (e) => {
    isDrawing = true;
    const { x, y } = getCoords(e);
    scratch(x, y);
  }, { passive: true });

  canvas.addEventListener("touchmove", (e) => {
    if (!isDrawing) return;
    e.preventDefault(); // Stop page scrolling during scratch!
    const { x, y } = getCoords(e);
    scratch(x, y);
  }, { passive: false });

  canvas.addEventListener("touchend", () => {
    isDrawing = false;
    checkScratchPercentage();
  });
}

// ------------------------------------------------------------------------------
// 8. LIGHTWEIGHT CANVAS CONFETTI ENGINE (Custom implementation, NO libraries)
// ------------------------------------------------------------------------------
const confettiParticles = [];
let isConfettiLoopRunning = false;

function confettiBurst(originX, originY, count = 80) {
  const canvas = document.getElementById("confetti-canvas");
  if (!canvas) return;

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const colors = ["#E85D75", "#FFD6E0", "#D4AF37", "#B83B5E", "#FFF8F0", "#FF6B8B"];

  for (let i = 0; i < count; i++) {
    const angle = Math.random() * Math.PI * 2;
    const velocity = Math.random() * 9 + 4;
    const isHeart = Math.random() > 0.55; // Mix of hearts & ribbons

    confettiParticles.push({
      x: originX,
      y: originY,
      vx: Math.cos(angle) * velocity,
      vy: Math.sin(angle) * velocity - 3,
      size: Math.random() * 8 + 6,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      vRot: (Math.random() - 0.5) * 10,
      opacity: 1,
      gravity: 0.22,
      friction: 0.96,
      isHeart: isHeart
    });
  }

  if (!isConfettiLoopRunning) {
    isConfettiLoopRunning = true;
    requestAnimationFrame(renderConfetti);
  }
}

function renderConfetti() {
  const canvas = document.getElementById("confetti-canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = confettiParticles.length - 1; i >= 0; i--) {
    const p = confettiParticles[i];

    p.vx *= p.friction;
    p.vy = p.vy * p.friction + p.gravity;
    p.x += p.vx;
    p.y += p.vy;
    p.rotation += p.vRot;
    p.opacity -= 0.008;

    if (p.opacity <= 0 || p.y > canvas.height + 20) {
      confettiParticles.splice(i, 1);
      continue;
    }

    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate((p.rotation * Math.PI) / 180);
    ctx.globalAlpha = p.opacity;
    ctx.fillStyle = p.color;

    if (p.isHeart) {
      // Draw smooth romantic mini heart
      drawMiniHeart(ctx, 0, 0, p.size);
    } else {
      // Draw rectangular confetti ribbon
      ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
    }

    ctx.restore();
  }

  if (confettiParticles.length > 0) {
    requestAnimationFrame(renderConfetti);
  } else {
    isConfettiLoopRunning = false;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
}

function drawMiniHeart(ctx, x, y, size) {
  ctx.beginPath();
  const topCurveHeight = size * 0.3;
  ctx.moveTo(x, y + topCurveHeight);
  // Top left curve
  ctx.bezierCurveTo(x, y, x - size / 2, y, x - size / 2, y + topCurveHeight);
  // Bottom left curve
  ctx.bezierCurveTo(x - size / 2, y + (size + topCurveHeight) / 2, x, y + size, x, y + size);
  // Bottom right curve
  ctx.bezierCurveTo(x, y + size, x + size / 2, y + (size + topCurveHeight) / 2, x + size / 2, y + topCurveHeight);
  // Top right curve
  ctx.bezierCurveTo(x + size / 2, y, x, y, x, y + topCurveHeight);
  ctx.fill();
}

// ------------------------------------------------------------------------------
// 9. AMBIENT FLOATING HEARTS (Performance optimized)
// ------------------------------------------------------------------------------
function initAmbientDecorations() {
  const container = document.getElementById("ambient-decorations");
  if (!container) return;

  const heartIcons = ["❤", "💕", "✨", "🌸", "💖"];
  const count = window.innerWidth < 600 ? 12 : 20;

  for (let i = 0; i < count; i++) {
    const el = document.createElement("div");
    el.className = "ambient-particle";
    el.textContent = heartIcons[Math.floor(Math.random() * heartIcons.length)];
    el.style.left = `${Math.random() * 100}%`;
    el.style.fontSize = `${Math.random() * 14 + 14}px`;
    el.style.animationDuration = `${Math.random() * 12 + 10}s`;
    el.style.animationDelay = `${Math.random() * 10}s`;
    container.appendChild(el);
  }
}

// ------------------------------------------------------------------------------
// 10. SCROLL REVEAL (IntersectionObserver)
// ------------------------------------------------------------------------------
function initScrollReveal() {
  const reveals = document.querySelectorAll(".scroll-reveal");

  if (!("IntersectionObserver" in window)) {
    // Fallback for older browsers
    reveals.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  reveals.forEach((el) => observer.observe(el));
}

