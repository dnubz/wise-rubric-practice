# Characters: workbook checklist

[Guide home](../README.md) · [Workbook scoring explanation](../02-workbook-and-scoring.md)

Source: [!Scoring Game 26-2 JT.xlsx](<C:/Users/Ezell/Downloads/!Scoring Game 26-2 JT.xlsx>). Sheet `Characters`. Values below are stored workbook values; formulas were inspected but not recalculated.

Score is the workbook's 0–4 assessment input. Maximum and harvested points can be formula caches or manual values. These are not new implementation grades.

| Source row | Requirement | Score / 4 | Max points | Recorded points | Teaching chapter | Main source |
| --- | --- | --- | --- | --- | --- | --- |
| 7 | Character movement | 4 | 0.5 | 0.5 | [Movement, switching characters, HP/SP, EXP, and HUD](../Features/05-movement-and-party.md) | [CharacterMovement.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/CharacterInput/CharacterMovement.cs>) |
| 8 | Highlight each character with white | 4 | 0.166667 | 0.166667 | [Movement, switching characters, HP/SP, EXP, and HUD](../Features/05-movement-and-party.md) | [ObjectHighlight.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Highlight/ObjectHighlight.cs>) |
| 9 | Switch character | 4 | 0.166667 | 0.166667 | [Movement, switching characters, HP/SP, EXP, and HUD](../Features/05-movement-and-party.md) | [CharacterSwitchManager.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/CharacterInput/CharacterSwitchManager.cs>) |
| 10 | Particle effect | 2 | 0.333333 | 0.166667 | [Movement, switching characters, HP/SP, EXP, and HUD](../Features/05-movement-and-party.md) | [CharacterSwitchManager.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/CharacterInput/CharacterSwitchManager.cs>) |
| 11 | Each character UI | 2 | 0.333333 | 0.166667 | [Movement, switching characters, HP/SP, EXP, and HUD](../Features/05-movement-and-party.md) | [CurrentCharacterHud.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/CurrentCharacterHud.cs>) |
| 16 | WiSe interaction with destructable object | 3 | 0.375 | 0.28125 | [WiSe: cutting trees and cactus, and breaking decorations](../Features/06-wise-exploration.md) | [WiSe.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Character/WiSe.cs>) |
| 17 | Only wise can interacted with destructable object | 3 | 0.375 | 0.28125 | [WiSe: cutting trees and cactus, and breaking decorations](../Features/06-wise-exploration.md) | [WiSe.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Character/WiSe.cs>) |
| 22 | RandaL summoning book | 4 | 0.5 | 0.5 | [RandaL: book preview, raycasts, and placement constraints](../Features/07-randal-book.md) | [RandaL.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Character/RandaL.cs>) |
| 23 | Book placement review | 4 | 0.25 | 0.25 | [RandaL: book preview, raycasts, and placement constraints](../Features/07-randal-book.md) | [RandaL.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Character/RandaL.cs>) |
| 24 | Book placement constraint with Raycast | 4 | 0.5 | 0.5 | [RandaL: book preview, raycasts, and placement constraints](../Features/07-randal-book.md) | [RandaL.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Character/RandaL.cs>) |
| 25 | Explain Raycast | 1 | 0.25 | 0.0625 | [RandaL: book preview, raycasts, and placement constraints](../Features/07-randal-book.md) | [RandaL.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Character/RandaL.cs>) |
| 30 | Druid can float while holding jump button | 4 | 0.5 | 0.5 | [Druid: jumping, slow falling, and the pool cliff](../Features/08-druid-gliding.md) | [Druid.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Character/Druid.cs>) |
| 35 | Animation | 1 | 0.5 | 0.125 | [Movement, switching characters, HP/SP, EXP, and HUD](../Features/05-movement-and-party.md) | [CharacterMovement.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/CharacterInput/CharacterMovement.cs>) |
| 36 | SFX | 1 | 0.25 | 0.0625 | [Movement, switching characters, HP/SP, EXP, and HUD](../Features/05-movement-and-party.md) | [CharacterSurfaceAudio.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Audio/CharacterSurfaceAudio.cs>) |

## Row locators

### Row 7

**Character movement**

Read [Movement, switching characters, HP/SP, EXP, and HUD](../Features/05-movement-and-party.md) for the behavior, code flow, and demonstration. Source score: `Characters!E7`. Source maximum/points: `C7` / `F7`.

### Row 8

**Highlight each character with white**

Read [Movement, switching characters, HP/SP, EXP, and HUD](../Features/05-movement-and-party.md) for the behavior, code flow, and demonstration. Source score: `Characters!E8`. Source maximum/points: `C8` / `F8`.

### Row 9

**Switch character**

Read [Movement, switching characters, HP/SP, EXP, and HUD](../Features/05-movement-and-party.md) for the behavior, code flow, and demonstration. Source score: `Characters!E9`. Source maximum/points: `C9` / `F9`.

### Row 10

**Particle effect**

Read [Movement, switching characters, HP/SP, EXP, and HUD](../Features/05-movement-and-party.md) for the behavior, code flow, and demonstration. Source score: `Characters!E10`. Source maximum/points: `C10` / `F10`.

### Row 11

**Each character UI**

Read [Movement, switching characters, HP/SP, EXP, and HUD](../Features/05-movement-and-party.md) for the behavior, code flow, and demonstration. Source score: `Characters!E11`. Source maximum/points: `C11` / `F11`.

### Row 16

**WiSe interaction with destructable object**

Read [WiSe: cutting trees and cactus, and breaking decorations](../Features/06-wise-exploration.md) for the behavior, code flow, and demonstration. Source score: `Characters!E16`. Source maximum/points: `C16` / `F16`.

### Row 17

**Only wise can interacted with destructable object**

Read [WiSe: cutting trees and cactus, and breaking decorations](../Features/06-wise-exploration.md) for the behavior, code flow, and demonstration. Source score: `Characters!E17`. Source maximum/points: `C17` / `F17`.

### Row 22

**RandaL summoning book**

Read [RandaL: book preview, raycasts, and placement constraints](../Features/07-randal-book.md) for the behavior, code flow, and demonstration. Source score: `Characters!E22`. Source maximum/points: `C22` / `F22`.

### Row 23

**Book placement review**

Read [RandaL: book preview, raycasts, and placement constraints](../Features/07-randal-book.md) for the behavior, code flow, and demonstration. Source score: `Characters!E23`. Source maximum/points: `C23` / `F23`.

### Row 24

**Book placement constraint with Raycast**

Read [RandaL: book preview, raycasts, and placement constraints](../Features/07-randal-book.md) for the behavior, code flow, and demonstration. Source score: `Characters!E24`. Source maximum/points: `C24` / `F24`.

### Row 25

**Explain Raycast**

Read [RandaL: book preview, raycasts, and placement constraints](../Features/07-randal-book.md) for the behavior, code flow, and demonstration. Source score: `Characters!E25`. Source maximum/points: `C25` / `F25`.

### Row 30

**Druid can float while holding jump button**

Read [Druid: jumping, slow falling, and the pool cliff](../Features/08-druid-gliding.md) for the behavior, code flow, and demonstration. Source score: `Characters!E30`. Source maximum/points: `C30` / `F30`.

### Row 35

**Animation**

Read [Movement, switching characters, HP/SP, EXP, and HUD](../Features/05-movement-and-party.md) for the behavior, code flow, and demonstration. Source score: `Characters!E35`. Source maximum/points: `C35` / `F35`.

### Row 36

**SFX**

Read [Movement, switching characters, HP/SP, EXP, and HUD](../Features/05-movement-and-party.md) for the behavior, code flow, and demonstration. Source score: `Characters!E36`. Source maximum/points: `C36` / `F36`.
