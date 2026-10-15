# Dungeon entry, room doors, keys, treasure, and breakables

[Guide home](../README.md) · [Controls](../01-controls.md) · [Script index](../ScriptReference/README.md)

**Workbook areas:** `Dungeon`.

## Entry requirements

F near an entrance opens the party/entry UI. DungeonSession checks that WiSe and Druid have their ultimates unlocked and the scene is in Build Settings. Complete Berdly/Pink challenges for normal unlocks; the relevant cheats are useful for demonstration in a spare playthrough.

## Travel flow

DungeonSession records the overworld return transform, suspends surface gameplay, loads the dungeon additively, and retains the same party/inventory. A fade hides generation. DungeonIdentity derives a stable entrance identity, so revisiting an entrance can restore its own saved dungeon instead of borrowing another entrance's progress.

Inside the dungeon, DungeonGenerator tracks the current room and nearest eligible interactions. F can open a chest, unlock a door, break a decoration, or use an exit. Door UI distinguishes locked/unlocked states. Room transitions fade the view and place the character in the connected room; the map updates afterward.

## Keys and gate behavior

Original keys are counted and consumed when an original-key door unlocks. A boss gate requires a boss key. The current unlocking code consumes original keys; it tests the boss key without decrementing it. Once a connection is unlocked, its progress is recorded and the player can travel through it.

DungeonGateLift animates the gate. Door highlights/lock icons are feedback; the actual permission comes from connection/key state.

## Room content

- Spawn provides the return/start location.
- Guide/Berdly explains the generated dungeon name.
- Normal rooms have decoration and can include friendly content.
- Treasure rooms provide chests; required key rooms are promoted from Normal to Treasure except the fixed guide.
- Enemy rooms spawn encounters using the shared enemy/battle system.
- Boss room leads to Jevil dialogue and battle.
- Breakable decorations play a timed swing/impact and can drop a coin; configured class defaults include a 10% coin chance.

## Saving during dungeon play

Snapshots retain graph, sizes/kinds, keys, opened chests/doors, broken objects, and remaining coin locations per entrance. Continue restores the first room with progress, not a mid-transition frame.

## Scripts to read

- [DungeonEntrance.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Terrain/DungeonEntrance.cs>) — [included copy](../Scripts/Assets/Scripts/Terrain/DungeonEntrance.cs).
- [DungeonSession.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonSession.cs>) — [included copy](../Scripts/Assets/Scripts/Dungeon/DungeonSession.cs).
- [DungeonGenerator.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonGenerator.cs>) — [included copy](../Scripts/Assets/Scripts/Dungeon/DungeonGenerator.cs).
- [DungeonRoomExit.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonRoomExit.cs>) — [included copy](../Scripts/Assets/Scripts/Dungeon/DungeonRoomExit.cs).
- [DungeonRoomTransition.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonRoomTransition.cs>) — [included copy](../Scripts/Assets/Scripts/Dungeon/DungeonRoomTransition.cs).
- [DungeonDoorUI.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonDoorUI.cs>) — [included copy](../Scripts/Assets/Scripts/Dungeon/DungeonDoorUI.cs).
- [DungeonGateLift.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonGateLift.cs>) — [included copy](../Scripts/Assets/Scripts/Dungeon/DungeonGateLift.cs).
- [DungeonBreakable.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonBreakable.cs>) — [included copy](../Scripts/Assets/Scripts/Dungeon/DungeonBreakable.cs).
- [SceneTravelFade.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/SceneTravelFade.cs>) — [included copy](../Scripts/Assets/Scripts/UI/SceneTravelFade.cs).

## Small piece of the actual code

From [DungeonSession.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonSession.cs:17>) (line 17). This is an excerpt; continue in the full script for context.

```csharp
public static bool IsInside => instance != null && instance.inside;
public static Vector3 SurfaceReturnPosition => instance != null ? instance.returnPosition : Vector3.zero;
public static Quaternion SurfaceReturnRotation => instance != null ? instance.returnRotation : Quaternion.identity;
public static bool BlocksGameplayInput => instance != null && (instance.modal != null && instance.modal.activeSelf || instance.loading ||
    instance.generator != null && instance.generator.IsRoomTransitioning) || closedFrame == Time.frameCount;
public static DungeonGenerator Generator => instance != null ? instance.generator : null;
[Header("Scene UI - GameplayCanvas / DungeonEntryUI")]
[SerializeField] GameObject modal, partyPanel;
```

## Demonstrate it yourself

Enter with both unlocks. Open an original-key chest, unlock a branch door, watch the key count change, and travel through. Break a decoration, inspect its coin drop, and return to the surface at the remembered entrance.

## Explain it in one answer

“The dungeon loads additively and keeps our existing party. Keys control graph connections, door/gate feedback reflects that state, and progress is saved per entrance.”

## Exact workbook requirements covered here

The row number is the source locator. The rubric file preserves recorded scores separately.

- `Dungeon!B26`: Tile decoration — [rubric row](../Rubric/Dungeon.md#row-26).
- `Dungeon!B27`: Breakable decoration — [rubric row](../Rubric/Dungeon.md#row-27).
- `Dungeon!B28`: Coin — [rubric row](../Rubric/Dungeon.md#row-28).
- `Dungeon!B29`: Coin drop from breakable decoration — [rubric row](../Rubric/Dungeon.md#row-29).
- `Dungeon!B30`: Normal room — [rubric row](../Rubric/Dungeon.md#row-30).
- `Dungeon!B31`: Treasure room — [rubric row](../Rubric/Dungeon.md#row-31).
- `Dungeon!B32`: Enemy room — [rubric row](../Rubric/Dungeon.md#row-32).
- `Dungeon!B33`: Berdly's room — [rubric row](../Rubric/Dungeon.md#row-33).
- `Dungeon!B52`: Interact — [rubric row](../Rubric/Dungeon.md#row-52).
