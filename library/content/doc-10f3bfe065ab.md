# Berdly chemistry battle: answers, timer, attack, and defend

[Guide home](../README.md) · [Controls](../01-controls.md) · [Script index](../ScriptReference/README.md)

**Workbook areas:** `Minigame`.

## What the player does

Accept Berdly's challenge, choose Attack or Defend, and answer molecule-name questions using the four answer buttons or 1–4. The minigame has its own player/Berdly HP and screen states; it is separate from BattleController's 3D party battle.

## One turn

1. Choose the action and start a timed question sequence.
2. BerdlyChemistry supplies a molecule, correct name, and four shuffled answers.
3. The molecule view renders the graph and the UI displays the choices.
4. A correct answer increases correctAnswers and adjusts the remaining timer by `7 − 0.5 × correctAnswers`, clamped to 0–20 seconds.
5. A wrong answer or expired timer ends guessing.
6. The chosen action resolves, then Berdly attacks if still alive.
7. The next move selection opens unless victory/defeat was reached.

## Attack and defend

Attack damage is configured damagePerAnswer × correctAnswers (class default 10). The sonic-wave effect applies damage at impact, so HP change matches the attack animation cue.

Defend heals configured healPerAnswer × correctAnswers, limited by the minigame's 100 HP (class default six per answer). Choosing defend grants protection for two enemy attacks. Protected damage is reduced by 50%, and each protected attack consumes one protection turn. Berdly damage is configurable (class default 33).

## Win and unlock

On victory, FinishBattle unlocks WiSe's ultimate on the existing WiSe instance(s) and displays a result modal. Defeat allows retry. This unlock can later satisfy one dungeon-entry requirement.

## Practice and rendering limits

Questions target 2–11 carbons with simple branches. The naming code also supports recursive dungeon branches, so don't assume the two generators use identical complexity limits. The graph holds bonds and drawing coordinates separately. The view draws the graph; it does not decide the answer.

The timer/turn resolution continues while the cheat console captures gameplay keys. Use a spare playthrough when demonstrating `tpagacor` because it grants the normal victory unlock.

## Scripts to read

- [BerdlyBattleController.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/BerdlyBattleController.cs>) — [included copy](../Scripts/Assets/Scripts/UI/InGame/BerdlyBattleController.cs).
- [BerdlyMolecule.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/BerdlyMolecule.cs>) — [included copy](../Scripts/Assets/Scripts/UI/InGame/BerdlyMolecule.cs).
- [BerdlyMoleculeView.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/BerdlyMoleculeView.cs>) — [included copy](../Scripts/Assets/Scripts/UI/InGame/BerdlyMoleculeView.cs).
- [BerdlySonicWave.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/BerdlySonicWave.cs>) — [included copy](../Scripts/Assets/Scripts/UI/InGame/BerdlySonicWave.cs).
- [MinigameNPC.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/NPC/MinigameNPC.cs>) — [included copy](../Scripts/Assets/Scripts/NPC/MinigameNPC.cs).

## Small piece of the actual code

From [BerdlyBattleController.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/BerdlyBattleController.cs:295>) (line 295). This is an excerpt; continue in the full script for context.

```csharp
public void ChooseAnswer(int index)
{
    if (!waitingForAnswer || (Screen != BattleScreen.Attack && Screen != BattleScreen.Defend) || index < 0 || index >= 4) return;
    waitingForAnswer = false;
    if (remainingTime <= 0) { FinishGuessing("Time's up!"); return; }
    if (index != currentQuestion.CorrectIndex)
    { FinishGuessing("Incorrect!\n" + currentQuestion.CorrectName); return; }
    correctAnswers++;
    remainingTime = Mathf.Clamp(remainingTime + 7f - .5f * correctAnswers, 0f, 20f);
    if (remainingTime <= 0f) { UpdateTimer(); FinishGuessing("Time's up!"); return; }
    NextQuestion(); UpdateTimer(); ClearSelection();
}
```

## Demonstrate it yourself

Answer several questions correctly on Attack and show the resulting damage. On Defend, show healing and guard lasting two enemy attacks. Deliberately answer incorrectly to show resolution, then win and inspect WiSe's unlock.

## Explain it in one answer

“Berdly collects correct answers within a timer, converts them into attack damage or healing, then resolves an enemy hit. Naming and molecule rendering are separate from the battle controller.”

## Exact workbook requirements covered here

The row number is the source locator. The rubric file preserves recorded scores separately.

- `Minigame!B8`: Turn based system — [rubric row](../Rubric/Minigame.md#row-8).
- `Minigame!B9`: Health — [rubric row](../Rubric/Minigame.md#row-9).
- `Minigame!B10`: Render Molecule — [rubric row](../Rubric/Minigame.md#row-10).
- `Minigame!B11`: Timer — [rubric row](../Rubric/Minigame.md#row-11).
- `Minigame!B12`: Actions — [rubric row](../Rubric/Minigame.md#row-12).
- `Minigame!B13`: Molecule answer buttons — [rubric row](../Rubric/Minigame.md#row-13).
- `Minigame!B25`: Damage for each right answer — [rubric row](../Rubric/Minigame.md#row-25).
- `Minigame!B26`: Attack animation — [rubric row](../Rubric/Minigame.md#row-26).
- `Minigame!B31`: Protection for 2 turns — [rubric row](../Rubric/Minigame.md#row-31).
- `Minigame!B32`: Heal for each right answer — [rubric row](../Rubric/Minigame.md#row-32).
