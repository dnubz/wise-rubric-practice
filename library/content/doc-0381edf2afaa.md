# Infinite chunks, resources, buildings, NPCs, and decorations

[Guide home](../README.md) · [Controls](../01-controls.md) · [Script index](../ScriptReference/README.md)

**Workbook areas:** `Overworld`.

## What “infinite” means

The player can explore new chunk coordinates while the game keeps nearby chunk objects loaded. It does not instantiate an infinite number of Terrain objects at startup.

## Runtime streaming flow

WFCWorldManager tracks the active character's chunk. On a relevant move or explicit refresh, it generates chunks in view distance and removes distant chunk objects/generated TerrainData. Logical terrain can also be queried/cached without creating the full visible chunk, for example by the minimap.

For a visible chunk, terrain prefabs are created first, then pool/obstacle content and resources. Buildings are placed before NPCs so NPCs can avoid their footprints. Decorations and encounters are added afterward. Physics transforms are synchronized before ground-dependent placement.

## What is randomized

- Grass can contain a tree, mushroom, or rock from one cumulative probability roll per tile.
- Sand can contain cactus from its own probability roll.
- Seeded building/NPC/encounter streams choose locations independently.
- Decorations use biome noise plus a separate seed and a per-chunk count limit.
- Placement reads actual TerrainCollider ground and rejects water or occupied footprints.

`GeneratedResourceMarker` distinguishes decorative objects from collectible gameplay resources. A decoration that looks like a plant should not automatically grant an inventory item.

## Healing spots and landmarks

BuildingSpawner owns healing/dungeon landmark placement. HealingSpot detects proximity, restores HP/SP for all existing party characters, plays feedback, and limits repeat healing with a cooldown (class default three seconds).

## Performance and persistence limits

Chunks reduce the number of live objects, but generation and navigation rebuilding still cost time. There is no fresh performance benchmark in this documentation task. Stable seeds reproduce content positions; explicit progress sets are needed to preserve depletion. Chests/defeated encounters have such sets, while overworld resource removal does not have an equivalent saved list.

Rain and blossom weather are workbook requirements. No weather controller or clearly named weather wiring was located in the reviewed runtime scripts/main scenes; treat those rows as **not located**, pending direct scene inspection.

## Scripts to read

- [WFCWorldManager.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Terrain/WFCWorldManager.cs>) — [included copy](../Scripts/Assets/Scripts/Terrain/WFCWorldManager.cs).
- [ResourceSpawner.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Terrain/ResourceSpawner.cs>) — [included copy](../Scripts/Assets/Scripts/Terrain/ResourceSpawner.cs).
- [BuildingSpawner.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Terrain/BuildingSpawner.cs>) — [included copy](../Scripts/Assets/Scripts/Terrain/BuildingSpawner.cs).
- [NPCSpawner.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Terrain/NPCSpawner.cs>) — [included copy](../Scripts/Assets/Scripts/Terrain/NPCSpawner.cs).
- [OverworldDecorationSpawner.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Terrain/OverworldDecorationSpawner.cs>) — [included copy](../Scripts/Assets/Scripts/Terrain/OverworldDecorationSpawner.cs).
- [ChunkSpawnUtility.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Terrain/ChunkSpawnUtility.cs>) — [included copy](../Scripts/Assets/Scripts/Terrain/ChunkSpawnUtility.cs).
- [EnemySpawner.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/EnemySpawner.cs>) — [included copy](../Scripts/Assets/Scripts/Battle/EnemySpawner.cs).
- [HealingSpot.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Terrain/HealingSpot.cs>) — [included copy](../Scripts/Assets/Scripts/Terrain/HealingSpot.cs).

## Small piece of the actual code

From [ResourceSpawner.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Terrain/ResourceSpawner.cs:17>) (line 17). This is an excerpt; continue in the full script for context.

```csharp
public void Spawn(Vector3 position, float tileSize, System.Random random, Transform parent, int terrainType)
{
    if (terrainType == 0)
        SpawnGrass(position, tileSize, random, parent);

    if (terrainType == 2)
        SpawnSand(position, tileSize, random, parent);
}

```

## Demonstrate it yourself

Walk across a chunk boundary and watch Chunk objects appear/disappear in the Hierarchy. Collect a rock/mushroom, cut a tree, approach a healing spot, and inspect the inventory/gold/HP effects. Compare content positions after returning with the same seed.

## Explain it in one answer

“The world streams a finite window of seeded chunks. WFC creates ground first, then independent spawners place resources, buildings, NPCs, decoration, and encounters on valid terrain.”

## Exact workbook requirements covered here

The row number is the source locator. The rubric file preserves recorded scores separately.

- `Overworld!B20`: Landmark — [rubric row](../Rubric/Overworld.md#row-20).
- `Overworld!B21`: Healing spot — [rubric row](../Rubric/Overworld.md#row-21).
- `Overworld!B22`: Infinite overworld — [rubric row](../Rubric/Overworld.md#row-22).
- `Overworld!B23`: Runtime streaming — [rubric row](../Rubric/Overworld.md#row-23).
- `Overworld!B24`: Randomized tree & cactus — [rubric row](../Rubric/Overworld.md#row-24).
- `Overworld!B26`: Randomized mushroom & rock — [rubric row](../Rubric/Overworld.md#row-26).
- `Overworld!B27`: Collecting mushroom & rock — [rubric row](../Rubric/Overworld.md#row-27).
- `Overworld!B28`: Randomized decoration — [rubric row](../Rubric/Overworld.md#row-28).
- `Overworld!B29`: Randomized enemy — [rubric row](../Rubric/Overworld.md#row-29).
