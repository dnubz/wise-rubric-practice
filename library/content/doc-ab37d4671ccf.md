# Dungeon scripts

[Script index](README.md) · [Guide home](../README.md)

## DungeonAreaTitle.cs

[Project](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonAreaTitle.cs>) · [Copy](../Scripts/Assets/Scripts/Dungeon/DungeonAreaTitle.cs)

**Declared types:** `DungeonAreaTitle`.

**Teaching:** [Audio routing, footsteps, particles, highlights, and UI feedback](../Features/29-audio-and-visual-feedback.md).

**Scene evidence:** no direct component reference in the four main scene YAML files. It may be a data/static type, prefab component, runtime-created component, or editor tool.

**Entry points and methods:**

- [ResetStatics (line 16)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonAreaTitle.cs:16>).
- [ShowOverworld (line 18)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonAreaTitle.cs:18>).
- [HideOverworld (line 32)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonAreaTitle.cs:32>).
- [OnDisable (line 34)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonAreaTitle.cs:34>).
- [StopPresentation (line 35)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonAreaTitle.cs:35>).
- [Play (line 41)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonAreaTitle.cs:41>).
- [Present (line 55)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonAreaTitle.cs:55>).
- [Fade (line 62)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonAreaTitle.cs:62>).

## DungeonAudio.cs

[Project](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonAudio.cs>) · [Copy](../Scripts/Assets/Scripts/Dungeon/DungeonAudio.cs)

**Declared types:** `DungeonAudio`.

**Role:** supporting code in this area. Trace its owner/controller and callers alongside the related feature chapters.

**Scene evidence:** no direct component reference in the four main scene YAML files. It may be a data/static type, prefab component, runtime-created component, or editor tool.

**Entry points and methods:**

- [Play (line 6)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonAudio.cs:6>).

## DungeonBreakable.cs

[Project](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonBreakable.cs>) · [Copy](../Scripts/Assets/Scripts/Dungeon/DungeonBreakable.cs)

**Declared types:** `DungeonBreakable`.

**Teaching:** [WiSe: cutting trees and cactus, and breaking decorations](../Features/06-wise-exploration.md), [Dungeon entry, room doors, keys, treasure, and breakables](../Features/17-dungeon-travel-and-rooms.md).

**Scene evidence:** no direct component reference in the four main scene YAML files. It may be a data/static type, prefab component, runtime-created component, or editor tool.

**Entry points and methods:**

- [Initialize (line 14)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonBreakable.cs:14>).
- [TryBreak (line 21)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonBreakable.cs:21>).
- [CanBreak (line 34)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonBreakable.cs:34>).
- [BreakAtImpact (line 44)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonBreakable.cs:44>).
- [Collapse (line 61)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonBreakable.cs:61>).

## DungeonDoorHighlight.cs

[Project](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonDoorHighlight.cs>) · [Copy](../Scripts/Assets/Scripts/Dungeon/DungeonDoorHighlight.cs)

**Declared types:** `DungeonDoorHighlight`.

**Role:** supporting code in this area. Trace its owner/controller and callers alongside the related feature chapters.

**Scene evidence:** no direct component reference in the four main scene YAML files. It may be a data/static type, prefab component, runtime-created component, or editor tool.

**Entry points and methods:**

- [SetHighlighted (line 8)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonDoorHighlight.cs:8>).

## DungeonDoorUI.cs

[Project](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonDoorUI.cs>) · [Copy](../Scripts/Assets/Scripts/Dungeon/DungeonDoorUI.cs)

**Declared types:** `DungeonDoorUI`.

**Teaching:** [Dungeon entry, room doors, keys, treasure, and breakables](../Features/17-dungeon-travel-and-rooms.md).

**Scene evidence:** no direct component reference in the four main scene YAML files. It may be a data/static type, prefab component, runtime-created component, or editor tool.

**Entry points and methods:**

- [SetLock (line 10)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonDoorUI.cs:10>).
- [LateUpdate (line 16)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonDoorUI.cs:16>).

## DungeonFloorWFC.cs

[Project](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonFloorWFC.cs>) · [Copy](../Scripts/Assets/Scripts/Dungeon/DungeonFloorWFC.cs)

**Declared types:** `DungeonFloorWFC`.

**Teaching:** [Dungeon room graphs, chains, keys, and floor WFC](../Features/16-dungeon-generation.md).

**Scene evidence:** no direct component reference in the four main scene YAML files. It may be a data/static type, prefab component, runtime-created component, or editor tool.

**Entry points and methods:**

- [Generate (line 11)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonFloorWFC.cs:11>).
- [Propagate (line 55)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonFloorWFC.cs:55>).
- [Reduce (line 68)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonFloorWFC.cs:68>).
- [Count (line 74)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonFloorWFC.cs:74>).

## DungeonGateLift.cs

[Project](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonGateLift.cs>) · [Copy](../Scripts/Assets/Scripts/Dungeon/DungeonGateLift.cs)

**Declared types:** `DungeonGateLift`.

**Teaching:** [Dungeon entry, room doors, keys, treasure, and breakables](../Features/17-dungeon-travel-and-rooms.md).

**Scene evidence:** no direct component reference in the four main scene YAML files. It may be a data/static type, prefab component, runtime-created component, or editor tool.

**Entry points and methods:**

- [Initialize (line 18)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonGateLift.cs:18>).
- [Update (line 33)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonGateLift.cs:33>).
- [MoveGate (line 38)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonGateLift.cs:38>).

## DungeonGenerator.cs

[Project](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonGenerator.cs>) · [Copy](../Scripts/Assets/Scripts/Dungeon/DungeonGenerator.cs)

**Declared types:** `DungeonGenerator`, `InteractionKind`, `Interaction`, `DoorConnection`.

**Teaching:** [WiSe: cutting trees and cactus, and breaking decorations](../Features/06-wise-exploration.md), [Dungeon room graphs, chains, keys, and floor WFC](../Features/16-dungeon-generation.md), [Dungeon entry, room doors, keys, treasure, and breakables](../Features/17-dungeon-travel-and-rooms.md), [Cheat console, area checks, and all supported commands](../Features/28-cheats.md), [Git, GitHub, and explaining optimization](../Features/00-git-and-performance.md).

**Scene evidence:** no direct component reference in the four main scene YAML files. It may be a data/static type, prefab component, runtime-created component, or editor tool.

**Entry points and methods:**

- [RoomCentre (line 68)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonGenerator.cs:68>).
- [Build (line 70)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonGenerator.cs:70>).
- [Table (line 113)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonGenerator.cs:113>).
- [BeginExploration (line 120)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonGenerator.cs:120>).
- [ShowArrival (line 140)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonGenerator.cs:140>).
- [CaptureSave (line 148)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonGenerator.cs:148>).
- [RestoreProgress (line 172)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonGenerator.cs:172>).
- [BuildRoom (line 198)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonGenerator.cs:198>).
- [Vector3 (line 221)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonGenerator.cs:221>).
- [SpawnRoomEnemies (line 250)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonGenerator.cs:250>).
- [BuildDecorations (line 273)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonGenerator.cs:273>).
- [DecorationPosition (line 330)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonGenerator.cs:330>).
- [SpawnCoin (line 353)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonGenerator.cs:353>).
- [BuildDoorways (line 380)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonGenerator.cs:380>).
- [BuildExit (line 388)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonGenerator.cs:388>).
- [BuildLandmarks (line 441)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonGenerator.cs:441>).
- [CreateChest (line 472)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonGenerator.cs:472>).
- [ModelBounds (line 508)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonGenerator.cs:508>).
- [FitModel (line 516)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonGenerator.cs:516>).
- [BuildFloor (line 527)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonGenerator.cs:527>).
- [Batch (line 559)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonGenerator.cs:559>).
- [MaterialFor (line 565)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonGenerator.cs:565>).
- [CreateGoldMaterial (line 571)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonGenerator.cs:571>).
- [BuildHUD (line 580)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonGenerator.cs:580>).
- [Update (line 589)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonGenerator.cs:589>).
- [PlayCoinPickup (line 605)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonGenerator.cs:605>).
- [TryInteractNearest (line 618)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonGenerator.cs:618>).
- [CanInteractNearby (line 629)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonGenerator.cs:629>).
- [FindNearestInteraction (line 636)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonGenerator.cs:636>).
- [HorizontalDistance (line 652)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonGenerator.cs:652>).
- [Interact (line 653)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonGenerator.cs:653>).
- [OpenChest (line 673)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonGenerator.cs:673>).
- [RevealMainPath (line 681)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonGenerator.cs:681>).
- [RevealAllRooms (line 682)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonGenerator.cs:682>).
- [SkipToBoss (line 683)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonGenerator.cs:683>).
- [UnlockDoor (line 694)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonGenerator.cs:694>).
- [HasKey (line 711)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonGenerator.cs:711>).
- [FindConnection (line 714)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonGenerator.cs:714>).
- [TryUnlockExit (line 717)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonGenerator.cs:717>).
- [CanOpenExit (line 725)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonGenerator.cs:725>).
- [TryUseExit (line 731)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonGenerator.cs:731>).
- [TeleportToRoom (line 749)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonGenerator.cs:749>).
- [ChangeRoom (line 753)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonGenerator.cs:753>).
- [OnDisable (line 770)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonGenerator.cs:770>).
- [TeleportToRoom (line 777)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonGenerator.cs:777>).
- [PresentBossRoom (line 799)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonGenerator.cs:799>).
- [VisitRoom (line 807)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonGenerator.cs:807>).
- [OnDestroy (line 815)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonGenerator.cs:815>).
- [LateUpdate (line 820)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonGenerator.cs:820>).
- [RefreshInteractionFeedback (line 826)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonGenerator.cs:826>).
- [MovePlayerLight (line 855)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonGenerator.cs:855>).

## DungeonIdentity.cs

[Project](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonIdentity.cs>) · [Copy](../Scripts/Assets/Scripts/Dungeon/DungeonIdentity.cs)

**Declared types:** `DungeonIdentity`.

**Role:** supporting code in this area. Trace its owner/controller and callers alongside the related feature chapters.

**Scene evidence:** no direct component reference in the four main scene YAML files. It may be a data/static type, prefab component, runtime-created component, or editor tool.

**Entry points and methods:**

- [At (line 7)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonIdentity.cs:7>).
- [Seed (line 8)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonIdentity.cs:8>).

## DungeonInteractionUI.cs

[Project](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonInteractionUI.cs>) · [Copy](../Scripts/Assets/Scripts/Dungeon/DungeonInteractionUI.cs)

**Declared types:** `DungeonInteractionUI`.

**Role:** supporting code in this area. Trace its owner/controller and callers alongside the related feature chapters.

**Scene evidence:** no direct component reference in the four main scene YAML files. It may be a data/static type, prefab component, runtime-created component, or editor tool.

**Entry points and methods:**

- [Awake (line 9)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonInteractionUI.cs:9>).
- [ShowFor (line 11)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonInteractionUI.cs:11>).

## DungeonKeyGraphic.cs

[Project](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonKeyGraphic.cs>) · [Copy](../Scripts/Assets/Scripts/Dungeon/DungeonKeyGraphic.cs)

**Declared types:** `DungeonKeyGraphic`, `Kind`.

**Role:** supporting code in this area. Trace its owner/controller and callers alongside the related feature chapters.

**Scene evidence:** no direct component reference in the four main scene YAML files. It may be a data/static type, prefab component, runtime-created component, or editor tool.

**Entry points and methods:**

- [Awake (line 10)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonKeyGraphic.cs:10>).
- [OnPopulateMesh (line 11)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonKeyGraphic.cs:11>).
- [Ring (line 37)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonKeyGraphic.cs:37>).
- [KeyQuad (line 38)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonKeyGraphic.cs:38>).
- [Point (line 41)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonKeyGraphic.cs:41>).
- [Quad (line 44)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonKeyGraphic.cs:44>).
- [AddQuad (line 46)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonKeyGraphic.cs:46>).
- [Polygon (line 52)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonKeyGraphic.cs:52>).
- [Vertex (line 62)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonKeyGraphic.cs:62>).

## DungeonKeyHud.cs

[Project](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonKeyHud.cs>) · [Copy](../Scripts/Assets/Scripts/Dungeon/DungeonKeyHud.cs)

**Declared types:** `DungeonKeyHud`.

**Role:** supporting code in this area. Trace its owner/controller and callers alongside the related feature chapters.

**Scene evidence:** no direct component reference in the four main scene YAML files. It may be a data/static type, prefab component, runtime-created component, or editor tool.

**Entry points and methods:**

- [KeyColour (line 8)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonKeyHud.cs:8>).
- [Color (line 9)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonKeyHud.cs:9>).
- [Initialize (line 13)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonKeyHud.cs:13>).
- [Refresh (line 20)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonKeyHud.cs:20>).
- [CreateSlot (line 25)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonKeyHud.cs:25>).
- [Rect (line 38)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonKeyHud.cs:38>).

## DungeonLayout.cs

[Project](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonLayout.cs>) · [Copy](../Scripts/Assets/Scripts/Dungeon/DungeonLayout.cs)

**Declared types:** `DungeonRoomKind`, `DungeonKeyKind`, `DungeonRoomData`, `DungeonDoorData`, `DungeonLayout`, `Edge`.

**Teaching:** [Dungeon room graphs, chains, keys, and floor WFC](../Features/16-dungeon-generation.md), [The shared molecule and dungeon naming algorithm](../Features/26-iupac-algorithm.md).

**Scene evidence:** no direct component reference in the four main scene YAML files. It may be a data/static type, prefab component, runtime-created component, or editor tool.

**Entry points and methods:**

- [ChooseRoomCount (line 37)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonLayout.cs:37>).
- [Generate (line 45)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonLayout.cs:45>).
- [AssignChains (line 106)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonLayout.cs:106>).
- [WalkTree (line 122)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonLayout.cs:122>).
- [Find (line 161)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonLayout.cs:161>).

## DungeonMinimap.cs

[Project](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonMinimap.cs>) · [Copy](../Scripts/Assets/Scripts/Dungeon/DungeonMinimap.cs)

**Declared types:** `DungeonMinimap`.

**Teaching:** [Exploration camera, zoom, overworld map, and dungeon reveal](../Features/18-cameras-and-maps.md).

**Scene evidence:** no direct component reference in the four main scene YAML files. It may be a data/static type, prefab component, runtime-created component, or editor tool.

**Entry points and methods:**

- [Initialize (line 30)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonMinimap.cs:30>).
- [Visit (line 59)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonMinimap.cs:59>).
- [RevealMainPath (line 66)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonMinimap.cs:66>).
- [RevealAllRooms (line 73)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonMinimap.cs:73>).
- [DegreeColour (line 83)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonMinimap.cs:83>).
- [IsConnectionRevealed (line 84)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonMinimap.cs:84>).
- [Paint (line 91)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonMinimap.cs:91>).
- [Centre (line 110)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonMinimap.cs:110>).
- [Fill (line 115)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonMinimap.cs:115>).
- [LateUpdate (line 120)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonMinimap.cs:120>).
- [PanInScreenDirections (line 139)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonMinimap.cs:139>).
- [OnDestroy (line 146)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonMinimap.cs:146>).

## DungeonPartyCard.cs

[Project](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonPartyCard.cs>) · [Copy](../Scripts/Assets/Scripts/Dungeon/DungeonPartyCard.cs)

**Declared types:** `DungeonPartyCard`.

**Role:** supporting code in this area. Trace its owner/controller and callers alongside the related feature chapters.

**Direct saved-scene attachment:** GameScene.

**Entry points and methods:**

- [Refresh (line 13)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonPartyCard.cs:13>).

## DungeonRoomExit.cs

[Project](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonRoomExit.cs>) · [Copy](../Scripts/Assets/Scripts/Dungeon/DungeonRoomExit.cs)

**Declared types:** `DungeonRoomExit`.

**Teaching:** [Dungeon entry, room doors, keys, treasure, and breakables](../Features/17-dungeon-travel-and-rooms.md).

**Scene evidence:** no direct component reference in the four main scene YAML files. It may be a data/static type, prefab component, runtime-created component, or editor tool.

**Entry points and methods:**

- [Initialize (line 11)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonRoomExit.cs:11>).
- [Interact (line 19)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonRoomExit.cs:19>).

## DungeonRoomTransition.cs

[Project](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonRoomTransition.cs>) · [Copy](../Scripts/Assets/Scripts/Dungeon/DungeonRoomTransition.cs)

**Declared types:** `DungeonRoomTransition`.

**Teaching:** [Dungeon entry, room doors, keys, treasure, and breakables](../Features/17-dungeon-travel-and-rooms.md).

**Scene evidence:** no direct component reference in the four main scene YAML files. It may be a data/static type, prefab component, runtime-created component, or editor tool.

**Entry points and methods:**

- [Clear (line 9)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonRoomTransition.cs:9>).
- [OnDisable (line 10)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonRoomTransition.cs:10>).
- [FadeTo (line 11)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonRoomTransition.cs:11>).

## DungeonSession.cs

[Project](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonSession.cs>) · [Copy](../Scripts/Assets/Scripts/Dungeon/DungeonSession.cs)

**Declared types:** `DungeonSession`.

**Teaching:** [Dungeon entry, room doors, keys, treasure, and breakables](../Features/17-dungeon-travel-and-rooms.md).

**Direct saved-scene attachment:** GameScene.

**Entry points and methods:**

- [CaptureSavedDungeon (line 38)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonSession.cs:38>).
- [CaptureSavedDungeons (line 44)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonSession.cs:44>).
- [RememberDungeon (line 52)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonSession.cs:52>).
- [SavedAt (line 59)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonSession.cs:59>).
- [RestoreSavedDungeon (line 70)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonSession.cs:70>).
- [ResumeSavedDungeon (line 78)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonSession.cs:78>).
- [ResetStatics (line 92)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonSession.cs:92>).
- [Awake (line 94)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonSession.cs:94>).
- [Proceed (line 109)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonSession.cs:109>).
- [OpenEntry (line 111)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonSession.cs:111>).
- [RefreshEntryRequirements (line 119)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonSession.cs:119>).
- [ShowEntry (line 125)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonSession.cs:125>).
- [ShowMessage (line 151)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonSession.cs:151>).
- [Ensure (line 158)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonSession.cs:158>).
- [Update (line 166)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonSession.cs:166>).
- [Show (line 172)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonSession.cs:172>).
- [Close (line 182)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonSession.cs:182>).
- [Enter (line 184)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonSession.cs:184>).
- [Suspend (line 251)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonSession.cs:251>).
- [ReturnToSurface (line 256)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonSession.cs:256>).
- [Return (line 261)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonSession.cs:261>).
- [Teleport (line 282)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonSession.cs:282>).
- [OnDestroy (line 300)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonSession.cs:300>).
- [UIBox (line 307)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonSession.cs:307>).
- [UILabel (line 313)](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonSession.cs:313>).

## DungeonSettings.cs

[Project](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonSettings.cs>) · [Copy](../Scripts/Assets/Scripts/Dungeon/DungeonSettings.cs)

**Declared types:** `DungeonSettings`.

**Teaching:** [Dungeon room graphs, chains, keys, and floor WFC](../Features/16-dungeon-generation.md).

**Scene evidence:** no direct component reference in the four main scene YAML files. It may be a data/static type, prefab component, runtime-created component, or editor tool.
