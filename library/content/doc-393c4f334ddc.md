# WiSe: cutting trees and cactus, and breaking decorations

[Guide home](../README.md) · [Controls](../01-controls.md) · [Script index](../ScriptReference/README.md)

**Workbook areas:** `Characters`, `Overworld`, `Dungeon`.

## What this ability does

WiSe is the exploration character for destructive interactions. Trees/cactus produce resource pickups; dungeon breakables use a timed swing/impact and may drop coins.

## How tree cutting works

`WiSe.Update` reads F directly through Input System's `Keyboard.current` and searches for a suitable nearby `TreeCuttable`. It coordinates the character's breaking animation with the cut. `TreeCuttable.Cut` checks a `cut` guard, creates its configured loot, disables colliders, requests navigation rebuilding, and destroys the object.

Each loot entry specifies an Item and amount. `WorldRandom.AtPosition` derives a repeatable drop random stream from world seed, X/Z position, and a salt. Drops become sprite objects with trigger pickups and bobbing visuals. Inventory receives one item per collected copy.

## How dungeon breaking differs

`DungeonGenerator` manages the interactable decoration and its room progress. `CharacterMovement` sequences windup, sound, and impact. A destroyed decoration can be recorded in the dungeon snapshot, so it stays broken after restoration.

## Why only WiSe should cut

The gate belongs to the interaction/controller path, not the low-level `TreeCuttable.Cut` method: another programmer could call that method directly. Demonstrate the actual player flow with another selected character to prove the restriction.

## Persistence limit

SaveData explicitly persists opened chests, defeated enemies, and dungeon breakables. It does not contain an overworld cut-tree or collected-resource list. A regenerated chunk can recreate those resources. Do not claim resource depletion survives every chunk unload or Continue.

Read the Inspector loot table to explain **what** drops; the code explains **how** those entries become pickups.

## Scripts to read

- [WiSe.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Character/WiSe.cs>) — [included copy](../Scripts/Assets/Scripts/Character/WiSe.cs).
- [TreeCuttable.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Terrain/TreeCuttable.cs>) — [included copy](../Scripts/Assets/Scripts/Terrain/TreeCuttable.cs).
- [WorldItem.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Terrain/WorldItem.cs>) — [included copy](../Scripts/Assets/Scripts/Terrain/WorldItem.cs).
- [CharacterMovement.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/CharacterInput/CharacterMovement.cs>) — [included copy](../Scripts/Assets/Scripts/CharacterInput/CharacterMovement.cs).
- [DungeonBreakable.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonBreakable.cs>) — [included copy](../Scripts/Assets/Scripts/Dungeon/DungeonBreakable.cs).
- [DungeonGenerator.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonGenerator.cs>) — [included copy](../Scripts/Assets/Scripts/Dungeon/DungeonGenerator.cs).

## Small piece of the actual code

From [TreeCuttable.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Terrain/TreeCuttable.cs:21>) (line 21). This is an excerpt; continue in the full script for context.

```csharp
public void Cut(Vector3 cutterPosition)
{
    if (cut) return;
    cut = true;
    SpawnLoot();
    foreach (Collider blocker in GetComponentsInChildren<Collider>()) blocker.enabled = false;
    GetComponentInParent<ExplorationNavigation>()?.RequestRebuild();
    Destroy(gameObject);
}

```

## Demonstrate it yourself

Approach a tree/cactus as RandaL and try F, then switch to WiSe and cut it. Collect the drops and inspect Resources. In a dungeon, break a decoration and watch the impact timing and possible coin drop.

## Explain it in one answer

“WiSe's interaction triggers a timed break. TreeCuttable creates the configured drops once for that live object, clears collision, and updates navigation.”

## Exact workbook requirements covered here

The row number is the source locator. The rubric file preserves recorded scores separately.

- `Characters!B16`: WiSe interaction with destructable object — [rubric row](../Rubric/Characters.md#row-16).
- `Characters!B17`: Only wise can interacted with destructable object — [rubric row](../Rubric/Characters.md#row-17).
- `Overworld!B25`: Tree & cactus drop — [rubric row](../Rubric/Overworld.md#row-25).
