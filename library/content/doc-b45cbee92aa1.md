# Demonstration and practice checklist

[Guide home](README.md)

Use a spare playthrough. These are suggested demonstrations, not a report that this task ran them.

## Menu, settings, and save

- [ ] Title, Play, Settings, Exit, and Continue behave correctly.
- [ ] Title shows all required character models and distinct animations; Play animation is visible.
- [ ] Music and SFX levels work independently across scene travel.
- [ ] FPS/resolution/window settings apply and restore.
- [ ] Three slots are independent; show saved level/playtime/location.
- [ ] Save & Quit succeeds before leaving; reload party/items/settings/world seed.
- [ ] Explain header/version/checksum and why binary is used.

## Exploration

- [ ] Move/jump/switch all three; white highlight, switch effect, and HUD remain correct.
- [ ] Only WiSe's player interaction cuts trees/cactus and breaks dungeon props.
- [ ] RandaL previews and rejects blocked/steep/out-of-range book placement.
- [ ] Druid slows falling while Space is held and clears it after switching.
- [ ] Fixed seed reproduces layout; fresh games normally use new seeds.
- [ ] Actual WFC-selected prefabs are Unity Terrain for grass/water/sand/rock.
- [ ] Water pool is 5×5; complete sand then grass/rock rings survive diagonal/chunk checks.
- [ ] Required pool boat and deck chest are present. **Known failure: current path creates a cliff.**
- [ ] Opened chest persists after chunk reload and save restoration.
- [ ] Walking sounds are distinct for all four terrain types. **Known failure: water maps to rock.**
- [ ] Streaming loads nearby chunks and removes distant object/data allocations.
- [ ] Trees/cactus drop resources; rock/mushroom pickup increments Resources.
- [ ] NPCs/landmarks/healing/decorations/enemies use valid placement.
- [ ] Rain/blossom behavior is located and demonstrated; source review did not locate it.
- [ ] Maps, camera view changes, zoom, and menu respond in context.

## Inventory, NPCs, and shops

- [ ] F completes typed dialogue, then advances/opens interaction.
- [ ] Yes/No prompt blocks world input and selects the correct minigame.
- [ ] Items show previews, remove one copy, and hide zero quantity.
- [ ] Diamond revives; normal potions reject dead/full-ineligible targets.
- [ ] Gear equips/removes in two slots with correct stat differences and no refill exploit.
- [ ] Shop quantity/price/gold/error flow works; Diamond is excluded.
- [ ] Merchant removes only its assigned resource type.

## Dungeon

- [ ] Entry requires both relevant ultimate unlocks.
- [ ] Explain random walk, weighted edges, Kruskal, parent/branch chain assignment.
- [ ] Show Spawn, Guide, Boss, Normal, Treasure, and Enemy content.
- [ ] Keys are available in intended chains and locks consume original keys once.
- [ ] Explain room graph generation separately from floor WFC.
- [ ] F gate/chest/door/break interactions show their real feedback.
- [ ] Map reveals neighbors, tracks visits, draws connections/portrait, rotates/pans.
- [ ] Different entrances retain separate layouts/progress; Continue resumes first room.

## Battle and skills

- [ ] Actual melee/projectile hit starts combat with a fade and random saved layout.
- [ ] Movement range, basic lock, two AP, SP/cooldown/unlock checks work.
- [ ] Normal/veteran enemy turns and cover interception are visible.
- [ ] Damage formula, shield absorption, healing popup, death, and Diamond revival are explainable.
- [ ] Use all twelve ability paths and show correct indicators/effects.
- [ ] Show WiSe kill reset, three-shield cap, five-round-robin fireballs, dodge timing/counters.
- [ ] Show RandaL lock switching, SP buff, portal cooldown scope, charged first-person barrage.
- [ ] Show Druid burst/pull/teleport validation and rhythm-driven charm.
- [ ] Show Jevil dialogue, summons/kidnap, all five patterns, and invincibility.
- [ ] Win grants party EXP; return location/defeated encounter persist.
- [ ] Menu items/save behavior and fast-forward respect each sequence's timing.

## Minigames and explanation

- [ ] Name a simple molecule: longest chain, numbering, branches, multipliers, tables.
- [ ] Explain that dungeon degree is chain nesting, not node neighbor count.
- [ ] Berdly correct/incorrect/timer flow, Attack/Defend, two protected hits, and unlock.
- [ ] Pink tap/hold timing, score weights, stamina, and 84,000 unlock threshold.
- [ ] Parse one actual beatmap tap and one hold from milliseconds to seconds.
- [ ] Demonstrate cheat input ownership and wrong-area rejection.
- [ ] Explain OOP, ScriptableObjects, event channels, Input System, and Git/GitHub using project examples.
- [ ] Measure optimization with Profiler evidence and inspect responsive UI at supported sizes.

Record the observed result and current seed/scene beside any failure. Historical PASS files do not replace a fresh run.
