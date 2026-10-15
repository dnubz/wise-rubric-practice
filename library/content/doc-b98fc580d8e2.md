# Save scripts

[Script index](README.md) · [Guide home](../README.md)

## BinarySaveFile.cs

[Project](<C:/Users/Ezell/WiSe/Assets/Scripts/Save/BinarySaveFile.cs>) · [Copy](../Scripts/Assets/Scripts/Save/BinarySaveFile.cs)

**Declared types:** `BinarySaveFile`.

**Teaching:** [Three binary save slots and restoring a playthrough](../Features/04-save-files.md).

**Scene evidence:** no direct component reference in the four main scene YAML files. It may be a data/static type, prefab component, runtime-created component, or editor tool.

**Entry points and methods:**

- [Write (line 14)](<C:/Users/Ezell/WiSe/Assets/Scripts/Save/BinarySaveFile.cs:14>).
- [Read (line 40)](<C:/Users/Ezell/WiSe/Assets/Scripts/Save/BinarySaveFile.cs:40>).
- [WriteData (line 67)](<C:/Users/Ezell/WiSe/Assets/Scripts/Save/BinarySaveFile.cs:67>).
- [WriteDungeon (line 84)](<C:/Users/Ezell/WiSe/Assets/Scripts/Save/BinarySaveFile.cs:84>).
- [ReadData (line 98)](<C:/Users/Ezell/WiSe/Assets/Scripts/Save/BinarySaveFile.cs:98>).
- [ReadDungeon (line 117)](<C:/Users/Ezell/WiSe/Assets/Scripts/Save/BinarySaveFile.cs:117>).
- [Text (line 139)](<C:/Users/Ezell/WiSe/Assets/Scripts/Save/BinarySaveFile.cs:139>).
- [Text (line 141)](<C:/Users/Ezell/WiSe/Assets/Scripts/Save/BinarySaveFile.cs:141>).
- [Vector (line 147)](<C:/Users/Ezell/WiSe/Assets/Scripts/Save/BinarySaveFile.cs:147>).
- [Vector (line 148)](<C:/Users/Ezell/WiSe/Assets/Scripts/Save/BinarySaveFile.cs:148>).
- [Grid (line 149)](<C:/Users/Ezell/WiSe/Assets/Scripts/Save/BinarySaveFile.cs:149>).
- [Grid (line 150)](<C:/Users/Ezell/WiSe/Assets/Scripts/Save/BinarySaveFile.cs:150>).
- [Finite (line 151)](<C:/Users/Ezell/WiSe/Assets/Scripts/Save/BinarySaveFile.cs:151>).
- [Validate (line 152)](<C:/Users/Ezell/WiSe/Assets/Scripts/Save/BinarySaveFile.cs:152>).
- [ValidateDungeon (line 188)](<C:/Users/Ezell/WiSe/Assets/Scripts/Save/BinarySaveFile.cs:188>).

## GameSave.cs

[Project](<C:/Users/Ezell/WiSe/Assets/Scripts/Save/GameSave.cs>) · [Copy](../Scripts/Assets/Scripts/Save/GameSave.cs)

**Declared types:** `GameSave`, `PartyState`, `SaveData`.

**Teaching:** [Three binary save slots and restoring a playthrough](../Features/04-save-files.md), [What is confirmed, what needs a playtest, and known gaps](../Features/30-verification-and-gaps.md).

**Direct saved-scene attachment:** GameScene.

**Entry points and methods:**

- [SlotPath (line 64)](<C:/Users/Ezell/WiSe/Assets/Scripts/Save/GameSave.cs:64>).
- [ResetStatics (line 81)](<C:/Users/Ezell/WiSe/Assets/Scripts/Save/GameSave.cs:81>).
- [Awake (line 83)](<C:/Users/Ezell/WiSe/Assets/Scripts/Save/GameSave.cs:83>).
- [Start (line 96)](<C:/Users/Ezell/WiSe/Assets/Scripts/Save/GameSave.cs:96>).
- [Capture (line 118)](<C:/Users/Ezell/WiSe/Assets/Scripts/Save/GameSave.cs:118>).
- [TrySave (line 138)](<C:/Users/Ezell/WiSe/Assets/Scripts/Save/GameSave.cs:138>).
- [Read (line 149)](<C:/Users/Ezell/WiSe/Assets/Scripts/Save/GameSave.cs:149>).
- [TryReadSlot (line 150)](<C:/Users/Ezell/WiSe/Assets/Scripts/Save/GameSave.cs:150>).
- [TryDeleteSlot (line 155)](<C:/Users/Ezell/WiSe/Assets/Scripts/Save/GameSave.cs:155>).
- [TryImportLegacySave (line 160)](<C:/Users/Ezell/WiSe/Assets/Scripts/Save/GameSave.cs:160>).
- [RestorePartyAndInventory (line 190)](<C:/Users/Ezell/WiSe/Assets/Scripts/Save/GameSave.cs:190>).
- [TryContinue (line 207)](<C:/Users/Ezell/WiSe/Assets/Scripts/Save/GameSave.cs:207>).
- [TryLoadSlot (line 211)](<C:/Users/Ezell/WiSe/Assets/Scripts/Save/GameSave.cs:211>).
- [TryLoadSlot (line 213)](<C:/Users/Ezell/WiSe/Assets/Scripts/Save/GameSave.cs:213>).
- [TryStartNewGame (line 227)](<C:/Users/Ezell/WiSe/Assets/Scripts/Save/GameSave.cs:227>).
- [BeginNewGame (line 236)](<C:/Users/Ezell/WiSe/Assets/Scripts/Save/GameSave.cs:236>).

## SavedLayouts.cs

[Project](<C:/Users/Ezell/WiSe/Assets/Scripts/Save/SavedLayouts.cs>) · [Copy](../Scripts/Assets/Scripts/Save/SavedLayouts.cs)

**Declared types:** `SavedWorldLayout`, `SavedDungeon`.

**Teaching:** [Three binary save slots and restoring a playthrough](../Features/04-save-files.md).

**Scene evidence:** no direct component reference in the four main scene YAML files. It may be a data/static type, prefab component, runtime-created component, or editor tool.

**Entry points and methods:**

- [ToLayout (line 27)](<C:/Users/Ezell/WiSe/Assets/Scripts/Save/SavedLayouts.cs:27>).

## SaveGameSettings.cs

[Project](<C:/Users/Ezell/WiSe/Assets/Scripts/Save/SaveGameSettings.cs>) · [Copy](../Scripts/Assets/Scripts/Save/SaveGameSettings.cs)

**Declared types:** `SaveGameSettings`.

**Teaching:** [Music, SFX, frame rate, resolution, and fullscreen](../Features/03-settings.md), [Three binary save slots and restoring a playthrough](../Features/04-save-files.md).

**Scene evidence:** no direct component reference in the four main scene YAML files. It may be a data/static type, prefab component, runtime-created component, or editor tool.

**Entry points and methods:**

- [Capture (line 10)](<C:/Users/Ezell/WiSe/Assets/Scripts/Save/SaveGameSettings.cs:10>).
- [ApplyPreferences (line 16)](<C:/Users/Ezell/WiSe/Assets/Scripts/Save/SaveGameSettings.cs:16>).
- [Apply (line 18)](<C:/Users/Ezell/WiSe/Assets/Scripts/Save/SaveGameSettings.cs:18>).

## SaveItemCatalog.cs

[Project](<C:/Users/Ezell/WiSe/Assets/Scripts/Save/SaveItemCatalog.cs>) · [Copy](../Scripts/Assets/Scripts/Save/SaveItemCatalog.cs)

**Declared types:** `SaveItemCatalog`.

**Teaching:** [Three binary save slots and restoring a playthrough](../Features/04-save-files.md).

**Scene evidence:** no direct component reference in the four main scene YAML files. It may be a data/static type, prefab component, runtime-created component, or editor tool.

**Entry points and methods:**

- [Find (line 7)](<C:/Users/Ezell/WiSe/Assets/Scripts/Save/SaveItemCatalog.cs:7>).
