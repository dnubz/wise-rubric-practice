# Sources, review scope, and limitations

[Guide home](README.md)

## Primary sources

- Workbook: [!Scoring Game 26-2 JT.xlsx](<C:/Users/Ezell/Downloads/!Scoring Game 26-2 JT.xlsx>). All 21 sheets read; exact feature row labels and stored scores preserved in the rubric files.
- Project: `C:/Users/Ezell/WiSe`, Unity `6000.5.10f1` from ProjectVersion.txt.
- Instructions: [AGENTS.md](<C:/Users/Ezell/WiSe/AGENTS.md>). Required overworld behavior remains the expected behavior.
- Code: all 226 C# files in Assets/Scripts, Assets/Events, and the generated InputSystem wrapper are inventoried/copied. Main feature implementation paths were read to write the explanations.
- Scenes: TitleScene, GameScene, DungeonScene, BattleScene and their direct script references were inspected. Prefab/runtime attachments are not inferred solely from a scene YAML search.
- Data: configured gameplay ScriptableObject assets, naming tables, and input/beatmap files are referenced or included.

## Secondary context

Existing Docs/Battle.md, Docs/EnemyCriteria.md, Docs/SaveFiles.md, and Docs/CheatCodes.md helped locate feature paths. Current code takes precedence when an old document disagrees. Old Cheats.md says 3D battle/Jevil are absent, but current controller/cheat paths implement them.

## Review limits

No new Unity compilation, player build, Profiler measurement, editor fixture, or hands-on playtest was run. Explanations are source-based. Historical validation files were not treated as fresh results. The project PDF itself was not used as a source in this task because it was not the supplied file; PDF-derived overworld requirements were provided directly in AGENTS.md.

Workbook formulas were inspected with their stored results; they were not recalculated or repaired. Recorded grades can lag current implementation. Manual overrides and scoring dependencies are explained separately.

## Confirmed instruction gaps

PoolBoatContent creates a glide cliff with a chest, not the assigned boat/deck. SurfaceAudioSettings maps water walking to rock, with separate swimming audio instead of a fourth walking clip. Weather and title model/animation criteria were not established by this review and need direct verification.

## Snapshot details

The original working tree already contained edits to BattleCamera.cs and BattleController.cs. The included copies preserve the current local versions. Other chats or the Unity editor may change originals after this guide is created. The manifest records each copied source file's SHA-256 for comparison.

Snapshot date: 14 October 2026 (user-local date, Asia/Jakarta). Source copies are a study aid and omit the full playable Unity project, imported art, and packages.
