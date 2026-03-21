import { useState, useEffect, useRef } from 'react';

// ============================================
// DETAILED HAND-DRAWN PENCIL SKETCH ICONS
// ============================================

// Book Stack Icon for personas
const BookStackIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Bottom book */}
    <path d="M12 62 Q13 61 14 62 L62 58 Q64 58 65 60 L66 64 Q66 66 64 66 L16 70 Q14 70 13 68 Z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
    <path d="M14 62 L14 66" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M64 60 L64 64" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    {/* Middle book */}
    <path d="M10 48 Q11 47 13 48 L60 44 Q62 44 63 46 L65 50 Q65 52 63 52 L15 56 Q13 56 12 54 Z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
    <path d="M13 48 L13 52" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M61 46 L61 50" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    {/* Top book */}
    <path d="M15 34 Q16 33 18 34 L58 30 Q60 30 61 32 L62 36 Q62 38 60 38 L20 42 Q18 42 17 40 Z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
    <path d="M18 34 L18 38" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M59 32 L59 36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    {/* Flying pages */}
    <path d="M70 28 Q72 26 74 28 Q72 30 70 28" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <path d="M6 42 Q8 40 10 42 Q8 44 6 42" stroke="currentColor" strokeWidth="1.5" fill="none"/>
  </svg>
);

// Open Book Icon
const OpenBookIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Left page */}
    <path d="M40 18 Q25 16 12 20 L12 62 Q25 58 40 60 Z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    {/* Right page */}
    <path d="M40 18 Q55 16 68 20 L68 62 Q55 58 40 60 Z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    {/* Spine */}
    <path d="M40 18 L40 60" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    {/* Page lines - left */}
    <path d="M18 28 Q28 26 38 28" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
    <path d="M18 36 Q28 34 38 36" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
    <path d="M18 44 Q28 42 38 44" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
    {/* Page lines - right */}
    <path d="M42 28 Q52 26 62 28" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
    <path d="M42 36 Q52 34 62 36" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
    <path d="M42 44 Q52 42 62 44" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
    {/* Bookmark */}
    <path d="M50 14 L50 28 L54 24 L58 28 L58 14" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Glasses Icon for future use
const _SketchGlassesIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Left lens - wobbly circle */}
    <path d="M10 35 Q10 22 23 22 Q36 22 36 35 Q36 48 23 48 Q10 48 10 35" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
    <path d="M12 35 Q12 24 23 24 Q34 24 34 35" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.3"/>
    {/* Right lens - wobbly circle */}
    <path d="M44 35 Q44 22 57 22 Q70 22 70 35 Q70 48 57 48 Q44 48 44 35" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
    <path d="M46 35 Q46 24 57 24 Q68 24 68 35" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.3"/>
    {/* Bridge */}
    <path d="M36 36 Q40 32 44 36" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    {/* Temple arms */}
    <path d="M10 30 Q6 28 4 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M70 30 Q74 28 76 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    {/* Lens reflections */}
    <path d="M16 28 Q18 26 20 28" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.4"/>
    <path d="M50 28 Q52 26 54 28" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.4"/>
  </svg>
);

// Sketchy Location Pin Icon
const SketchLocationIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Pin shape - hand drawn style */}
    <path d="M40 8 Q28 8 22 22 Q18 32 18 42 Q18 62 40 74 Q62 62 62 42 Q62 32 58 22 Q52 8 40 8" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    {/* Inner circle */}
    <circle cx="40" cy="40" r="12" stroke="currentColor" strokeWidth="2.5" fill="none"/>
    <circle cx="40" cy="40" r="8" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.4"/>
    {/* Shine effect */}
    <path d="M30 30 Q32 28 34 30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
    {/* Shadow underneath */}
    <ellipse cx="40" cy="76" rx="10" ry="3" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.3"/>
  </svg>
);

// Sketchy Coin Stack Icon
const SketchCoinIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Bottom coin */}
    <ellipse cx="40" cy="58" rx="26" ry="10" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M14 58 L14 52" stroke="currentColor" strokeWidth="2"/>
    <path d="M66 58 L66 52" stroke="currentColor" strokeWidth="2"/>
    <ellipse cx="40" cy="52" rx="26" ry="10" stroke="currentColor" strokeWidth="2" fill="none"/>
    {/* Middle coin */}
    <ellipse cx="40" cy="46" rx="26" ry="10" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M14 46 L14 40" stroke="currentColor" strokeWidth="2"/>
    <path d="M66 46 L66 40" stroke="currentColor" strokeWidth="2"/>
    <ellipse cx="40" cy="40" rx="26" ry="10" stroke="currentColor" strokeWidth="2" fill="none"/>
    {/* Top coin */}
    <ellipse cx="40" cy="34" rx="26" ry="10" stroke="currentColor" strokeWidth="2.5" fill="none"/>
    <path d="M14 34 L14 28" stroke="currentColor" strokeWidth="2"/>
    <path d="M66 34 L66 28" stroke="currentColor" strokeWidth="2"/>
    <ellipse cx="40" cy="28" rx="26" ry="10" stroke="currentColor" strokeWidth="2.5" fill="none"/>
    {/* Rupee symbol sketchy */}
    <path d="M38 24 L38 32 M34 26 L42 26 M36 28 L40 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    {/* Sparkles */}
    <circle cx="20" cy="20" r="2" stroke="currentColor" strokeWidth="1" fill="none"/>
    <circle cx="62" cy="18" r="1.5" stroke="currentColor" strokeWidth="1" fill="none"/>
  </svg>
);

// Sketchy Gift Box Icon
const SketchGiftIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Box body */}
    <path d="M8 38 L8 68 Q8 72 12 72 L68 72 Q72 72 72 68 L72 38" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
    {/* Box lid */}
    <path d="M4 38 L4 32 Q4 28 8 28 L72 28 Q76 28 76 32 L76 38 Q76 42 72 42 L8 42 Q4 42 4 38 Z" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    {/* Ribbon vertical */}
    <path d="M36 42 L36 72" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M44 42 L44 72" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    {/* Ribbon horizontal */}
    <path d="M8 40 L72 40" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    {/* Bow - left loop */}
    <path d="M40 28 Q32 20 28 24 Q24 28 32 32 Q36 34 40 28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
    {/* Bow - right loop */}
    <path d="M40 28 Q48 20 52 24 Q56 28 48 32 Q44 34 40 28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
    {/* Bow center */}
    <circle cx="40" cy="28" r="4" stroke="currentColor" strokeWidth="2" fill="none"/>
  </svg>
);

// Sketchy Star Icon
const SketchStarIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Main star - slightly wobbly hand-drawn look */}
    <path d="M40 6 L46 28 L70 28 L52 42 L58 66 L40 52 L22 66 L28 42 L10 28 L34 28 Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    {/* Inner sketch line */}
    <path d="M40 14 L44 28 L58 28 L48 38 L52 54 L40 46 L28 54 L32 38 L22 28 L36 28 Z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" opacity="0.3"/>
    {/* Shine dots */}
    <circle cx="32" cy="20" r="2" stroke="currentColor" strokeWidth="1" fill="none"/>
    <circle cx="50" cy="18" r="1.5" stroke="currentColor" strokeWidth="1" fill="none"/>
  </svg>
);

// Sketchy Lock Icon
const SketchLockIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Lock body */}
    <rect x="14" y="38" width="52" height="34" rx="4" stroke="currentColor" strokeWidth="2.5" fill="none"/>
    {/* Lock shackle */}
    <path d="M26 38 L26 28 Q26 14 40 14 Q54 14 54 28 L54 38" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
    {/* Keyhole */}
    <circle cx="40" cy="52" r="6" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M40 52 L40 62" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    {/* Shine */}
    <path d="M20 44 Q22 42 24 44" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
  </svg>
);

// Sketchy Phone Icon
const SketchPhoneIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Phone body - slight perspective */}
    <path d="M20 8 Q20 6 22 6 L58 6 Q60 6 60 8 L62 72 Q62 74 60 74 L20 74 Q18 74 18 72 Z" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    {/* Screen area */}
    <rect x="22" y="14" width="36" height="48" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.5"/>
    {/* Home button */}
    <circle cx="40" cy="68" r="3" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    {/* Speaker */}
    <path d="M34 10 L46 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    {/* App icons suggestion */}
    <rect x="26" y="18" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.4"/>
    <rect x="40" y="18" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.4"/>
    <rect x="26" y="32" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.4"/>
  </svg>
);

// Sketchy Handshake Icon
const SketchHandshakeIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Left hand */}
    <path d="M8 45 Q12 40 20 42 L35 48" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M12 50 Q16 46 24 48 L35 52" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    {/* Right hand */}
    <path d="M72 45 Q68 40 60 42 L45 48" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M68 50 Q64 46 56 48 L45 52" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    {/* Handshake clasp */}
    <path d="M35 44 Q40 38 45 44 Q50 50 45 54 Q40 58 35 54 Q30 50 35 44" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
    {/* Fingers suggestion */}
    <path d="M32 46 Q28 44 26 46" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M48 46 Q52 44 54 46" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    {/* Sparkles around */}
    <path d="M20 32 L22 36 L26 34 L22 38 L20 42 L18 38 L14 34 L18 36 Z" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round"/>
    <path d="M60 32 L62 36 L66 34 L62 38 L60 42 L58 38 L54 34 L58 36 Z" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round"/>
  </svg>
);

// Bell Icon for notifications
const SketchBellIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Bell body */}
    <path d="M20 50 Q20 20 40 15 Q60 20 60 50 L60 60 Q60 65 55 65 L25 65 Q20 65 20 60 Z" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    {/* Bell clapper */}
    <path d="M35 65 Q35 72 40 72 Q45 72 45 65" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
    {/* Shine */}
    <path d="M28 30 Q30 28 32 30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
    {/* Handle */}
    <path d="M40 15 Q40 10 40 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);

// Person/User Icon
const SketchPersonIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Head */}
    <circle cx="40" cy="22" r="12" stroke="currentColor" strokeWidth="2.5" fill="none"/>
    {/* Body */}
    <path d="M20 70 Q20 45 40 45 Q60 45 60 70" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
    {/* Shoulders suggestion */}
    <path d="M20 55 Q25 50 40 48 Q55 50 60 55" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.4"/>
  </svg>
);

// Hand/Highfive Icon
const SketchHandIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Palm */}
    <path d="M15 45 L15 60 Q15 70 25 70 L55 70 Q65 70 65 60 L65 45 Q65 35 55 35 L50 35 L50 25 Q50 18 45 18 Q40 18 40 25 L40 35 L35 35 L35 25 Q35 18 30 18 Q25 18 25 25 L25 35 L20 35 Q15 35 15 45 Z" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    {/* Fingers */}
    <path d="M30 25 L30 35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.3"/>
    <path d="M40 25 L40 35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.3"/>
    <path d="M50 25 L50 35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.3"/>
  </svg>
);

// Heart Icon
const SketchHeartIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Heart shape - hand drawn style */}
    <path d="M40 68 Q15 48 15 30 Q15 15 28 15 Q38 15 40 25 Q42 15 52 15 Q65 15 65 30 Q65 48 40 68 Z" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    {/* Shine */}
    <path d="M25 25 Q28 22 32 25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
  </svg>
);

// Mail/Envelope Icon
const SketchMailIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Envelope body */}
    <rect x="10" y="20" width="60" height="40" rx="4" stroke="currentColor" strokeWidth="2.5" fill="none"/>
    {/* Envelope flap */}
    <path d="M10 24 L40 45 L70 24" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    {/* Inner lines suggestion */}
    <path d="M20 35 L35 35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.3"/>
    <path d="M20 42 L45 42" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.3"/>
  </svg>
);

// Rocket Icon
const SketchRocketIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Rocket body */}
    <path d="M40 10 Q55 25 55 45 L40 55 L25 45 Q25 25 40 10 Z" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    {/* Rocket tip */}
    <path d="M40 10 Q45 15 40 20 Q35 15 40 10" stroke="currentColor" strokeWidth="2" fill="none"/>
    {/* Window */}
    <circle cx="40" cy="32" r="6" stroke="currentColor" strokeWidth="2" fill="none"/>
    {/* Fins */}
    <path d="M25 45 L15 55 L25 50" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M55 45 L65 55 L55 50" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    {/* Flames */}
    <path d="M35 55 Q38 65 40 70 Q42 65 45 55" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.6"/>
    <path d="M37 55 Q40 62 40 68" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.4"/>
  </svg>
);

// Target/Bullseye Icon
const SketchTargetIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Outer circle - wobbly */}
    <circle cx="40" cy="40" r="30" stroke="currentColor" strokeWidth="2.5" fill="none"/>
    {/* Middle circle */}
    <circle cx="40" cy="40" r="20" stroke="currentColor" strokeWidth="2.5" fill="none"/>
    {/* Inner circle */}
    <circle cx="40" cy="40" r="10" stroke="currentColor" strokeWidth="2.5" fill="none"/>
    {/* Center dot */}
    <circle cx="40" cy="40" r="3" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3"/>
    {/* Arrow */}
    <path d="M60 20 L68 12 M68 12 L68 18 M68 12 L62 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Sketchy Sparkle Icon
const SketchSparkleIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Main sparkle lines */}
    <path d="M40 4 L40 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M40 56 L40 76" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M4 40 L24 40" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M56 40 L76 40" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    {/* Diagonal lines */}
    <path d="M14 14 L28 28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M52 52 L66 66" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M66 14 L52 28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M28 52 L14 66" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    {/* Center glow */}
    <circle cx="40" cy="40" r="8" stroke="currentColor" strokeWidth="2" fill="none"/>
    <circle cx="40" cy="40" r="4" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5"/>
  </svg>
);

// Plant Icon for future use
const _SketchPlantIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Pot */}
    <path d="M24 55 L28 72 Q28 76 32 76 L48 76 Q52 76 52 72 L56 55" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
    <path d="M22 55 L58 55 Q60 55 58 52 L22 52 Q20 52 22 55" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
    {/* Stem */}
    <path d="M40 52 L40 30" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    {/* Left leaf */}
    <path d="M40 40 Q30 35 26 24 Q32 28 40 30" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
    <path d="M40 40 Q32 36 28 28" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.4"/>
    {/* Right leaf */}
    <path d="M40 35 Q50 30 54 20 Q48 26 40 28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
    <path d="M40 35 Q48 32 52 24" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.4"/>
    {/* Top leaf */}
    <path d="M40 30 Q36 20 40 10 Q44 20 40 30" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
  </svg>
);

// Sketchy Coffee Cup Icon
const SketchCoffeeIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Cup body */}
    <path d="M18 28 L22 68 Q22 72 26 72 L46 72 Q50 72 50 68 L54 28" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
    {/* Cup handle */}
    <path d="M54 34 Q64 34 64 46 Q64 58 54 58" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
    {/* Coffee surface */}
    <path d="M18 32 Q36 28 54 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    {/* Steam */}
    <path d="M28 22 Q30 16 28 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
    <path d="M38 20 Q40 14 38 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
    <path d="M48 22 Q50 16 48 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
    {/* Saucer */}
    <ellipse cx="36" cy="74" rx="24" ry="4" stroke="currentColor" strokeWidth="2" fill="none"/>
  </svg>
);

// Sketchy Pencil Icon
const SketchPencilIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Pencil body */}
    <path d="M12 68 L56 24" stroke="currentColor" strokeWidth="8" strokeLinecap="round"/>
    <path d="M12 68 L56 24" stroke="currentColor" strokeWidth="6" strokeLinecap="round" opacity="0.3"/>
    {/* Pencil tip */}
    <path d="M56 24 L68 12" stroke="currentColor" strokeWidth="8" strokeLinecap="round"/>
    <path d="M56 24 L62 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
    {/* Eraser end */}
    <path d="M8 72 L12 68" stroke="currentColor" strokeWidth="10" strokeLinecap="round"/>
    <path d="M8 72 L12 68" stroke="#C07A50" strokeWidth="6" strokeLinecap="round" opacity="0.5"/>
    {/* Metal band */}
    <path d="M10 70 L14 66" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
  </svg>
);

// Sketchy Bookshelf Icon
const SketchBookshelfIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Shelf frame */}
    <path d="M8 12 L72 12 L72 72 L8 72 Z" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    {/* Shelves */}
    <path d="M8 32 L72 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M8 52 L72 52" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    {/* Books on top shelf - various sizes */}
    <rect x="14" y="16" width="8" height="14" stroke="currentColor" strokeWidth="1.5" fill="none" rx="1"/>
    <rect x="24" y="18" width="6" height="12" stroke="currentColor" strokeWidth="1.5" fill="none" rx="1"/>
    <rect x="32" y="14" width="10" height="16" stroke="currentColor" strokeWidth="1.5" fill="none" rx="1"/>
    <rect x="44" y="17" width="7" height="13" stroke="currentColor" strokeWidth="1.5" fill="none" rx="1"/>
    <rect x="53" y="15" width="9" height="15" stroke="currentColor" strokeWidth="1.5" fill="none" rx="1"/>
    {/* Books on middle shelf */}
    <rect x="12" y="36" width="10" height="14" stroke="currentColor" strokeWidth="1.5" fill="none" rx="1"/>
    <rect x="24" y="38" width="8" height="12" stroke="currentColor" strokeWidth="1.5" fill="none" rx="1"/>
    <rect x="34" y="35" width="12" height="15" stroke="currentColor" strokeWidth="1.5" fill="none" rx="1"/>
    <rect x="48" y="37" width="6" height="13" stroke="currentColor" strokeWidth="1.5" fill="none" rx="1"/>
    {/* Books on bottom shelf - tilted */}
    <rect x="14" y="56" width="9" height="14" stroke="currentColor" strokeWidth="1.5" fill="none" rx="1" transform="rotate(-5 18 63)"/>
    <rect x="26" y="56" width="11" height="14" stroke="currentColor" strokeWidth="1.5" fill="none" rx="1"/>
    <rect x="40" y="58" width="8" height="12" stroke="currentColor" strokeWidth="1.5" fill="none" rx="1" transform="rotate(3 44 64)"/>
    <rect x="52" y="56" width="10" height="14" stroke="currentColor" strokeWidth="1.5" fill="none" rx="1"/>
  </svg>
);

// Student with backpack icon
const StudentIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Head */}
    <circle cx="40" cy="18" r="10" stroke="currentColor" strokeWidth="2.5" fill="none"/>
    {/* Body */}
    <path d="M28 60 Q28 40 40 38 Q52 40 52 60" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
    {/* Backpack straps */}
    <path d="M30 42 L28 58" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M50 42 L52 58" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    {/* Backpack */}
    <rect x="26" y="40" width="28" height="24" rx="4" stroke="currentColor" strokeWidth="2.5" fill="none"/>
    <path d="M34 40 L34 48" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M46 40 L46 48" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    {/* Books peeking out */}
    <rect x="30" y="50" width="20" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    {/* Legs */}
    <path d="M34 60 L32 74" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M46 60 L48 74" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    {/* Hair suggestion */}
    <path d="M32 12 Q36 6 44 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

// ============================================
// DECORATIVE PENCIL SKETCH COMPONENTS
// ============================================

// Hand-drawn wavy divider
const PencilDivider = () => (
  <div className="w-full overflow-hidden py-2">
    <svg className="w-full" viewBox="0 0 800 30" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Main wavy line */}
      <path d="M0 15 Q50 8 100 15 T200 15 T300 15 T400 15 T500 15 T600 15 T700 15 T800 15" stroke="#2D5F2D" strokeWidth="2" fill="none" opacity="0.4"/>
      {/* Secondary sketchy line */}
      <path d="M0 18 Q60 24 120 18 T240 18 T360 18 T480 18 T600 18 T720 18 T800 18" stroke="#C07A50" strokeWidth="1.5" fill="none" opacity="0.3"/>
      {/* Small decorations */}
      <circle cx="200" cy="15" r="2" fill="#E8C547" opacity="0.6"/>
      <circle cx="400" cy="15" r="3" fill="#C07A50" opacity="0.4"/>
      <circle cx="600" cy="15" r="2" fill="#E8C547" opacity="0.6"/>
      {/* Tiny stars */}
      <path d="M150 10 L152 14 L156 12 L152 16 L150 20 L148 16 L144 12 L148 14 Z" stroke="#2D5F2D" strokeWidth="0.5" fill="none" opacity="0.3"/>
      <path d="M350 8 L351.5 11 L355 10 L351.5 13 L350 16 L348.5 13 L345 10 L348.5 11 Z" stroke="#C07A50" strokeWidth="0.5" fill="none" opacity="0.3"/>
      <path d="M550 10 L552 14 L556 12 L552 16 L550 20 L548 16 L544 12 L548 14 Z" stroke="#2D5F2D" strokeWidth="0.5" fill="none" opacity="0.3"/>
    </svg>
  </div>
);

// Corner doodle decoration
const CornerDoodle = ({ position }: { position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' }) => {
  const transforms = {
    'top-left': 'rotate(0)',
    'top-right': 'rotate(90deg)',
    'bottom-left': 'rotate(-90deg)',
    'bottom-right': 'rotate(180deg)'
  };
  
  return (
    <svg 
      className={`absolute w-24 h-24 opacity-20 ${position === 'top-left' ? '-top-4 -left-4' : position === 'top-right' ? '-top-4 -right-4' : position === 'bottom-left' ? '-bottom-4 -left-4' : '-bottom-4 -right-4'}`}
      style={{ transform: transforms[position] }}
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Curly corner decoration */}
      <path d="M5 95 Q5 5 95 5" stroke="#2C2C2C" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <path d="M10 90 Q10 10 90 10" stroke="#2C2C2C" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.5"/>
      {/* Small book doodle */}
      <rect x="15" y="70" width="20" height="6" stroke="#C07A50" strokeWidth="1.5" fill="none" rx="1" transform="rotate(-10 25 73)"/>
      <rect x="18" y="60" width="18" height="6" stroke="#2D5F2D" strokeWidth="1.5" fill="none" rx="1" transform="rotate(5 27 63)"/>
      {/* Pencil doodle */}
      <path d="M60 80 L80 60" stroke="#E8C547" strokeWidth="4" strokeLinecap="round"/>
      <path d="M60 80 L66 74" stroke="#2C2C2C" strokeWidth="1"/>
      {/* Sparkle */}
      <path d="M75 30 L77 35 L82 33 L77 37 L75 42 L73 37 L68 33 L73 35 Z" stroke="#C07A50" strokeWidth="0.8" fill="none"/>
    </svg>
  );
};

// Paper texture overlay component - unused, keeping for future enhancement
const _PaperTexture = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`relative ${className}`}>
    {/* Base content */}
    {children}
    {/* Paper grain texture overlay */}
    <div 
      className="absolute inset-0 pointer-events-none opacity-[0.015]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      }}
    />
    {/* Subtle lines like notebook paper */}
    <div 
      className="absolute inset-0 pointer-events-none opacity-[0.03]"
      style={{
        backgroundImage: `repeating-linear-gradient(transparent, transparent 27px, #2D5F2D 27px, #2D5F2D 28px)`,
        backgroundPosition: '0 20px',
      }}
    />
  </div>
);

// Floating pencil decoration
const FloatingPencil = ({ className = "" }: { className?: string }) => (
  <svg className={`absolute animate-float-pencil ${className}`} viewBox="0 0 60 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ animationDelay: '1s' }}>
    <path d="M30 10 L30 90" stroke="#E8C547" strokeWidth="12" strokeLinecap="round"/>
    <path d="M30 10 L30 90" stroke="#2C2C2C" strokeWidth="2" strokeLinecap="round" opacity="0.2"/>
    <path d="M30 90 L30 110" stroke="#2C2C2C" strokeWidth="10" strokeLinecap="round"/>
    <path d="M30 90 L24 84 M30 90 L36 84" stroke="#2C2C2C" strokeWidth="2" strokeLinecap="round"/>
    <path d="M30 10 L30 0" stroke="#F5E6CA" strokeWidth="10" strokeLinecap="round"/>
    <path d="M30 10 L26 6 M30 10 L34 6" stroke="#2C2C2C" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

// Flying book decoration
const FlyingBook = ({ className = "", style }: { className?: string; style?: React.CSSProperties }) => (
  <svg className={className} style={style} viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Open book flying */}
    <path d="M40 10 Q20 8 8 15 L8 45 Q20 38 40 40 Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M40 10 Q60 8 72 15 L72 45 Q60 38 40 40 Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M40 10 L40 40" stroke="currentColor" strokeWidth="2"/>
    {/* Pages fluttering */}
    <path d="M5 20 Q3 18 1 20" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
    <path d="M6 30 Q4 28 2 30" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
    <path d="M75 20 Q77 18 79 20" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
    <path d="M74 30 Q76 28 78 30" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
    {/* Sparkles around */}
    <circle cx="15" cy="8" r="2" stroke="currentColor" strokeWidth="0.8" fill="none"/>
    <circle cx="65" cy="10" r="1.5" stroke="currentColor" strokeWidth="0.8" fill="none"/>
    <path d="M50 5 L52 9 L56 7 L52 11 L50 15 L48 11 L44 7 L48 9 Z" stroke="currentColor" strokeWidth="0.5" fill="none"/>
  </svg>
);

// ============================================
// NAVIGATION COMPONENT
// ============================================
const Navbar = ({ onInterestClick }: { onInterestClick: () => void }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-[#FDF6EC]/98 shadow-lg shadow-[#2C2C2C]/5 backdrop-blur-sm' : 'bg-transparent'}`}>
        {/* Pencil line border at bottom */}
        <svg className="absolute bottom-0 left-0 w-full h-2" viewBox="0 0 1920 10" preserveAspectRatio="none">
          <path d="M0 5 Q60 2 120 5 T240 5 T360 5 T480 5 T600 5 T720 5 T840 5 T960 5 T1080 5 T1200 5 T1320 5 T1440 5 T1560 5 T1680 5 T1800 5 T1920 5" stroke="#C07A50" strokeWidth="1.5" fill="none" opacity={scrolled ? 0.4 : 0}/>
        </svg>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[70px]">
            {/* Logo with hand-drawn book icon */}
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="relative">
                <OpenBookIcon className="w-9 h-9 text-[#C07A50] group-hover:rotate-6 transition-transform duration-300" />
                {/* Small sparkle */}
                <svg className="absolute -top-1 -right-1 w-3 h-3 animate-pulse" viewBox="0 0 20 20" fill="none">
                  <path d="M10 2 L11 8 L17 7 L11 9 L10 16 L9 9 L3 7 L9 8 Z" stroke="#E8C547" strokeWidth="1" fill="none"/>
                </svg>
              </div>
              <span className="font-caveat text-3xl sm:text-4xl text-[#2C2C2C] font-bold tracking-wide">
                Nootbad
              </span>
              {/* Underline doodle */}
              <svg className="hidden sm:block absolute bottom-0 left-0 w-24 h-2" viewBox="0 0 100 10">
                <path d="M5 5 Q25 2 50 5 T95 5" stroke="#C07A50" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.6"/>
              </svg>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a 
                href="#about" 
                className="font-inter text-[#2C2C2C] hover:text-[#C07A50] transition-colors duration-300 relative group"
              >
                Our Story
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#C07A50] group-hover:w-full transition-all duration-300"></span>
              </a>
              <a 
                href="#how-it-works" 
                className="font-inter text-[#2C2C2C] hover:text-[#C07A50] transition-colors duration-300 relative group"
              >
                How It Works
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#C07A50] group-hover:w-full transition-all duration-300"></span>
              </a>
              <button 
                onClick={onInterestClick}
                className="relative bg-[#C07A50] text-[#FDF6EC] px-7 py-2.5 rounded-full font-inter font-semibold text-sm uppercase tracking-widest hover:bg-[#A0623D] transition-all duration-300 hover:scale-105 active:scale-95 shadow-md group overflow-hidden"
              >
                {/* Button inner pencil border effect */}
                <span className="absolute inset-0.5 rounded-full border border-[#FDF6EC]/20 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                <span className="flex items-center gap-2">
                  <span>I'm Interested</span>
                  <SketchBellIcon className="w-5 h-5" />
                </span>
              </button>
            </div>

            {/* Mobile Menu Button - Pencil drawn style */}
            <button 
              className="md:hidden p-2 hover:bg-[#F5E6CA] rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-7 h-7 text-[#2C2C2C]" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2">
                {mobileMenuOpen ? (
                  <>
                    <path d="M8 8 L32 32" strokeLinecap="round"/>
                    <path d="M32 8 L8 32" strokeLinecap="round"/>
                  </>
                ) : (
                  <>
                    <path d="M6 12 L34 12" strokeLinecap="round"/>
                    <path d="M6 20 L34 20" strokeLinecap="round"/>
                    <path d="M6 28 L34 28" strokeLinecap="round"/>
                    {/* Pencil sketch look */}
                    <circle cx="34" cy="12" r="2" fill="none" strokeWidth="1.5"/>
                    <circle cx="34" cy="20" r="2" fill="none" strokeWidth="1.5"/>
                    <circle cx="34" cy="28" r="2" fill="none" strokeWidth="1.5"/>
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 bg-[#FDF6EC] transition-transform duration-500 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="pt-[90px] px-8">
          {/* Decorative corner doodle */}
          <svg className="absolute top-20 right-8 w-20 h-20 opacity-20" viewBox="0 0 80 80" fill="none">
            <path d="M0 80 Q0 0 80 0" stroke="#C07A50" strokeWidth="2" fill="none"/>
            <rect x="10" y="50" width="15" height="5" stroke="#2D5F2D" strokeWidth="1" transform="rotate(-15 17 52)"/>
            <rect x="15" y="40" width="12" height="5" stroke="#2D5F2D" strokeWidth="1" transform="rotate(10 21 42)"/>
          </svg>
          
          <div className="flex flex-col gap-6">
            <a 
              href="#about" 
              className="font-playfair text-2xl text-[#2C2C2C] py-3 border-b-2 border-dashed border-[#F5E6CA]"
              onClick={() => setMobileMenuOpen(false)}
            >
              ✍️ Our Story
            </a>
            <a 
              href="#how-it-works" 
              className="font-playfair text-2xl text-[#2C2C2C] py-3 border-b-2 border-dashed border-[#F5E6CA]"
              onClick={() => setMobileMenuOpen(false)}
            >
              🚀 How It Works
            </a>
            <a 
              href="#faq" 
              className="font-playfair text-2xl text-[#2C2C2C] py-3 border-b-2 border-dashed border-[#F5E6CA]"
              onClick={() => setMobileMenuOpen(false)}
            >
              ❓ FAQ
            </a>
            <button 
              onClick={() => { onInterestClick(); setMobileMenuOpen(false); }}
              className="mt-4 bg-[#C07A50] text-[#FDF6EC] px-8 py-4 rounded-full font-inter font-semibold text-lg uppercase tracking-wider"
            >
              🔔 I'm Interested
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

// ============================================
// HERO SECTION
// ============================================
const HeroSection = ({ onInterestClick }: { onInterestClick: () => void }) => (
  <section className="min-h-screen bg-[#FDF6EC] flex items-center relative overflow-hidden pt-[70px]">
    {/* Remove scroll indicator - hero should fit on one screen */}
    {/* Removed scroll indicator */}
    {/* Paper texture background */}
    <div className="absolute inset-0 opacity-[0.02]" style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%232C2C2C' fill-opacity='1'%3E%3Cpath d='M0 0h20v20H0zM30 0h20v20H30zM60 0h20v20H60zM90 0h10v20H90zM0 30h20v20H0zM30 30h20v20H30zM60 30h20v20H60zM90 30h10v20H90zM0 60h20v20H0zM30 60h20v20H30zM60 60h20v20H60zM90 60h10v20H90zM0 90h20v10H0zM30 90h20v10H30zM60 90h20v10H60zM90 90h10v10H90z'/%3E%3C/g%3E%3C/svg%3E")`,
    }} />
    
    {/* Notebook lines overlay */}
    <div 
      className="absolute inset-0 pointer-events-none opacity-[0.015]"
      style={{
        backgroundImage: `repeating-linear-gradient(transparent, transparent 31px, #2D5F2D 31px, #2D5F2D 32px)`,
        backgroundPosition: '0 40px',
      }}
    />

    {/* Corner doodles */}
    <CornerDoodle position="top-left" />
    <CornerDoodle position="top-right" />
    <CornerDoodle position="bottom-left" />
    <CornerDoodle position="bottom-right" />

    {/* Floating decorations */}
    <FloatingPencil className="top-32 left-10 w-8 h-16 opacity-40 hidden lg:block" />
    <FlyingBook className="top-40 right-20 w-16 h-12 text-[#C07A50]/20 hidden lg:block animate-float-book" />
    <svg className="absolute bottom-40 left-20 w-10 h-10 text-[#2D5F2D]/20 animate-pulse hidden lg:block" viewBox="0 0 40 40" fill="none">
      <path d="M20 4 L23 15 L35 15 L25 22 L28 34 L20 27 L12 34 L15 22 L5 15 L17 15 Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    </svg>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8 relative z-10">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left Column - Text Content */}
        <div className="text-center lg:text-left animate-hero-text">
          {/* Coming Soon Badge */}
          <div className="inline-flex items-center gap-2 bg-[#E8C547]/20 px-4 py-2 rounded-full mb-5 border border-dashed border-[#C07A50]/40 relative">
            <svg className="absolute -top-2 -left-2 w-4 h-4" viewBox="0 0 20 20" fill="none">
              <path d="M10 2 L11 7 L16 6 L12 10 L16 14 L11 13 L10 18 L9 13 L4 14 L8 10 L4 6 L9 7 Z" stroke="#E8C547" strokeWidth="1" fill="none"/>
            </svg>
            <OpenBookIcon className="w-5 h-5 text-[#C07A50]" />
            <span className="font-caveat text-lg text-[#2C2C2C]">COMING SOON</span>
            <span className="w-2 h-2 bg-[#C07A50] rounded-full animate-pulse"></span>
          </div>

          {/* Main Heading */}
          <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#2C2C2C] leading-[1.15] mb-3 relative">
            {/* Decorative quotes */}
            <span className="absolute -left-4 top-0 font-caveat text-5xl text-[#C07A50]/20">"</span>
            Purani Kitaabon Ko
            <br />
            <span className="text-[#C07A50]">Nayi Zindagi Do.</span>
            <span className="absolute -right-4 bottom-0 font-caveat text-5xl text-[#C07A50]/20">"</span>
          </h1>
          
          {/* English subtitle */}
          <p className="font-crimson text-lg sm:text-xl text-[#6B6B6B] mb-4 italic">
            Give Old Books a New Life.
          </p>

          {/* Description */}
          <p className="font-inter text-sm sm:text-base text-[#6B6B6B] leading-relaxed mb-6 max-w-xl mx-auto lg:mx-0">
            India's first hyperlocal refurbished books platform — jahan aap nearby logon se affordable books khareed sakte ho, bech sakte ho, ya donate kar sakte ho.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-6">
            <button 
              onClick={onInterestClick}
              className="group relative bg-[#C07A50] text-[#FDF6EC] px-8 py-3 rounded-full font-inter font-semibold text-sm uppercase tracking-wider hover:bg-[#A0623D] transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-[#C07A50]/30 overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <span>Mujhe Notify Karo</span>
                <SketchBellIcon className="w-5 h-5 group-hover:animate-bounce" />
              </span>
              {/* Inner glow effect */}
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            </button>
            <a 
              href="#problem"
              className="group relative border-2 border-[#2C2C2C] text-[#2C2C2C] px-8 py-3 rounded-full font-inter font-semibold text-sm uppercase tracking-wider hover:bg-[#F5E6CA] hover:border-[#C07A50] transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <span>Idea Ke Baare Mein Jaano</span>
                <svg className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </span>
            </a>
          </div>

          {/* Social Proof */}
          <div className="flex items-center gap-3 justify-center lg:justify-start">
            {/* Avatar stack with icons */}
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div 
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-[#FDF6EC] bg-gradient-to-br from-[#F5E6CA] to-[#E8C547]/50 flex items-center justify-center shadow-sm"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <SketchPersonIcon className="w-4 h-4 text-[#2C2C2C]/60" />
                </div>
              ))}
            </div>
            <p className="font-caveat text-base text-[#C07A50]">
              <SketchSparkleIcon className="w-4 h-4 inline-block mr-1" />
              Already <span className="font-bold">500+</span> logon ne interest dikhaya hai!
            </p>
          </div>
        </div>

        {/* Right Column - Illustration */}
        <div className="flex justify-center lg:justify-end animate-float">
          <div className="relative">
            {/* Glow effect behind illustration */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#E8C547]/20 via-[#C07A50]/10 to-[#2D5F2D]/10 blur-3xl rounded-full scale-90"></div>
            
            {/* Main illustration SVG */}
            <svg className="w-72 h-72 sm:w-96 sm:h-96 relative z-10" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Background sketch circle */}
              <circle cx="200" cy="200" r="160" stroke="#2C2C2C" strokeWidth="1" strokeDasharray="8 8" fill="none" opacity="0.1"/>
              <circle cx="200" cy="200" r="170" stroke="#C07A50" strokeWidth="0.5" strokeDasharray="4 12" fill="none" opacity="0.15"/>
              
              {/* Stack of books - bottom */}
              <g transform="translate(80, 240) rotate(-5)">
                <rect x="0" y="0" width="220" height="30" rx="3" stroke="#2C2C2C" strokeWidth="3" fill="#F5E6CA" strokeLinecap="round"/>
                <rect x="5" y="5" width="210" height="20" rx="2" stroke="#2C2C2C" strokeWidth="1.5" fill="none" opacity="0.3"/>
                {/* Book lines */}
                <path d="M20 10 L30 10 M20 15 L40 15 M20 20 L35 20" stroke="#2C2C2C" strokeWidth="1" strokeLinecap="round" opacity="0.4"/>
              </g>
              
              {/* Middle book stack */}
              <g transform="translate(70, 190) rotate(3)">
                <rect x="0" y="0" width="240" height="35" rx="3" stroke="#2C2C2C" strokeWidth="3" fill="#E8C547" strokeLinecap="round"/>
                <rect x="5" y="5" width="230" height="25" rx="2" stroke="#2C2C2C" strokeWidth="1.5" fill="none" opacity="0.3"/>
                <path d="M25 12 L45 12 M25 20 L55 20 M25 28 L40 28" stroke="#2C2C2C" strokeWidth="1" strokeLinecap="round" opacity="0.4"/>
              </g>
              
              {/* Top book stack */}
              <g transform="translate(85, 145) rotate(-2)">
                <rect x="0" y="0" width="200" height="30" rx="3" stroke="#2C2C2C" strokeWidth="3" fill="#2D5F2D" strokeLinecap="round"/>
                <rect x="5" y="5" width="190" height="20" rx="2" stroke="#FDF6EC" strokeWidth="1" fill="none" opacity="0.2"/>
              </g>
              
              {/* Plant growing from book */}
              <g transform="translate(180, 100)">
                {/* Stem */}
                <path d="M20 45 Q20 30 15 20 Q10 10 20 0" stroke="#2D5F2D" strokeWidth="3" fill="none" strokeLinecap="round"/>
                <path d="M20 45 Q20 30 25 20 Q30 10 20 0" stroke="#2D5F2D" strokeWidth="3" fill="none" strokeLinecap="round"/>
                {/* Leaves */}
                <path d="M18 35 Q8 30 5 20 Q12 25 18 30" stroke="#2D5F2D" strokeWidth="2" fill="#2D5F2D" fillOpacity="0.2"/>
                <path d="M22 30 Q32 25 35 15 Q28 22 22 25" stroke="#2D5F2D" strokeWidth="2" fill="#2D5F2D" fillOpacity="0.2"/>
                <path d="M20 20 Q15 10 20 0 Q25 10 20 20" stroke="#2D5F2D" strokeWidth="2" fill="#2D5F2D" fillOpacity="0.3"/>
                {/* Soil/dirt on book */}
                <ellipse cx="20" cy="45" rx="15" ry="5" stroke="#8B7355" strokeWidth="2" fill="#8B7355" fillOpacity="0.3"/>
              </g>
              
              {/* Reading glasses on books */}
              <g transform="translate(200, 230)">
                {/* Left lens */}
                <ellipse cx="0" cy="0" rx="28" ry="22" stroke="#2C2C2C" strokeWidth="3" fill="none"/>
                <ellipse cx="0" cy="0" rx="22" ry="17" stroke="#2C2C2C" strokeWidth="1" fill="none" opacity="0.2"/>
                {/* Right lens */}
                <ellipse cx="70" cy="0" rx="28" ry="22" stroke="#2C2C2C" strokeWidth="3" fill="none"/>
                <ellipse cx="70" cy="0" rx="22" ry="17" stroke="#2C2C2C" strokeWidth="1" fill="none" opacity="0.2"/>
                {/* Bridge */}
                <path d="M28 0 Q35 -8 42 0" stroke="#2C2C2C" strokeWidth="3" fill="none" strokeLinecap="round"/>
                {/* Temples */}
                <path d="M-28 -5 Q-45 -15 -55 -10" stroke="#2C2C2C" strokeWidth="3" fill="none" strokeLinecap="round"/>
                <path d="M98 -5 Q115 -15 125 -10" stroke="#2C2C2C" strokeWidth="3" fill="none" strokeLinecap="round"/>
                {/* Lens reflections */}
                <path d="M-18 -10 Q-15 -12 -12 -10" stroke="#FDF6EC" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
                <path d="M52 -10 Q55 -12 58 -10" stroke="#FDF6EC" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
              </g>
              
              {/* Coffee cup */}
              <g transform="translate(280, 260)">
                <path d="M0 10 L5 55 Q5 60 10 60 L45 60 Q50 60 50 55 L55 10" stroke="#2C2C2C" strokeWidth="3" fill="#FDF6EC"/>
                <path d="M55 18 Q70 18 70 35 Q70 52 55 52" stroke="#2C2C2C" strokeWidth="3" fill="none"/>
                <ellipse cx="27" cy="12" rx="27" ry="6" stroke="#2C2C2C" strokeWidth="2" fill="#8B7355" fillOpacity="0.4"/>
                {/* Steam */}
                <path d="M15 0 Q17 -8 15 -15" stroke="#2C2C2C" strokeWidth="1.5" fill="none" opacity="0.3" strokeLinecap="round"/>
                <path d="M27 -2 Q29 -10 27 -18" stroke="#2C2C2C" strokeWidth="1.5" fill="none" opacity="0.3" strokeLinecap="round"/>
                <path d="M39 0 Q41 -8 39 -15" stroke="#2C2C2C" strokeWidth="1.5" fill="none" opacity="0.3" strokeLinecap="round"/>
              </g>
              
              {/* Sparkles and decorations */}
              <g opacity="0.7">
                {/* Star sparkles */}
                <path d="M50 80 L54 90 L64 88 L56 96 L60 106 L50 100 L40 106 L44 96 L36 88 L46 90 Z" stroke="#E8C547" strokeWidth="2" fill="#E8C547" fillOpacity="0.2"/>
                <path d="M340 100 L342 106 L348 105 L344 110 L346 116 L340 112 L334 116 L336 110 L332 105 L338 106 Z" stroke="#C07A50" strokeWidth="1.5" fill="#C07A50" fillOpacity="0.2"/>
                
                {/* Dots */}
                <circle cx="70" cy="150" r="4" fill="#C07A50" fillOpacity="0.4"/>
                <circle cx="350" cy="200" r="5" fill="#2D5F2D" fillOpacity="0.3"/>
                <circle cx="320" cy="130" r="3" fill="#E8C547" fillOpacity="0.5"/>
                <circle cx="60" cy="280" r="4" fill="#2D5F2D" fillOpacity="0.3"/>
                
                {/* Small floating book */}
                <g transform="translate(320, 50) rotate(15)">
                  <rect x="0" y="0" width="30" height="22" rx="2" stroke="#2D5F2D" strokeWidth="1.5" fill="none"/>
                  <path d="M15 0 L15 22" stroke="#2D5F2D" strokeWidth="1"/>
                </g>
              </g>
              
              {/* Pencil decoration */}
              <g transform="translate(40, 300) rotate(-30)">
                <rect x="0" y="0" width="80" height="12" rx="1" stroke="#E8C547" strokeWidth="2" fill="#E8C547" fillOpacity="0.3"/>
                <path d="M80 0 L95 6 L80 12 Z" stroke="#2C2C2C" strokeWidth="2" fill="#2C2C2C" fillOpacity="0.3"/>
                <path d="M0 0 L-8 6 L0 12 Z" stroke="#F5E6CA" strokeWidth="2" fill="#F5E6CA"/>
              </g>
              
              {/* Underline scribble */}
              <path d="M100 380 Q150 375 200 380 T300 378 Q330 380 340 378" stroke="#C07A50" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.4"/>
            </svg>
            
            {/* Floating elements around illustration */}
            <div className="absolute -top-4 -right-4 animate-float">
              <SketchStarIcon className="w-8 h-8 text-[#E8C547]" />
            </div>
            <div className="absolute -bottom-2 -left-4 animate-float" style={{ animationDelay: '0.5s' }}>
              <SketchSparkleIcon className="w-6 h-6 text-[#C07A50]" />
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom wave decoration */}
    <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1920 100" fill="none" preserveAspectRatio="none">
      <path d="M0 50 Q480 100 960 50 T1920 50 L1920 100 L0 100 Z" fill="#F5E6CA" fillOpacity="0.5"/>
    </svg>
  </section>
);

// ============================================
// PROBLEM SECTION
// ============================================
const ProblemSection = () => {
  const problems = [
    {
      icon: <SketchBookshelfIcon className="w-20 h-20" />,
      title: "Books Waste Ho Rahi Hain",
      description: "Har saal lakho books shelf pe padi reh jaati hain — unhe koi naya reader nahi milta. Knowledge waste ho jaati hai.",
      emoji: <BookStackIcon className="w-8 h-8" />
    },
    {
      icon: <StudentIcon className="w-20 h-20" />,
      title: "Students Ko Affordable Books Nahi Milti",
      description: "Naye books ke prices itne zyada hain ki bahut se students afford nahi kar paate. Education expensive ho gayi hai.",
      emoji: <SketchHeartIcon className="w-8 h-8" />
    },
    {
      icon: <SketchLocationIcon className="w-20 h-20" />,
      title: "Nearby Koi Platform Nahin Hai",
      description: "Used books kharidne-bechne ke liye koi trusted, local platform nahi hai. Log offline hi rely karte hain.",
      emoji: <SketchTargetIcon className="w-8 h-8" />
    }
  ];

  return (
    <section id="problem" className="bg-[#F5E6CA] py-24 lg:py-32 relative overflow-hidden">
      {/* Paper texture */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `repeating-linear-gradient(transparent, transparent 31px, #2C2C2C 31px, #2C2C2C 32px)`,
          backgroundPosition: '0 40px',
        }}
      />
      
      {/* Corner doodles */}
      <CornerDoodle position="top-left" />
      <CornerDoodle position="top-right" />
      
      <PencilDivider />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-flex items-center gap-2 font-caveat text-xl text-[#C07A50] mb-4">
            <span className="w-8 h-0.5 bg-[#C07A50]"></span>
            The Problem
            <span className="w-8 h-0.5 bg-[#C07A50]"></span>
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-6">
            <BookStackIcon className="w-10 h-10 inline-block mr-2 mb-1" /> 
            Kya Aapke Paas Bhi Aise Books Hain?
          </h2>
          <p className="font-crimson text-lg sm:text-xl text-[#6B6B6B] max-w-2xl mx-auto">
            Jo shelf pe dhool kha rahi hain, par kisi student ke kaam aa sakti hain?
          </p>
          
          {/* Decorative underline */}
          <svg className="w-64 h-4 mx-auto mt-4" viewBox="0 0 300 20">
            <path d="M10 10 Q75 2 150 10 T290 10" stroke="#C07A50" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.5"/>
          </svg>
        </div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="group relative bg-[#FDF6EC] p-8 sm:p-10 rounded-3xl border-2 border-dashed border-[#2C2C2C]/15 hover:border-[#C07A50]/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl shadow-lg"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Card number */}
              <span className="absolute -top-4 -left-4 w-10 h-10 bg-[#C07A50] rounded-full flex items-center justify-center font-caveat text-2xl text-[#FDF6EC] shadow-lg">
                {index + 1}
              </span>
              
              {/* Icon */}
              <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#C07A50]/10 rounded-full blur-xl transform scale-75 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="text-[#C07A50] relative z-10">
                    {problem.icon}
                  </div>
                </div>
              </div>
              
              {/* Title */}
              <h3 className="font-playfair text-xl sm:text-2xl font-bold text-[#2C2C2C] text-center mb-4 group-hover:text-[#C07A50] transition-colors duration-300">
                {problem.title}
              </h3>
              
              {/* Description */}
              <p className="font-inter text-[#6B6B6B] text-center leading-relaxed">
                {problem.description}
              </p>
              
              {/* Bottom emoji */}
              <div className="absolute bottom-4 right-6 text-2xl opacity-50 group-hover:opacity-100 transition-opacity">
                {problem.emoji}
              </div>
              
              {/* Sketch border effect on hover */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" viewBox="0 0 100 100" preserveAspectRatio="none">
                <rect x="2" y="2" width="96" height="96" rx="20" stroke="#C07A50" strokeWidth="0.5" strokeDasharray="4 4" fill="none"/>
              </svg>
            </div>
          ))}
        </div>
        
        {/* Connecting doodle */}
        <div className="flex justify-center mt-12">
          <svg className="w-48 h-8" viewBox="0 0 200 30">
            <path d="M0 15 Q50 5 100 15 T200 15" stroke="#2D5F2D" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.3"/>
            <circle cx="100" cy="15" r="4" fill="#C07A50" fillOpacity="0.4"/>
          </svg>
        </div>
      </div>
    </section>
  );
};

// ============================================
// SOLUTION SECTION
// ============================================
const SolutionSection = () => {
  const steps = [
    { 
      icon: <OpenBookIcon className="w-14 h-14" />, 
      label: "Apni Books List Karo",
      sublabel: "Photo lo, details fill karo"
    },
    { 
      icon: <SketchLocationIcon className="w-14 h-14" />, 
      label: "Nearby Buyers Se Match Ho",
      sublabel: "地图 se dhundho"
    },
    { 
      icon: <SketchHandshakeIcon className="w-14 h-14" />, 
      label: "Meet & Exchange",
      sublabel: "Direct milo, handshake karo"
    },
    { 
      icon: <SketchSparkleIcon className="w-14 h-14" />, 
      label: "Knowledge Pahunche Sab Tak",
      sublabel: "Har student tak pahunchao"
    }
  ];

  return (
    <section className="bg-[#FDF6EC] py-24 lg:py-32 relative overflow-hidden">
      {/* Paper texture */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.015]"
        style={{
          backgroundImage: `repeating-linear-gradient(transparent, transparent 31px, #2D5F2D 31px, #2D5F2D 32px)`,
          backgroundPosition: '0 40px',
        }}
      />
      
      <CornerDoodle position="bottom-left" />
      <CornerDoodle position="bottom-right" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 font-caveat text-xl text-[#2D5F2D] mb-4">
            <span className="w-8 h-0.5 bg-[#2D5F2D]"></span>
            Our Solution
            <span className="w-8 h-0.5 bg-[#2D5F2D]"></span>
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-6">
            <SketchSparkleIcon className="w-10 h-10 inline-block mr-2 mb-1" /> 
            Nootbad Kya Hai?
          </h2>
          <p className="font-inter text-lg text-[#6B6B6B] max-w-3xl mx-auto leading-relaxed">
            Nootbad ek upcoming platform hai jahan aap apni purani books ko sell ya donate kar sakte ho — aur dusre log unhe <span className="text-[#C07A50] font-semibold">affordable price</span> me khareed sakte hain. Sab kuch aapke nearby, local community mein.
          </p>
          
          {/* Mission statement */}
          <div className="mt-8 inline-flex items-center gap-3 bg-[#2D5F2D]/10 px-6 py-3 rounded-full border border-dashed border-[#2D5F2D]/30">
            <SketchTargetIcon className="w-6 h-6 text-[#2D5F2D]" />
            <span className="font-caveat text-lg text-[#2D5F2D]">
              "Knowledge ko waste hone se bachana aur sab tak pahuchana"
            </span>
          </div>
        </div>

        {/* Flow Diagram */}
        <div className="relative mt-16">
          {/* Connection line */}
          <svg className="hidden lg:block absolute top-1/2 left-0 w-full h-4 -translate-y-1/2" viewBox="0 0 1200 20" preserveAspectRatio="none">
            <path d="M100 10 Q300 2 450 10 T750 10 T1050 10 T1100 10" stroke="#2D5F2D" strokeWidth="2" fill="none" strokeDasharray="8 4" opacity="0.4"/>
          </svg>
          
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Card */}
                <div className="bg-[#F5E6CA] p-8 rounded-3xl border-2 border-dashed border-[#2D5F2D]/30 hover:border-[#2D5F2D] hover:bg-[#FDF6EC] transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
                  {/* Step number */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-[#2D5F2D] rounded-full flex items-center justify-center">
                    <span className="font-caveat text-lg text-[#FDF6EC]">{index + 1}</span>
                  </div>
                  
                  {/* Icon */}
                  <div className="text-[#2D5F2D] mb-4 flex justify-center group-hover:scale-110 transition-transform duration-500">
                    {step.icon}
                  </div>
                  
                  {/* Label */}
                  <p className="font-inter text-base font-semibold text-[#2C2C2C] text-center">
                    {step.label}
                  </p>
                  <p className="font-caveat text-sm text-[#6B6B6B] text-center mt-1">
                    {step.sublabel}
                  </p>
                </div>
                
                {/* Arrow between cards */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-6 top-1/2 -translate-y-1/2 z-10">
                    <svg className="w-12 h-8 text-[#2D5F2D]" viewBox="0 0 48 32" fill="none">
                      <path d="M0 16 H40 M32 8 L40 16 L32 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
                
                {/* Down arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden absolute -bottom-6 left-1/2 -translate-x-1/2">
                    <svg className="w-6 h-6 text-[#2D5F2D]" viewBox="0 0 24 24" fill="none">
                      <path d="M12 4 L12 20 M6 14 L12 20 L18 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom decoration */}
        <div className="flex justify-center mt-16 gap-4">
          <SketchStarIcon className="w-6 h-6 text-[#E8C547]" />
          <SketchPencilIcon className="w-8 h-8 text-[#C07A50]" />
          <SketchStarIcon className="w-6 h-6 text-[#E8C547]" />
        </div>
      </div>
    </section>
  );
};

// ============================================
// FEATURES SECTION
// ============================================
const FeaturesSection = () => {
  const features = [
    { 
      icon: <SketchLocationIcon className="w-12 h-12" />, 
      title: "Hyperlocal Book Discovery", 
      description: "Apne area ke paas available books dhundho — delivery ki zarurat nahi, nearby milao.",
      color: "#C07A50"
    },
    { 
      icon: <SketchCoinIcon className="w-12 h-12" />, 
      title: "Super Affordable Prices", 
      description: "Used books 50-80% discount pe — har student ki pocket ke andar.",
      color: "#2D5F2D"
    },
    { 
      icon: <SketchGiftIcon className="w-12 h-12" />, 
      title: "Donate Books Easily", 
      description: "Apni books donate karo aur kisi student ka future bright karo.",
      color: "#C07A50"
    },
    { 
      icon: <SketchStarIcon className="w-12 h-12" />, 
      title: "Quality Checked Books", 
      description: "Har book ki condition check hogi — aapko quality guaranteed milegi.",
      color: "#E8C547"
    },
    { 
      icon: <SketchLockIcon className="w-12 h-12" />, 
      title: "Safe & Trusted Community", 
      description: "Verified users, ratings & reviews se ek trusted book-sharing ecosystem.",
      color: "#2D5F2D"
    },
    { 
      icon: <SketchPhoneIcon className="w-12 h-12" />, 
      title: "Easy to Use Platform", 
      description: "Simple, clean interface — list karo, browse karo, connect ho jao. Bus itna simple.",
      color: "#C07A50"
    }
  ];

  return (
    <section className="bg-[#F5E6CA] py-24 lg:py-32 relative overflow-hidden">
      {/* Paper texture */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `repeating-linear-gradient(transparent, transparent 31px, #2C2C2C 31px, #2C2C2C 32px)`,
          backgroundPosition: '0 40px',
        }}
      />
      
      <CornerDoodle position="top-right" />
      <CornerDoodle position="bottom-left" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 font-caveat text-xl text-[#C07A50] mb-4">
            <span className="w-8 h-0.5 bg-[#C07A50]"></span>
            What's Cooking
            <span className="w-8 h-0.5 bg-[#C07A50]"></span>
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-4">
            <SketchPencilIcon className="w-10 h-10 inline-block mr-2 mb-1" /> 
            Nootbad Pe Kya Milega?
          </h2>
          <p className="font-inter text-lg text-[#6B6B6B] max-w-2xl mx-auto">
            Aise features jo aapke book-sharing experience ko seamless banaenge
          </p>
          
          {/* Decorative underline */}
          <svg className="w-64 h-4 mx-auto mt-4" viewBox="0 0 300 20">
            <path d="M10 10 Q75 2 150 10 T290 10" stroke="#C07A50" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.5"/>
          </svg>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-[#FDF6EC] p-8 rounded-3xl border-2 border-dashed border-[#2C2C2C]/15 hover:border-[#C07A50] transition-all duration-500 hover:-translate-y-1 hover:shadow-xl shadow-lg overflow-hidden"
            >
              {/* Background glow on hover */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at center, ${feature.color}15 0%, transparent 70%)`
                }}
              />
              
              {/* Icon */}
              <div 
                className="text mb-6 flex justify-center transform group-hover:scale-110 transition-all duration-500"
                style={{ color: feature.color }}
              >
                {feature.icon}
              </div>
              
              {/* Title */}
              <h3 className="font-inter text-lg font-semibold text-[#2C2C2C] text-center mb-3 group-hover:text-[#C07A50] transition-colors duration-300">
                {feature.title}
              </h3>
              
              {/* Description */}
              <p className="font-inter text-sm text-[#6B6B6B] text-center leading-relaxed">
                {feature.description}
              </p>
              
              {/* Decorative corner */}
              <svg className="absolute top-3 right-3 w-6 h-6 opacity-20 group-hover:opacity-40 transition-opacity" viewBox="0 0 30 30" fill="none">
                <path d="M5 25 Q5 5 25 5" stroke={feature.color} strokeWidth="1.5" fill="none"/>
              </svg>
              
              {/* Bottom border accent */}
              <div 
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-transparent via-[#C07A50] to-transparent group-hover:w-full transition-all duration-700"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================
// TARGET AUDIENCE SECTION
// ============================================
const AudienceSection = () => {
  const personas = [
    { 
      title: "Students", 
      tagline: "Affordable books chahiye exams ke liye? Nootbad pe milegi.", 
      icon: <StudentIcon className="w-20 h-20" />,
      color: "#C07A50"
    },
    { 
      title: "Working Professionals", 
      tagline: "Purani professional books ko sell karo, naye readers ko do.", 
      icon: <BookStackIcon className="w-20 h-20" />,
      color: "#2D5F2D"
    },
    { 
      title: "Parents", 
      tagline: "Bachon ki outgrown books ko kisi aur bachhe tak pahuchao.", 
      icon: <SketchCoffeeIcon className="w-20 h-20" />,
      color: "#E8C547"
    },
    { 
      title: "Book Lovers", 
      tagline: "Used books collect karo, padhte raho, share karte raho.", 
      icon: <OpenBookIcon className="w-20 h-20" />,
      color: "#C07A50"
    }
  ];

  return (
    <section className="bg-[#FDF6EC] py-24 lg:py-32 relative overflow-hidden">
      {/* Paper texture */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.015]"
        style={{
          backgroundImage: `repeating-linear-gradient(transparent, transparent 31px, #2D5F2D 31px, #2D5F2D 32px)`,
          backgroundPosition: '0 40px',
        }}
      />
      
      <CornerDoodle position="top-left" />
      <CornerDoodle position="top-right" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 font-caveat text-xl text-[#2D5F2D] mb-4">
            <span className="w-8 h-0.5 bg-[#2D5F2D]"></span>
            Target Audience
            <span className="w-8 h-0.5 bg-[#2D5F2D]"></span>
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-4">
            <SketchTargetIcon className="w-10 h-10 inline-block mr-2 mb-1" />
            Ye Kiske Liye Hai?
          </h2>
          <p className="font-inter text-lg text-[#6B6B6B] max-w-2xl mx-auto">
            Nootbad har kisi ke liye hai jo books se pyaar karta hai
          </p>
        </div>

        {/* Persona Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {personas.map((persona, index) => (
            <div 
              key={index}
              className="group relative text-center p-8 rounded-3xl hover:bg-[#F5E6CA]/50 transition-all duration-500"
            >
              {/* Avatar Circle */}
              <div className="relative inline-block mb-6">
                {/* Outer ring */}
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#C07A50]/30 transform rotate-180 group-hover:rotate-0 transition-transform duration-700"></div>
                {/* Inner background */}
                <div 
                  className="w-28 h-28 rounded-full flex items-center justify-center bg-gradient-to-br from-[#F5E6CA] to-[#E8C547]/20 shadow-lg transform group-hover:scale-105 transition-transform duration-500"
                  style={{ borderColor: `${persona.color}30` }}
                >
                  <div style={{ color: persona.color }}>
                    {persona.icon}
                  </div>
                </div>
                {/* Decorative badge */}
                <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-[#FDF6EC] rounded-full flex items-center justify-center shadow-md border-2 border-dashed border-[#C07A50]/30">
                  <SketchStarIcon className="w-5 h-5 text-[#C07A50]" />
                </div>
              </div>
              
              {/* Title */}
              <h3 className="font-playfair text-xl font-bold text-[#2C2C2C] mb-3 group-hover:text-[#C07A50] transition-colors duration-300">
                {persona.title}
              </h3>
              
              {/* Tagline */}
              <p className="font-inter text-sm text-[#6B6B6B] leading-relaxed">
                {persona.tagline}
              </p>
              
              {/* Decorative dots */}
              <div className="flex justify-center gap-1 mt-4">
                {[1, 2, 3].map((i) => (
                  <div 
                    key={i}
                    className="w-1.5 h-1.5 rounded-full opacity-30"
                    style={{ backgroundColor: persona.color }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================
// TESTIMONIALS SECTION
// ============================================
const TestimonialsSection = () => {
  const testimonials = [
    { 
      quote: "Mujhe har semester naye books kharidne padte the. Agar ye platform hota toh bahut paise bachte! Library se bhi zyada useful hoga.", 
      name: "Rahul Sharma", 
      role: "Engineering Student, Delhi",
      avatar: <StudentIcon className="w-8 h-8" />
    },
    { 
      quote: "Mere ghar pe 50+ books hain jo koi nahi padhta. Inhe donate karna chahungi. Nootbad se ye possible hoga!", 
      name: "Priya Patel", 
      role: "Working Professional, Mumbai",
      avatar: <BookStackIcon className="w-8 h-8" />
    },
    { 
      quote: "Bachon ki books har saal change hoti hain. Used books ka platform bahut zaruri tha. Ab parents ko relief milegi.", 
      name: "Amit Kumar", 
      role: "Parent, Bangalore",
      avatar: <SketchPersonIcon className="w-8 h-8" />
    }
  ];

  return (
    <section className="bg-[#F5E6CA] py-24 lg:py-32 relative overflow-hidden">
      {/* Paper texture */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `repeating-linear-gradient(transparent, transparent 31px, #2C2C2C 31px, #2C2C2C 32px)`,
          backgroundPosition: '0 40px',
        }}
      />
      
      <CornerDoodle position="bottom-right" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 font-caveat text-xl text-[#C07A50] mb-4">
            <span className="w-8 h-0.5 bg-[#C07A50]"></span>
            Voicing Thoughts
            <span className="w-8 h-0.5 bg-[#C07A50]"></span>
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-4">
            <SketchHandshakeIcon className="w-10 h-10 inline-block mr-2 mb-1" />
            Log Kya Keh Rahe Hain?
          </h2>
          <p className="font-inter text-lg text-[#6B6B6B] max-w-2xl mx-auto">
            Early feedback from people who are excited about Nootbad
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group relative bg-[#FDF6EC] p-8 rounded-3xl border-2 border-dashed border-[#2C2C2C]/15 hover:border-[#C07A50]/60 transition-all duration-500 hover:shadow-xl"
            >
              {/* Large decorative quotation mark */}
              <div className="font-playfair text-8xl text-[#C07A50]/10 absolute top-4 left-4 leading-none select-none">
                "
              </div>
              
              {/* Quote content */}
              <p className="font-crimson text-lg text-[#2C2C2C] italic leading-relaxed mb-6 relative z-10 pt-8">
                "{testimonial.quote}"
              </p>
              
              {/* Author info */}
              <div className="flex items-center gap-4 pt-4 border-t border-dashed border-[#2C2C2C]/10">
                <div className="w-14 h-14 bg-[#F5E6CA] rounded-full flex items-center justify-center border-2 border-dashed border-[#C07A50]/30 text-[#C07A50]">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-inter font-semibold text-[#2C2C2C]">{testimonial.name}</p>
                  <p className="font-inter text-sm text-[#6B6B6B]">{testimonial.role}</p>
                </div>
              </div>
              
              {/* Star rating decoration */}
              <div className="flex gap-1 mt-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} className="w-4 h-4 text-[#E8C547]" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 1 L12.5 7 L19 7.5 L14 12 L15.5 19 L10 15.5 L4.5 19 L6 12 L1 7.5 L7.5 7 Z"/>
                  </svg>
                ))}
              </div>
              
              {/* Bottom decorative line */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-transparent via-[#C07A50] to-transparent group-hover:w-full transition-all duration-700 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================
// HOW IT WORKS SECTION
// ============================================
const HowItWorksSection = () => {
  const steps = [
    { 
      num: "1", 
      title: "Sign Up Karo", 
      desc: "Apna account banao free mein — sirf 30 seconds lagenge. Email aur phone number bas chahiye.",
      icon: <SketchPhoneIcon className="w-10 h-10" />
    },
    { 
      num: "2", 
      title: "Books List Karo ya Browse Karo", 
      desc: "Apni books upload karo ya nearby available books browse karo. Photo + price + condition add karo.",
      icon: <OpenBookIcon className="w-10 h-10" />
    },
    { 
      num: "3", 
      title: "Connect Ho Jao", 
      desc: "Buyer ya seller se directly chat karo aur meet-up decide karo. Safety tips follow karna na bhoolna!",
      icon: <SketchHandshakeIcon className="w-10 h-10" />
    },
    { 
      num: "4", 
      title: "Exchange & Enjoy", 
      desc: "Books exchange karo aur knowledge share karo! Review deke community ka hissa bano.",
      icon: <SketchSparkleIcon className="w-10 h-10" />
    }
  ];

  return (
    <section id="how-it-works" className="bg-[#FDF6EC] py-24 lg:py-32 relative overflow-hidden">
      {/* Paper texture */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.015]"
        style={{
          backgroundImage: `repeating-linear-gradient(transparent, transparent 31px, #2D5F2D 31px, #2D5F2D 32px)`,
          backgroundPosition: '0 40px',
        }}
      />
      
      <CornerDoodle position="top-left" />
      <CornerDoodle position="bottom-right" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 font-caveat text-xl text-[#2D5F2D] mb-4">
            <span className="w-8 h-0.5 bg-[#2D5F2D]"></span>
            Step by Step
            <span className="w-8 h-0.5 bg-[#2D5F2D]"></span>
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-4">
            <SketchRocketIcon className="w-10 h-10 inline-block mr-2 mb-1" />
            Kaise Kaam Karega?
          </h2>
          <p className="font-inter text-lg text-[#6B6B6B] max-w-2xl mx-auto">
            Basic 4 steps mein aapka kaam ho jayega
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Timeline Line - Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-gradient-to-b from-[#C07A50] via-[#2D5F2D] to-[#E8C547] rounded-full" />
          
          {/* Mobile timeline line */}
          <div className="lg:hidden absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#C07A50] via-[#2D5F2D] to-[#E8C547] rounded-full" />

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 1 ? 'lg:text-right' : 'lg:text-left'} lg:pl-12 lg:pr-12`}>
                  <div className={`bg-[#F5E6CA] p-8 rounded-3xl border-2 border-dashed border-[#C07A50]/30 inline-block ${
                    index % 2 === 1 ? 'lg:ml-auto' : ''
                  } hover:border-[#C07A50] hover:shadow-xl transition-all duration-500`}>
                    {/* Icon and number */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 bg-[#C07A50] rounded-2xl flex items-center justify-center text-[#FDF6EC] shadow-lg">
                        {step.icon}
                      </div>
                      <div className="font-playfair text-4xl font-bold text-[#C07A50]/30">
                        {step.num}
                      </div>
                    </div>
                    <h3 className="font-playfair text-xl lg:text-2xl font-bold text-[#2C2C2C] mb-2">{step.title}</h3>
                    <p className="font-inter text-[#6B6B6B] leading-relaxed">{step.desc}</p>
                  </div>
                </div>
                
                {/* Center dot */}
                <div className="lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 w-16 h-16 bg-[#FDF6EC] rounded-full flex items-center justify-center border-4 border-[#C07A50] shadow-lg z-10">
                  <span className="font-caveat text-2xl font-bold text-[#C07A50]">{step.num}</span>
                </div>

                {/* Spacer for desktop */}
                <div className="flex-1 hidden lg:block" />
              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom decoration */}
        <div className="flex justify-center mt-16 gap-4">
          <FlyingBook className="w-12 h-10 text-[#C07A50]/30" />
          <SketchStarIcon className="w-8 h-8 text-[#E8C547]" />
          <SketchPencilIcon className="w-10 h-10 text-[#2D5F2D]/40" />
          <SketchStarIcon className="w-8 h-8 text-[#E8C547]" />
          <FlyingBook className="w-12 h-10 text-[#2D5F2D]/30" style={{ transform: 'scaleX(-1)' }} />
        </div>
      </div>
    </section>
  );
};

// ============================================
// CTA FORM SECTION
// ============================================
const CTASection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    city: '',
    interest: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) newErrors.name = "Naam zaroor batao";
    if (!formData.email.trim()) newErrors.email = "Email daalna zaroori hai";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Sahi email format daalo";
    if (!formData.city.trim()) newErrors.city = "City ka naam likho";
    if (!formData.interest) newErrors.interest = "Kuch toh select karo";
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setSubmitted(true);
    setErrors({});
    console.log('Form submitted:', formData);
  };

  return (
    <section className="bg-gradient-to-br from-[#C07A50] via-[#B86A40] to-[#A0623D] py-24 lg:py-32 relative overflow-hidden">
      {/* Decorative pencil sketch background */}
      <div className="absolute inset-0 opacity-10">
        {/* Flying books pattern */}
        <FlyingBook className="absolute top-20 left-10 w-24 h-20 text-[#FDF6EC]" />
        <FlyingBook className="absolute top-40 right-20 w-20 h-16 text-[#FDF6EC]" style={{ transform: 'rotate(15deg)' }} />
        <FlyingBook className="absolute bottom-32 left-1/4 w-16 h-12 text-[#FDF6EC]" style={{ transform: 'rotate(-10deg)' }} />
        <FlyingBook className="absolute bottom-20 right-1/4 w-20 h-16 text-[#FDF6EC]" style={{ transform: 'scaleX(-1) rotate(5deg)' }} />
        
        {/* Pencil decorations */}
        <SketchPencilIcon className="absolute top-1/3 right-10 w-16 h-32 text-[#FDF6EC] rotate-45" />
        <SketchPencilIcon className="absolute bottom-1/3 left-10 w-12 h-24 text-[#FDF6EC] -rotate-30" />
        
        {/* Star sparkles */}
        <SketchStarIcon className="absolute top-1/4 left-1/3 w-12 h-12 text-[#E8C547]" />
        <SketchStarIcon className="absolute bottom-1/4 right-1/3 w-10 h-10 text-[#E8C547]" />
        <SketchStarIcon className="absolute top-3/4 left-1/2 w-8 h-8 text-[#FDF6EC]" />
      </div>
      
      {/* Corner doodles */}
      <svg className="absolute top-8 left-8 w-32 h-32 opacity-20" viewBox="0 0 100 100" fill="none">
        <path d="M0 0 Q50 20 100 0 Q80 50 100 100 Q50 80 0 100 Q20 50 0 0" stroke="#FDF6EC" strokeWidth="1" fill="none"/>
      </svg>
      <svg className="absolute bottom-8 right-8 w-32 h-32 opacity-20" viewBox="0 0 100 100" fill="none">
        <path d="M100 100 Q50 80 0 100 Q20 50 0 0 Q50 20 100 0 Q80 50 100 100" stroke="#FDF6EC" strokeWidth="1" fill="none"/>
      </svg>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FDF6EC] mb-4">
            🔔 Interested Ho?
            <br />
            <span className="text-[#E8C547]">Sabse Pehle Access Pao!</span>
          </h2>
          <p className="font-crimson text-lg text-[#FDF6EC]/90">
            Nootbad jab launch hoga, sabse pehle aapko batayenge. Plus early users ko <span className="font-semibold text-white">special benefits</span> milenge!
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-[#FDF6EC] p-8 sm:p-10 lg:p-12 rounded-3xl shadow-2xl relative overflow-hidden">
          {/* Sketch border effect */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
            <rect x="1" y="1" width="98" height="98" rx="20" stroke="#2C2C2C" strokeWidth="0.3" strokeDasharray="2 2" fill="none"/>
          </svg>
          
          {/* Corner decorations */}
          <svg className="absolute top-4 left-4 w-6 h-6 opacity-30" viewBox="0 0 30 30" fill="none">
            <path d="M2 28 Q2 2 28 2" stroke="#C07A50" strokeWidth="1.5" fill="none"/>
          </svg>
          <svg className="absolute top-4 right-4 w-6 h-6 opacity-30" viewBox="0 0 30 30" fill="none">
            <path d="M28 28 Q28 2 2 2" stroke="#C07A50" strokeWidth="1.5" fill="none"/>
          </svg>
          <svg className="absolute bottom-4 left-4 w-6 h-6 opacity-30" viewBox="0 0 30 30" fill="none">
            <path d="M2 2 Q2 28 28 28" stroke="#C07A50" strokeWidth="1.5" fill="none"/>
          </svg>
          <svg className="absolute bottom-4 right-4 w-6 h-6 opacity-30" viewBox="0 0 30 30" fill="none">
            <path d="M28 2 Q28 28 2 28" stroke="#C07A50" strokeWidth="1.5" fill="none"/>
          </svg>

          {submitted ? (
            /* Success State */
            <div className="text-center py-8 relative z-10">
              <div className="text-7xl mb-6 animate-bounce">🎉</div>
              <div className="flex justify-center gap-2 mb-4">
                <SketchStarIcon className="w-6 h-6 text-[#E8C547]" />
                <SketchStarIcon className="w-8 h-8 text-[#E8C547]" />
                <SketchStarIcon className="w-6 h-6 text-[#E8C547]" />
              </div>
              <h3 className="font-playfair text-2xl lg:text-3xl font-bold text-[#2C2C2C] mb-4">
                Badhai Ho! 🎊
              </h3>
              <p className="font-inter text-[#6B6B6B] mb-6">
                Aap registered ho gaye! Ab Nootbad ka hissa hain. 📚
              </p>
              <p className="font-caveat text-lg text-[#C07A50]">
                "Knowledge ko waste hone se bachana aur sab tak pahuchana"
              </p>
              <div className="mt-6 flex justify-center gap-2">
                <FlyingBook className="w-10 h-8 text-[#C07A50]" />
                <SketchPencilIcon className="w-6 h-12 text-[#2D5F2D]" />
                <FlyingBook className="w-10 h-8 text-[#2D5F2D]" style={{ transform: 'scaleX(-1)' }} />
              </div>
            </div>
          ) : (
            /* Form */
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              {/* Name Field */}
              <div>
                <label className="font-inter text-sm font-semibold text-[#2C2C2C] block mb-2 flex items-center gap-2">
                  <span>Aapka Naam</span>
                  <span className="text-[#C07A50]">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className={`w-full bg-[#FDF6EC] border-b-2 ${errors.name ? 'border-red-400' : 'border-[#2C2C2C]/30 focus:border-[#C07A50]'} outline-none py-3 px-1 font-inter text-[#2C2C2C] transition-colors`}
                    placeholder="Enter your name"
                  />
                  {errors.name && <p className="font-caveat text-sm text-red-500 mt-1">{errors.name}</p>}
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label className="font-inter text-sm font-semibold text-[#2C2C2C] block mb-2 flex items-center gap-2">
                  <span>Email Address</span>
                  <span className="text-[#C07A50]">*</span>
                </label>
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className={`w-full bg-[#FDF6EC] border-b-2 ${errors.email ? 'border-red-400' : 'border-[#2C2C2C]/30 focus:border-[#C07A50]'} outline-none py-3 px-1 font-inter text-[#2C2C2C] transition-colors`}
                    placeholder="your@email.com"
                  />
                  {errors.email && <p className="font-caveat text-sm text-red-500 mt-1">{errors.email}</p>}
                </div>
              </div>

              {/* City Field */}
              <div>
                <label className="font-inter text-sm font-semibold text-[#2C2C2C] block mb-2 flex items-center gap-2">
                  <span>Aapka City</span>
                  <span className="text-[#C07A50]">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({...formData, city: e.target.value})}
                    className={`w-full bg-[#FDF6EC] border-b-2 ${errors.city ? 'border-red-400' : 'border-[#2C2C2C]/30 focus:border-[#C07A50]'} outline-none py-3 px-1 font-inter text-[#2C2C2C] transition-colors`}
                    placeholder="e.g., Mumbai, Delhi, Bangalore"
                  />
                  {errors.city && <p className="font-caveat text-sm text-red-500 mt-1">{errors.city}</p>}
                </div>
              </div>

              {/* Interest Radio Buttons */}
              <div>
                <label className="font-inter text-sm font-semibold text-[#2C2C2C] block mb-4 flex items-center gap-2">
                  <span>Aap Kya Karna Chahoge?</span>
                  <span className="text-[#C07A50]">*</span>
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { value: 'buy', label: '📖 Books Kharidna', sub: 'Buy Books' },
                    { value: 'sell', label: '💰 Books Bechna', sub: 'Sell Books' },
                    { value: 'donate', label: '🎁 Books Donate Karna', sub: 'Donate Books' },
                    { value: 'all', label: '✨ Sab Kuch!', sub: 'Everything!' }
                  ].map((option) => (
                    <label 
                      key={option.value} 
                      className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                        formData.interest === option.value 
                          ? 'border-[#C07A50] bg-[#C07A50]/10' 
                          : 'border-[#2C2C2C]/15 hover:border-[#C07A50]/50 bg-[#F5E6CA]/30'
                      }`}
                    >
                      <input
                        type="radio"
                        name="interest"
                        value={option.value}
                        checked={formData.interest === option.value}
                        onChange={(e) => setFormData({...formData, interest: e.target.value})}
                        className="w-4 h-4 accent-[#C07A50]"
                      />
                      <div>
                        <span className="font-inter text-sm font-medium text-[#2C2C2C] block">{option.label}</span>
                        <span className="font-caveat text-xs text-[#6B6B6B]">{option.sub}</span>
                      </div>
                    </label>
                  ))}
                </div>
                {errors.interest && <p className="font-caveat text-sm text-red-500 mt-2">{errors.interest}</p>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#C07A50] text-[#FDF6EC] py-5 rounded-full font-inter font-bold text-lg uppercase tracking-wider hover:bg-[#A0623D] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[#C07A50]/30 relative overflow-hidden group mt-4"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  <span>Mujhe Early Access Do!</span>
                  <span className="text-2xl group-hover:animate-bounce">🚀</span>
                </span>
                {/* Button shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </button>

              {/* Privacy Note */}
              <div className="flex items-center justify-center gap-2 text-center">
                <LockIcon className="w-4 h-4 text-[#6B6B6B]" />
                <p className="font-inter text-sm text-[#6B6B6B]">
                  🔒 Aapki info safe hai. Koi spam nahi, promise.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

// Lock icon for privacy note
const LockIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="11" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="2"/>
    <path d="M8 11V7a4 4 0 1 1 8 0v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

// ============================================
// FAQ SECTION
// ============================================
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { 
      q: "Nootbad kab launch hoga?", 
      a: "Hum jaldi hi launch karne wale hain! Apna email register karo taaki sabse pehle aapko pata chale. Target hai 2026 ki first half me.",
      icon: "📅"
    },
    { 
      q: "Kya ye platform free hoga?", 
      a: "Haan! Buyers aur sellers dono ke liye basic features bilkul free honge. Koi hidden charges nahi, promise!",
      icon: "💰"
    },
    { 
      q: "Books ki quality kaise ensure hogi?", 
      a: "Har book ki condition clearly mention hogi — photos ke saath. Community ratings aur reviews se quality maintain hogi. 'Like New', 'Good', 'Fair' categories honge.",
      icon: "✨"
    },
    { 
      q: "Kya main books donate bhi kar sakta/sakti hoon?", 
      a: "Bilkul! Nootbad pe ek dedicated donation section hoga jahan aap apni books zarooratmand students tak pahuncha sakte ho. Donate karna, earn karna — aapke upar hai!",
      icon: "🎁"
    },
    { 
      q: "Delivery kaise hogi?", 
      a: "Nootbad hyperlocal hai — matlab aap nearby logon se directly mil ke exchange karoge. No shipping hassles, no delivery charges!",
      icon: "📍"
    },
    { 
      q: "Kya sirf textbooks hain ya sab types ki books?", 
      a: "Sab types! Textbooks, novels, competitive exam books, children's books, professional books, comics, self-help — jo bhi books ho, sab allowed!",
      icon: "📚"
    }
  ];

  return (
    <section id="faq" className="bg-[#FDF6EC] py-24 lg:py-32 relative overflow-hidden">
      {/* Paper texture */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.015]"
        style={{
          backgroundImage: `repeating-linear-gradient(transparent, transparent 31px, #2D5F2D 31px, #2D5F2D 32px)`,
          backgroundPosition: '0 40px',
        }}
      />
      
      <CornerDoodle position="top-right" />
      <CornerDoodle position="bottom-left" />
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 font-caveat text-xl text-[#C07A50] mb-4">
            <span className="w-8 h-0.5 bg-[#C07A50]"></span>
            Help & Support
            <span className="w-8 h-0.5 bg-[#C07A50]"></span>
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-4">
            ❓ Aksar Puchhe Jaane Wale Sawaal
          </h2>
          <p className="font-inter text-lg text-[#6B6B6B]">
            Faqs jo kaafi log puchte hain
          </p>
          
          {/* Decorative underline */}
          <svg className="w-64 h-4 mx-auto mt-4" viewBox="0 0 300 20">
            <path d="M10 10 Q75 2 150 10 T290 10" stroke="#C07A50" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.5"/>
          </svg>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="group bg-[#F5E6CA] rounded-2xl border-2 border-dashed border-[#2C2C2C]/15 overflow-hidden hover:border-[#C07A50]/40 transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-[#FDF6EC]/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <span className="text-2xl">{faq.icon}</span>
                  <span className="font-inter font-semibold text-[#2C2C2C] pr-4 group-hover:text-[#C07A50] transition-colors">
                    {faq.q}
                  </span>
                </div>
                <span className={`text-3xl text-[#C07A50] transition-all duration-300 ${
                  openIndex === index ? 'rotate-45 scale-110' : 'rotate-0'
                }`}>
                  +
                </span>
              </button>
              <div className={`overflow-hidden transition-all duration-500 ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-6 pb-6 ml-12">
                  <p className="font-inter text-[#6B6B6B] leading-relaxed border-l-2 border-[#C07A50]/30 pl-4">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Still have questions */}
        <div className="text-center mt-12 p-6 bg-[#F5E6CA] rounded-2xl border-2 border-dashed border-[#C07A50]/30">
          <p className="font-caveat text-xl text-[#2C2C2C] mb-2">
            Ab bhi sawaal hai?
          </p>
          <a 
            href="mailto:hello@nootbad.com" 
            className="font-inter text-[#C07A50] hover:text-[#A0623D] transition-colors inline-flex items-center gap-2"
          >
            <span>✉️</span>
            <span>hello@nootbad.com</span>
            <span>pe email bhejo</span>
          </a>
        </div>
      </div>
    </section>
  );
};

// ============================================
// FOUNDER SECTION
// ============================================
const FounderSection = () => (
  <section id="about" className="bg-[#F5E6CA] py-24 lg:py-32 relative overflow-hidden">
    {/* Paper texture */}
    <div 
      className="absolute inset-0 pointer-events-none opacity-[0.02]"
      style={{
        backgroundImage: `repeating-linear-gradient(transparent, transparent 31px, #2C2C2C 31px, #2C2C2C 32px)`,
        backgroundPosition: '0 40px',
      }}
    />
    
    <CornerDoodle position="top-left" />
    <CornerDoodle position="bottom-right" />
    
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center mb-12">
        <span className="inline-flex items-center gap-2 font-caveat text-xl text-[#2D5F2D] mb-4">
          <span className="w-8 h-0.5 bg-[#2D5F2D]"></span>
          Behind the Scene
          <span className="w-8 h-0.5 bg-[#2D5F2D]"></span>
        </span>
        <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-4">
          ✍️ Founder Ki Kahaani
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        {/* Photo */}
        <div className="flex-shrink-0 relative">
          {/* Decorative circles */}
          <div className="absolute inset-0 -m-4 border-2 border-dashed border-[#C07A50]/30 rounded-full"></div>
          <div className="absolute inset-0 -m-8 border-2 border-dashed border-[#2D5F2D]/20 rounded-full"></div>
          
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-gradient-to-br from-[#FDF6EC] to-[#E8C547]/20 border-4 border-dashed border-[#C07A50]/40 flex items-center justify-center shadow-2xl overflow-hidden">
            {/* Placeholder avatar */}
            <div className="text-center">
              <div className="text-7xl mb-2">👨‍💻</div>
              <div className="flex justify-center gap-1">
                <SketchStarIcon className="w-4 h-4 text-[#E8C547]" />
                <SketchStarIcon className="w-4 h-4 text-[#E8C547]" />
                <SketchStarIcon className="w-4 h-4 text-[#E8C547]" />
              </div>
            </div>
            
            {/* Decorative corner */}
            <svg className="absolute top-4 right-4 w-6 h-6" viewBox="0 0 30 30" fill="none">
              <path d="M5 25 Q5 5 25 5" stroke="#C07A50" strokeWidth="1.5" fill="none"/>
            </svg>
          </div>
          
          {/* Floating badge */}
          <div className="absolute -bottom-2 -right-2 bg-[#C07A50] text-[#FDF6EC] px-4 py-2 rounded-full font-caveat text-sm shadow-lg">
            Founder 🎯
          </div>
        </div>

        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <p className="font-inter text-base sm:text-lg text-[#6B6B6B] leading-relaxed mb-6">
            Main ek student tha jab mujhe realise hua ki kitni books har saal waste ho jaati hain — jab koi aur student unhe afford nahi kar pata. 
          </p>
          <p className="font-inter text-base sm:text-lg text-[#6B6B6B] leading-relaxed mb-6">
            Usi din ye idea aaya: <span className="text-[#C07A50] font-semibold">Kya hum ek aisa platform bana sakte hain jo purani books ko naye readers tak pahunchaye?</span>
          </p>
          <p className="font-inter text-base sm:text-lg text-[#6B6B6B] leading-relaxed mb-8">
            Nootbad wahi sapna hai — aur aap iska hissa ban sakte ho.
          </p>
          
          {/* Mission quote */}
          <div className="bg-[#FDF6EC] p-6 rounded-2xl border-l-4 border-[#2D5F2D] mb-6">
            <p className="font-crimson text-lg italic text-[#2C2C2C]">
              "Knowledge ko waste hone se bachana aur sab tak pahuchana"
            </p>
          </div>
          
          {/* Signature */}
          <div className="flex items-center gap-4 justify-center lg:justify-start">
            <div className="h-px w-16 bg-gradient-to-r from-[#C07A50] to-transparent"></div>
            <p className="font-caveat text-2xl text-[#C07A50]">
              — The Founder, Nootbad
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// ============================================
// FINAL CTA SECTION
// ============================================
const FinalCTASection = ({ onInterestClick }: { onInterestClick: () => void }) => (
  <section className="bg-gradient-to-r from-[#2D5F2D] via-[#3D7F3D] to-[#2D5F2D] py-20 lg:py-24 relative overflow-hidden">
    {/* Decorative background */}
    <div className="absolute inset-0 opacity-10">
      {/* Pattern of books */}
      <div className="absolute top-0 left-0 w-full h-full" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='10' y='20' width='15' height='20' stroke='white' stroke-width='1' fill='none' transform='rotate(-5 17 30)'/%3E%3Crect x='28' y='22' width='12' height='18' stroke='white' stroke-width='1' fill='none' transform='rotate(3 34 31)'/%3E%3Crect x='42' y='18' width='14' height='22' stroke='white' stroke-width='1' fill='none'/%3E%3C/svg%3E")`,
      }} />
    </div>
    
    {/* Floating decorations */}
    <FlyingBook className="absolute top-10 left-10 w-16 h-12 text-[#FDF6EC]/20" />
    <FlyingBook className="absolute bottom-10 right-10 w-16 h-12 text-[#FDF6EC]/20" style={{ transform: 'scaleX(-1)' }} />
    <SketchStarIcon className="absolute top-20 right-1/4 w-8 h-8 text-[#E8C547]/30" />
    <SketchStarIcon className="absolute bottom-20 left-1/4 w-6 h-6 text-[#E8C547]/30" />
    
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
      <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FDF6EC] mb-6">
        📚 Tayyar Ho Knowledge Revolution
        <br />
        <span className="text-[#E8C547]">Ka Hissa Banne Ke Liye?</span>
      </h2>
      <p className="font-inter text-lg text-[#FDF6EC]/90 mb-10 max-w-2xl mx-auto">
        Join karo <span className="font-bold text-white">500+</span> book lovers jo abhi se wait kar rahe hain. Aap bhi apni jagah book lovers ki is family mein! 📖✨
      </p>
      
      {/* CTA Button */}
      <button
        onClick={onInterestClick}
        className="group relative bg-[#FDF6EC] text-[#2D5F2D] px-12 py-5 rounded-full font-inter font-bold text-lg uppercase tracking-wider hover:bg-white transition-all duration-300 hover:scale-105 active:scale-95 shadow-2xl overflow-hidden"
      >
        <span className="relative z-10 flex items-center gap-3">
          <span>Haan, Mujhe Interested Hai!</span>
          <span className="text-2xl group-hover:animate-wave">✋</span>
        </span>
        {/* Hover gradient */}
        <span className="absolute inset-0 bg-gradient-to-r from-[#E8C547]/0 via-[#E8C547]/20 to-[#E8C547]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
      </button>
      
      {/* Trust indicators */}
      <div className="flex flex-wrap justify-center gap-6 mt-10 text-[#FDF6EC]/70 font-inter text-sm">
        <span className="flex items-center gap-2">
          <SketchStarIcon className="w-4 h-4 text-[#E8C547]" />
          Free to Join
        </span>
        <span className="flex items-center gap-2">
          <SketchStarIcon className="w-4 h-4 text-[#E8C547]" />
          No Hidden Charges
        </span>
        <span className="flex items-center gap-2">
          <SketchStarIcon className="w-4 h-4 text-[#E8C547]" />
          Early Bird Benefits
        </span>
      </div>
    </div>
  </section>
);

// ============================================
// FOOTER
// ============================================
const Footer = () => (
  <footer className="bg-[#2C2C2C] py-16 relative overflow-hidden">
    {/* Decorative top border */}
    <svg className="absolute top-0 left-0 w-full h-2" viewBox="0 0 1920 10" preserveAspectRatio="none">
      <path d="M0 5 Q480 0 960 5 T1920 5" stroke="#C07A50" strokeWidth="2" fill="none" opacity="0.5"/>
    </svg>
    
    {/* Corner doodle */}
    <svg className="absolute bottom-8 right-8 w-24 h-24 opacity-10" viewBox="0 0 100 100" fill="none">
      <path d="M0 100 Q50 50 100 100" stroke="#FDF6EC" strokeWidth="1" fill="none"/>
      <rect x="20" y="60" width="20" height="8" stroke="#C07A50" strokeWidth="1" transform="rotate(-10 30 64)"/>
      <rect x="50" y="55" width="18" height="8" stroke="#2D5F2D" strokeWidth="1" transform="rotate(5 59 59)"/>
    </svg>
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-3 gap-12 mb-12">
        {/* Column 1 - Logo & Tagline */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <OpenBookIcon className="w-10 h-10 text-[#FDF6EC]" />
            <span className="font-caveat text-4xl text-[#FDF6EC] font-bold">Nootbad</span>
          </div>
          <p className="font-inter text-sm text-[#6B6B6B] leading-relaxed mb-4">
            Purani Books. Naye Readers. Endless Knowledge.
          </p>
          <div className="flex items-center gap-2 text-[#6B6B6B]">
            <SketchStarIcon className="w-4 h-4 text-[#E8C547]" />
            <span className="font-caveat text-sm">Knowledge ko waste hone se bachana</span>
          </div>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h4 className="font-inter font-semibold text-[#FDF6EC] mb-4 flex items-center gap-2">
            <SketchPencilIcon className="w-5 h-5 text-[#C07A50]" />
            Quick Links
          </h4>
          <ul className="space-y-3">
            {[
              { label: 'About Us', icon: '✍️' },
              { label: 'How It Works', icon: '🚀' },
              { label: 'FAQ', icon: '❓' },
              { label: 'Contact', icon: '📧' }
            ].map((link) => (
              <li key={link.label}>
                <a 
                  href="#" 
                  className="font-inter text-sm text-[#6B6B6B] hover:text-[#C07A50] transition-colors duration-300 inline-flex items-center gap-2 group"
                >
                  <span>{link.icon}</span>
                  <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 - Follow Us */}
        <div>
          <h4 className="font-inter font-semibold text-[#FDF6EC] mb-4 flex items-center gap-2">
            <SketchSparkleIcon className="w-5 h-5 text-[#C07A50]" />
            Follow Us
          </h4>
          <div className="flex gap-3 mb-6">
            {[
              { icon: '📸', label: 'Instagram', color: '#E4405F' },
              { icon: '🐦', label: 'Twitter', color: '#1DA1F2' },
              { icon: '💼', label: 'LinkedIn', color: '#0A66C2' },
              { icon: '💬', label: 'WhatsApp', color: '#25D366' }
            ].map((social) => (
              <a 
                key={social.label}
                href="#" 
                className="w-11 h-11 bg-[#3C3C3C] rounded-full flex items-center justify-center hover:bg-[#C07A50] transition-colors duration-300 group"
                title={social.label}
              >
                <span className="text-xl group-hover:scale-110 transition-transform">{social.icon}</span>
              </a>
            ))}
          </div>
          <p className="font-inter text-sm text-[#6B6B6B] mb-2">Questions? Reach us at:</p>
          <a 
            href="mailto:hello@nootbad.com" 
            className="font-inter text-sm text-[#C07A50] hover:text-[#E8C547] transition-colors inline-flex items-center gap-2"
          >
            <span>✉️</span>
            <span>hello@nootbad.com</span>
          </a>
        </div>
      </div>

      {/* Divider with pencil effect */}
      <div className="relative py-6">
        <svg className="w-full h-4" viewBox="0 0 800 20">
          <path d="M0 10 Q200 2 400 10 T800 10" stroke="#3C3C3C" strokeWidth="1" fill="none"/>
          <circle cx="400" cy="10" r="3" fill="#C07A50" opacity="0.5"/>
        </svg>
      </div>

      {/* Bottom Bar */}
      <div className="text-center">
        <p className="font-inter text-sm text-[#6B6B6B] flex items-center justify-center gap-2">
          <span>© 2026 Nootbad.</span>
          <span className="inline-flex items-center gap-1">
            Made with 
            <svg className="w-4 h-4 text-red-500" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 18l-1.45-1.32C4.4 12.86 2 10.64 2 8.18 2 5.65 4.05 3.82 6.5 3.82c1.52 0 2.9.89 3.5 2.18.6-1.29 1.98-2.18 3.5-2.18 2.45 0 4.5 1.83 4.5 4.36 0 2.46-2.4 4.68-6.55 8.5L10 18z"/>
            </svg>
          </span>
          <span>for Book Lovers 📚</span>
        </p>
        
        {/* Mission tagline */}
        <p className="font-caveat text-[#C07A50] mt-2 text-lg">
          "Knowledge ko waste hone se bachana aur sab tak pahuchana"
        </p>
      </div>
    </div>
  </footer>
);

// ============================================
// MOBILE STICKY CTA
// ============================================
const MobileStickyCTA = ({ onInterestClick }: { onInterestClick: () => void }) => (
  <div className="fixed bottom-0 left-0 right-0 bg-[#FDF6EC]/98 backdrop-blur-sm p-4 lg:hidden z-50 border-t border-dashed border-[#C07A50]/30 shadow-lg">
    <button
      onClick={onInterestClick}
      className="w-full bg-[#C07A50] text-[#FDF6EC] py-4 rounded-full font-inter font-semibold uppercase tracking-wider hover:bg-[#A0623D] transition-colors shadow-lg flex items-center justify-center gap-2"
    >
      <span>I'm Interested</span>
      <span className="text-xl animate-bounce">🔔</span>
    </button>
  </div>
);

// ============================================
// MAIN APP COMPONENT
// ============================================
export default function App() {
  const formRef = useRef<HTMLDivElement>(null);
  const [showMobileCTA, setShowMobileCTA] = useState(false);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => setShowMobileCTA(window.scrollY > 600);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-inter bg-[#FDF6EC] text-[#2C2C2C]">
      <style>{`
        .font-playfair { font-family: 'Playfair Display', serif; }
        .font-crimson { font-family: 'Crimson Pro', serif; }
        .font-inter { font-family: 'Inter', sans-serif; }
        .font-caveat { font-family: 'Caveat', cursive; }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        
        @keyframes float-pencil {
          0%, 100% { transform: translateY(0px) rotate(-45deg); }
          50% { transform: translateY(-15px) rotate(-40deg); }
        }
        
        @keyframes float-book {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(3deg); }
        }
        
        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(20deg); }
          75% { transform: rotate(-20deg); }
        }
        
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
        
        .animate-float-pencil {
          animation: float-pencil 4s ease-in-out infinite;
        }
        
        .animate-float-book {
          animation: float-book 4s ease-in-out infinite;
        }
        
        .animate-wave {
          animation: wave 0.8s ease-in-out infinite;
        }
        
        .animate-hero-text {
          animation: fade-in 1s ease-out forwards;
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes draw-line {
          from { stroke-dashoffset: 200; }
          to { stroke-dashoffset: 0; }
        }
        
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
        }
        
        ::-webkit-scrollbar-track {
          background: #F5E6CA;
        }
        
        ::-webkit-scrollbar-thumb {
          background: #C07A50;
          border-radius: 5px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: #A0623D;
        }
      `}</style>
      
      {/* Navigation */}
      <Navbar onInterestClick={scrollToForm} />
      
      {/* Main Content Sections */}
      <HeroSection onInterestClick={scrollToForm} />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection />
      <AudienceSection />
      <TestimonialsSection />
      <HowItWorksSection />
      
      {/* CTA Form Section */}
      <div ref={formRef}>
        <CTASection />
      </div>
      
      <FAQSection />
      <FounderSection />
      <FinalCTASection onInterestClick={scrollToForm} />
      <Footer />
      
      {/* Mobile Sticky CTA */}
      {showMobileCTA && <MobileStickyCTA onInterestClick={scrollToForm} />}
    </div>
  );
}
