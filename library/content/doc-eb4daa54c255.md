# Enemies: workbook checklist

[Guide home](../README.md) · [Workbook scoring explanation](../02-workbook-and-scoring.md)

Source: [!Scoring Game 26-2 JT.xlsx](<C:/Users/Ezell/Downloads/!Scoring Game 26-2 JT.xlsx>). Sheet `Enemies`. Values below are stored workbook values; formulas were inspected but not recalculated.

Score is the workbook's 0–4 assessment input. Maximum and harvested points can be formula caches or manual values. These are not new implementation grades.

| Source row | Requirement | Score / 4 | Max points | Recorded points | Teaching chapter | Main source |
| --- | --- | --- | --- | --- | --- | --- |
| 7 | Highlighted with red | 0 | 0.152308 | 0 | [Enemy FSM, navigation, Skeleton/Minion attacks, and variants](../Features/19-enemies.md) | [BattleAppearance.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleAppearance.cs>) |
| 8 | Enemy's state | 0 | 1.21846 | 0 | [Enemy FSM, navigation, Skeleton/Minion attacks, and variants](../Features/19-enemies.md) | [EncounterEnemy.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/EncounterEnemy.cs>) |
| 9 | Finite State Machine | 0 | 0.609231 | 0 | [Enemy FSM, navigation, Skeleton/Minion attacks, and variants](../Features/19-enemies.md) | [EncounterEnemy.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/EncounterEnemy.cs>) |
| 14 | Attack (Overworld) | 0 | 0.297 | 0 | [Enemy FSM, navigation, Skeleton/Minion attacks, and variants](../Features/19-enemies.md) | [EncounterEnemy.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/EncounterEnemy.cs>) |
| 15 | Attack (Battle) | 0 | 0.297 | 0 | [Enemy FSM, navigation, Skeleton/Minion attacks, and variants](../Features/19-enemies.md) | [BattleController.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleController.cs>) |
| 16 | Moving toward player | 0 | 0.792 | 0 | [Enemy FSM, navigation, Skeleton/Minion attacks, and variants](../Features/19-enemies.md) | [EncounterEnemy.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/EncounterEnemy.cs>) |
| 17 | Variant | 0 | 0.099 | 0 | [Enemy FSM, navigation, Skeleton/Minion attacks, and variants](../Features/19-enemies.md) | [BattleController.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleController.cs>) |
| 22 | Attack | 0 | 0.297 | 0 | [Enemy FSM, navigation, Skeleton/Minion attacks, and variants](../Features/19-enemies.md) | [EncounterProjectile.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/EncounterProjectile.cs>) |
| 23 | Attack (Battle) | 0 | 0.297 | 0 | [Enemy FSM, navigation, Skeleton/Minion attacks, and variants](../Features/19-enemies.md) | [BattleController.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleController.cs>) |
| 24 | Moving toward player | 0 | 0.792 | 0 | [Enemy FSM, navigation, Skeleton/Minion attacks, and variants](../Features/19-enemies.md) | [EncounterEnemy.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/EncounterEnemy.cs>) |
| 25 | Variant | 0 | 0.099 | 0 | [Enemy FSM, navigation, Skeleton/Minion attacks, and variants](../Features/19-enemies.md) | [BattleController.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleController.cs>) |
| 30 | Animation | 0 | 0.275 | 0 | [Enemy FSM, navigation, Skeleton/Minion attacks, and variants](../Features/19-enemies.md) | [BattleEnemyMotion.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleEnemyMotion.cs>) |
| 31 | SFX | 0 | 0.275 | 0 | [Enemy FSM, navigation, Skeleton/Minion attacks, and variants](../Features/19-enemies.md) | [BattleSettings.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleSettings.cs>) |

## Row locators

### Row 7

**Highlighted with red**

Read [Enemy FSM, navigation, Skeleton/Minion attacks, and variants](../Features/19-enemies.md) for the behavior, code flow, and demonstration. Source score: `Enemies!E7`. Source maximum/points: `C7` / `F7`.

### Row 8

**Enemy's state**

Read [Enemy FSM, navigation, Skeleton/Minion attacks, and variants](../Features/19-enemies.md) for the behavior, code flow, and demonstration. Source score: `Enemies!E8`. Source maximum/points: `C8` / `F8`.

### Row 9

**Finite State Machine**

Read [Enemy FSM, navigation, Skeleton/Minion attacks, and variants](../Features/19-enemies.md) for the behavior, code flow, and demonstration. Source score: `Enemies!E9`. Source maximum/points: `C9` / `F9`.

### Row 14

**Attack (Overworld)**

Read [Enemy FSM, navigation, Skeleton/Minion attacks, and variants](../Features/19-enemies.md) for the behavior, code flow, and demonstration. Source score: `Enemies!E14`. Source maximum/points: `C14` / `F14`.

### Row 15

**Attack (Battle)**

Read [Enemy FSM, navigation, Skeleton/Minion attacks, and variants](../Features/19-enemies.md) for the behavior, code flow, and demonstration. Source score: `Enemies!E15`. Source maximum/points: `C15` / `F15`.

### Row 16

**Moving toward player**

Read [Enemy FSM, navigation, Skeleton/Minion attacks, and variants](../Features/19-enemies.md) for the behavior, code flow, and demonstration. Source score: `Enemies!E16`. Source maximum/points: `C16` / `F16`.

### Row 17

**Variant**

Read [Enemy FSM, navigation, Skeleton/Minion attacks, and variants](../Features/19-enemies.md) for the behavior, code flow, and demonstration. Source score: `Enemies!E17`. Source maximum/points: `C17` / `F17`.

### Row 22

**Attack**

Read [Enemy FSM, navigation, Skeleton/Minion attacks, and variants](../Features/19-enemies.md) for the behavior, code flow, and demonstration. Source score: `Enemies!E22`. Source maximum/points: `C22` / `F22`.

### Row 23

**Attack (Battle)**

Read [Enemy FSM, navigation, Skeleton/Minion attacks, and variants](../Features/19-enemies.md) for the behavior, code flow, and demonstration. Source score: `Enemies!E23`. Source maximum/points: `C23` / `F23`.

### Row 24

**Moving toward player**

Read [Enemy FSM, navigation, Skeleton/Minion attacks, and variants](../Features/19-enemies.md) for the behavior, code flow, and demonstration. Source score: `Enemies!E24`. Source maximum/points: `C24` / `F24`.

### Row 25

**Variant**

Read [Enemy FSM, navigation, Skeleton/Minion attacks, and variants](../Features/19-enemies.md) for the behavior, code flow, and demonstration. Source score: `Enemies!E25`. Source maximum/points: `C25` / `F25`.

### Row 30

**Animation**

Read [Enemy FSM, navigation, Skeleton/Minion attacks, and variants](../Features/19-enemies.md) for the behavior, code flow, and demonstration. Source score: `Enemies!E30`. Source maximum/points: `C30` / `F30`.

### Row 31

**SFX**

Read [Enemy FSM, navigation, Skeleton/Minion attacks, and variants](../Features/19-enemies.md) for the behavior, code flow, and demonstration. Source score: `Enemies!E31`. Source maximum/points: `C31` / `F31`.
