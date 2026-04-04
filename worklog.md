# Buzz! Quiz Game - Worklog

---
Task ID: 1
Agent: Main Developer
Task: Build full-stack Buzz! Quiz game with multiplayer support

Work Log:
- Analyzed project structure, existing Next.js 16 setup, Prisma, Socket.io examples
- Installed socket.io-client for frontend real-time communication
- Created mini-services/quiz-service/ with Socket.io server (port 3004)
  - 64 questions across 8 categories
  - Full room management with game codes
  - Speed-based scoring system (500-1000 pts per question)
- Built complete game UI in src/app/page.tsx with 6 screens
- Updated globals.css with Mario Kart/Fall Guys cartoon styles
- Updated layout.tsx with Fredoka + Titan One fonts

Stage Summary:
- Initial build with Socket.io mini-service completed

---
Task ID: 2
Agent: Main Developer
Task: Fix Socket.io connectivity issues

Work Log:
- Discovered sandbox kills external processes after ~10 seconds
- Socket.io mini-service (bun/node) kept dying
- Tried multiple approaches: setsid, nohup, keepalive wrapper
- All external process approaches failed due to sandbox limitations
- Pivoted to API routes + polling architecture

Stage Summary:
- Socket.io mini-service approach abandoned due to sandbox limitations
- Decision: Use Next.js API routes with HTTP polling instead

---
Task ID: 3
Agent: Main Developer
Task: Rewrite game to use API routes + polling

Work Log:
- Updated Prisma schema: added Game model for persistence
- Created src/app/api/game/[code]/route.ts with all game actions:
  - create, join, start, next, answer, kick, update-host-name, restart
  - GET endpoint for polling (reads game state)
- Created src/hooks/useGamePolling.ts replacing useGameSocket.ts:
  - 500ms polling interval for real-time updates
  - All same actions as Socket.io version
- Updated src/app/page.tsx to use polling hook
- Full flow tested: Create → Join → Start → Answer → Next → Finish
- All lint checks pass

Stage Summary:
- Game fully functional with API routes + polling approach
- No external services needed - everything runs within Next.js
- API responses: Create (200), Join (200), GET (200), Start (200)
---
Task ID: 1
Agent: Main
Task: Fix build errors and player join flow

Work Log:
- Fixed missing React Fragment wrapper in page.tsx PlayerBuzzerScreen (line 701-703, "Temps écoulé" branch)
- Fixed malformed brace/indentation structure in API route case "next" scoring block
- Fixed critical bug: MainMenu form submit was only setting dead local state `setGameCode(code)` instead of calling `game.joinRoom(code, name)`
- Added `onJoin` prop to MainMenu component and wired it to `game.joinRoom()` in BuzzQuizPage
- Fixed `submitAnswer` in useGamePolling to accept optional `cashAnswer` parameter for written questions
- Added missing `nextRound` function to useGamePolling hook (was referenced in page.tsx but never defined)

Stage Summary:
- Build now compiles cleanly (200 for both page and API)
- ESLint passes with no errors
- Players can now successfully join a game by entering code + name and pressing GO
- Cash answer submission and next round transitions are properly wired up

---
Task ID: 2
Agent: Main
Task: Fix 3 gameplay issues - question dedup, answer count visibility, host button overlap

Work Log:
- Added `usedQuestionIds: Set<string>` to game state to track all used questions across all 3 rounds
- Modified `buildRoundQuestions()` to accept optional `usedIds` parameter, filtering out already-used questions
- Updated `start` and `next-round` handlers to register used question IDs after building each round
- Changed answer count badges (👤) to only show during `revealed` state, not during `answering` phase
- Moved host control button from `absolute top-2 right-2` (overlapping header) to `fixed bottom-4 right-4`

Stage Summary:
- Questions will never repeat within a game (tracked across all rounds)
- Players cannot see how many chose each answer while answering (anti-cheat)
- Host control button no longer overlaps the round/question indicators in the header

---
Task ID: 3
Agent: Main
Task: Fix theme consistency, color answers, add buzzer sound picker

Work Log:
- Removed cross-category fallback in buildRoundQuestions: now strictly only picks questions from the selected theme/category
- Removed the cashFallback mechanism that allowed questions from other categories when not enough cash-answer questions
- Updated host MCQ answer display to always show buzzer-colored rectangles (red/blue/green/yellow) even during reading state
- Wrong answers during reveal are dimmed with grayscale instead of changing to gray bg
- Created /src/lib/buzzerSounds.ts with 12 synthesized Web Audio API sound effects (buzzer classique, klaxon rétro, kazoo, cloche, ding dong, sifflement, dérapage, laser, pop corn, fart, gong, trompette)
- Added buzzerSoundId field to player state in API
- Added set-sound API action for changing sound in lobby
- Added setBuzzerSound function to useGamePolling hook
- Updated PlayerLobby to show interactive 3x4 sound picker grid with preview on tap
- Updated PlayerBuzzerScreen to play the players selected buzzer sound on buzz

Stage Summary:
- All questions in a round are strictly from the selected theme
- MCQ answers always display in buzzer-colored rectangles on host screen
- Players can choose from 12 different buzzer sounds when joining
- Each player hears their own custom sound when buzzing

---
Task ID: 4
Agent: Main
Task: Fix question type variety - guarantee MCQ, cash, and speed in every round

Work Log:
- Added 15+ new cash-answer questions (total now 45 across 7 categories, 6 per category minimum)
- Categories with 2 questions now have 6: Cinéma, Musique, Jeux Vidéo, Histoire
- Categories with 4 now have 6-7: Sport, Sciences
- Completely rewrote buildRoundQuestions with adaptive distribution algorithm
- New algorithm: calculates ideal split (50% MCQ, 25% speed, 25% cash), then scales down if pool is too small
- Guarantees at least 1 cash question and 1 speed question per round (if pool allows)
- Caps total questions at available pool size (no more empty questions)
- Removed the fixed-ratio approach that silently dropped types when pools were insufficient

Stage Summary:
- Every round now has a guaranteed mix of MCQ, cash-answer, and speed-choice questions
- Distribution adapts dynamically to available question pools per category
- Small categories like Musique (7 MCQ, 6 cash) still get 5 MCQ + 2 speed + 3 cash = 10 questions
- Large categories like Culture Générale (18 MCQ, 8 cash) get 9 MCQ + 4 speed + 5 cash = 18 questions

---
Task ID: 2-b
Agent: Audio Updater
Task: Replace synthesized Web Audio API buzzer sounds with real audio from Mixkit CDN

Work Log:
- Rewrote /src/lib/buzzerSounds.ts: replaced all 12 Web Audio API oscillator-based synthesized sounds with real MP3 audio from Mixkit CDN (royalty-free)
  - Sound mapping: Buzzer classique→473, Klaxon rétro→713, Cloche→586, Ding dong→587, Sifflement→610, Trompette→2870, Pop corn→2365, Laser→1489, Gong→2043, Kazoo→716, Dérapage→1490, Fart→240
  - New interface: BuzzerSound now has `url`, `preload()`, and `play()` (no AudioContext param)
  - Audio elements cached in a Map, cloned on each play() call for overlapping playback
  - Errors caught and silently ignored
- Rewrote /src/hooks/useSound.ts: replaced all 7 Web Audio API synthesized sounds with Mixkit CDN audio
  - tick→1110, endBeep→946, correct→949, wrong→473, roundStart→2870, buzz→2042
  - Removed AudioContext dependency entirely, all sounds use HTMLAudioElement with preload cache
- Updated /src/app/page.tsx: removed AudioContext refs and getCtx() helpers from PlayerLobby and PlayerBuzzerScreen
  - Changed `buzzer.play(getCtx())` → `buzzer.play()` in PlayerLobby (line 289)
  - Changed `buzzer.play(audioCtxRef.current)` → `buzzer.play()` in PlayerBuzzerScreen (line 631)
  - Removed unused audioCtxRef declarations

Stage Summary:
- All synthesized "bip" sounds replaced with real royalty-free sound effects
- No more AudioContext dependency in any UI component
- Build compiles successfully, ESLint passes clean
- 12 buzzer sounds + 7 game sounds all load from Mixkit CDN

---
Task ID: 2-d
Agent: Question Bank Generator
Task: Generate question bank part 2 with 600 questions for last 3 categories

Work Log:
- Created `/src/lib/questions-bank-part2.ts` with 600 questions across 3 categories:
  - Sciences & Nature: 150 MCQ (sn1–sn150) + 50 cash (casn1–casn50) = 200
  - Histoire & Géographie: 150 MCQ (hg1–hg150) + 50 cash (cahg1–cahg50) = 200
  - Jeux Vidéo: 150 MCQ (jv1–jv150) + 50 cash (cajv1–cajv50) = 200
- All questions in French, no duplicates
- Each category has 50 easy, 50 medium, 50 hard MCQ questions
- Cash answers have 1-3 accepted answer variations for fuzzy matching
- All 600 IDs verified unique
- TypeScript strict mode compilation passes with zero errors
- Exports: `ALL_MCQ_QUESTIONS_PART2` (450 items) and `ALL_CASH_QUESTIONS_PART2` (150 items)

Stage Summary:
- 600 questions generated (450 MCQ + 150 cash-answer) across Sciences & Nature, Histoire & Géographie, Jeux Vidéo
- File compiles cleanly under TypeScript strict mode
- Ready for integration into game question pool

---
Task ID: 2-e
Agent: Question Bank Generator
Task: Fix questions-bank.ts part 1 - rename exports and cash IDs

Work Log:
- Existing `/src/lib/questions-bank.ts` already contained 800 questions (600 MCQ + 200 cash) across 4 categories
- Categories: Culture Générale (cg1–cg150 + cash), Cinéma & Séries (cs1–cs150 + cash), Sport (sp1–sp150 + cash), Musique (mu1–mu150 + cash)
- Renamed exports from `ALL_MCQ_QUESTIONS` → `ALL_MCQ_QUESTIONS_PART1` and `ALL_CASH_QUESTIONS` → `ALL_CASH_QUESTIONS_PART1`
- Fixed cash question ID prefixes to match spec: `cg_ca` → `cacg`, `cs_ca` → `cacs`, `sp_ca` → `casp`, `mu_ca` → `camu`
- Verified 800 unique IDs (600 MCQ + 200 cash), zero duplicates
- TypeScript compilation passes with zero errors

Stage Summary:
- `questions-bank.ts` now exports `ALL_MCQ_QUESTIONS_PART1` (600 MCQ) and `ALL_CASH_QUESTIONS_PART1` (200 cash-answer)
- All cash question IDs follow the `cacg/cacs/casp/camu{N}` naming convention
- 817 lines, 800 questions total, all in French


---
Task ID: 1
Agent: Main Agent
Task: Add "Mode Alice" special game mode with secret code unlock system

Work Log:
- Read uploaded DOCX file (Questions Quiz Carré Cash et Rapidité.docx) containing 270 questions across 3 categories
- Created /src/lib/alice-questions.ts with 270 questions (90 per category × 3 types)
- Added ALICE_CATEGORIES, ALICE_MODE_CODE to game-types.ts
- Added specialMode field to GameSettings interface
- Updated API route buildRoundQuestions() to accept specialMode parameter and use Alice questions when active
- Updated HostConfig to accept specialMode prop and pre-fill Alice categories
- Updated MainMenu with secret code input (Lock/Wand2 icons) that unlocks Alice mode
- Updated BuzzQuizPage to handle Alice mode flow

Stage Summary:
- Secret code "folgoas" unlocks Mode Alice (Soirée Pop Culture)
- 3 categories: Dessins animés & Manga, Jeux Vidéo, Pop Culture
- Each category has 30 speed-choice + 30 multiple-choice + 30 cash-answer = 90 questions
- Total: 270 questions across all categories
- UI shows a "Code secret" button on main menu, expands to reveal input field
- Once unlocked, button changes to purple gradient "Mode Soirée Pop Culture" that opens config with Alice categories pre-filled
- HostConfig shows special header banner when in Alice mode

---
Task ID: 1
Agent: frontend-styling-expert
Task: UI readability overhaul for Buzz! quiz game

Work Log:
- Analyzed all components in page.tsx (1038 lines) and globals.css for readability issues
- Identified 10 key readability problems: white text-stroke making text hollow, gold text (#FFD700) poor contrast, text-[10px] too small on mobile, cyan background too bright, thin text outlines, etc.
- **globals.css overhaul:**
  - Darkened `.game-bg` from #00C9FF (bright cyan) to #0891B2 (deeper teal) with subtle radial gradients for depth
  - Made checkerboard pattern more subtle (0.03 opacity vs 0.07) with smaller tiles (60px vs 80px)
  - Replaced white stroke approach in `.game-text-outline` with dark stroke (rgba(0,0,0,0.7)) + `paint-order: stroke fill` — authentic Simpson/Fall Guys style
  - Same approach for `.game-text-outline-sm` with thinner stroke
  - Replaced `.game-text-outline-dark` semi-transparent stroke with strong multi-directional text-shadow
  - Added new `.game-title` class for hero titles with extra-thick dark stroke + strong shadow
  - Added `.game-text-solid` utility class for clean no-outline text
  - Made `.buzzer-dots-bg` softer: lighter bg (#F0FDFA) with smaller teal dots (#99F6E4)
  - Increased timer bar height from h-3/h-4 to h-4/h-5
  - Made pipe styles more vivid (brighter green gradient)
- **page.tsx readability fixes across all 8 components:**
  - **MainMenu:** BUZZ! title uses `game-title`, increased bottom note to text-sm/text-white/80, Héberger subtitle to text-base, fixed all text-[10px] to text-xs
  - **HostConfig:** All labels upgraded from text-xs/text-gray-400 to text-sm/text-gray-500, title uses `game-title`
  - **HostLobby:** Section labels text-sm/text-gray-500, player count text-base/text-gray-600, HÔTE badge text-xs, round number text-xs, player count heading uses `game-text-outline`
  - **PlayerLobby:** Sound name labels text-[10px]→text-xs, section title text-sm
  - **HostGameScreen:** Header badges text-sm/text-base, BUZZ! header uses #B8860B (dark gold) for direct contrast on white, speed/cash hints text-xs/text-sm, category badge text-xs/text-sm, answer number bg-black/15 for contrast, player names text-xs/text-sm, player scores #B8860B for 1st place, timer bg-white/60
  - **PlayerBuzzerScreen:** Score header changed to text-gray-800 (no more gold-on-white), FINI card score text-gray-800, Q counter text-xs, "Lis la question" text-base/text-gray-800, result message text-base
  - **RoundTransition:** Badge text-base, podium names text-sm, labels text-base/text-gray-500, question count text-sm
  - **ResultsScreen:** RÉSULTATS uses `game-title`, subtitle text-base/text-xl, podium names text-sm/text-base with stronger drop-shadow, 1st score #B8860B, 2nd score #6B7280, 3rd score #92400E, leaderboard text-base, score colors amber-600/gray-500/amber-800
- Eliminated ALL `text-[10px]` usage (was present in 12+ locations)
- Eliminated ALL `text-xs text-gray-400` label usage (was present in 8+ locations)

Stage Summary:
- Improved contrast and readability across all 8 game screens
- Maintained cartoon/Fall Guys/Simpson aesthetic throughout
- Dark text outlines (authentic Simpson style) replace problematic white strokes
- Darker background (#0891B2) provides natural contrast for white/gold text
- All text now meets minimum readable size (12px) on mobile
- Gold text uses darker shade (#B8860B) on white backgrounds for WCAG-friendly contrast
- Key files modified: globals.css, page.tsx
- Build compiles successfully with zero errors

---
Task ID: 2
Agent: main
Task: Add background music (BGM) to the game menu and host screens

Work Log:
- Copied user-uploaded MP3 "Top Quiz 2026 (Remastered).mp3" to /public/audio/bgm.mp3
- Created new hook `/src/hooks/useBGM.ts` for background music management
- Integrated BGM hook into BuzzQuizPage component
- Music plays on: menu, host-config, host-lobby views
- Music auto-pauses when entering gameplay (host-game, player-game, player-lobby)
- Added animated mute/unmute button (bottom-left, pink Volume2/gray VolumeX icons)
- Added CSS equalizer bar animation (animate-music-bar) for visual feedback
- Audio loops at 35% volume for comfortable background listening
- Lint passes cleanly

Stage Summary:
- BGM system fully functional with 3-screen coverage (menu, config, lobby)
- Mute button with animated music bars provides clear visual feedback
- Audio file: /public/audio/bgm.mp3 (~3.2MB, 128kbps MP3)
- New files: /src/hooks/useBGM.ts
- Modified files: /src/app/page.tsx, /src/app/globals.css

---
Task ID: 3
Agent: main
Task: Add animated SVG dancing logo mascot to homepage

Work Log:
- Created `DancingBuzzer` SVG component (~160 lines) with full cartoon character:
  - Red dome body with radial gradient + glossy highlight
  - Cute face: big eyes (with blink animation), smile, pink blush cheeks
  - Yellow "BUZZ!" text on belly with dark stroke
  - Yellow star antenna on top
  - Gray platform base
  - Yellow hands with fingers on red arms
  - Dark shoes on legs
- Added 10+ CSS keyframe animations in globals.css:
  - `dance-bounce`: full body bobbing with rotation
  - `dance-squish`: squash & stretch effect
  - `arm-wave-left/right`: arms swinging independently
  - `leg-stomp-left/right`: legs stomping
  - `eye-blink`: periodic eye blink
  - `shadow-pulse`: shadow scales under character
  - `float-note-1/2/3`: music notes floating upward
  - `sparkle-rotate`: rotating sparkle stars
  - `title-wiggle`: subtitle wiggles to the beat
  - `idle-float`: gentle floating when music is off
- Dance state controlled by `isDancing` prop (true when music plays & not muted)
- All dance animations pause when music is muted (CSS `animation-play-state: paused`)
- Floating music notes (pink, cyan, gold) and sparkle stars appear only when dancing
- Replaced old text-only "BUZZ!" title with the animated mascot on MainMenu
- Updated subtitle to "🎮 LE GRAND QUIZ 🎮" with wiggle animation

Stage Summary:
- Fun cartoon buzzer mascot character dances on the homepage
- Syncs with music: dances when playing, gentle idle float when muted
- Rich layered animations: bounce, squish, arms, legs, eyes, shadow, notes, sparkles
- Simpson/Fall Guys cartoon aesthetic maintained
- Files modified: src/app/page.tsx, src/app/globals.css
---
Task ID: 1
Agent: Main
Task: Integrate dancing logo animation (from Gemini code) into Buzz Quiz homepage

Work Log:
- Read current page.tsx MainMenu component, globals.css, useBGM.ts to understand existing structure
- Analyzed the Gemini-provided animation code: letter-by-letter bounceIn intro, is-dancing CSS class toggling dance keyframes synced to --beat (0.48s ≈ 124 BPM)
- Added comprehensive CSS animations to globals.css: bounceInText, pillEnter, floatIdle, explodeRing, dancePump, danceSwing, letterJump keyframes + .is-dancing state overrides
- Updated useBGM hook to expose `isPlaying` state via native audio 'playing'/'pause' events
- Replaced the static MainMenu title (h1 + motion.p) with animated dancing logo: per-letter bounceIn intro → impact ring explosion → idle float → dance mode when BGM plays
- Added Google Fonts `<link>` for Lilita One in layout.tsx (not available in next/font/google for this Next.js version)
- Passed `isDancing={bgm.isPlaying}` prop from BuzzQuizPage to MainMenu
- Lint: 0 errors, 1 warning (custom font in layout - acceptable for App Router)
- Dev server: compiled successfully, page returns 200

Stage Summary:
- Dancing BUZZ! logo now on homepage with 3 animation phases: intro bounceIn → idle float → dance on beat
- LE GRAND QUIZ subtitle as pink pill with swing animation
- Gold impact ring explosion effect on mount
- Dance synced to BGM via isPlaying state from useBGM hook
- Beat tempo: 0.48s (--beat CSS variable), matching Top Quiz 2026 ~124 BPM

---
Task ID: 2
Agent: Main
Task: Add dance animations to menu elements, floating particles, iOS audio overlay, and prominent mute button

Work Log:
- Updated MainMenu rendering (line 883) to pass 4 new props: `needsUnlock`, `onUnlock`, `muted`, `onToggleMute` from `bgm` hook
- Updated MainMenu function signature to accept new optional props: `needsUnlock?: boolean`, `onUnlock?: () => void`, `muted?: boolean`, `onToggleMute?: () => void`
- Replaced old `motion.button` mute button (lines 936-960) with a simpler, more prominent CSS-based button using `mute-btn-fab` class with animated music bars (`mute-bar`, `mute-bar-active`)
- Added floating decorative particles (⭐✨🎵💫🎶) at the top of MainMenu with `dance-particle` CSS class, staggered animation delays and durations
- Added iOS Audio Unlock overlay (`ios-audio-overlay` class) that appears when `needsUnlock` is true, with tap-to-unlock icon and instructional text
- Added `dance-card` class to both Héberger and Rejoindre card wrapper motion.divs
- Added `dance-icon` class to MonitorPlay (Héberger) and Smartphone (Rejoindre) icons
- Added `dance-button` class to the GO! submit button
- Added `dance-footer` class to the footer text paragraph
- Verified `is-dancing` class is correctly applied to logo wrapper div when `isDancing` is true (line 1011)
- All CSS classes (`dance-particle`, `ios-audio-overlay`, `mute-btn-fab`, `mute-bars`, `mute-bar`, `mute-bar-active`, `dance-card`, `dance-icon`, `dance-button`, `dance-footer`) were already defined in globals.css from previous work
- ESLint: 0 errors in page.tsx (1 pre-existing warning in layout.tsx, 1 pre-existing error in useBGM.ts unrelated to changes)

Stage Summary:
- Menu now has rich dance animations on cards, buttons, icons, and footer text (all synced to is-dancing/BGM state)
- Floating emoji particles (⭐✨🎵💫🎶) rise from the bottom of the menu with staggered timing
- iOS Safari audio unlock overlay appears when autoplay is blocked, with prominent tap-to-unlock UI
- Mute button is now more prominent with CSS-based animated music bars
- All 10 surgical edits applied successfully to page.tsx with no regressions

---
Task ID: 1
Agent: Main Agent
Task: Add dance animations to more elements, iOS audio fix, and mute button

Work Log:
- Read current page.tsx (~1117 lines) and globals.css to understand existing code
- Fixed useBGM.ts to handle iOS Safari autoplay restriction: added needsUnlock state, unlockAudio callback, and global click/touchstart listeners
- Added extended dance animation CSS keyframes (cardBounce, iconWiggle, buttonPulse, starFloat, footerBounce) and corresponding .is-dancing classes
- Added floating decorative particles CSS (dance-particle class with floatUp keyframes)
- Added iOS audio overlay CSS (ios-audio-overlay, tapPulse keyframes)
- Added mute button CSS (mute-btn-fab, mute-bars, mute-bar-active)
- Updated MainMenu component with: floating emoji particles, iOS unlock overlay, dance-card/dance-icon/dance-button/dance-footer classes
- Updated BuzzQuizPage to pass needsUnlock, unlockAudio, muted, toggleMute to MainMenu
- Replaced motion-based mute button with simpler CSS-based mute-btn-fab with animated music bars
- Fixed React lint error (set-state-in-effect) by restructuring useBGM to use async callbacks only

Stage Summary:
- All animations are synced to --beat CSS variable (0.48s per beat at ~124 BPM)
- iOS Safari users will see a tap-to-unlock overlay when autoplay is blocked
- Mute button is visible on menu/host screens with animated equalizer bars
- lint passes with 0 errors (1 pre-existing warning in layout.tsx)
- Dev server compiles successfully

---
Task ID: 1
Agent: Main
Task: Add framer-motion animations to Héberger and Rejoindre cards (BUZZ! logo style motion design)

Work Log:
- Read current page.tsx and globals.css to understand existing code state
- Confirmed no leftover floating particle (music notes/stars) or dance-particle classes existed (already cleaned up)
- Replaced the static Héberger card section with framer-motion animated version:
  - Continuous pump/bounce animation on the whole card (scale + y oscillation, delayed start)
  - Animated glow blob that moves organically inside the card
  - Icon (MonitorPlay) with entrance spring + continuous wobble rotation
  - "Héberger" title with per-letter wave animation (each letter bounces at staggered delay, like BUZZ! logo)
  - Subtitle "Configurer & Jouer" with opacity pulse
- Replaced the Rejoindre card section with framer-motion animated version:
  - Continuous subtle float (scale + y oscillation, offset timing from Héberger)
  - Animated cyan glow blob that moves in opposite pattern
  - Border shimmer effect (box-shadow transition between dark and cyan glow)
  - Icon (Smartphone) with entrance spring + continuous bounce
  - "Rejoindre" title with per-letter wave animation (staggered delays)
  - Input field with animated border glow pulse (inset box-shadow)
  - GO! button with golden shimmer shadow animation
- Fixed HTML entity encoding issue with accented characters (affiché, écran)
- Verified: no lint errors, compiles successfully, no layout shift bugs (no translateX animations causing overflow)

Stage Summary:
- Héberger and Rejoindre cards now have BUZZ! logo-style motion design animations using framer-motion
- Per-letter wave bounce, icon wobble, card pump, glow blobs, border shimmer all implemented
- No floating particles or layout shift bugs
- All animations are purely framer-motion (no CSS keyframe dance classes)

---
Task ID: 1
Agent: Main
Task: Fix preview flickering issue while preserving framer-motion card animations

Work Log:
- Analyzed the full page.tsx (1181 lines) and identified the MainMenu component with framer-motion animations
- Found the root cause: `AnimatePresence mode="wait"` wrapper with `initial={{opacity:0}}` on every view, causing the entire page to start invisible and fade in on every mount
- The `useBGM` hook triggers `setNeedsUnlock(true)` on mount → re-render cascade → combined with opacity:0 initial state → visible flicker/flash
- Fixed by replacing `initial={{opacity:0}}` with `initial={false}` on the menu and game view wrappers
- Removed `opacity:0` from initial state of config/lobby wrappers (kept directional slide animations for transitions between views)
- Kept all framer-motion card animations: per-letter wave bounce, card entrance spring, icon wobble, etc.
- Kept `exit={{opacity:0}}` for smooth transitions OUT of views
- Verified: lint passes (0 errors, 1 warning), page compiles with 200 OK (34KB response)

Stage Summary:
- Root cause: `initial={{opacity:0}}` on AnimatePresence children caused full-page flash on mount
- Fix: `initial={false}` on menu/host-game/player-game wrappers prevents SSR→client hydration flash
- All animations preserved, only the wrapper fade removed
- Dev server confirms clean compilation and 200 response

---
Task ID: 2
Agent: Main
Task: Restore project from uploaded tar file (version 4)

Work Log:
- Killed dev server before restore
- Extracted `workspace-3515deb0-262a-4f1e-8ea9-ddb44ace9821 (4).tar` (113 files)
- Restored src/, public/, prisma/, mini-services/, package.json, configs to /home/z/my-project/
- Removed duplicate `src/src/` directory left by tar extraction
- Ran `bun install` — no changes needed
- Ran `bun run lint` — 0 errors, 1 warning (font config)
- Verified page loads: HTTP 200, 34KB response

Stage Summary:
- Project restored to the version from the tar file
- Dev server running on port 3000, page compiles and serves correctly
- Minor duplicate `src/src/` directory cleaned up
