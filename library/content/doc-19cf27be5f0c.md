# Git, GitHub, and explaining optimization

[Guide home](../README.md) · [Controls](../01-controls.md) · [Script index](../ScriptReference/README.md)

**Workbook areas:** `General`.

## Git and GitHub

Git records version history locally: working files → staged changes → commit. A branch is a movable label for a line of commits. GitHub hosts repositories for sharing, remote backup, and review. A commit can exist locally without being pushed to GitHub.

The inspected repository contains commits about enemy patrols/attacks, boss projectile speed, travel transitions, arrival feedback, Berdly animation, and dungeon generation limits. This shows local history. This documentation review did not inspect GitHub push timing, so “push periodically” needs remote evidence if assessed.

## Explain a useful commit

Describe the concrete behavior changed and why. Keep one coherent change per commit when practical. Read `git status` before staging so unrelated changes are not included. The working tree already had edits in BattleCamera.cs and BattleController.cs when this guide was created; their current contents are captured in the script copies.

## Optimization mechanisms in your game

| Mechanism | What work it reduces | Tradeoff to explain |
| --- | --- | --- |
| Nearby chunk streaming | Number of live world Terrain/content objects. | Generation/unload can still cause spikes. |
| Map redraw on tile/room change | Repeated texture rebuilding. | Camera/UI transforms still update. |
| Batched dungeon floor meshes | Separate material draw submissions. | Mesh building costs time and memory. |
| Pooled rhythm/boss visuals | Repeated Instantiate/Destroy churn. | The pool keeps spare objects in memory. |
| RaycastNonAlloc/OverlapBoxNonAlloc | Per-query result-array allocation. | Full buffers must be handled correctly. |
| Independent seeded data | Reproduction and stable content queries. | Determinism does not by itself make code faster. |

“Optimized” should be demonstrated with Unity Profiler measurements of frame time, allocations, memory, and generation cost under a representative playthrough. No such new measurement was made for this task. Avoid claiming a frame rate from the target-FPS setting alone.

## How to read before editing

Start with a feature's owning controller and follow its calls. A MonoBehaviour lives on an object, a ScriptableObject lives as data, and an Editor script is tooling. Check scene/prefab references before deciding a missing callback means missing behavior.

## Scripts to read

- [WFCWorldManager.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Terrain/WFCWorldManager.cs>) — [included copy](../Scripts/Assets/Scripts/Terrain/WFCWorldManager.cs).
- [DungeonGenerator.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonGenerator.cs>) — [included copy](../Scripts/Assets/Scripts/Dungeon/DungeonGenerator.cs).
- [BattleBossGame.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleBossGame.cs>) — [included copy](../Scripts/Assets/Scripts/Battle/BattleBossGame.cs).
- [PinkRhythmController.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/PinkRhythmController.cs>) — [included copy](../Scripts/Assets/Scripts/UI/InGame/PinkRhythmController.cs).

## Demonstrate it yourself

Show the local commit history and explain one coherent change. In Unity Profiler, compare steady walking with crossing a chunk boundary and name the CPU/memory work being measured. This guide does not contain a fabricated benchmark.

## Explain it in one answer

“Git tracks changes locally; GitHub shares the repository remotely. Streaming, batching, and pooling reduce specific work, but optimization must be supported by runtime measurements.”

## Exact workbook requirements covered here

The row number is the source locator. The rubric file preserves recorded scores separately.

- `General!B19`: Push into github periodically — [rubric row](../Rubric/General.md#row-19).
- `General!B20`: Using github's commit best practices — [rubric row](../Rubric/General.md#row-20).
- `General!B21`: Understand the difference between git and github — [rubric row](../Rubric/General.md#row-21).
- `General!B22`: Understand why use git — [rubric row](../Rubric/General.md#row-22).
