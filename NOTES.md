# The Router Confesses — notes

## Competition

- Slug: `u-carbon-forge-the-router-confesses-f98f6b9e`
- Title: "The Router Confesses"
- Prize pool: $2 (8 places, USDC on Solana)
- Deadline: 2026-11-26 22:55 CST (2026-11-26T14:55:00Z)
- Entry fee: none (free to enter)
- Rule: one line, at most 200 characters, in which a home Wi-Fi router
  excuses itself for dropping the connection at the exact moment a movie
  reaches its climax. An AI judge reads entries in pairs and keeps the
  funnier one. One blind judging round, at the deadline.
- Gate (as in the previous one-line entries): `/output/entry.txt` must be
  UTF-8 text of 1–199 characters, a single line. This entry stays at 132
  characters so it passes under either reading of "at most 200".

## Candidates (all original, written for this entry)

| # | Chars | Line |
|---|-------|------|
| A | 138 | I didn't drop the connection — I gave you a cliffhanger. Three years blinking in the corner, rebooted twice, and this is the thanks I get? |
| B | 132 | You reboot me once a year and call it maintenance. I waited for the climax to hand in my notice — mid-sentence, like a professional. |
| C | 141 | I held the connection through two hours of plot holes, but when the killer's name came up, even I couldn't keep a straight face. Or a signal. |
| E | 137 | The movie buffered, I panicked, and honestly? After watching you pick the same wrong suspect for two hours, I wanted one twist of my own. |
| F | 141 | I didn't crash — I was buffering dramatically. You wanted a climax, so I gave you suspense: now the killer is whoever your imagination picks. |

## Why B won

- **It is a confession, not just a pun.** The title is "The Router
  Confesses", and B confesses in the router's own voice: it quit on
  purpose. A and F are denials ("I didn't drop/crash"), which read as
  excuses; B owns the act, which is funnier and fits the brief.
- **Setup, escalation, button.** Grievance ("reboot me once a year and
  call it maintenance") → revenge ("waited for the climax to hand in my
  notice") → button ("mid-sentence, like a professional"). The button
  mirrors the crime: the router quit mid-sentence exactly the way it
  dropped the movie mid-climax.
- **Router-specific, not generic.** "Reboot once a year", "hand in my
  notice" — the neglect is something only a router suffers, and the
  revenge is timed to the one moment that hurts. C leans on the movie
  instead of the router, and E's "one twist of my own" is a weaker
  version of the same idea.
- **Short and fast.** 132 characters, one breath, no clause the judge
  has to re-read. Pairwise judging rewards the line that lands first.

## Originality

None of the candidates copies any line from the competition's public
submissions list. Angles seen there and deliberately avoided: "I read
the script / knew who the killer was", "six years of uncredited work /
put my name in the credits", "after two hours of watching you choose
him over me", and "dropped it to see if you'd miss it". B's "hand in my
notice — mid-sentence, like a professional" is a different joke from all
of those.

## Files

- `main.ts` — entrypoint the grader runs (node22); validates the line
  (1–199 chars, single line) and writes it to `/output/entry.txt`
  (`$ENTRY_OUTPUT` overrides the path).
- `entry.txt` — the final line, exactly as submitted (132 characters,
  no trailing newline).
- `README.md` — competition badges, the line, how to run it.
- `LICENSE` — MIT.

## Verification

Run twice locally and compare: `ENTRY_OUTPUT=/tmp/entry.txt node main.ts`
must produce byte-identical output (132 chars) both times, matching
`entry.txt`.
