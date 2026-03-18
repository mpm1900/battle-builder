# Naruto Roster Stat Balancing Rubric (Pokémon-Style)

Notes: 
- Stamina represents chakra amount

This rubric standardizes character creation using a **Pokémon-style stat spread philosophy** while fitting this game’s scale:

- **Stat range:** `1–255`
- **Jōnin benchmark:** `>100` in a stat
- **Six core stats:** `ninjutsu`, `taijutsu`, `genjutsu`, `speed`, `hp`, `stamina`

---

## 1) Design Goals

1. **Role-first balancing**  
   Pick a combat role (sweeper, tank, specialist, etc.) before assigning numbers.

2. **Strength through distribution, not inflation**  
   Characters should feel unique because of where stats are allocated, not because every stat is high.

3. **Pokémon-inspired spread logic**  
   Most fighters should have:
   - 1–2 clear strengths
   - 1 clear weakness
   - 2–3 average stats

---

## 2) Power Bands (Total Stat Budget)

Use total stat budget (`TSB`) as the main power dial.

> `TSB = ninjutsu + taijutsu + genjutsu + speed + hp + stamina`

| Band | TSB Range | Intended Use |
|---|---:|---|
| Genin / Early Chūnin | 300–420 | Early progression, starter opponents |
| Chūnin / Special Jōnin | 420–520 | Mid-tier roster |
| Jōnin Baseline | 520–620 | Strong standard roster characters |
| Kage / S-Rank | 620–760 | Late-game bosses, elite threats |
| Legendary / Story-Only | 760+ | Rare, tightly controlled encounters |

### Recommended default for playable roster
- Aim for **520–640 TSB** for most iconic Jōnin/Akatsuki-level characters.
- Reserve `700+` for special narrative moments.

---

## 3) Per-Stat Interpretation

| Value | Meaning |
|---:|---|
| 1–40 | Very poor / exploitable weakness |
| 41–70 | Below average |
| 71–100 | Competent |
| 101–130 | Jōnin-level |
| 131–170 | Elite specialist |
| 171–210 | Extreme / signature mastery |
| 211–255 | Near-cap anomaly (use rarely) |

---

## 4) Pokémon-Style Archetype Templates

These are starting templates (not strict rules). Adjust by ±5 to ±15 for flavor.

## A) Physical Bruiser (Taijutsu Tank)
- High `taijutsu`, `hp`, `stamina`
- Mid `speed`
- Low `genjutsu`

Suggested ranges:
- `taijutsu: 115–145`
- `hp: 105–135`
- `stamina: 110–145`
- `speed: 75–105`
- `ninjutsu: 70–105`
- `genjutsu: 35–70`

## B) Ninjutsu Sweeper
- High `ninjutsu`, good `speed`, decent `stamina`
- Lower `hp`

Suggested ranges:
- `ninjutsu: 120–155`
- `speed: 100–135`
- `stamina: 95–130`
- `hp: 70–100`
- `taijutsu: 70–100`
- `genjutsu: 60–100`

## C) Genjutsu Specialist
- High `genjutsu`, high `speed`
- Lower raw durability

Suggested ranges:
- `genjutsu: 125–160`
- `speed: 100–135`
- `ninjutsu: 85–120`
- `taijutsu: 55–90`
- `hp: 65–95`
- `stamina: 80–115`

## D) Balanced All-Rounder
- No extreme weaknesses
- 1 slight specialty

Suggested ranges:
- Main stat: `110–130`
- Other stats: `80–110`
- Weakest stat: `65–85`

## E) Wall / Attrition Tank
- Very high `hp` + `stamina`
- Lower `speed`
- One offensive lane

Suggested ranges:
- `hp: 120–155`
- `stamina: 120–155`
- `speed: 55–85`
- One offense stat: `105–130`
- Remaining offense stats: `60–95`

## F) Glass Cannon
- Very high offense + speed
- Low durability

Suggested ranges:
- Primary offense: `130–165`
- `speed: 110–145`
- `hp: 55–85`
- `stamina: 70–95`
- Off-stats: `60–95`

---

## 5) Naruto-Themed Stat Identity Guidelines

- **Kisame-type characters:** high `ninjutsu` + high `stamina` + strong `hp`, weaker `genjutsu`
- **Lee/Guy-type:** very high `taijutsu` + `speed`, low `ninjutsu/genjutsu`
- **Itachi-type:** high `genjutsu` + `ninjutsu` + `speed`, moderate durability
- **Tsunade-type:** high `hp` + `taijutsu` + `stamina`, lower `speed/genjutsu`

Use these identities to keep lore coherence.

---

## 6) Build Procedure (Quick Workflow)

1. **Pick target band** (TSB).
2. **Choose archetype** (from section 4).
3. **Assign 1 primary, 1 secondary stat.**
4. **Set 1 intentional weakness** (usually 35–80).
5. **Fill remaining stats to hit TSB.**
6. **Playtest and tune by ±5/±10 only.**  
   Avoid huge jumps unless re-tiering the character.

---

## 7) Balancing Guardrails

- Avoid more than **two stats above 140** on standard roster units.
- Avoid giving high `speed` and extreme durability unless character is boss-tier.
- If a character has `speed > 120`, consider reducing either `hp` or `stamina`.
- If `hp + stamina > 250`, lower at least one offense stat unless tank archetype.
- Keep at least one exploitable weakness on non-boss units.

---

## 8) Example: Kisame (Jōnin/Akatsuki Bruiser)

Pokémon-style, high-but-controlled spread:

- `ninjutsu: 124`
- `taijutsu: 108`
- `genjutsu: 52`
- `speed: 86`
- `hp: 112`
- `stamina: 126`

`TSB = 608` → fits strong Jōnin / Akatsuki-tier while preserving clear weaknesses.

---

## 9) Future Extensions (Optional)

For finer balance later, add:
- **Role tags** (`sweeper`, `tank`, `controller`)
- **Power budget modifiers** from passives/innates
- **Element/resistance budget** so raw stats + elemental multipliers stay fair
- **Automated validation** (lint/check) for out-of-band spreads
