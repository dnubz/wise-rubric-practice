# Encounters, party turns, AP, cover, victory, and returns

[Guide home](../README.md) · [Controls](../01-controls.md) · [Script index](../ScriptReference/README.md)

**Workbook areas:** `Battle`.

## Entering a battle

BattleSession remembers encounter identity and return position, suspends exploration, and loads BattleScene. BattleController randomly selects one of three saved layouts and builds its NavMesh. It reuses the party's CharacterBase instances and spawns a group including the encountered species. Battle layout randomness includes runtime time, so a fixed overworld seed alone does not guarantee the same battle layout.

## The turn model

Player, Enemy, Acting, Victory, and GameOver are separate phases. You can switch living characters during the party turn. Each has a movement origin/radius and **two AP**. Skill/ultimate slots spend one AP; basic attack spends no AP but locks movement. SP, cooldown, phase, living state, and unlock gates also control usability.

Press T to end the party turn. Each living enemy resets movement, chooses the closest living target, moves within its range, and attacks. Party turns reset AP/movement and advance character cooldowns. Cooldowns are stored on CharacterBase and persist between battles.

## Damage, healing, and cover

`BattleUnit.Damage`: **max(1, round((raw attack − defense) × scale))**. A shield consumes one stack and blocks the complete hit before that calculation. Dead targets are excluded.

Cover intercepts projectiles and has HP/state feedback; at half health it becomes shorter. Projectile travel/collision determines the struck object, so selecting a target does not guarantee a shot bypasses cover. HP/SP changes create popups and refresh HUDs. Enemy-turn presentation makes unrelated units/cover translucent to emphasize the action.

## Death and results

A dead party unit has a stone appearance, disabled hitbox, and cannot act. Diamond through the existing item menu can revive it. All party dead means GameOver. All enemies defeated means Victory; total enemy EXP is granted to every party member and level changes are displayed.

Victory returns to the recorded encounter location and records its stable defeated ID. Save & Quit stores progress and return context, not an exact paused projectile. Dungeon battle saves resume through the dungeon's first-room restoration.

## UI and speed

BattleHUD displays portraits, HP/SP, skill icons/cooldowns, AP, turn messages, and results. Hover shows skill data; selection shows affected area. Key 5 toggles sequence speed between 1× and 4×. Special dodge/rhythm timing follows its own rules rather than simply accelerating every input window.

## Scripts to read

- [BattleSession.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleSession.cs>) — [included copy](../Scripts/Assets/Scripts/Battle/BattleSession.cs).
- [BattleController.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleController.cs>) — [included copy](../Scripts/Assets/Scripts/Battle/BattleController.cs).
- [BattleUnit.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleUnit.cs>) — [included copy](../Scripts/Assets/Scripts/Battle/BattleUnit.cs).
- [BattleLayout.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleLayout.cs>) — [included copy](../Scripts/Assets/Scripts/Battle/BattleLayout.cs).
- [BattleCover.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleCover.cs>) — [included copy](../Scripts/Assets/Scripts/Battle/BattleCover.cs).
- [BattleProjectile.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleProjectile.cs>) — [included copy](../Scripts/Assets/Scripts/Battle/BattleProjectile.cs).
- [BattleHUD.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleHUD.cs>) — [included copy](../Scripts/Assets/Scripts/Battle/BattleHUD.cs).
- [BattleAppearance.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleAppearance.cs>) — [included copy](../Scripts/Assets/Scripts/Battle/BattleAppearance.cs).
- [InventoryUI.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/InventoryUI.cs>) — [included copy](../Scripts/Assets/Scripts/UI/InGame/InventoryUI.cs).

## Small piece of the actual code

From [BattleController.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleController.cs:122>) (line 122). This is an excerpt; continue in the full script for context.

```csharp
public bool CanUse(int slot)
{
    if (Current == null || !Current.Alive || Phase != BattlePhase.Player || resolving || BattleSession.MenuOpen || CheatConsole.BlocksGameplayInput) return false;
    var skill = Skill(Selected, slot);
    return skill != null && Current.character.BattleCooldowns[slot] == 0 && Current.character.GetCurrSP() >= skill.sp &&
        (slot == 0 || Current.AP > 0) && (slot != 3 || Selected == 1 || Current.character.HasUltimate);
}
public void SelectSkill(int slot)
```

## Demonstrate it yourself

Trigger a real encounter hit. Move to the circle edge, use a basic attack to show movement locking, spend AP on a skill, and switch characters with C. End turn, show cover blocking, then win and verify the encounter stays defeated after return.

## Explain it in one answer

“Battle reuses the existing party, limits movement from each turn origin, spends AP/SP under cooldown gates, resolves real collisions, and returns using a stable encounter identity.”

## Exact workbook requirements covered here

The row number is the source locator. The rubric file preserves recorded scores separately.

- `Battle!B7`: Start battle when colliding with enemy/enemy hit — [rubric row](../Rubric/Battle.md#row-7).
- `Battle!B8`: Battle transition — [rubric row](../Rubric/Battle.md#row-8).
- `Battle!B9`: Minimum 3 layouts for battle — [rubric row](../Rubric/Battle.md#row-9).
- `Battle!B10`: Randomize the layout — [rubric row](../Rubric/Battle.md#row-10).
- `Battle!B15`: Characters — [rubric row](../Rubric/Battle.md#row-15).
- `Battle!B16`: Obstacle — [rubric row](../Rubric/Battle.md#row-16).
- `Battle!B17`: Obstacle state — [rubric row](../Rubric/Battle.md#row-17).
- `Battle!B18`: Enemy randomization — [rubric row](../Rubric/Battle.md#row-18).
- `Battle!B19`: Enemy, obstacle & character transparation — [rubric row](../Rubric/Battle.md#row-19).
- `Battle!B20`: Damage formula — [rubric row](../Rubric/Battle.md#row-20).
- `Battle!B21`: Damage and healing popup — [rubric row](../Rubric/Battle.md#row-21).
- `Battle!B22`: Victory — [rubric row](../Rubric/Battle.md#row-22).
- `Battle!B23`: Game over — [rubric row](../Rubric/Battle.md#row-23).
- `Battle!B28`: Changing character — [rubric row](../Rubric/Battle.md#row-28).
- `Battle!B29`: Character's movement range — [rubric row](../Rubric/Battle.md#row-29).
- `Battle!B30`: Character's movement range reset — [rubric row](../Rubric/Battle.md#row-30).
- `Battle!B31`: Character's action point — [rubric row](../Rubric/Battle.md#row-31).
- `Battle!B32`: Character's basic attack locking their position — [rubric row](../Rubric/Battle.md#row-32).
- `Battle!B33`: Character's death — [rubric row](../Rubric/Battle.md#row-33).
- `Battle!B34`: Persist skill cooldown — [rubric row](../Rubric/Battle.md#row-34).
- `Battle!B39`: Enemy's movement range — [rubric row](../Rubric/Battle.md#row-39).
- `Battle!B40`: Enemy's movement range reset — [rubric row](../Rubric/Battle.md#row-40).
- `Battle!B41`: Enemy's attack range — [rubric row](../Rubric/Battle.md#row-41).
- `Battle!B42`: Fast forward — [rubric row](../Rubric/Battle.md#row-42).
- `Battle!B47`: Each character's potrait — [rubric row](../Rubric/Battle.md#row-47).
- `Battle!B48`: Each character's HP bar — [rubric row](../Rubric/Battle.md#row-48).
- `Battle!B49`: Each character's SP bar — [rubric row](../Rubric/Battle.md#row-49).
- `Battle!B50`: Each character's skill icon — [rubric row](../Rubric/Battle.md#row-50).
- `Battle!B51`: Skill icon cooldown — [rubric row](../Rubric/Battle.md#row-51).
- `Battle!B52`: Each character's action point — [rubric row](../Rubric/Battle.md#row-52).
- `Battle!B57`: Enemy's turn UI — [rubric row](../Rubric/Battle.md#row-57).
- `Battle!B58`: Enemy's health bar — [rubric row](../Rubric/Battle.md#row-58).
- `Battle!B63`: Menu Overlay — [rubric row](../Rubric/Battle.md#row-63).
- `Battle!B64`: Use item while in the battle — [rubric row](../Rubric/Battle.md#row-64).
- `Battle!B65`: Save and quit — [rubric row](../Rubric/Battle.md#row-65).
- `Battle!B70`: Player's returning to location where the enemy was first encountered — [rubric row](../Rubric/Battle.md#row-70).
- `Battle!B71`: Defeated enemy not appearing again — [rubric row](../Rubric/Battle.md#row-71).
- `Battle!B76`: End turns — [rubric row](../Rubric/Battle.md#row-76).
- `Battle!B78`: Move — [rubric row](../Rubric/Battle.md#row-78).
- `Battle!B79`: Selecting skills — [rubric row](../Rubric/Battle.md#row-79).
- `Battle!B80`: Confirm skill — [rubric row](../Rubric/Battle.md#row-80).
- `Battle!B81`: Aiming & Charging (RandaL) — [rubric row](../Rubric/Battle.md#row-81).
- `Battle!B83`: Change character — [rubric row](../Rubric/Battle.md#row-83).
- `Battle!B84`: Esc to menu — [rubric row](../Rubric/Battle.md#row-84).
