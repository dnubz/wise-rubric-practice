# Movement, switching characters, HP/SP, EXP, and HUD

[Guide home](../README.md) · [Controls](../01-controls.md) · [Script index](../ScriptReference/README.md)

**Workbook areas:** `Characters`, `Overworld`, `Dungeon`.

## What the player does

WASD moves; Space jumps; 1/2/3 chooses WiSe/RandaL/Druid during exploration. The active character's HUD shows its live state. Battle uses a separate character-selection system.

## Movement flow

The generated Input System wrapper supplies movement/jump actions. `CharacterMovement` turns input into camera-relative horizontal motion, applies gravity/jump logic, and moves a CharacterController. Jump buffering and fresh ground contact help the jump respond near landings. Swimming is selected from WFC water plus actual water-bed depth and controller height.

Breaking a decoration temporarily blocks movement/switching and advances a timed animation/impact sequence. Gameplay overlays also block input, so pressing movement or number keys inside a modal does not control the exploration character.

## Switching flow

`SwitchToCharacter` remembers the previous position/rotation, activates the requested character there, disables the others, and broadcasts selection events. The camera and WFC streamer receive the new transform. A configured particle prefab is spawned on subsequent switches. White highlighting belongs to renderer/outline setup plus `ObjectHighlight`.

## Stats and progression

`CharacterBase` owns current HP/SP, level, EXP, ultimate unlock, two equipment slots, and four battle cooldowns. EXP uses **100 per level** with remainder carried forward. Level gain changes level/EXP here; these methods do not automatically increase the base attack/HP data just because the level rose.

Maximum stats and attack/defense/crit equal starting CharacterData values plus equipped bonuses. Equipping clamps current HP/SP down to a reduced maximum; it does not refill them when a larger maximum is equipped. Stat and selection events refresh the HUD.

**Important distinction:** disabling an exploration character during switching does not delete its stats. All party members still exist and can be saved or healed.

## Scripts to read

- [CharacterMovement.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/CharacterInput/CharacterMovement.cs>) — [included copy](../Scripts/Assets/Scripts/CharacterInput/CharacterMovement.cs).
- [CharacterSwitchManager.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/CharacterInput/CharacterSwitchManager.cs>) — [included copy](../Scripts/Assets/Scripts/CharacterInput/CharacterSwitchManager.cs).
- [CharacterBase.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Character/CharacterBase.cs>) — [included copy](../Scripts/Assets/Scripts/Character/CharacterBase.cs).
- [CurrentCharacterHud.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/CurrentCharacterHud.cs>) — [included copy](../Scripts/Assets/Scripts/UI/InGame/CurrentCharacterHud.cs).
- [CharacterExperienceHud.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/CharacterExperienceHud.cs>) — [included copy](../Scripts/Assets/Scripts/UI/InGame/CharacterExperienceHud.cs).
- [ObjectHighlight.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Highlight/ObjectHighlight.cs>) — [included copy](../Scripts/Assets/Scripts/Highlight/ObjectHighlight.cs).

## Small piece of the actual code

From [CharacterSwitchManager.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/CharacterInput/CharacterSwitchManager.cs:97>) (line 97). This is an excerpt; continue in the full script for context.

```csharp
public void SwitchToCharacter(int targetIndex)
{
    if (isInitialized && NPCChallengePrompt.BlocksGameplayInput) return;
    if (isInitialized && CurrentCharacterTransform != null &&
        CurrentCharacterTransform.TryGetComponent<CharacterMovement>(out var movement) && movement.IsBreakingDecoration) return;
    if (targetIndex < 0 || targetIndex >= characterGameObjects.Length) return;
    if (isInitialized && targetIndex == currentCharacterIndex) return;

    Vector3 lastPosition = characterGameObjects[currentCharacterIndex] != null
        ? characterGameObjects[currentCharacterIndex].transform.position
        : Vector3.zero;

    Quaternion lastRotation = characterGameObjects[currentCharacterIndex] != null
        ? characterGameObjects[currentCharacterIndex].transform.rotation
        : Quaternion.identity;
```

## Demonstrate it yourself

Move and jump with WiSe, switch to RandaL, then Druid. Confirm position stays continuous, HUD identity changes, and camera/streaming follow the new character. Watch EXP before and after a victory.

## Explain it in one answer

“Switching changes which existing character is active and transfers the exploration position. Stats stay on each character instance, while events update the HUD and camera.”

## Exact workbook requirements covered here

The row number is the source locator. The rubric file preserves recorded scores separately.

- `Characters!B7`: Character movement — [rubric row](../Rubric/Characters.md#row-7).
- `Characters!B8`: Highlight each character with white — [rubric row](../Rubric/Characters.md#row-8).
- `Characters!B9`: Switch character — [rubric row](../Rubric/Characters.md#row-9).
- `Characters!B10`: Particle effect — [rubric row](../Rubric/Characters.md#row-10).
- `Characters!B11`: Each character UI — [rubric row](../Rubric/Characters.md#row-11).
- `Characters!B35`: Animation — [rubric row](../Rubric/Characters.md#row-35).
- `Characters!B36`: SFX — [rubric row](../Rubric/Characters.md#row-36).
- `Dungeon!B50`: Change character — [rubric row](../Rubric/Dungeon.md#row-50).
- `Dungeon!B53`: Jump — [rubric row](../Rubric/Dungeon.md#row-53).
- `Overworld!B38`: Movement — [rubric row](../Rubric/Overworld.md#row-38).
- `Overworld!B39`: Changing character — [rubric row](../Rubric/Overworld.md#row-39).
- `Overworld!B42`: Jump — [rubric row](../Rubric/Overworld.md#row-42).
