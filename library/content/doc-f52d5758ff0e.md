# Small glossary

[Guide home](README.md)

| Term | Meaning in this project |
| --- | --- |
| MonoBehaviour | Unity component attached to a GameObject; receives lifecycle callbacks. |
| ScriptableObject | Configurable asset data, such as an Item or BattleSkill. |
| Prefab | Saved object hierarchy instantiated by code. |
| Awake / Start | Initialization callbacks; GameSave's early order matters for restoring the seed. |
| OnEnable / OnDisable | Register/unregister actions/listeners as components activate. |
| Update / LateUpdate | Frame updates; late updates can follow earlier movement. |
| Coroutine | A sequence that can yield over frames, used for typing, fading, and attacks. |
| Event channel | An asset exposing events so publishers and HUD listeners share a connection. |
| Singleton | One accessible owner instance, used for systems such as PlayerInventory. |
| Seed | Initial random-generator input; combined with stable coordinates/salts for reproduction. |
| Salt | Extra seed input separating random streams for different content. |
| Chunk | A finite square section of streamed overworld tiles. |
| Domain | Possible tile choices still allowed for one WFC cell. |
| Entropy | A measure of uncertainty; lowest unresolved weighted entropy selects the next world cell. |
| Collapse / propagation | Choose one WFC option, then remove incompatible neighbor options. |
| TerrainData | Height/paint data used by a Unity Terrain instance. |
| Raycast | Collision query along a ray; used to find book-placement ground and blockers. |
| Overlap box / sphere | Collision query for objects within a volume. |
| NavMesh / agent | Walkable navigation data / component following paths on it. |
| FSM | Named states with conditions/actions; used by encounter enemies. |
| AP / SP | Turn action points / character skill resource. |
| Cooldown | Remaining unavailable-turn count for a skill, retained by the character. |
| Pooling | Reusing visual objects rather than recreating them repeatedly. |
| Tree graph | A connected graph without cycles; used for molecules/dungeon topology. |
| Kruskal / disjoint set | Sorted-edge tree construction / structure detecting already-connected nodes. |
| Locant | One-based branch position used for naming. |
| Dungeon degree | Recursive chain nesting depth, distinct from graph node degree. |
| DSP clock | Audio timing clock used by the rhythm controller. |
| Judgement | Timing/completion category that determines rhythm reward. |
| Binary schema | Agreed field types/order/version for saved bytes. |
| Checksum | Corruption detection hash; not encryption. |
| Additive scene | A scene loaded alongside the existing scene to retain party/world state. |
| PlayerPrefs | Stored application preferences; not the full playthrough save format. |
