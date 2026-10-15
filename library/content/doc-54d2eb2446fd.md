# Cheat console, area checks, and all supported commands

[Guide home](../README.md) · [Controls](../01-controls.md) · [Script index](../ScriptReference/README.md)

**Workbook areas:** `Cheats`.

## Opening and submitting

Press Ctrl in gameplay to open the console. Type/paste a complete known code; it runs automatically when it matches. Esc or Ctrl closes it. Matching ignores case and surrounding spaces. A successful command clears the input so another command can be entered.

The console captures gameplay keys without pausing the running world/music. A timing challenge may continue while you type. It rejects wrong-area commands and dungeon travel. Pink rhythm must be closed before these commands execute.

| Area | Code | Actual effect |
| --- | --- | --- |
| Overworld | Nerdlumarco / Nerdluryuu | Teleport to nearby loaded Berdly. |
| Overworld | wibulupaul | Teleport to nearby loaded Pink. |
| Overworld | cashgrab | Add 1,000 gold. |
| Overworld | equipment | Add one of every item in the equipment catalog. |
| Overworld | drain | Set party HP to one. |
| Overworld | luluspresent | Unlock WiSe ultimate on the live party. |
| Overworld | lastday | Unlock Druid ultimate on the live party. |
| Overworld | 724 | Find a dungeon entrance; if absent, try the existing seeded prefab-spawn path. |
| Overworld | spawnpoint | Return to the overworld origin, streaming ground if necessary. |
| Overworld | ptyusari | Teleport to a loaded shop. |
| Dungeon | showmain | Reveal/highlight the main naming chain. |
| Dungeon | revealall | Reveal/color all chains by degree. |
| Dungeon | skipskip | Move before boss and provide a Boss Key. |
| Battle | tpagacor | Defeat the current 3D battle group or win Berdly, using the normal victory path. |
| Battle | evalcore | Set party HP to one; also drains the Berdly minigame player where applicable. |

## Why teleports still use the world rules

Targets must be available in loaded content except the explicit dungeon/origin fallback. Landing selection checks clear dry Terrain using the WFC type, not just the visible blended color. `724` does not hand-build a replacement world: it asks the existing building spawner for the assigned dungeon prefab and remembers the forced landmark.

## Teaching and persistence

Unlock/gold/inventory cheats change live state and can be saved. They do not rewrite shared CharacterData assets. Use a spare playthrough if you want to preserve normal progression. Current CheatCodes supports the 3D battle too; the older Cheats.md sentence limiting battle cheats to Berdly is stale.

## Scripts to read

- [CheatConsole.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/CheatConsole.cs>) — [included copy](../Scripts/Assets/Scripts/UI/InGame/CheatConsole.cs).
- [CheatCodes.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/CheatCodes.cs>) — [included copy](../Scripts/Assets/Scripts/UI/InGame/CheatCodes.cs).
- [CheatEquipmentCatalog.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/CheatEquipmentCatalog.cs>) — [included copy](../Scripts/Assets/Scripts/UI/InGame/CheatEquipmentCatalog.cs).
- [DungeonGenerator.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonGenerator.cs>) — [included copy](../Scripts/Assets/Scripts/Dungeon/DungeonGenerator.cs).
- [BattleSession.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleSession.cs>) — [included copy](../Scripts/Assets/Scripts/Battle/BattleSession.cs).

## Small piece of the actual code

From [CheatCodes.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/CheatCodes.cs:34>) (line 34). This is an excerpt; continue in the full script for context.

```csharp
public static Definition Find(string code)
{
    string value = (code ?? "").Trim();
    foreach (var definition in Definitions)
        if (string.Equals(definition.Code, value, StringComparison.OrdinalIgnoreCase)) return definition;
    return null;
}
```

## Demonstrate it yourself

Open Ctrl, run cashgrab, and show the gold change. Try showmain in the overworld to demonstrate area rejection. In a spare run, unlock both ultimates and use 724; enter, run showmain/revealall, and explain reveal versus visit.

## Explain it in one answer

“The console normalizes known codes and validates the gameplay area before dispatch. It captures typing input while time continues, and world teleports still use WFC-compatible landing checks.”

## Exact workbook requirements covered here

The row number is the source locator. The rubric file preserves recorded scores separately.

- `Cheats!B7`: Nerdlumarco / Nerdluryuu — [rubric row](../Rubric/Cheats.md#row-7).
- `Cheats!B8`: wibulupaul — [rubric row](../Rubric/Cheats.md#row-8).
- `Cheats!B9`: cashgrab — [rubric row](../Rubric/Cheats.md#row-9).
- `Cheats!B10`: equipment — [rubric row](../Rubric/Cheats.md#row-10).
- `Cheats!B11`: drain — [rubric row](../Rubric/Cheats.md#row-11).
- `Cheats!B12`: luluspresent — [rubric row](../Rubric/Cheats.md#row-12).
- `Cheats!B13`: lastday — [rubric row](../Rubric/Cheats.md#row-13).
- `Cheats!B14`: 724 — [rubric row](../Rubric/Cheats.md#row-14).
- `Cheats!B15`: spawnpoint — [rubric row](../Rubric/Cheats.md#row-15).
- `Cheats!B16`: ptyusari — [rubric row](../Rubric/Cheats.md#row-16).
- `Cheats!B21`: showmain — [rubric row](../Rubric/Cheats.md#row-21).
- `Cheats!B22`: revealall — [rubric row](../Rubric/Cheats.md#row-22).
- `Cheats!B23`: skipskip — [rubric row](../Rubric/Cheats.md#row-23).
- `Cheats!B28`: tpagacor — [rubric row](../Rubric/Cheats.md#row-28).
- `Cheats!B29`: evalcore — [rubric row](../Rubric/Cheats.md#row-29).
