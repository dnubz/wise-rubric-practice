# WiSe battle skills: crescent, shields, dragon, and dodge

[Guide home](../README.md) · [Controls](../01-controls.md) · [Script index](../ScriptReference/README.md)

**Workbook areas:** `Skills`.

## Where the abilities live

WiSe.cs owns exploration cutting. WiSe's battle abilities are the `characterIndex == 0` branches inside BattleController. BattleSkill assets supply name, description, icon, SP, cooldown, range, and radius; the controller supplies the actual effect.

| Slot/key | Behavior |
| --- | --- |
| Basic / 1 | A facing semicircle hits live enemies/cover with raw `25 + Attack`. A/D rotates the preview. A kill resets movement and basic cooldown, and heals ceil(5% max HP). |
| First skill / 2 | Adds one shield to living allies within radius, capped at three. Each stack cancels one complete incoming hit. |
| Second skill / 3 | Dragonfire selects enemies inside the aimed radius and launches five fireballs per target in round-robin order. |
| Ultimate / 4 | Flurry Rush enables a two-turn dodge stance after its unlock gate. |

## Dragonfire details

Raw total per target is the controller's magic-adjusted rounded `(60 + Attack × 1.1) × 0.7`. Integer division/remainder spreads that raw total over five projectiles. Defense is applied on each projectile hit, and cover can intercept them. Therefore “five shots” does not necessarily equal five successful enemy hits or total raw damage after defense.

Round robin means target A, B, C for volley 1, then A, B, C for volley 2, continuing up to five. Launches do not wait for each impact. The sequence waits until pending projectiles finish before returning to player phase.

## Dodge timing

Space is sampled during an incoming eligible attack. Perfect is 0.60–0.85 seconds, successful dodge input extends through 0.95 seconds, and missed/late-outside-window input fails. A perfect dodge permits up to five right-click counters within three seconds. The normal enemy sequence fast-forward does not shorten this dodge input window.

WiSe's ultimate is unlocked by winning Berdly's chemistry challenge, or explicitly by the `luluspresent` cheat. SP/AP/cooldown can still prevent casting after unlock.

## Scripts to read

- [BattleController.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleController.cs>) — [included copy](../Scripts/Assets/Scripts/Battle/BattleController.cs).
- [BattleSkill.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleSkill.cs>) — [included copy](../Scripts/Assets/Scripts/Battle/BattleSkill.cs).
- [BattleUnit.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleUnit.cs>) — [included copy](../Scripts/Assets/Scripts/Battle/BattleUnit.cs).
- [BattleDragonCompanion.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleDragonCompanion.cs>) — [included copy](../Scripts/Assets/Scripts/Battle/BattleDragonCompanion.cs).
- [BattleDragonVisual.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleDragonVisual.cs>) — [included copy](../Scripts/Assets/Scripts/Battle/BattleDragonVisual.cs).
- [BattleCrescentVisual.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleCrescentVisual.cs>) — [included copy](../Scripts/Assets/Scripts/Battle/BattleCrescentVisual.cs).

## Small piece of the actual code

From [BattleController.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleController.cs:212>) (line 212). This is an excerpt; continue in the full script for context.

```csharp
if (kill) { actor.ResetMovement(); actor.character.BattleCooldowns[0] = 0; actor.Heal(Mathf.CeilToInt(actor.MaxHP * .05f)); }
```

## Demonstrate it yourself

Rotate the basic crescent and kill a low-HP enemy to show the reset/heal. Add shields and show one disappearing per hit. Aim Dragonfire at multiple enemies and explain shot ordering. With ultimate unlocked, demonstrate early/perfect/late/missed dodge input.

## Explain it in one answer

“WiSe's battle skills are controller branches backed by skill assets. The basic rewards a kill, shields block hits, Dragonfire distributes five shots per target, and the ultimate checks a real timing window.”

## Exact workbook requirements covered here

The row number is the source locator. The rubric file preserves recorded scores separately.

- `Skills!B8`: Semicircular area — [rubric row](../Rubric/Skills.md#row-8).
- `Skills!B9`: Change direction — [rubric row](../Rubric/Skills.md#row-9).
- `Skills!B10`: Reset movement area, basic attack's cooldown, and heal when obtain kill — [rubric row](../Rubric/Skills.md#row-10).
- `Skills!B15`: Give shield that nullify damage — [rubric row](../Rubric/Skills.md#row-15).
- `Skills!B16`: Shield can stack up to 3 — [rubric row](../Rubric/Skills.md#row-16).
- `Skills!B21`: WiSe's dragon — [rubric row](../Rubric/Skills.md#row-21).
- `Skills!B22`: Attack indicator — [rubric row](../Rubric/Skills.md#row-22).
- `Skills!B23`: Shoot 5 fireball for each enemies — [rubric row](../Rubric/Skills.md#row-23).
- `Skills!B24`: Round robin the fireball shots — [rubric row](../Rubric/Skills.md#row-24).
- `Skills!B29`: Unlock criteria — [rubric row](../Rubric/Skills.md#row-29).
- `Skills!B30`: Perfect dodge — [rubric row](../Rubric/Skills.md#row-30).
- `Skills!B31`: Early/late dodge — [rubric row](../Rubric/Skills.md#row-31).
- `Skills!B36`: Animation — [rubric row](../Rubric/Skills.md#row-36).
- `Skills!B37`: SFX — [rubric row](../Rubric/Skills.md#row-37).
