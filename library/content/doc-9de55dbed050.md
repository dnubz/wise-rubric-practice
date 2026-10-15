# Pink rhythm: beatmap parsing, tap/hold judgements, and score

[Guide home](../README.md) · [Controls](../01-controls.md) · [Script index](../ScriptReference/README.md)

**Workbook areas:** `Rythm Game`, `Minigame`, `Skills`.

## What the player does

Accept Pink's challenge and use W/A/S/D as notes reach the target. Tap notes need a press; hold notes need a press followed by sustained input. The UI shows score, judgement, stamina, moving notes, and the Mario/Pink stage model.

## Beatmap format

PinkBeatmap.Parse requires a `start=` audio offset and a `notes=` count. `1 t=1000` is a W tap at one second. `2 t_start=2000 t_end=3500` is an A hold from two to 3.5 seconds. Note timestamps are milliseconds; the parsed model stores seconds. Keys 1/2/3/4 map to W/A/S/D. Invalid headers, mismatched counts, or a hold ending before its start throw format errors.

## Clock and rendering

PinkRhythmController schedules music/countdown and uses the audio DSP clock to advance play. It supplies pressed/held key masks to the rules. UI note positions are drawn from note time versus current time, and a visual pool reuses note objects. `timingOffset` is the configurable alignment adjustment.

## Tap judgement and rewards

| Judgement | Absolute timing error at most | Score weight | Stamina change |
| --- | --- | --- | --- |
| Perfect | 95 ms | 1.00 | +3.5 |
| Great | 161 ms | 0.85 | +2.5 |
| Good | 249 ms | 0.65 | +1.5 |
| Ok | 336 ms | 0.45 | +0.7 |
| Bad | 468 ms | 0.20 | −2 |
| Miss | Beyond 468 ms/unplayed | 0 | −3.5 |

Each note is worth `100000 / total notes × judgement weight`. DisplayScore rounds and caps at 100,000. Stamina stays in 0–100; zero fails. Extra unmatched key presses do not receive an invented stamina penalty.

## Hold judgement

The first press gets its timing judgement. Held duration is accumulated until release/end. At least 80% completion preserves the first judgement; 45–under 80% becomes Ok; under 45% becomes Bad. An initial Bad/Miss is not upgraded by holding. A hold is finalized/scored once, rather than scored every frame.

## Unlock and battle reuse

Completing without failure at **84,000 or more** unlocks Druid's ultimate. Grand Ensemble uses the same controller/rules with a shorter battle chart and a callback returning accuracy. It pauses/restores the surrounding music and restores its chart settings afterward.

The workbook spells its supporting sheet `Rythm Game`; the guide uses correct “rhythm” spelling while preserving that source locator.

## Scripts to read

- [PinkRhythmRules.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/PinkRhythmRules.cs>) — [included copy](../Scripts/Assets/Scripts/UI/InGame/PinkRhythmRules.cs).
- [PinkRhythmController.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/PinkRhythmController.cs>) — [included copy](../Scripts/Assets/Scripts/UI/InGame/PinkRhythmController.cs).
- [MinigameNPC.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/NPC/MinigameNPC.cs>) — [included copy](../Scripts/Assets/Scripts/NPC/MinigameNPC.cs).

## Small piece of the actual code

From [PinkRhythmRules.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/PinkRhythmRules.cs:115>) (line 115). This is an excerpt; continue in the full script for context.

```csharp
public static PinkJudgement JudgeHold(PinkJudgement first, double completion)
{
    if (first >= PinkJudgement.Bad) return first;
    if (completion + 1e-9 >= .8) return first;
    return completion + 1e-9 >= .45 ? PinkJudgement.Ok : PinkJudgement.Bad;
}
```

## Demonstrate it yourself

Play taps with intentionally early/perfect/late input. Start a hold and release at roughly half its duration, then finish one fully. Compare judgement/score/stamina and explain why holding does not score repeatedly. Check the 84,000 unlock boundary.

## Explain it in one answer

“The beatmap becomes timed notes, the audio clock drives key judgements, and each finalized note contributes a weighted fraction of 100,000. Holds combine first timing with completion.”

## Exact workbook requirements covered here

The row number is the source locator. The rubric file preserves recorded scores separately.

- `Minigame!B39`: Rhythm Minigame — [rubric row](../Rubric/Minigame.md#row-39).
- `Minigame!B40`: Stamina bar — [rubric row](../Rubric/Minigame.md#row-40).
- `Minigame!B41`: Parse Beatmap — [rubric row](../Rubric/Minigame.md#row-41).
- `Rythm Game!B5`: Key mapping — [rubric row](../Rubric/Rythm-Game.md#row-5).
- `Rythm Game!B6`: Key moving — [rubric row](../Rubric/Rythm-Game.md#row-6).
- `Rythm Game!B7`: UI for rhythm game — [rubric row](../Rubric/Rythm-Game.md#row-7).
- `Rythm Game!B8`: Tap notes — [rubric row](../Rubric/Rythm-Game.md#row-8).
- `Rythm Game!B9`: Hold notes — [rubric row](../Rubric/Rythm-Game.md#row-9).
- `Rythm Game!B10`: Judgements — [rubric row](../Rubric/Rythm-Game.md#row-10).
- `Rythm Game!B11`: Scoring — [rubric row](../Rubric/Rythm-Game.md#row-11).
- `Rythm Game!B12`: Hold notes judgements — [rubric row](../Rubric/Rythm-Game.md#row-12).
- `Rythm Game!B13`: Pink's model in the left — [rubric row](../Rubric/Rythm-Game.md#row-13).
