# Dungeon: workbook checklist

[Guide home](../README.md) · [Workbook scoring explanation](../02-workbook-and-scoring.md)

Source: [!Scoring Game 26-2 JT.xlsx](<C:/Users/Ezell/Downloads/!Scoring Game 26-2 JT.xlsx>). Sheet `Dungeon`. Values below are stored workbook values; formulas were inspected but not recalculated.

Score is the workbook's 0–4 assessment input. Maximum and harvested points can be formula caches or manual values. These are not new implementation grades.

| Source row | Requirement | Score / 4 | Max points | Recorded points | Teaching chapter | Main source |
| --- | --- | --- | --- | --- | --- | --- |
| 7 | Dungeon Generation | 4 | 2 | 2 | [Dungeon room graphs, chains, keys, and floor WFC](../Features/16-dungeon-generation.md) | [DungeonLayout.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonLayout.cs>) |
| 8 | IUPAC Naming Algorithm | 1 | 6 | 5 | [The shared molecule and dungeon naming algorithm](../Features/26-iupac-algorithm.md) | [BerdlyMolecule.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/BerdlyMolecule.cs>) |
| 13 | Spawn room | 3 | 0.666667 | 0.5 | [Dungeon room graphs, chains, keys, and floor WFC](../Features/16-dungeon-generation.md) | [DungeonLayout.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonLayout.cs>) |
| 14 | Boss room | 4 | 0.666667 | 0.666667 | [Dungeon room graphs, chains, keys, and floor WFC](../Features/16-dungeon-generation.md) | [DungeonLayout.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonLayout.cs>) |
| 15 | Original key placement in degree-1 | 4 | 1 | 1 | [Dungeon room graphs, chains, keys, and floor WFC](../Features/16-dungeon-generation.md) | [DungeonLayout.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonLayout.cs>) |
| 16 | Branch door are locked with original key | 4 | 0.666667 | 0.666667 | [Dungeon room graphs, chains, keys, and floor WFC](../Features/16-dungeon-generation.md) | [DungeonLayout.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonLayout.cs>) |
| 17 | Boss room locked with different key (boss key) | 4 | 0.666667 | 0.666667 | [Dungeon room graphs, chains, keys, and floor WFC](../Features/16-dungeon-generation.md) | [DungeonLayout.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonLayout.cs>) |
| 18 | Original key placement in the last room of every branch | 4 | 1 | 1 | [Dungeon room graphs, chains, keys, and floor WFC](../Features/16-dungeon-generation.md) | [DungeonLayout.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonLayout.cs>) |
| 19 | Boss key placement in the last room of last branch | 4 | 1 | 1 | [Dungeon room graphs, chains, keys, and floor WFC](../Features/16-dungeon-generation.md) | [DungeonLayout.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonLayout.cs>) |
| 20 | Chest for key | 4 | 0.333333 | 0.333333 | [Dungeon room graphs, chains, keys, and floor WFC](../Features/16-dungeon-generation.md) | [DungeonGenerator.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonGenerator.cs>) |
| 25 | Randomized room size | 4 | 0.4 | 0.4 | [Dungeon room graphs, chains, keys, and floor WFC](../Features/16-dungeon-generation.md) | [DungeonSettings.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonSettings.cs>) |
| 26 | Tile decoration | 4 | 0.2 | 0.2 | [Dungeon entry, room doors, keys, treasure, and breakables](../Features/17-dungeon-travel-and-rooms.md) | [DungeonFloorWFC.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonFloorWFC.cs>) |
| 27 | Breakable decoration | 4 | 0.4 | 0.4 | [Dungeon entry, room doors, keys, treasure, and breakables](../Features/17-dungeon-travel-and-rooms.md) | [DungeonBreakable.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonBreakable.cs>) |
| 28 | Coin | 4 | 0.2 | 0.2 | [Dungeon entry, room doors, keys, treasure, and breakables](../Features/17-dungeon-travel-and-rooms.md) | [DungeonGenerator.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonGenerator.cs>) |
| 29 | Coin drop from breakable decoration | 4 | 0.2 | 0.2 | [Dungeon entry, room doors, keys, treasure, and breakables](../Features/17-dungeon-travel-and-rooms.md) | [DungeonBreakable.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonBreakable.cs>) |
| 30 | Normal room | 4 | 0.4 | 0.4 | [Dungeon entry, room doors, keys, treasure, and breakables](../Features/17-dungeon-travel-and-rooms.md) | [DungeonGenerator.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonGenerator.cs>) |
| 31 | Treasure room | 4 | 0.4 | 0.4 | [Dungeon entry, room doors, keys, treasure, and breakables](../Features/17-dungeon-travel-and-rooms.md) | [DungeonGenerator.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonGenerator.cs>) |
| 32 | Enemy room | 0 | 0.4 | 0 | [Dungeon entry, room doors, keys, treasure, and breakables](../Features/17-dungeon-travel-and-rooms.md) | [EnemySpawner.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/EnemySpawner.cs>) |
| 33 | Berdly's room | 4 | 0.4 | 0.4 | [Dungeon entry, room doors, keys, treasure, and breakables](../Features/17-dungeon-travel-and-rooms.md) | [DungeonGenerator.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonGenerator.cs>) |
| 38 | Grid-based map | 4 | 0.615385 | 0.615385 | [Exploration camera, zoom, overworld map, and dungeon reveal](../Features/18-cameras-and-maps.md) | [DungeonMinimap.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonMinimap.cs>) |
| 39 | Character icon | 4 | 0.153846 | 0.153846 | [Exploration camera, zoom, overworld map, and dungeon reveal](../Features/18-cameras-and-maps.md) | [DungeonMinimap.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonMinimap.cs>) |
| 40 | Moving minimap's preview | 4 | 0.153846 | 0.153846 | [Exploration camera, zoom, overworld map, and dungeon reveal](../Features/18-cameras-and-maps.md) | [DungeonMinimap.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonMinimap.cs>) |
| 41 | Reveal minimap sequentially | 4 | 0.307692 | 0.307692 | [Exploration camera, zoom, overworld map, and dungeon reveal](../Features/18-cameras-and-maps.md) | [DungeonMinimap.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonMinimap.cs>) |
| 42 | Each grid connection (doorway) | 4 | 0.307692 | 0.307692 | [Exploration camera, zoom, overworld map, and dungeon reveal](../Features/18-cameras-and-maps.md) | [DungeonMinimap.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonMinimap.cs>) |
| 43 | Visited room | 4 | 0.153846 | 0.153846 | [Exploration camera, zoom, overworld map, and dungeon reveal](../Features/18-cameras-and-maps.md) | [DungeonMinimap.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonMinimap.cs>) |
| 44 | Rotate the map if camera rotated | 4 | 0.307692 | 0.307692 | [Exploration camera, zoom, overworld map, and dungeon reveal](../Features/18-cameras-and-maps.md) | [DungeonMinimap.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonMinimap.cs>) |
| 49 | Rotate camera | 4 | 0.142857 | 0.142857 | [Exploration camera, zoom, overworld map, and dungeon reveal](../Features/18-cameras-and-maps.md) | [CameraController.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Camera/CameraController.cs>) |
| 50 | Change character | 4 | 0.142857 | 0.142857 | [Movement, switching characters, HP/SP, EXP, and HUD](../Features/05-movement-and-party.md) | [CharacterSwitchManager.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/CharacterInput/CharacterSwitchManager.cs>) |
| 51 | Show/unshow minimap | 4 | 0.142857 | 0.142857 | [Exploration camera, zoom, overworld map, and dungeon reveal](../Features/18-cameras-and-maps.md) | [DungeonMinimap.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonMinimap.cs>) |
| 52 | Interact | 4 | 0.142857 | 0.142857 | [Dungeon entry, room doors, keys, treasure, and breakables](../Features/17-dungeon-travel-and-rooms.md) | [DungeonGenerator.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonGenerator.cs>) |
| 53 | Jump | 4 | 0.142857 | 0.142857 | [Movement, switching characters, HP/SP, EXP, and HUD](../Features/05-movement-and-party.md) | [CharacterMovement.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/CharacterInput/CharacterMovement.cs>) |
| 54 | Zoom in/out the camera | 4 | 0.142857 | 0.142857 | [Exploration camera, zoom, overworld map, and dungeon reveal](../Features/18-cameras-and-maps.md) | [CameraController.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Camera/CameraController.cs>) |
| 55 | Menu | 4 | 0.142857 | 0.142857 | [In-game menu, Resources, Stats, previews, and Save & Quit](../Features/31-game-menu.md) | [MenuToggle.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/MenuToggle.cs>) |

## Row locators

### Row 7

**Dungeon Generation**

Read [Dungeon room graphs, chains, keys, and floor WFC](../Features/16-dungeon-generation.md) for the behavior, code flow, and demonstration. Source score: `Dungeon!E7`. Source maximum/points: `C7` / `F7`.

### Row 8

**IUPAC Naming Algorithm**

Read [The shared molecule and dungeon naming algorithm](../Features/26-iupac-algorithm.md) for the behavior, code flow, and demonstration. Source score: `Dungeon!E8`. Source maximum/points: `C8` / `F8`.

### Row 13

**Spawn room**

Read [Dungeon room graphs, chains, keys, and floor WFC](../Features/16-dungeon-generation.md) for the behavior, code flow, and demonstration. Source score: `Dungeon!E13`. Source maximum/points: `C13` / `F13`.

### Row 14

**Boss room**

Read [Dungeon room graphs, chains, keys, and floor WFC](../Features/16-dungeon-generation.md) for the behavior, code flow, and demonstration. Source score: `Dungeon!E14`. Source maximum/points: `C14` / `F14`.

### Row 15

**Original key placement in degree-1**

Read [Dungeon room graphs, chains, keys, and floor WFC](../Features/16-dungeon-generation.md) for the behavior, code flow, and demonstration. Source score: `Dungeon!E15`. Source maximum/points: `C15` / `F15`.

### Row 16

**Branch door are locked with original key**

Read [Dungeon room graphs, chains, keys, and floor WFC](../Features/16-dungeon-generation.md) for the behavior, code flow, and demonstration. Source score: `Dungeon!E16`. Source maximum/points: `C16` / `F16`.

### Row 17

**Boss room locked with different key (boss key)**

Read [Dungeon room graphs, chains, keys, and floor WFC](../Features/16-dungeon-generation.md) for the behavior, code flow, and demonstration. Source score: `Dungeon!E17`. Source maximum/points: `C17` / `F17`.

### Row 18

**Original key placement in the last room of every branch**

Read [Dungeon room graphs, chains, keys, and floor WFC](../Features/16-dungeon-generation.md) for the behavior, code flow, and demonstration. Source score: `Dungeon!E18`. Source maximum/points: `C18` / `F18`.

### Row 19

**Boss key placement in the last room of last branch**

Read [Dungeon room graphs, chains, keys, and floor WFC](../Features/16-dungeon-generation.md) for the behavior, code flow, and demonstration. Source score: `Dungeon!E19`. Source maximum/points: `C19` / `F19`.

### Row 20

**Chest for key**

Read [Dungeon room graphs, chains, keys, and floor WFC](../Features/16-dungeon-generation.md) for the behavior, code flow, and demonstration. Source score: `Dungeon!E20`. Source maximum/points: `C20` / `F20`.

### Row 25

**Randomized room size**

Read [Dungeon room graphs, chains, keys, and floor WFC](../Features/16-dungeon-generation.md) for the behavior, code flow, and demonstration. Source score: `Dungeon!E25`. Source maximum/points: `C25` / `F25`.

### Row 26

**Tile decoration**

Read [Dungeon entry, room doors, keys, treasure, and breakables](../Features/17-dungeon-travel-and-rooms.md) for the behavior, code flow, and demonstration. Source score: `Dungeon!E26`. Source maximum/points: `C26` / `F26`.

### Row 27

**Breakable decoration**

Read [Dungeon entry, room doors, keys, treasure, and breakables](../Features/17-dungeon-travel-and-rooms.md) for the behavior, code flow, and demonstration. Source score: `Dungeon!E27`. Source maximum/points: `C27` / `F27`.

### Row 28

**Coin**

Read [Dungeon entry, room doors, keys, treasure, and breakables](../Features/17-dungeon-travel-and-rooms.md) for the behavior, code flow, and demonstration. Source score: `Dungeon!E28`. Source maximum/points: `C28` / `F28`.

### Row 29

**Coin drop from breakable decoration**

Read [Dungeon entry, room doors, keys, treasure, and breakables](../Features/17-dungeon-travel-and-rooms.md) for the behavior, code flow, and demonstration. Source score: `Dungeon!E29`. Source maximum/points: `C29` / `F29`.

### Row 30

**Normal room**

Read [Dungeon entry, room doors, keys, treasure, and breakables](../Features/17-dungeon-travel-and-rooms.md) for the behavior, code flow, and demonstration. Source score: `Dungeon!E30`. Source maximum/points: `C30` / `F30`.

### Row 31

**Treasure room**

Read [Dungeon entry, room doors, keys, treasure, and breakables](../Features/17-dungeon-travel-and-rooms.md) for the behavior, code flow, and demonstration. Source score: `Dungeon!E31`. Source maximum/points: `C31` / `F31`.

### Row 32

**Enemy room**

Read [Dungeon entry, room doors, keys, treasure, and breakables](../Features/17-dungeon-travel-and-rooms.md) for the behavior, code flow, and demonstration. Source score: `Dungeon!E32`. Source maximum/points: `C32` / `F32`.

### Row 33

**Berdly's room**

Read [Dungeon entry, room doors, keys, treasure, and breakables](../Features/17-dungeon-travel-and-rooms.md) for the behavior, code flow, and demonstration. Source score: `Dungeon!E33`. Source maximum/points: `C33` / `F33`.

### Row 38

**Grid-based map**

Read [Exploration camera, zoom, overworld map, and dungeon reveal](../Features/18-cameras-and-maps.md) for the behavior, code flow, and demonstration. Source score: `Dungeon!E38`. Source maximum/points: `C38` / `F38`.

### Row 39

**Character icon**

Read [Exploration camera, zoom, overworld map, and dungeon reveal](../Features/18-cameras-and-maps.md) for the behavior, code flow, and demonstration. Source score: `Dungeon!E39`. Source maximum/points: `C39` / `F39`.

### Row 40

**Moving minimap's preview**

Read [Exploration camera, zoom, overworld map, and dungeon reveal](../Features/18-cameras-and-maps.md) for the behavior, code flow, and demonstration. Source score: `Dungeon!E40`. Source maximum/points: `C40` / `F40`.

### Row 41

**Reveal minimap sequentially**

Read [Exploration camera, zoom, overworld map, and dungeon reveal](../Features/18-cameras-and-maps.md) for the behavior, code flow, and demonstration. Source score: `Dungeon!E41`. Source maximum/points: `C41` / `F41`.

### Row 42

**Each grid connection (doorway)**

Read [Exploration camera, zoom, overworld map, and dungeon reveal](../Features/18-cameras-and-maps.md) for the behavior, code flow, and demonstration. Source score: `Dungeon!E42`. Source maximum/points: `C42` / `F42`.

### Row 43

**Visited room**

Read [Exploration camera, zoom, overworld map, and dungeon reveal](../Features/18-cameras-and-maps.md) for the behavior, code flow, and demonstration. Source score: `Dungeon!E43`. Source maximum/points: `C43` / `F43`.

### Row 44

**Rotate the map if camera rotated**

Read [Exploration camera, zoom, overworld map, and dungeon reveal](../Features/18-cameras-and-maps.md) for the behavior, code flow, and demonstration. Source score: `Dungeon!E44`. Source maximum/points: `C44` / `F44`.

### Row 49

**Rotate camera**

Read [Exploration camera, zoom, overworld map, and dungeon reveal](../Features/18-cameras-and-maps.md) for the behavior, code flow, and demonstration. Source score: `Dungeon!E49`. Source maximum/points: `C49` / `F49`.

### Row 50

**Change character**

Read [Movement, switching characters, HP/SP, EXP, and HUD](../Features/05-movement-and-party.md) for the behavior, code flow, and demonstration. Source score: `Dungeon!E50`. Source maximum/points: `C50` / `F50`.

### Row 51

**Show/unshow minimap**

Read [Exploration camera, zoom, overworld map, and dungeon reveal](../Features/18-cameras-and-maps.md) for the behavior, code flow, and demonstration. Source score: `Dungeon!E51`. Source maximum/points: `C51` / `F51`.

### Row 52

**Interact**

Read [Dungeon entry, room doors, keys, treasure, and breakables](../Features/17-dungeon-travel-and-rooms.md) for the behavior, code flow, and demonstration. Source score: `Dungeon!E52`. Source maximum/points: `C52` / `F52`.

### Row 53

**Jump**

Read [Movement, switching characters, HP/SP, EXP, and HUD](../Features/05-movement-and-party.md) for the behavior, code flow, and demonstration. Source score: `Dungeon!E53`. Source maximum/points: `C53` / `F53`.

### Row 54

**Zoom in/out the camera**

Read [Exploration camera, zoom, overworld map, and dungeon reveal](../Features/18-cameras-and-maps.md) for the behavior, code flow, and demonstration. Source score: `Dungeon!E54`. Source maximum/points: `C54` / `F54`.

### Row 55

**Menu**

Read [In-game menu, Resources, Stats, previews, and Save & Quit](../Features/31-game-menu.md) for the behavior, code flow, and demonstration. Source score: `Dungeon!E55`. Source maximum/points: `C55` / `F55`.
