# Reading the workbook and its scores

[Guide home](README.md)

The source is [!Scoring Game 26-2 JT.xlsx](<C:/Users/Ezell/Downloads/!Scoring Game 26-2 JT.xlsx>). It has 21 sheets: Result, Master, 17 scored categories, and two supporting rubrics (`Rythm Game` and `IUPAC Algorithm`). The workbook was read without modification.

## How a normal rubric row calculates

A section allocates points from its category maximum. Row weight divides that allocation between requirements. Most rows then use `harvested = score / 4 × row maximum`. Scores are assessment inputs from 0–4. Master sums category harvested points.

The stored Result!B6 value is **36.043791666666664 out of 100**. It is a cached workbook result, not a new score for the current game. The copy was not recalculated. Zero scores must not be treated as proof a feature is missing.

| Category | Maximum | Stored harvested | Checklist |
| --- | --- | --- | --- |
| General | 3 | 0.18 | [General](Rubric/General.md) |
| Main Menu | 1 | 0 | [Main Menu](Rubric/Main-Menu.md) |
| Settings | 2 | 0 | [Settings](Rubric/Settings.md) |
| Save File | 2 | 0 | [Save File](Rubric/Save-File.md) |
| Characters | 5 | 3.72917 | [Characters](Rubric/Characters.md) |
| NPC | 3 | 2.25 | [NPC](Rubric/NPC.md) |
| Item | 2 | 2 | [Item](Rubric/Item.md) |
| Equipment | 2 | 2 | [Equipment](Rubric/Equipment.md) |
| Shop | 2 | 1.94667 | [Shop](Rubric/Shop.md) |
| Overworld | 13 | 3.12813 | [Overworld](Rubric/Overworld.md) |
| Dungeon | 20 | 18.4333 | [Dungeon](Rubric/Dungeon.md) |
| Battle | 7 | 2.3765 | [Battle](Rubric/Battle.md) |
| Boss Battle | 6 | 0 | [Boss Battle](Rubric/Boss-Battle.md) |
| Skills | 12 | 0 | [Skills](Rubric/Skills.md) |
| Enemies | 5.5 | 0 | [Enemies](Rubric/Enemies.md) |
| Minigame | 12.5 | 0 | [Minigame](Rubric/Minigame.md) |
| Cheats | 2 | 0 | [Cheats](Rubric/Cheats.md) |

## Special scoring dependencies and inconsistencies

- `Minigame!F18` multiplies its IUPAC row by the supporting `IUPAC Algorithm!F3` result and that row's score.
- `Minigame!F39` multiplies its rhythm row by `Rythm Game!F3` and the row's score.
- `Skills!F111` multiplies the healer rhythm allocation by `Rythm Game!F14` and its score.
- `IUPAC Algorithm!F9` scales the algorithm subtotal by `C11`, whose factor comes from the two separate question scores.
- `Dungeon!E8` records score **1**, `C8` records maximum **6**, but `F8` is manually stored as **5**. The ordinary score/4 rule would give 1.5. Preserve the workbook's actual 5 while explaining the mismatch.
- Some Master Realized cells are manual values, including Save File, Dungeon, Battle, and Boss Battle. They are not all formulas even when a nearby category uses E/C.

The scoring guide preserves recorded numbers and flags these distinctions. It does not repair the workbook or infer an official grade. Exact requirement labels, source rows, recorded inputs, and code/teaching links are in the per-sheet checklist files.

## Study priority

The largest category maximums are Dungeon (20), Overworld (13), Minigame (12.5), and Skills (12). Study their algorithms and demonstrations carefully, but also prepare the explanation criteria: OOP, binary rationale, raycast, FSM, and shared naming.

## Source versus request

The workbook's requirement text is source material used to organize the guide. It is not authorization to edit features or assessment cells. Your direct request was to read and explain the game in Markdown with linked scripts. Project AGENTS.md requirements were retained and mismatches were reported.
