# UI / InGame scripts

[Script index](README.md) · [Guide home](../README.md)

## BerdlyBattleController.cs

[Project](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/BerdlyBattleController.cs>) · [Copy](../Scripts/Assets/Scripts/UI/InGame/BerdlyBattleController.cs)

**Declared types:** `BerdlyBattleController`, `BattleScreen`.

**Teaching:** [Berdly chemistry battle: answers, timer, attack, and defend](../Features/25-berdly-minigame.md).

**Direct saved-scene attachment:** GameScene.

**Entry points and methods:**

- [Reset (line 90)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/BerdlyBattleController.cs:90>).
- [Awake (line 91)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/BerdlyBattleController.cs:91>).
- [Initialize (line 93)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/BerdlyBattleController.cs:93>).
- [TryOpenFromNPC (line 134)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/BerdlyBattleController.cs:134>).
- [OpenBattle (line 147)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/BerdlyBattleController.cs:147>).
- [Open (line 149)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/BerdlyBattleController.cs:149>).
- [PrepareBattleUI (line 185)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/BerdlyBattleController.cs:185>).
- [GameObject (line 200)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/BerdlyBattleController.cs:200>).
- [Stretch (line 220)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/BerdlyBattleController.cs:220>).
- [ShowMoveSelection (line 227)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/BerdlyBattleController.cs:227>).
- [ChooseAttack (line 239)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/BerdlyBattleController.cs:239>).
- [ChooseDefend (line 240)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/BerdlyBattleController.cs:240>).
- [SelectMove (line 242)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/BerdlyBattleController.cs:242>).
- [NextQuestion (line 257)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/BerdlyBattleController.cs:257>).
- [KeepAnswersOnScreen (line 269)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/BerdlyBattleController.cs:269>).
- [ChooseAnswer (line 295)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/BerdlyBattleController.cs:295>).
- [FinishGuessing (line 308)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/BerdlyBattleController.cs:308>).
- [ResolveEnemyTurn (line 318)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/BerdlyBattleController.cs:318>).
- [WaitForFeedback (line 354)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/BerdlyBattleController.cs:354>).
- [CheatWin (line 364)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/BerdlyBattleController.cs:364>).
- [CheatDrainHP (line 372)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/BerdlyBattleController.cs:372>).
- [CreateSonicWave (line 378)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/BerdlyBattleController.cs:378>).
- [PlaySonicAttack (line 391)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/BerdlyBattleController.cs:391>).
- [Vector2 (line 397)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/BerdlyBattleController.cs:397>).
- [Vector2 (line 399)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/BerdlyBattleController.cs:399>).
- [FinishBattle (line 406)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/BerdlyBattleController.cs:406>).
- [CreateResultModal (line 424)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/BerdlyBattleController.cs:424>).
- [CreateText (line 442)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/BerdlyBattleController.cs:442>).
- [CreatePortraitFeedback (line 453)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/BerdlyBattleController.cs:453>).
- [Vector2 (line 484)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/BerdlyBattleController.cs:484>).
- [UpdateGuardIndicator (line 490)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/BerdlyBattleController.cs:490>).
- [ShowHealingFeedback (line 498)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/BerdlyBattleController.cs:498>).
- [UpdateHealingFeedback (line 510)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/BerdlyBattleController.cs:510>).
- [AnimateHealingFeedback (line 517)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/BerdlyBattleController.cs:517>).
- [ResetPortraitFeedback (line 533)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/BerdlyBattleController.cs:533>).
- [ShowBoardMessage (line 546)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/BerdlyBattleController.cs:546>).
- [UpdateHP (line 555)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/BerdlyBattleController.cs:555>).
- [UpdateTimer (line 561)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/BerdlyBattleController.cs:561>).
- [CancelResolution (line 567)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/BerdlyBattleController.cs:567>).
- [ExitBattle (line 574)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/BerdlyBattleController.cs:574>).
- [CloseForNPC (line 587)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/BerdlyBattleController.cs:587>).
- [Update (line 590)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/BerdlyBattleController.cs:590>).
- [OnDisable (line 608)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/BerdlyBattleController.cs:608>).
- [OnDestroy (line 609)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/BerdlyBattleController.cs:609>).
- [ClearSelection (line 619)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/BerdlyBattleController.cs:619>).
- [AssignMissingReferences (line 627)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/BerdlyBattleController.cs:627>).

## BerdlyMolecule.cs

[Project](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/BerdlyMolecule.cs>) · [Copy](../Scripts/Assets/Scripts/UI/InGame/BerdlyMolecule.cs)

**Declared types:** `BerdlyMolecule`, `BerdlyQuestion`, `BerdlyChemistry`, `Edge`.

**Teaching:** [Dungeon room graphs, chains, keys, and floor WFC](../Features/16-dungeon-generation.md), [Berdly chemistry battle: answers, timer, attack, and defend](../Features/25-berdly-minigame.md), [The shared molecule and dungeon naming algorithm](../Features/26-iupac-algorithm.md).

**Scene evidence:** no direct component reference in the four main scene YAML files. It may be a data/static type, prefab component, runtime-created component, or editor tool.

**Entry points and methods:**

- [AddCarbon (line 13)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/BerdlyMolecule.cs:13>).
- [Connect (line 22)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/BerdlyMolecule.cs:22>).
- [Copy (line 24)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/BerdlyMolecule.cs:24>).
- [BerdlyChemistry (line 54)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/BerdlyMolecule.cs:54>).
- [Lines (line 62)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/BerdlyMolecule.cs:62>).
- [GenerateQuestion (line 65)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/BerdlyMolecule.cs:65>).
- [MakeQuestion (line 78)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/BerdlyMolecule.cs:78>).
- [GenerateTree (line 83)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/BerdlyMolecule.cs:83>).
- [FindSet (line 112)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/BerdlyMolecule.cs:112>).
- [HasSimpleBranches (line 120)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/BerdlyMolecule.cs:120>).
- [MakeQuestion (line 135)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/BerdlyMolecule.cs:135>).
- [LongestChainLength (line 172)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/BerdlyMolecule.cs:172>).
- [Farthest (line 180)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/BerdlyMolecule.cs:180>).
- [Name (line 194)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/BerdlyMolecule.cs:194>).
- [SelectChain (line 196)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/BerdlyMolecule.cs:196>).
- [All (line 203)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/BerdlyMolecule.cs:203>).
- [NamePart (line 205)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/BerdlyMolecule.cs:205>).
- [Component (line 232)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/BerdlyMolecule.cs:232>).
- [BestPath (line 243)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/BerdlyMolecule.cs:243>).
- [BranchSignature (line 277)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/BerdlyMolecule.cs:277>).
- [BranchLocants (line 287)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/BerdlyMolecule.cs:287>).
- [Compare (line 296)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/BerdlyMolecule.cs:296>).

## BerdlyMoleculeView.cs

[Project](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/BerdlyMoleculeView.cs>) · [Copy](../Scripts/Assets/Scripts/UI/InGame/BerdlyMoleculeView.cs)

**Declared types:** `BerdlyMoleculeView`.

**Teaching:** [Berdly chemistry battle: answers, timer, attack, and defend](../Features/25-berdly-minigame.md), [The shared molecule and dungeon naming algorithm](../Features/26-iupac-algorithm.md).

**Scene evidence:** no direct component reference in the four main scene YAML files. It may be a data/static type, prefab component, runtime-created component, or editor tool.

**Entry points and methods:**

- [Show (line 17)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/BerdlyMoleculeView.cs:17>).
- [OnRectTransformDimensionsChange (line 42)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/BerdlyMoleculeView.cs:42>).
- [LayoutAtoms (line 48)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/BerdlyMoleculeView.cs:48>).
- [OnPopulateMesh (line 68)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/BerdlyMoleculeView.cs:68>).

## BerdlySonicWave.cs

[Project](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/BerdlySonicWave.cs>) · [Copy](../Scripts/Assets/Scripts/UI/InGame/BerdlySonicWave.cs)

**Declared types:** `BerdlySonicWave`.

**Teaching:** [Berdly chemistry battle: answers, timer, attack, and defend](../Features/25-berdly-minigame.md).

**Scene evidence:** no direct component reference in the four main scene YAML files. It may be a data/static type, prefab component, runtime-created component, or editor tool.

**Entry points and methods:**

- [Play (line 19)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/BerdlySonicWave.cs:19>).
- [Update (line 29)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/BerdlySonicWave.cs:29>).
- [Advance (line 31)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/BerdlySonicWave.cs:31>).
- [SetVerticesDirty (line 49)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/BerdlySonicWave.cs:49>).
- [Cancel (line 52)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/BerdlySonicWave.cs:52>).
- [OnDisable (line 59)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/BerdlySonicWave.cs:59>).
- [OnPopulateMesh (line 61)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/BerdlySonicWave.cs:61>).
- [WithAlpha (line 78)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/BerdlySonicWave.cs:78>).
- [Stroke (line 79)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/BerdlySonicWave.cs:79>).
- [Point (line 95)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/BerdlySonicWave.cs:95>).

## ChallengePromptGraphic.cs

[Project](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/ChallengePromptGraphic.cs>) · [Copy](../Scripts/Assets/Scripts/UI/InGame/ChallengePromptGraphic.cs)

**Declared types:** `ChallengePromptGraphic`.

**Role:** supporting code in this area. Trace its owner/controller and callers alongside the related feature chapters.

**Scene evidence:** no direct component reference in the four main scene YAML files. It may be a data/static type, prefab component, runtime-created component, or editor tool.

**Entry points and methods:**

- [OnPopulateMesh (line 13)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/ChallengePromptGraphic.cs:13>).
- [GetPerimeter (line 53)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/ChallengePromptGraphic.cs:53>).
- [Vector2 (line 58)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/ChallengePromptGraphic.cs:58>).
- [Vector2 (line 59)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/ChallengePromptGraphic.cs:59>).
- [Vector2 (line 60)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/ChallengePromptGraphic.cs:60>).
- [Vector2 (line 61)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/ChallengePromptGraphic.cs:61>).
- [AddQuad (line 72)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/ChallengePromptGraphic.cs:72>).

## ChallengePromptPixelText.cs

[Project](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/ChallengePromptPixelText.cs>) · [Copy](../Scripts/Assets/Scripts/UI/InGame/ChallengePromptPixelText.cs)

**Declared types:** `ChallengePromptPixelText`.

**Role:** supporting code in this area. Trace its owner/controller and callers alongside the related feature chapters.

**Scene evidence:** no direct component reference in the four main scene YAML files. It may be a data/static type, prefab component, runtime-created component, or editor tool.

**Entry points and methods:**

- [OnPopulateMesh (line 41)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/ChallengePromptPixelText.cs:41>).

## CharacterExperienceHud.cs

[Project](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/CharacterExperienceHud.cs>) · [Copy](../Scripts/Assets/Scripts/UI/InGame/CharacterExperienceHud.cs)

**Declared types:** `CharacterExperienceHud`.

**Teaching:** [Movement, switching characters, HP/SP, EXP, and HUD](../Features/05-movement-and-party.md).

**Direct saved-scene attachment:** GameScene.

**Entry points and methods:**

- [Awake (line 18)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/CharacterExperienceHud.cs:18>).
- [OnEnable (line 32)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/CharacterExperienceHud.cs:32>).
- [Start (line 43)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/CharacterExperienceHud.cs:43>).
- [OnDisable (line 49)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/CharacterExperienceHud.cs:49>).
- [ShowCurrentCharacter (line 58)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/CharacterExperienceHud.cs:58>).
- [OnCharacterSelected (line 66)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/CharacterExperienceHud.cs:66>).
- [OnCharacterStatsChanged (line 72)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/CharacterExperienceHud.cs:72>).
- [Refresh (line 78)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/CharacterExperienceHud.cs:78>).

## CheatCodes.cs

[Project](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/CheatCodes.cs>) · [Copy](../Scripts/Assets/Scripts/UI/InGame/CheatCodes.cs)

**Declared types:** `CheatCodes`, `Area`, `Definition`.

**Teaching:** [Cheat console, area checks, and all supported commands](../Features/28-cheats.md).

**Scene evidence:** no direct component reference in the four main scene YAML files. It may be a data/static type, prefab component, runtime-created component, or editor tool.

**Entry points and methods:**

- [Definition (line 11)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/CheatCodes.cs:11>).
- [Definition (line 16)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/CheatCodes.cs:16>).
- [Definition (line 17)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/CheatCodes.cs:17>).
- [Definition (line 18)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/CheatCodes.cs:18>).
- [Definition (line 19)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/CheatCodes.cs:19>).
- [Definition (line 20)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/CheatCodes.cs:20>).
- [Definition (line 21)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/CheatCodes.cs:21>).
- [Definition (line 22)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/CheatCodes.cs:22>).
- [Definition (line 23)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/CheatCodes.cs:23>).
- [Definition (line 24)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/CheatCodes.cs:24>).
- [Definition (line 25)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/CheatCodes.cs:25>).
- [Definition (line 26)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/CheatCodes.cs:26>).
- [Definition (line 27)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/CheatCodes.cs:27>).
- [Definition (line 28)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/CheatCodes.cs:28>).
- [Definition (line 29)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/CheatCodes.cs:29>).
- [Definition (line 30)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/CheatCodes.cs:30>).
- [Definition (line 31)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/CheatCodes.cs:31>).
- [Find (line 34)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/CheatCodes.cs:34>).
- [Execute (line 42)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/CheatCodes.cs:42>).
- [TeleportDungeon (line 86)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/CheatCodes.cs:86>).
- [DrainParty (line 101)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/CheatCodes.cs:101>).
- [TeleportDungeon (line 106)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/CheatCodes.cs:106>).
- [TeleportOrigin (line 136)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/CheatCodes.cs:136>).
- [FindLanding (line 149)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/CheatCodes.cs:149>).
- [Move (line 172)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/CheatCodes.cs:172>).

## CheatConsole.cs

[Project](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/CheatConsole.cs>) · [Copy](../Scripts/Assets/Scripts/UI/InGame/CheatConsole.cs)

**Declared types:** `CheatConsole`.

**Teaching:** [Cheat console, area checks, and all supported commands](../Features/28-cheats.md).

**Direct saved-scene attachment:** GameScene.

**Entry points and methods:**

- [ResetStatics (line 21)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/CheatConsole.cs:21>).
- [Awake (line 25)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/CheatConsole.cs:25>).
- [Update (line 38)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/CheatConsole.cs:38>).
- [Open (line 47)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/CheatConsole.cs:47>).
- [Close (line 56)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/CheatConsole.cs:56>).
- [RunWhenValid (line 63)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/CheatConsole.cs:63>).
- [LateUpdate (line 85)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/CheatConsole.cs:85>).
- [OnDisable (line 90)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/CheatConsole.cs:90>).
- [OnDestroy (line 91)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/CheatConsole.cs:91>).

## CheatEquipmentCatalog.cs

[Project](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/CheatEquipmentCatalog.cs>) · [Copy](../Scripts/Assets/Scripts/UI/InGame/CheatEquipmentCatalog.cs)

**Declared types:** `CheatEquipmentCatalog`.

**Teaching:** [Two equipment slots, stat differences, and removing gear](../Features/11-equipment.md), [Cheat console, area checks, and all supported commands](../Features/28-cheats.md).

**Scene evidence:** no direct component reference in the four main scene YAML files. It may be a data/static type, prefab component, runtime-created component, or editor tool.

## CoinUI.cs

[Project](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/CoinUI.cs>) · [Copy](../Scripts/Assets/Scripts/UI/InGame/CoinUI.cs)

**Declared types:** `CoinUI`.

**Role:** supporting code in this area. Trace its owner/controller and callers alongside the related feature chapters.

**Direct saved-scene attachment:** GameScene.

**Entry points and methods:**

- [Awake (line 15)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/CoinUI.cs:15>).
- [OnEnable (line 23)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/CoinUI.cs:23>).
- [OnDisable (line 34)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/CoinUI.cs:34>).
- [UpdateDisplay (line 42)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/CoinUI.cs:42>).

## CurrentCharacterHud.cs

[Project](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/CurrentCharacterHud.cs>) · [Copy](../Scripts/Assets/Scripts/UI/InGame/CurrentCharacterHud.cs)

**Declared types:** `CurrentCharacterHud`.

**Teaching:** [OOP, ScriptableObjects, and event channels](../Features/01-architecture.md), [Movement, switching characters, HP/SP, EXP, and HUD](../Features/05-movement-and-party.md).

**Direct saved-scene attachment:** GameScene.

**Entry points and methods:**

- [Awake (line 23)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/CurrentCharacterHud.cs:23>).
- [OnEnable (line 29)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/CurrentCharacterHud.cs:29>).
- [Start (line 40)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/CurrentCharacterHud.cs:40>).
- [OnDisable (line 46)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/CurrentCharacterHud.cs:46>).
- [ShowCurrentCharacter (line 55)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/CurrentCharacterHud.cs:55>).
- [OnCharacterSelected (line 64)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/CurrentCharacterHud.cs:64>).
- [OnCharacterStatsChanged (line 70)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/CurrentCharacterHud.cs:70>).
- [Refresh (line 76)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/CurrentCharacterHud.cs:76>).

## EquipmentUI.cs

[Project](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/EquipmentUI.cs>) · [Copy](../Scripts/Assets/Scripts/UI/InGame/EquipmentUI.cs)

**Declared types:** `EquipmentUI`.

**Teaching:** [Two equipment slots, stat differences, and removing gear](../Features/11-equipment.md), [In-game menu, Resources, Stats, previews, and Save & Quit](../Features/31-game-menu.md).

**Direct saved-scene attachment:** GameScene.

**Entry points and methods:**

- [Awake (line 49)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/EquipmentUI.cs:49>).
- [EnsureCorrectContainer (line 54)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/EquipmentUI.cs:54>).
- [Start (line 79)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/EquipmentUI.cs:79>).
- [OnEnable (line 98)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/EquipmentUI.cs:98>).
- [Update (line 106)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/EquipmentUI.cs:106>).
- [UpdateBars (line 111)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/EquipmentUI.cs:111>).
- [SelectCharacter (line 137)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/EquipmentUI.cs:137>).
- [SelectSlot (line 144)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/EquipmentUI.cs:144>).
- [RefreshUI (line 152)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/EquipmentUI.cs:152>).
- [PopulateAvailableEquipment (line 193)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/EquipmentUI.cs:193>).
- [ShowEquipmentDetails (line 308)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/EquipmentUI.cs:308>).
- [ShowRemovePreview (line 344)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/EquipmentUI.cs:344>).
- [SetDiffText (line 365)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/EquipmentUI.cs:365>).
- [ClearInfoPanel (line 386)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/EquipmentUI.cs:386>).
- [UpdateBaseStatsDisplay (line 420)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/EquipmentUI.cs:420>).
- [EquipItem (line 433)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/EquipmentUI.cs:433>).
- [RemoveEquippedItem (line 452)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/EquipmentUI.cs:452>).

## GameAudioMenuUI.cs

[Project](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/GameAudioMenuUI.cs>) · [Copy](../Scripts/Assets/Scripts/UI/InGame/GameAudioMenuUI.cs)

**Declared types:** `GameAudioMenuUI`.

**Teaching:** [Music, SFX, frame rate, resolution, and fullscreen](../Features/03-settings.md).

**Direct saved-scene attachment:** GameScene.

**Entry points and methods:**

- [Awake (line 9)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/GameAudioMenuUI.cs:9>).
- [OnEnable (line 14)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/GameAudioMenuUI.cs:14>).
- [SetMusic (line 21)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/GameAudioMenuUI.cs:21>).
- [SetSFX (line 26)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/GameAudioMenuUI.cs:26>).
- [Labels (line 31)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/GameAudioMenuUI.cs:31>).

## GameplayHudVisibility.cs

[Project](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/GameplayHudVisibility.cs>) · [Copy](../Scripts/Assets/Scripts/UI/InGame/GameplayHudVisibility.cs)

**Declared types:** `GameplayHudVisibility`.

**Teaching:** [Audio routing, footsteps, particles, highlights, and UI feedback](../Features/29-audio-and-visual-feedback.md), [In-game menu, Resources, Stats, previews, and Save & Quit](../Features/31-game-menu.md).

**Direct saved-scene attachment:** GameScene.

**Entry points and methods:**

- [Awake (line 9)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/GameplayHudVisibility.cs:9>).

## InventoryUI.cs

[Project](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/InventoryUI.cs>) · [Copy](../Scripts/Assets/Scripts/UI/InGame/InventoryUI.cs)

**Declared types:** `InventoryUI`.

**Teaching:** [Inventory, consumables, HP/SP preview, and Diamond](../Features/10-items.md), [Encounters, party turns, AP, cover, victory, and returns](../Features/20-battle-system.md), [In-game menu, Resources, Stats, previews, and Save & Quit](../Features/31-game-menu.md).

**Direct saved-scene attachment:** GameScene.

**Entry points and methods:**

- [Start (line 24)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/InventoryUI.cs:24>).
- [OnEnable (line 30)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/InventoryUI.cs:30>).
- [OnDisable (line 49)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/InventoryUI.cs:49>).
- [UpdateCoinDisplay (line 58)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/InventoryUI.cs:58>).
- [Update (line 66)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/InventoryUI.cs:66>).
- [SetupAvatarButtons (line 71)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/InventoryUI.cs:71>).
- [RefreshUI (line 84)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/InventoryUI.cs:84>).
- [ShowItemDetails (line 114)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/InventoryUI.cs:114>).
- [UseOnCharacter (line 122)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/InventoryUI.cs:122>).
- [UpdateBars (line 182)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/InventoryUI.cs:182>).

## ItemSlotUI.cs

[Project](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/ItemSlotUI.cs>) · [Copy](../Scripts/Assets/Scripts/UI/InGame/ItemSlotUI.cs)

**Declared types:** `ItemSlotUI`.

**Teaching:** [Inventory, consumables, HP/SP preview, and Diamond](../Features/10-items.md).

**Direct saved-scene attachment:** GameScene.

**Entry points and methods:**

- [Setup (line 14)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/ItemSlotUI.cs:14>).
- [UpdateQuantity (line 29)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/ItemSlotUI.cs:29>).
- [OnSlotClicked (line 41)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/ItemSlotUI.cs:41>).

## MenuStatBar.cs

[Project](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/MenuStatBar.cs>) · [Copy](../Scripts/Assets/Scripts/UI/InGame/MenuStatBar.cs)

**Declared types:** `MenuStatBar`.

**Teaching:** [Inventory, consumables, HP/SP preview, and Diamond](../Features/10-items.md), [In-game menu, Resources, Stats, previews, and Save & Quit](../Features/31-game-menu.md).

**Scene evidence:** no direct component reference in the four main scene YAML files. It may be a data/static type, prefab component, runtime-created component, or editor tool.

**Entry points and methods:**

- [Set (line 9)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/MenuStatBar.cs:9>).

## MenuTabManager.cs

[Project](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/MenuTabManager.cs>) · [Copy](../Scripts/Assets/Scripts/UI/InGame/MenuTabManager.cs)

**Declared types:** `MenuTabManager`, `TabEntry`.

**Teaching:** [In-game menu, Resources, Stats, previews, and Save & Quit](../Features/31-game-menu.md).

**Direct saved-scene attachment:** GameScene.

**Entry points and methods:**

- [Awake (line 58)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/MenuTabManager.cs:58>).
- [OnEnable (line 63)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/MenuTabManager.cs:63>).
- [OnDisable (line 76)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/MenuTabManager.cs:76>).
- [UpdateCoinDisplay (line 84)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/MenuTabManager.cs:84>).
- [Update (line 92)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/MenuTabManager.cs:92>).
- [SetupButtonListeners (line 100)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/MenuTabManager.cs:100>).
- [SwitchToTab (line 116)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/MenuTabManager.cs:116>).
- [ShowDefaultTab (line 156)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/MenuTabManager.cs:156>).
- [SwitchToTab (line 164)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/MenuTabManager.cs:164>).
- [NextTab (line 181)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/MenuTabManager.cs:181>).
- [PreviousTab (line 191)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/MenuTabManager.cs:191>).
- [HandleKeyboardInput (line 198)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/MenuTabManager.cs:198>).

## MenuToggle.cs

[Project](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/MenuToggle.cs>) · [Copy](../Scripts/Assets/Scripts/UI/InGame/MenuToggle.cs)

**Declared types:** `MenuToggle`.

**Teaching:** [In-game menu, Resources, Stats, previews, and Save & Quit](../Features/31-game-menu.md).

**Direct saved-scene attachment:** GameScene.

**Entry points and methods:**

- [Awake (line 11)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/MenuToggle.cs:11>).
- [OnEnable (line 17)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/MenuToggle.cs:17>).
- [OnDisable (line 26)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/MenuToggle.cs:26>).
- [Start (line 32)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/MenuToggle.cs:32>).
- [OnMenuPressed (line 38)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/MenuToggle.cs:38>).
- [ToggleMenu (line 43)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/MenuToggle.cs:43>).

## NPCChallengePrompt.cs

[Project](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/NPCChallengePrompt.cs>) · [Copy](../Scripts/Assets/Scripts/UI/InGame/NPCChallengePrompt.cs)

**Declared types:** `NPCChallengePrompt`.

**Teaching:** [NPC dialogue, proximity, shops, and challenge prompts](../Features/09-npc-dialogue.md).

**Scene evidence:** no direct component reference in the four main scene YAML files. It may be a data/static type, prefab component, runtime-created component, or editor tool.

**Entry points and methods:**

- [GetOrCreate (line 30)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/NPCChallengePrompt.cs:30>).
- [Awake (line 38)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/NPCChallengePrompt.cs:38>).
- [Open (line 46)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/NPCChallengePrompt.cs:46>).
- [Close (line 62)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/NPCChallengePrompt.cs:62>).
- [OnDisable (line 72)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/NPCChallengePrompt.cs:72>).
- [OnDestroy (line 82)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/NPCChallengePrompt.cs:82>).
- [Update (line 87)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/NPCChallengePrompt.cs:87>).
- [SelectChoice (line 104)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/NPCChallengePrompt.cs:104>).
- [Choose (line 112)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/NPCChallengePrompt.cs:112>).
- [BuildUI (line 121)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/NPCChallengePrompt.cs:121>).
- [MakeChoice (line 155)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/NPCChallengePrompt.cs:155>).
- [MakeText (line 170)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/NPCChallengePrompt.cs:170>).
- [MakeRect (line 173)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/NPCChallengePrompt.cs:173>).
- [MakeText (line 183)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/NPCChallengePrompt.cs:183>).
- [EnsureEventSystem (line 193)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/NPCChallengePrompt.cs:193>).

## OverworldMinimap.cs

[Project](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/OverworldMinimap.cs>) · [Copy](../Scripts/Assets/Scripts/UI/InGame/OverworldMinimap.cs)

**Declared types:** `OverworldMinimap`.

**Teaching:** [Exploration camera, zoom, overworld map, and dungeon reveal](../Features/18-cameras-and-maps.md).

**Direct saved-scene attachment:** GameScene.

**Entry points and methods:**

- [Min (line 13)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/OverworldMinimap.cs:13>).
- [Min (line 14)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/OverworldMinimap.cs:14>).
- [Min (line 21)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/OverworldMinimap.cs:21>).
- [Min (line 22)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/OverworldMinimap.cs:22>).
- [Min (line 23)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/OverworldMinimap.cs:23>).
- [Awake (line 46)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/OverworldMinimap.cs:46>).
- [OnEnable (line 80)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/OverworldMinimap.cs:80>).
- [OnDisable (line 104)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/OverworldMinimap.cs:104>).
- [OnDestroy (line 133)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/OverworldMinimap.cs:133>).
- [LateUpdate (line 139)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/OverworldMinimap.cs:139>).
- [UpdateScrollFocus (line 164)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/OverworldMinimap.cs:164>).
- [SetScrollFocus (line 183)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/OverworldMinimap.cs:183>).
- [OnMinimapZoom (line 193)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/OverworldMinimap.cs:193>).
- [UpdateMapRotation (line 214)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/OverworldMinimap.cs:214>).
- [Redraw (line 241)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/OverworldMinimap.cs:241>).
- [GetVisibleTileCount (line 275)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/OverworldMinimap.cs:275>).
- [SetPixel (line 284)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/OverworldMinimap.cs:284>).
- [ToggleMap (line 290)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/OverworldMinimap.cs:290>).
- [SetTarget (line 306)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/OverworldMinimap.cs:306>).

## PinkRhythmController.cs

[Project](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/PinkRhythmController.cs>) · [Copy](../Scripts/Assets/Scripts/UI/InGame/PinkRhythmController.cs)

**Declared types:** `PinkRhythmController`, `NoteVisual`.

**Teaching:** [Druid battle skills: healing burst, pull, teleport, and rhythm](../Features/23-druid-battle-skills.md), [Pink rhythm: beatmap parsing, tap/hold judgements, and score](../Features/27-rhythm-game.md), [Git, GitHub, and explaining optimization](../Features/00-git-and-performance.md).

**Direct saved-scene attachment:** GameScene.

**Entry points and methods:**

- [OpenBattleUltimate (line 70)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/PinkRhythmController.cs:70>).
- [RestoreBattleSong (line 80)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/PinkRhythmController.cs:80>).
- [Reset (line 98)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/PinkRhythmController.cs:98>).
- [Awake (line 99)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/PinkRhythmController.cs:99>).
- [Initialize (line 101)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/PinkRhythmController.cs:101>).
- [TryOpenFromNPC (line 117)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/PinkRhythmController.cs:117>).
- [CloseForNPC (line 126)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/PinkRhythmController.cs:126>).
- [OpenChallenge (line 132)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/PinkRhythmController.cs:132>).
- [Open (line 134)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/PinkRhythmController.cs:134>).
- [PrepareUI (line 180)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/PinkRhythmController.cs:180>).
- [GameObject (line 191)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/PinkRhythmController.cs:191>).
- [PauseBackgroundMusic (line 200)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/PinkRhythmController.cs:200>).
- [ResumeBackgroundMusic (line 212)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/PinkRhythmController.cs:212>).
- [Update (line 220)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/PinkRhythmController.cs:220>).
- [UpdateHUD (line 257)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/PinkRhythmController.cs:257>).
- [ShowJudgement (line 272)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/PinkRhythmController.cs:272>).
- [CreateNote (line 279)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/PinkRhythmController.cs:279>).
- [RenderNotes (line 296)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/PinkRhythmController.cs:296>).
- [FinishChallenge (line 328)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/PinkRhythmController.cs:328>).
- [ClearNotes (line 351)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/PinkRhythmController.cs:351>).
- [ExitChallenge (line 357)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/PinkRhythmController.cs:357>).
- [OnDisable (line 372)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/PinkRhythmController.cs:372>).
- [OnDestroy (line 373)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/PinkRhythmController.cs:373>).
- [AssignMissingReferences (line 381)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/PinkRhythmController.cs:381>).

## PinkRhythmRules.cs

[Project](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/PinkRhythmRules.cs>) · [Copy](../Scripts/Assets/Scripts/UI/InGame/PinkRhythmRules.cs)

**Declared types:** `PinkJudgement`, `PinkBeatmap`, `Note`, `PinkRhythmSession`, `NoteState`.

**Teaching:** [Druid battle skills: healing burst, pull, teleport, and rhythm](../Features/23-druid-battle-skills.md), [Pink rhythm: beatmap parsing, tap/hold judgements, and score](../Features/27-rhythm-game.md).

**Scene evidence:** no direct component reference in the four main scene YAML files. It may be a data/static type, prefab component, runtime-created component, or editor tool.

**Entry points and methods:**

- [Parse (line 22)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/PinkRhythmRules.cs:22>).
- [PinkRhythmSession (line 99)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/PinkRhythmRules.cs:99>).
- [Judge (line 107)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/PinkRhythmRules.cs:107>).
- [JudgeHold (line 115)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/PinkRhythmRules.cs:115>).
- [Tick (line 123)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/PinkRhythmRules.cs:123>).
- [FinalizeNote (line 174)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/PinkRhythmRules.cs:174>).

## QuitMenuUI.cs

[Project](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/QuitMenuUI.cs>) · [Copy](../Scripts/Assets/Scripts/UI/InGame/QuitMenuUI.cs)

**Declared types:** `QuitMenuUI`.

**Teaching:** [Three binary save slots and restoring a playthrough](../Features/04-save-files.md), [In-game menu, Resources, Stats, previews, and Save & Quit](../Features/31-game-menu.md).

**Direct saved-scene attachment:** GameScene.

**Entry points and methods:**

- [Awake (line 12)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/QuitMenuUI.cs:12>).
- [OnEnable (line 17)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/QuitMenuUI.cs:17>).
- [KeepPlaying (line 21)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/QuitMenuUI.cs:21>).
- [SaveAndQuit (line 22)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/QuitMenuUI.cs:22>).

## ResourceMenuPanelUI.cs

[Project](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/ResourceMenuPanelUI.cs>) · [Copy](../Scripts/Assets/Scripts/UI/InGame/ResourceMenuPanelUI.cs)

**Declared types:** `ResourceMenuPanelUI`.

**Teaching:** [In-game menu, Resources, Stats, previews, and Save & Quit](../Features/31-game-menu.md).

**Direct saved-scene attachment:** GameScene.

**Entry points and methods:**

- [OnEnable (line 10)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/ResourceMenuPanelUI.cs:10>).
- [OnDisable (line 15)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/ResourceMenuPanelUI.cs:15>).
- [Refresh (line 16)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/ResourceMenuPanelUI.cs:16>).

## StatsMenuPanelUI.cs

[Project](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/StatsMenuPanelUI.cs>) · [Copy](../Scripts/Assets/Scripts/UI/InGame/StatsMenuPanelUI.cs)

**Declared types:** `StatsMenuPanelUI`.

**Teaching:** [Two equipment slots, stat differences, and removing gear](../Features/11-equipment.md), [In-game menu, Resources, Stats, previews, and Save & Quit](../Features/31-game-menu.md).

**Direct saved-scene attachment:** GameScene.

**Entry points and methods:**

- [Awake (line 17)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/StatsMenuPanelUI.cs:17>).
- [OnEnable (line 25)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/StatsMenuPanelUI.cs:25>).
- [Start (line 31)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/StatsMenuPanelUI.cs:31>).
- [OnDisable (line 32)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/StatsMenuPanelUI.cs:32>).
- [OnActiveCharacterChanged (line 37)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/StatsMenuPanelUI.cs:37>).
- [OnStatsChanged (line 44)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/StatsMenuPanelUI.cs:44>).
- [SelectCharacter (line 45)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/StatsMenuPanelUI.cs:45>).
- [Refresh (line 50)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/StatsMenuPanelUI.cs:50>).
- [Text (line 72)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/StatsMenuPanelUI.cs:72>).
- [Fill (line 73)](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/StatsMenuPanelUI.cs:73>).
