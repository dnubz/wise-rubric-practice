# What is confirmed, what needs a playtest, and known gaps

[Guide home](../README.md) · [Controls](../01-controls.md) · [Script index](../ScriptReference/README.md)

**Workbook areas:** `General`, `Overworld`, `Main Menu`, `Dungeon`, `Battle`.

## What this review establishes

These guides were written from the supplied workbook, the current local source, core scenes/assets, and older Docs as secondary context. No Unity build, Play-mode session, or editor fixture was run for this documentation task. Existing PASS files are historical evidence only.

## Confirmed mismatches with your project instructions

| Requirement | Current source evidence | Result |
| --- | --- | --- |
| Boat at every 5×5 pool center, chest on its deck | PoolBoatContent creates PoolGlideCliff and places a landing-gated chest on its summit. The boat field is unused in this creation path. | Unmet boat/deck requirement. |
| Distinct walking sound for all four terrain types | SurfaceAudioSettings has grass/sand/rock and swimming; WalkingClip(1) returns rock. | Unmet distinct water walking-sound mapping. |

The code does implement prefab-based seeded WFC, Terrain tiles, inset 5×5 water with diagonal sand/dry rings, separate swimming surface, explicit fixed/fresh seeds, and WFC gameplay queries. Source implementation is not a new runtime certification.

## Workbook features not fully established

- Rain/blossom weather: no controller or clearly named main-scene wiring located in this review. Inspect ParticleSystem/Animator assets and run the intended behavior before claiming completion.
- Title character models, different animations, and Play animation: require direct title visual/animation review.
- Creativity/design, responsive UI, and optimization: human judgement/runtime inspection needed. Streaming/pooling/batching are mechanisms, not a benchmark or official score.
- Dungeon shop distribution: dungeon guide/friendly placement is present, but don't infer every interactable/shop subtype exists there from NPC inheritance alone.
- Four terrain audio assignments, boat/deck placement, and all corner/chunk shoreline cases: use the dedicated requirements as the expected result when playtesting, not the current behavior as the expected result.

## Important limits

Overworld removed resources do not have a saved depletion list. Dungeon saves resume in their first room. Mid-battle saves restore encounter context, not the exact action frame. Portal cooldown reduction loops over RandaL's own other slots. Naming follows the project's recursive tree notation.

## Existing editor tools

The script reference has every Editor helper and its actual MenuItem where present. Checks exercise behavior; Setup/Builder tools mutate scene/assets and are not equivalent to harmless read-only checks. Run a relevant check deliberately in Unity and read its output; do not call an old result a fresh pass.

Review the rubric row files for exact requirements and recorded scores. A workbook zero is a stored assessment input, not proof of absence; a positive value is not proof the current code still behaves correctly.

## Scripts to read

- [PoolBoatContent.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Terrain/PoolBoatContent.cs>) — [included copy](../Scripts/Assets/Scripts/Terrain/PoolBoatContent.cs).
- [SurfaceAudioSettings.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Audio/SurfaceAudioSettings.cs>) — [included copy](../Scripts/Assets/Scripts/Audio/SurfaceAudioSettings.cs).
- [GameSave.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Save/GameSave.cs>) — [included copy](../Scripts/Assets/Scripts/Save/GameSave.cs).
- [OverworldSeedChecks.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Editor/OverworldSeedChecks.cs>) — [included copy](../Scripts/Assets/Scripts/Editor/OverworldSeedChecks.cs).
- [EnemyRequirementsChecks.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Editor/EnemyRequirementsChecks.cs>) — [included copy](../Scripts/Assets/Scripts/Editor/EnemyRequirementsChecks.cs).
- [BattleChecks.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Editor/BattleChecks.cs>) — [included copy](../Scripts/Assets/Scripts/Editor/BattleChecks.cs).
- [SaveFileChecks.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Editor/SaveFileChecks.cs>) — [included copy](../Scripts/Assets/Scripts/Editor/SaveFileChecks.cs).

## Demonstrate it yourself

Use the verification checklist in the root of this folder. For each area, demonstrate the behavior and record the observed result. Prioritize the boat/deck, water sound, weather, and title-animation gaps. Do not silently change expected requirements to match the current game.

## Explain it in one answer

“The source explains how the systems are wired, but visual and runtime criteria need a playtest. The pool boat/deck and fourth walking-sound mapping are confirmed instruction gaps.”

## Exact workbook requirements covered here

The row number is the source locator. The rubric file preserves recorded scores separately.

- `Overworld!B30`: Rain weather — [rubric row](../Rubric/Overworld.md#row-30).
- `Overworld!B31`: Blossom weather — [rubric row](../Rubric/Overworld.md#row-31).
