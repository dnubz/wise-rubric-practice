# Battle scripts

[Script index](README.md) · [Guide home](../README.md)

## BattleAppearance.cs

[Project](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleAppearance.cs>) · [Copy](../Scripts/Assets/Scripts/Battle/BattleAppearance.cs)

**Declared types:** `BattleAppearance`.

**Teaching:** [Encounters, party turns, AP, cover, victory, and returns](../Features/20-battle-system.md).

**Direct saved-scene attachment:** BattleScene, GameScene.

**Entry points and methods:**

- [Prepare (line 11)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleAppearance.cs:11>).
- [Show (line 23)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleAppearance.cs:23>).
- [Restore (line 48)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleAppearance.cs:48>).
- [OnDestroy (line 54)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleAppearance.cs:54>).

## BattleAreaIndicator.cs

[Project](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleAreaIndicator.cs>) · [Copy](../Scripts/Assets/Scripts/Battle/BattleAreaIndicator.cs)

**Declared types:** `BattleAreaIndicator`.

**Role:** supporting code in this area. Trace its owner/controller and callers alongside the related feature chapters.

**Direct saved-scene attachment:** BattleScene.

**Entry points and methods:**

- [Awake (line 9)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleAreaIndicator.cs:9>).
- [Show (line 15)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleAreaIndicator.cs:15>).
- [Hide (line 24)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleAreaIndicator.cs:24>).
- [OnDestroy (line 25)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleAreaIndicator.cs:25>).

## BattleBossDialogue.cs

[Project](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleBossDialogue.cs>) · [Copy](../Scripts/Assets/Scripts/Battle/BattleBossDialogue.cs)

**Declared types:** `BattleBossDialogue`.

**Teaching:** [Jevil dialogue, summoning, kidnapping, and five dodge patterns](../Features/24-jevil-boss.md).

**Direct saved-scene attachment:** GameScene.

**Entry points and methods:**

- [Awake (line 12)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleBossDialogue.cs:12>).
- [Open (line 13)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleBossDialogue.cs:13>).
- [Dialogue (line 14)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleBossDialogue.cs:14>).
- [OnDestroy (line 27)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleBossDialogue.cs:27>).

## BattleBossGame.cs

[Project](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleBossGame.cs>) · [Copy](../Scripts/Assets/Scripts/Battle/BattleBossGame.cs)

**Declared types:** `BattleBossGame`, `Bullet`.

**Teaching:** [Jevil dialogue, summoning, kidnapping, and five dodge patterns](../Features/24-jevil-boss.md), [Git, GitHub, and explaining optimization](../Features/00-git-and-performance.md).

**Direct saved-scene attachment:** BattleScene.

**Entry points and methods:**

- [Play (line 23)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleBossGame.cs:23>).
- [Add (line 64)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleBossGame.cs:64>).
- [MoveScythe (line 99)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleBossGame.cs:99>).
- [Direction (line 112)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleBossGame.cs:112>).
- [ScytheHits (line 113)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleBossGame.cs:113>).
- [NearSegment (line 118)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleBossGame.cs:118>).
- [NearSegment (line 123)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleBossGame.cs:123>).
- [Add (line 129)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleBossGame.cs:129>).
- [Recycle (line 137)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleBossGame.cs:137>).
- [Rotate (line 143)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleBossGame.cs:143>).

## BattleCamera.cs

[Project](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleCamera.cs>) · [Copy](../Scripts/Assets/Scripts/Battle/BattleCamera.cs)

**Declared types:** `BattleCamera`.

**Teaching:** [Exploration camera, zoom, overworld map, and dungeon reveal](../Features/18-cameras-and-maps.md), [RandaL battle skills: lock-on, SP buff, portal, and barrage](../Features/22-randal-battle-skills.md).

**Direct saved-scene attachment:** BattleScene.

**Entry points and methods:**

- [SetFirstPerson (line 16)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleCamera.cs:16>).
- [FrameGroup (line 18)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleCamera.cs:18>).
- [Vector3 (line 41)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleCamera.cs:41>).
- [Zoom (line 49)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleCamera.cs:49>).
- [LateUpdate (line 55)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleCamera.cs:55>).

## BattleController.cs

[Project](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleController.cs>) · [Copy](../Scripts/Assets/Scripts/Battle/BattleController.cs)

**Declared types:** `BattlePhase`, `BattleController`.

**Teaching:** [Enemy FSM, navigation, Skeleton/Minion attacks, and variants](../Features/19-enemies.md), [Encounters, party turns, AP, cover, victory, and returns](../Features/20-battle-system.md), [WiSe battle skills: crescent, shields, dragon, and dodge](../Features/21-wise-battle-skills.md), [RandaL battle skills: lock-on, SP buff, portal, and barrage](../Features/22-randal-battle-skills.md), [Druid battle skills: healing burst, pull, teleport, and rhythm](../Features/23-druid-battle-skills.md), [Jevil dialogue, summoning, kidnapping, and five dodge patterns](../Features/24-jevil-boss.md).

**Direct saved-scene attachment:** BattleScene.

**Entry points and methods:**

- [Action (line 44)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleController.cs:44>).
- [Pressed (line 45)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleController.cs:45>).
- [Awake (line 46)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleController.cs:46>).
- [OnDestroy (line 47)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleController.cs:47>).
- [Setup (line 48)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleController.cs:48>).
- [SpawnEnemy (line 77)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleController.cs:77>).
- [Update (line 87)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleController.cs:87>).
- [SelectCharacter (line 112)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleController.cs:112>).
- [CycleCharacter (line 119)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleController.cs:119>).
- [Skill (line 121)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleController.cs:121>).
- [CanUse (line 122)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleController.cs:122>).
- [SelectSkill (line 129)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleController.cs:129>).
- [UpdateAim (line 137)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleController.cs:137>).
- [ConfirmSkill (line 168)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleController.cs:168>).
- [Cast (line 185)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleController.cs:185>).
- [Burst (line 280)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleController.cs:280>).
- [Magic (line 287)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleController.cs:287>).
- [Hit (line 288)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleController.cs:288>).
- [InCrescent (line 289)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleController.cs:289>).
- [DragonShot (line 295)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleController.cs:295>).
- [Shoot (line 300)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleController.cs:300>).
- [FireProjectile (line 302)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleController.cs:302>).
- [ArcaneBarrage (line 320)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleController.cs:320>).
- [StopChargeAudio (line 355)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleController.cs:355>).
- [BarrageProjectile (line 360)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleController.cs:360>).
- [GrandEnsemble (line 362)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleController.cs:362>).
- [EndTurn (line 390)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleController.cs:390>).
- [EnemyTurn (line 395)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleController.cs:395>).
- [EnemyAttack (line 437)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleController.cs:437>).
- [Dodge (line 453)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleController.cs:453>).
- [BossTurn (line 484)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleController.cs:484>).
- [FocusEnemy (line 503)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleController.cs:503>).
- [Wait (line 509)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleController.cs:509>).
- [Popup (line 511)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleController.cs:511>).
- [PlaySound (line 513)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleController.cs:513>).
- [Impact (line 514)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleController.cs:514>).
- [AreaEffect (line 516)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleController.cs:516>).
- [RefreshHUD (line 523)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleController.cs:523>).
- [RebuildGround (line 524)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleController.cs:524>).
- [CheckEnd (line 525)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleController.cs:525>).
- [DefeatAllEnemies (line 537)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleController.cs:537>).
- [ReturnFromBattle (line 538)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleController.cs:538>).
- [FlatDistance (line 539)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleController.cs:539>).
- [ClosestEnemy (line 540)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleController.cs:540>).
- [DrawCircle (line 541)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleController.cs:541>).
- [DrawArc (line 549)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleController.cs:549>).
- [HideAim (line 557)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleController.cs:557>).
- [OpenBossDialogue (line 558)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleController.cs:558>).

## BattleCover.cs

[Project](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleCover.cs>) · [Copy](../Scripts/Assets/Scripts/Battle/BattleCover.cs)

**Declared types:** `BattleCover`.

**Teaching:** [Encounters, party turns, AP, cover, victory, and returns](../Features/20-battle-system.md).

**Direct saved-scene attachment:** BattleScene.

**Entry points and methods:**

- [Awake (line 14)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleCover.cs:14>).
- [Damage (line 15)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleCover.cs:15>).

## BattleCrescentVisual.cs

[Project](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleCrescentVisual.cs>) · [Copy](../Scripts/Assets/Scripts/Battle/BattleCrescentVisual.cs)

**Declared types:** `BattleCrescentVisual`.

**Teaching:** [WiSe battle skills: crescent, shields, dragon, and dodge](../Features/21-wise-battle-skills.md).

**Scene evidence:** no direct component reference in the four main scene YAML files. It may be a data/static type, prefab component, runtime-created component, or editor tool.

**Entry points and methods:**

- [Update (line 8)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleCrescentVisual.cs:8>).

## BattleDragonCompanion.cs

[Project](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleDragonCompanion.cs>) · [Copy](../Scripts/Assets/Scripts/Battle/BattleDragonCompanion.cs)

**Declared types:** `BattleDragonCompanion`.

**Teaching:** [WiSe battle skills: crescent, shields, dragon, and dodge](../Features/21-wise-battle-skills.md).

**Scene evidence:** no direct component reference in the four main scene YAML files. It may be a data/static type, prefab component, runtime-created component, or editor tool.

**Entry points and methods:**

- [Bind (line 9)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleDragonCompanion.cs:9>).
- [Aim (line 14)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleDragonCompanion.cs:14>).
- [StopAiming (line 15)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleDragonCompanion.cs:15>).
- [LateUpdate (line 16)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleDragonCompanion.cs:16>).
- [Follow (line 22)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleDragonCompanion.cs:22>).

## BattleDragonVisual.cs

[Project](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleDragonVisual.cs>) · [Copy](../Scripts/Assets/Scripts/Battle/BattleDragonVisual.cs)

**Declared types:** `BattleDragonVisual`.

**Teaching:** [WiSe battle skills: crescent, shields, dragon, and dodge](../Features/21-wise-battle-skills.md).

**Scene evidence:** no direct component reference in the four main scene YAML files. It may be a data/static type, prefab component, runtime-created component, or editor tool.

**Entry points and methods:**

- [Awake (line 7)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleDragonVisual.cs:7>).
- [Update (line 8)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleDragonVisual.cs:8>).

## BattleEffectVisual.cs

[Project](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleEffectVisual.cs>) · [Copy](../Scripts/Assets/Scripts/Battle/BattleEffectVisual.cs)

**Declared types:** `BattleEffectVisual`.

**Teaching:** [Audio routing, footsteps, particles, highlights, and UI feedback](../Features/29-audio-and-visual-feedback.md).

**Scene evidence:** no direct component reference in the four main scene YAML files. It may be a data/static type, prefab component, runtime-created component, or editor tool.

**Entry points and methods:**

- [Awake (line 9)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleEffectVisual.cs:9>).
- [SetSize (line 10)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleEffectVisual.cs:10>).
- [Update (line 11)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleEffectVisual.cs:11>).

## BattleEnemyData.cs

[Project](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleEnemyData.cs>) · [Copy](../Scripts/Assets/Scripts/Battle/BattleEnemyData.cs)

**Declared types:** `BattleEnemyData`.

**Teaching:** [Enemy FSM, navigation, Skeleton/Minion attacks, and variants](../Features/19-enemies.md).

**Scene evidence:** no direct component reference in the four main scene YAML files. It may be a data/static type, prefab component, runtime-created component, or editor tool.

## BattleEnemyMotion.cs

[Project](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleEnemyMotion.cs>) · [Copy](../Scripts/Assets/Scripts/Battle/BattleEnemyMotion.cs)

**Declared types:** `BattleEnemyMotion`.

**Teaching:** [Enemy FSM, navigation, Skeleton/Minion attacks, and variants](../Features/19-enemies.md).

**Scene evidence:** no direct component reference in the four main scene YAML files. It may be a data/static type, prefab component, runtime-created component, or editor tool.

**Entry points and methods:**

- [Awake (line 12)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleEnemyMotion.cs:12>).
- [Strike (line 18)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleEnemyMotion.cs:18>).
- [Update (line 19)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleEnemyMotion.cs:19>).

## BattleHUD.cs

[Project](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleHUD.cs>) · [Copy](../Scripts/Assets/Scripts/Battle/BattleHUD.cs)

**Declared types:** `BattleHUD`.

**Teaching:** [Encounters, party turns, AP, cover, victory, and returns](../Features/20-battle-system.md).

**Direct saved-scene attachment:** BattleScene.

**Entry points and methods:**

- [Start (line 22)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleHUD.cs:22>).
- [Refresh (line 30)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleHUD.cs:30>).
- [ShowSkillInfo (line 63)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleHUD.cs:63>).
- [HideSkillInfo (line 74)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleHUD.cs:74>).
- [OnDisable (line 75)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleHUD.cs:75>).
- [Message (line 76)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleHUD.cs:76>).
- [ShowVictory (line 77)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleHUD.cs:77>).
- [ShowGameOver (line 89)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleHUD.cs:89>).
- [Return (line 94)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleHUD.cs:94>).

## BattleLayout.cs

[Project](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleLayout.cs>) · [Copy](../Scripts/Assets/Scripts/Battle/BattleLayout.cs)

**Declared types:** `BattleLayout`.

**Teaching:** [Encounters, party turns, AP, cover, victory, and returns](../Features/20-battle-system.md).

**Direct saved-scene attachment:** BattleScene.

## BattlePopup.cs

[Project](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattlePopup.cs>) · [Copy](../Scripts/Assets/Scripts/Battle/BattlePopup.cs)

**Declared types:** `BattlePopup`.

**Role:** supporting code in this area. Trace its owner/controller and callers alongside the related feature chapters.

**Scene evidence:** no direct component reference in the four main scene YAML files. It may be a data/static type, prefab component, runtime-created component, or editor tool.

**Entry points and methods:**

- [Update (line 8)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattlePopup.cs:8>).

## BattleProjectile.cs

[Project](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleProjectile.cs>) · [Copy](../Scripts/Assets/Scripts/Battle/BattleProjectile.cs)

**Declared types:** `BattleProjectile`.

**Teaching:** [Encounters, party turns, AP, cover, victory, and returns](../Features/20-battle-system.md), [RandaL battle skills: lock-on, SP buff, portal, and barrage](../Features/22-randal-battle-skills.md).

**Scene evidence:** no direct component reference in the four main scene YAML files. It may be a data/static type, prefab component, runtime-created component, or editor tool.

**Entry points and methods:**

- [Launch (line 14)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleProjectile.cs:14>).
- [Update (line 16)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleProjectile.cs:16>).
- [Finish (line 39)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleProjectile.cs:39>).
- [OnDestroy (line 40)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleProjectile.cs:40>).

## BattleSession.cs

[Project](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleSession.cs>) · [Copy](../Scripts/Assets/Scripts/Battle/BattleSession.cs)

**Declared types:** `BattleSession`.

**Teaching:** [Encounters, party turns, AP, cover, victory, and returns](../Features/20-battle-system.md), [Cheat console, area checks, and all supported commands](../Features/28-cheats.md).

**Direct saved-scene attachment:** GameScene.

**Entry points and methods:**

- [Awake (line 40)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleSession.cs:40>).
- [IsDefeated (line 41)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleSession.cs:41>).
- [RestoreDefeated (line 43)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleSession.cs:43>).
- [Begin (line 44)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleSession.cs:44>).
- [Fade (line 52)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleSession.cs:52>).
- [Enter (line 60)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleSession.cs:60>).
- [Disable (line 90)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleSession.cs:90>).
- [Hide (line 91)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleSession.cs:91>).
- [Finish (line 92)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleSession.cs:92>).
- [Leave (line 98)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleSession.cs:98>).
- [OpenMenu (line 131)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleSession.cs:131>).
- [CheatWin (line 132)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleSession.cs:132>).
- [OnDestroy (line 133)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleSession.cs:133>).

## BattleSettings.cs

[Project](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleSettings.cs>) · [Copy](../Scripts/Assets/Scripts/Battle/BattleSettings.cs)

**Declared types:** `BattleEnemyKind`, `BattleSettings`.

**Role:** supporting code in this area. Trace its owner/controller and callers alongside the related feature chapters.

**Scene evidence:** no direct component reference in the four main scene YAML files. It may be a data/static type, prefab component, runtime-created component, or editor tool.

## BattleSkill.cs

[Project](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleSkill.cs>) · [Copy](../Scripts/Assets/Scripts/Battle/BattleSkill.cs)

**Declared types:** `BattleSkill`.

**Teaching:** [WiSe battle skills: crescent, shields, dragon, and dodge](../Features/21-wise-battle-skills.md), [RandaL battle skills: lock-on, SP buff, portal, and barrage](../Features/22-randal-battle-skills.md), [Druid battle skills: healing burst, pull, teleport, and rhythm](../Features/23-druid-battle-skills.md).

**Scene evidence:** no direct component reference in the four main scene YAML files. It may be a data/static type, prefab component, runtime-created component, or editor tool.

## BattleSkillHover.cs

[Project](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleSkillHover.cs>) · [Copy](../Scripts/Assets/Scripts/Battle/BattleSkillHover.cs)

**Declared types:** `BattleSkillHover`.

**Role:** supporting code in this area. Trace its owner/controller and callers alongside the related feature chapters.

**Direct saved-scene attachment:** BattleScene.

**Entry points and methods:**

- [OnPointerEnter (line 8)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleSkillHover.cs:8>).
- [OnPointerExit (line 9)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleSkillHover.cs:9>).
- [OnDisable (line 10)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleSkillHover.cs:10>).

## BattleStatusVisual.cs

[Project](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleStatusVisual.cs>) · [Copy](../Scripts/Assets/Scripts/Battle/BattleStatusVisual.cs)

**Declared types:** `BattleStatusVisual`.

**Role:** supporting code in this area. Trace its owner/controller and callers alongside the related feature chapters.

**Scene evidence:** no direct component reference in the four main scene YAML files. It may be a data/static type, prefab component, runtime-created component, or editor tool.

**Entry points and methods:**

- [Bind (line 8)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleStatusVisual.cs:8>).
- [LateUpdate (line 9)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleStatusVisual.cs:9>).

## BattleUnit.cs

[Project](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleUnit.cs>) · [Copy](../Scripts/Assets/Scripts/Battle/BattleUnit.cs)

**Declared types:** `BattleUnit`.

**Teaching:** [Encounters, party turns, AP, cover, victory, and returns](../Features/20-battle-system.md), [WiSe battle skills: crescent, shields, dragon, and dodge](../Features/21-wise-battle-skills.md), [RandaL battle skills: lock-on, SP buff, portal, and barrage](../Features/22-randal-battle-skills.md), [Druid battle skills: healing burst, pull, teleport, and rhythm](../Features/23-druid-battle-skills.md), [Jevil dialogue, summoning, kidnapping, and five dodge patterns](../Features/24-jevil-boss.md).

**Direct saved-scene attachment:** GameScene.

**Entry points and methods:**

- [Begin (line 29)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleUnit.cs:29>).
- [FitBattleHitbox (line 61)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleUnit.cs:61>).
- [ClearEffects (line 71)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleUnit.cs:71>).
- [StartTurn (line 76)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleUnit.cs:76>).
- [ResetMovement (line 83)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleUnit.cs:83>).
- [HoldPosition (line 84)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleUnit.cs:84>).
- [Move (line 89)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleUnit.cs:89>).
- [LimitMovementStep (line 113)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleUnit.cs:113>).
- [ClampMovement (line 129)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleUnit.cs:129>).
- [PullTowards (line 137)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleUnit.cs:137>).
- [Damage (line 151)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleUnit.cs:151>).
- [Heal (line 159)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleUnit.cs:159>).
- [Refresh (line 168)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleUnit.cs:168>).
- [LateUpdate (line 178)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleUnit.cs:178>).
- [Animate (line 191)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleUnit.cs:191>).

## BattleWorldUI.cs

[Project](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleWorldUI.cs>) · [Copy](../Scripts/Assets/Scripts/Battle/BattleWorldUI.cs)

**Declared types:** `BattleWorldUI`.

**Role:** supporting code in this area. Trace its owner/controller and callers alongside the related feature chapters.

**Scene evidence:** no direct component reference in the four main scene YAML files. It may be a data/static type, prefab component, runtime-created component, or editor tool.

**Entry points and methods:**

- [Refresh (line 10)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleWorldUI.cs:10>).
- [LateUpdate (line 11)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleWorldUI.cs:11>).

## EncounterEnemy.cs

[Project](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/EncounterEnemy.cs>) · [Copy](../Scripts/Assets/Scripts/Battle/EncounterEnemy.cs)

**Declared types:** `EncounterEnemy`, `State`.

**Teaching:** [Enemy FSM, navigation, Skeleton/Minion attacks, and variants](../Features/19-enemies.md).

**Scene evidence:** no direct component reference in the four main scene YAML files. It may be a data/static type, prefab component, runtime-created component, or editor tool.

**Entry points and methods:**

- [Configure (line 23)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/EncounterEnemy.cs:23>).
- [OnEnable (line 37)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/EncounterEnemy.cs:37>).
- [Update (line 38)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/EncounterEnemy.cs:38>).
- [SetState (line 98)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/EncounterEnemy.cs:98>).
- [TryPatrolDestination (line 105)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/EncounterEnemy.cs:105>).
- [MoveToward (line 125)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/EncounterEnemy.cs:125>).
- [StopMoving (line 144)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/EncounterEnemy.cs:144>).
- [CanHit (line 146)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/EncounterEnemy.cs:146>).
- [StopMoving (line 157)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/EncounterEnemy.cs:157>).
- [OnDisable (line 164)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/EncounterEnemy.cs:164>).
- [Defeat (line 165)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/EncounterEnemy.cs:165>).

## EncounterProjectile.cs

[Project](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/EncounterProjectile.cs>) · [Copy](../Scripts/Assets/Scripts/Battle/EncounterProjectile.cs)

**Declared types:** `EncounterProjectile`.

**Teaching:** [Enemy FSM, navigation, Skeleton/Minion attacks, and variants](../Features/19-enemies.md).

**Scene evidence:** no direct component reference in the four main scene YAML files. It may be a data/static type, prefab component, runtime-created component, or editor tool.

**Entry points and methods:**

- [Start (line 9)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/EncounterProjectile.cs:9>).
- [Update (line 10)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/EncounterProjectile.cs:10>).

## EnemySpawner.cs

[Project](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/EnemySpawner.cs>) · [Copy](../Scripts/Assets/Scripts/Battle/EnemySpawner.cs)

**Declared types:** `EnemySpawner`.

**Teaching:** [Infinite chunks, resources, buildings, NPCs, and decorations](../Features/14-streaming-and-content.md), [Enemy FSM, navigation, Skeleton/Minion attacks, and variants](../Features/19-enemies.md).

**Direct saved-scene attachment:** GameScene.

**Entry points and methods:**

- [SpawnChunk (line 7)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/EnemySpawner.cs:7>).

## ExplorationNavigation.cs

[Project](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/ExplorationNavigation.cs>) · [Copy](../Scripts/Assets/Scripts/Battle/ExplorationNavigation.cs)

**Declared types:** `ExplorationNavigation`.

**Teaching:** [RandaL: book preview, raycasts, and placement constraints](../Features/07-randal-book.md), [Enemy FSM, navigation, Skeleton/Minion attacks, and variants](../Features/19-enemies.md).

**Scene evidence:** no direct component reference in the four main scene YAML files. It may be a data/static type, prefab component, runtime-created component, or editor tool.

**Entry points and methods:**

- [Awake (line 20)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/ExplorationNavigation.cs:20>).
- [RequestRebuild (line 31)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/ExplorationNavigation.cs:31>).
- [BeforeTerrainChanges (line 33)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/ExplorationNavigation.cs:33>).
- [LateUpdate (line 40)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/ExplorationNavigation.cs:40>).
- [OnDestroy (line 103)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/ExplorationNavigation.cs:103>).
- [ExcludeWater (line 110)](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/ExplorationNavigation.cs:110>).
