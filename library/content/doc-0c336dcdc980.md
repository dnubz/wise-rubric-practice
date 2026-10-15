# Minigame: workbook checklist

[Guide home](../README.md) · [Workbook scoring explanation](../02-workbook-and-scoring.md)

Source: [!Scoring Game 26-2 JT.xlsx](<C:/Users/Ezell/Downloads/!Scoring Game 26-2 JT.xlsx>). Sheet `Minigame`. Values below are stored workbook values; formulas were inspected but not recalculated.

Score is the workbook's 0–4 assessment input. Maximum and harvested points can be formula caches or manual values. These are not new implementation grades.

| Source row | Requirement | Score / 4 | Max points | Recorded points | Teaching chapter | Main source |
| --- | --- | --- | --- | --- | --- | --- |
| 8 | Turn based system | 0 | 0.288462 | 0 | [Berdly chemistry battle: answers, timer, attack, and defend](../Features/25-berdly-minigame.md) | [BerdlyBattleController.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/BerdlyBattleController.cs>) |
| 9 | Health | 0 | 0.0961538 | 0 | [Berdly chemistry battle: answers, timer, attack, and defend](../Features/25-berdly-minigame.md) | [BerdlyBattleController.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/BerdlyBattleController.cs>) |
| 10 | Render Molecule | 0 | 0.576923 | 0 | [Berdly chemistry battle: answers, timer, attack, and defend](../Features/25-berdly-minigame.md) | [BerdlyMoleculeView.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/BerdlyMoleculeView.cs>) |
| 11 | Timer | 0 | 0.192308 | 0 | [Berdly chemistry battle: answers, timer, attack, and defend](../Features/25-berdly-minigame.md) | [BerdlyBattleController.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/BerdlyBattleController.cs>) |
| 12 | Actions | 0 | 0.0480769 | 0 | [Berdly chemistry battle: answers, timer, attack, and defend](../Features/25-berdly-minigame.md) | [BerdlyBattleController.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/BerdlyBattleController.cs>) |
| 13 | Molecule answer buttons | 0 | 0.0480769 | 0 | [Berdly chemistry battle: answers, timer, attack, and defend](../Features/25-berdly-minigame.md) | [BerdlyBattleController.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/BerdlyBattleController.cs>) |
| 18 | IUPAC Algorithm | 0 | 4.16667 | 0 | [The shared molecule and dungeon naming algorithm](../Features/26-iupac-algorithm.md) | [BerdlyMolecule.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/BerdlyMolecule.cs>) |
| 19 | Molecule generation | 0 | 1.38889 | 0 | [The shared molecule and dungeon naming algorithm](../Features/26-iupac-algorithm.md) | [BerdlyMolecule.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/BerdlyMolecule.cs>) |
| 20 | Multiple choice answer making | 0 | 0.694444 | 0 | [The shared molecule and dungeon naming algorithm](../Features/26-iupac-algorithm.md) | [BerdlyMolecule.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/BerdlyMolecule.cs>) |
| 25 | Damage for each right answer | 0 | 0.1875 | 0 | [Berdly chemistry battle: answers, timer, attack, and defend](../Features/25-berdly-minigame.md) | [BerdlyBattleController.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/BerdlyBattleController.cs>) |
| 26 | Attack animation | 0 | 0.1875 | 0 | [Berdly chemistry battle: answers, timer, attack, and defend](../Features/25-berdly-minigame.md) | [BerdlySonicWave.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/BerdlySonicWave.cs>) |
| 31 | Protection for 2 turns | 0 | 0.1875 | 0 | [Berdly chemistry battle: answers, timer, attack, and defend](../Features/25-berdly-minigame.md) | [BerdlyBattleController.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/BerdlyBattleController.cs>) |
| 32 | Heal for each right answer | 0 | 0.1875 | 0 | [Berdly chemistry battle: answers, timer, attack, and defend](../Features/25-berdly-minigame.md) | [BerdlyBattleController.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/BerdlyBattleController.cs>) |
| 39 | Rhythm Minigame | 0 | 3.54167 | 0 | [Pink rhythm: beatmap parsing, tap/hold judgements, and score](../Features/27-rhythm-game.md) | [PinkRhythmRules.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/PinkRhythmRules.cs>) |
| 40 | Stamina bar | 0 | 0.354167 | 0 | [Pink rhythm: beatmap parsing, tap/hold judgements, and score](../Features/27-rhythm-game.md) | [PinkRhythmController.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/PinkRhythmController.cs>) |
| 41 | Parse Beatmap | 0 | 0.354167 | 0 | [Pink rhythm: beatmap parsing, tap/hold judgements, and score](../Features/27-rhythm-game.md) | [PinkRhythmRules.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/PinkRhythmRules.cs>) |

## Row locators

### Row 8

**Turn based system**

Read [Berdly chemistry battle: answers, timer, attack, and defend](../Features/25-berdly-minigame.md) for the behavior, code flow, and demonstration. Source score: `Minigame!E8`. Source maximum/points: `C8` / `F8`.

### Row 9

**Health**

Read [Berdly chemistry battle: answers, timer, attack, and defend](../Features/25-berdly-minigame.md) for the behavior, code flow, and demonstration. Source score: `Minigame!E9`. Source maximum/points: `C9` / `F9`.

### Row 10

**Render Molecule**

Read [Berdly chemistry battle: answers, timer, attack, and defend](../Features/25-berdly-minigame.md) for the behavior, code flow, and demonstration. Source score: `Minigame!E10`. Source maximum/points: `C10` / `F10`.

### Row 11

**Timer**

Read [Berdly chemistry battle: answers, timer, attack, and defend](../Features/25-berdly-minigame.md) for the behavior, code flow, and demonstration. Source score: `Minigame!E11`. Source maximum/points: `C11` / `F11`.

### Row 12

**Actions**

Read [Berdly chemistry battle: answers, timer, attack, and defend](../Features/25-berdly-minigame.md) for the behavior, code flow, and demonstration. Source score: `Minigame!E12`. Source maximum/points: `C12` / `F12`.

### Row 13

**Molecule answer buttons**

Read [Berdly chemistry battle: answers, timer, attack, and defend](../Features/25-berdly-minigame.md) for the behavior, code flow, and demonstration. Source score: `Minigame!E13`. Source maximum/points: `C13` / `F13`.

### Row 18

**IUPAC Algorithm**

Read [The shared molecule and dungeon naming algorithm](../Features/26-iupac-algorithm.md) for the behavior, code flow, and demonstration. Source score: `Minigame!E18`. Source maximum/points: `C18` / `F18`.

### Row 19

**Molecule generation**

Read [The shared molecule and dungeon naming algorithm](../Features/26-iupac-algorithm.md) for the behavior, code flow, and demonstration. Source score: `Minigame!E19`. Source maximum/points: `C19` / `F19`.

### Row 20

**Multiple choice answer making**

Read [The shared molecule and dungeon naming algorithm](../Features/26-iupac-algorithm.md) for the behavior, code flow, and demonstration. Source score: `Minigame!E20`. Source maximum/points: `C20` / `F20`.

### Row 25

**Damage for each right answer**

Read [Berdly chemistry battle: answers, timer, attack, and defend](../Features/25-berdly-minigame.md) for the behavior, code flow, and demonstration. Source score: `Minigame!E25`. Source maximum/points: `C25` / `F25`.

### Row 26

**Attack animation**

Read [Berdly chemistry battle: answers, timer, attack, and defend](../Features/25-berdly-minigame.md) for the behavior, code flow, and demonstration. Source score: `Minigame!E26`. Source maximum/points: `C26` / `F26`.

### Row 31

**Protection for 2 turns**

Read [Berdly chemistry battle: answers, timer, attack, and defend](../Features/25-berdly-minigame.md) for the behavior, code flow, and demonstration. Source score: `Minigame!E31`. Source maximum/points: `C31` / `F31`.

### Row 32

**Heal for each right answer**

Read [Berdly chemistry battle: answers, timer, attack, and defend](../Features/25-berdly-minigame.md) for the behavior, code flow, and demonstration. Source score: `Minigame!E32`. Source maximum/points: `C32` / `F32`.

### Row 39

**Rhythm Minigame**

Read [Pink rhythm: beatmap parsing, tap/hold judgements, and score](../Features/27-rhythm-game.md) for the behavior, code flow, and demonstration. Source score: `Minigame!E39`. Source maximum/points: `C39` / `F39`.

### Row 40

**Stamina bar**

Read [Pink rhythm: beatmap parsing, tap/hold judgements, and score](../Features/27-rhythm-game.md) for the behavior, code flow, and demonstration. Source score: `Minigame!E40`. Source maximum/points: `C40` / `F40`.

### Row 41

**Parse Beatmap**

Read [Pink rhythm: beatmap parsing, tap/hold judgements, and score](../Features/27-rhythm-game.md) for the behavior, code flow, and demonstration. Source score: `Minigame!E41`. Source maximum/points: `C41` / `F41`.
