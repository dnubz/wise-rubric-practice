# Character scripts

[Script index](README.md) · [Guide home](../README.md)

## CharacterBase.cs

[Project](<C:/Users/Ezell/WiSe/Assets/Scripts/Character/CharacterBase.cs>) · [Copy](../Scripts/Assets/Scripts/Character/CharacterBase.cs)

**Declared types:** `CharacterBase`.

**Teaching:** [OOP, ScriptableObjects, and event channels](../Features/01-architecture.md), [Movement, switching characters, HP/SP, EXP, and HUD](../Features/05-movement-and-party.md), [Two equipment slots, stat differences, and removing gear](../Features/11-equipment.md).

**Scene evidence:** no direct component reference in the four main scene YAML files. It may be a data/static type, prefab component, runtime-created component, or editor tool.

**Entry points and methods:**

- [UnlockUltimate (line 13)](<C:/Users/Ezell/WiSe/Assets/Scripts/Character/CharacterBase.cs:13>).
- [AdvanceBattleCooldowns (line 23)](<C:/Users/Ezell/WiSe/Assets/Scripts/Character/CharacterBase.cs:23>).
- [RestoreBattleCooldowns (line 24)](<C:/Users/Ezell/WiSe/Assets/Scripts/Character/CharacterBase.cs:24>).
- [SpendSP (line 25)](<C:/Users/Ezell/WiSe/Assets/Scripts/Character/CharacterBase.cs:25>).
- [InitializeProgress (line 54)](<C:/Users/Ezell/WiSe/Assets/Scripts/Character/CharacterBase.cs:54>).
- [GainExperience (line 66)](<C:/Users/Ezell/WiSe/Assets/Scripts/Character/CharacterBase.cs:66>).
- [SetHudEventChannel (line 78)](<C:/Users/Ezell/WiSe/Assets/Scripts/Character/CharacterBase.cs:78>).
- [NotifyStatsChanged (line 83)](<C:/Users/Ezell/WiSe/Assets/Scripts/Character/CharacterBase.cs:83>).
- [TestTakeDamage (line 96)](<C:/Users/Ezell/WiSe/Assets/Scripts/Character/CharacterBase.cs:96>).
- [TestUseSP (line 102)](<C:/Users/Ezell/WiSe/Assets/Scripts/Character/CharacterBase.cs:102>).
- [Awake (line 108)](<C:/Users/Ezell/WiSe/Assets/Scripts/Character/CharacterBase.cs:108>).
- [RestoreSavedState (line 115)](<C:/Users/Ezell/WiSe/Assets/Scripts/Character/CharacterBase.cs:115>).
- [GetCurrHP (line 124)](<C:/Users/Ezell/WiSe/Assets/Scripts/Character/CharacterBase.cs:124>).
- [GetCurrSP (line 130)](<C:/Users/Ezell/WiSe/Assets/Scripts/Character/CharacterBase.cs:130>).
- [GetMaxHP (line 136)](<C:/Users/Ezell/WiSe/Assets/Scripts/Character/CharacterBase.cs:136>).
- [SetCurrentHP (line 144)](<C:/Users/Ezell/WiSe/Assets/Scripts/Character/CharacterBase.cs:144>).
- [TakeDamage (line 151)](<C:/Users/Ezell/WiSe/Assets/Scripts/Character/CharacterBase.cs:151>).
- [Heal (line 164)](<C:/Users/Ezell/WiSe/Assets/Scripts/Character/CharacterBase.cs:164>).
- [RestoreSP (line 177)](<C:/Users/Ezell/WiSe/Assets/Scripts/Character/CharacterBase.cs:177>).
- [GetMaxSP (line 190)](<C:/Users/Ezell/WiSe/Assets/Scripts/Character/CharacterBase.cs:190>).
- [GetTotalAttack (line 198)](<C:/Users/Ezell/WiSe/Assets/Scripts/Character/CharacterBase.cs:198>).
- [GetTotalDefense (line 206)](<C:/Users/Ezell/WiSe/Assets/Scripts/Character/CharacterBase.cs:206>).
- [GetTotalCrit (line 214)](<C:/Users/Ezell/WiSe/Assets/Scripts/Character/CharacterBase.cs:214>).
- [Equip (line 222)](<C:/Users/Ezell/WiSe/Assets/Scripts/Character/CharacterBase.cs:222>).
- [Unequip (line 230)](<C:/Users/Ezell/WiSe/Assets/Scripts/Character/CharacterBase.cs:230>).
- [ClampStats (line 238)](<C:/Users/Ezell/WiSe/Assets/Scripts/Character/CharacterBase.cs:238>).
- [IsDead (line 248)](<C:/Users/Ezell/WiSe/Assets/Scripts/Character/CharacterBase.cs:248>).
- [Die (line 253)](<C:/Users/Ezell/WiSe/Assets/Scripts/Character/CharacterBase.cs:253>).

## CharacterData.cs

[Project](<C:/Users/Ezell/WiSe/Assets/Scripts/Character/CharacterData.cs>) · [Copy](../Scripts/Assets/Scripts/Character/CharacterData.cs)

**Declared types:** `CharacterData`.

**Teaching:** [OOP, ScriptableObjects, and event channels](../Features/01-architecture.md).

**Scene evidence:** no direct component reference in the four main scene YAML files. It may be a data/static type, prefab component, runtime-created component, or editor tool.

## Druid.cs

[Project](<C:/Users/Ezell/WiSe/Assets/Scripts/Character/Druid.cs>) · [Copy](../Scripts/Assets/Scripts/Character/Druid.cs)

**Declared types:** `Druid`.

**Teaching:** [Druid: jumping, slow falling, and the pool cliff](../Features/08-druid-gliding.md).

**Direct saved-scene attachment:** GameScene.

**Entry points and methods:**

- [Min (line 8)](<C:/Users/Ezell/WiSe/Assets/Scripts/Character/Druid.cs:8>).
- [Awake (line 14)](<C:/Users/Ezell/WiSe/Assets/Scripts/Character/Druid.cs:14>).
- [OnEnable (line 25)](<C:/Users/Ezell/WiSe/Assets/Scripts/Character/Druid.cs:25>).
- [Update (line 34)](<C:/Users/Ezell/WiSe/Assets/Scripts/Character/Druid.cs:34>).
- [OnDisable (line 40)](<C:/Users/Ezell/WiSe/Assets/Scripts/Character/Druid.cs:40>).

## RandaL.cs

[Project](<C:/Users/Ezell/WiSe/Assets/Scripts/Character/RandaL.cs>) · [Copy](../Scripts/Assets/Scripts/Character/RandaL.cs)

**Declared types:** `RandaL`.

**Teaching:** [RandaL: book preview, raycasts, and placement constraints](../Features/07-randal-book.md).

**Direct saved-scene attachment:** GameScene.

**Entry points and methods:**

- [Range (line 13)](<C:/Users/Ezell/WiSe/Assets/Scripts/Character/RandaL.cs:13>).
- [Min (line 14)](<C:/Users/Ezell/WiSe/Assets/Scripts/Character/RandaL.cs:14>).
- [Min (line 15)](<C:/Users/Ezell/WiSe/Assets/Scripts/Character/RandaL.cs:15>).
- [Awake (line 35)](<C:/Users/Ezell/WiSe/Assets/Scripts/Character/RandaL.cs:35>).
- [OnEnable (line 44)](<C:/Users/Ezell/WiSe/Assets/Scripts/Character/RandaL.cs:44>).
- [OnDisable (line 55)](<C:/Users/Ezell/WiSe/Assets/Scripts/Character/RandaL.cs:55>).
- [Update (line 75)](<C:/Users/Ezell/WiSe/Assets/Scripts/Character/RandaL.cs:75>).
- [OnInteract (line 98)](<C:/Users/Ezell/WiSe/Assets/Scripts/Character/RandaL.cs:98>).
- [StopPlacement (line 111)](<C:/Users/Ezell/WiSe/Assets/Scripts/Character/RandaL.cs:111>).
- [TryPlaceBook (line 120)](<C:/Users/Ezell/WiSe/Assets/Scripts/Character/RandaL.cs:120>).
- [CreatePreview (line 158)](<C:/Users/Ezell/WiSe/Assets/Scripts/Character/RandaL.cs:158>).
- [FindPlacement (line 197)](<C:/Users/Ezell/WiSe/Assets/Scripts/Character/RandaL.cs:197>).
- [TintPreview (line 287)](<C:/Users/Ezell/WiSe/Assets/Scripts/Character/RandaL.cs:287>).
- [TryGetVisualBounds (line 298)](<C:/Users/Ezell/WiSe/Assets/Scripts/Character/RandaL.cs:298>).
- [AlignBottomToGround (line 310)](<C:/Users/Ezell/WiSe/Assets/Scripts/Character/RandaL.cs:310>).
- [EnsureSolidCollider (line 316)](<C:/Users/Ezell/WiSe/Assets/Scripts/Character/RandaL.cs:316>).
- [CreateFallbackBook (line 335)](<C:/Users/Ezell/WiSe/Assets/Scripts/Character/RandaL.cs:335>).
- [Vector3 (line 343)](<C:/Users/Ezell/WiSe/Assets/Scripts/Character/RandaL.cs:343>).
- [Vector3 (line 345)](<C:/Users/Ezell/WiSe/Assets/Scripts/Character/RandaL.cs:345>).
- [AddBookPart (line 351)](<C:/Users/Ezell/WiSe/Assets/Scripts/Character/RandaL.cs:351>).

## WiSe.cs

[Project](<C:/Users/Ezell/WiSe/Assets/Scripts/Character/WiSe.cs>) · [Copy](../Scripts/Assets/Scripts/Character/WiSe.cs)

**Declared types:** `WiSe`.

**Teaching:** [WiSe: cutting trees and cactus, and breaking decorations](../Features/06-wise-exploration.md).

**Direct saved-scene attachment:** GameScene.

**Entry points and methods:**

- [Update (line 9)](<C:/Users/Ezell/WiSe/Assets/Scripts/Character/WiSe.cs:9>).
- [FindClosestTree (line 16)](<C:/Users/Ezell/WiSe/Assets/Scripts/Character/WiSe.cs:16>).
- [CutTree (line 38)](<C:/Users/Ezell/WiSe/Assets/Scripts/Character/WiSe.cs:38>).
- [OnDrawGizmosSelected (line 49)](<C:/Users/Ezell/WiSe/Assets/Scripts/Character/WiSe.cs:49>).
