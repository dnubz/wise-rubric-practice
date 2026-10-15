# Controls by context

[Guide home](README.md)

Keys do different things in different modes. Exploration reads the Player map; battle has a separate Battle map; chemistry and rhythm consume their own UI/minigame inputs.

## Exploration / dungeon

| Input | Action |
| --- | --- |
| WASD | Move the active character. |
| Space | Jump; hold for Druid slow-fall; swimming uses its own vertical response. |
| 1 / 2 / 3 | Select WiSe / RandaL / Druid. |
| F | NPC/chest/door interaction; WiSe cutting; RandaL placement toggle. Context gates apply. |
| Left mouse | Confirm RandaL's valid book placement. |
| Q / E | Change the configured exploration camera view. |
| Scroll | Zoom camera; map focus can direct scrolling to map zoom. |
| M | Toggle minimap. |
| Esc | Gameplay menu / close the active relevant overlay. |
| Ctrl | Open/close the cheat console. |

## 3D battle

The following binding table was read directly from the saved Battle input-action asset.

| Action | Binding |
| --- | --- |
| Move (Up) | `<Keyboard>/w` |
| Move (Down) | `<Keyboard>/s` |
| Move (Left) | `<Keyboard>/a` |
| Move (Right) | `<Keyboard>/d` |
| ChangeCharacter | `<Keyboard>/c` |
| EndTurn | `<Keyboard>/t` |
| Skill1 | `<Keyboard>/1` |
| Skill2 | `<Keyboard>/2` |
| Skill3 | `<Keyboard>/3` |
| Skill4 | `<Keyboard>/4` |
| FastForward | `<Keyboard>/5` |
| Confirm | `<Mouse>/rightButton` |
| Charge | `<Mouse>/leftButton` |
| Dodge | `<Keyboard>/space` |

Select skill 1–4, then right-click to confirm. A/D while aiming rotates WiSe's crescent or cycles RandaL's target. During Arcane Barrage, hold/release left mouse to charge/fire. During WiSe dodge, Space dodges and right-click counters after a perfect input. In Jevil's panel, WASD moves the heart.

## Berdly chemistry

Choose Attack/Defend through the buttons, then click an answer or press 1–4. These numbers answer the molecule question, rather than changing the overworld character. The timer continues through guessing/console behavior described in the minigame chapter.

## Pink rhythm / Grand Ensemble

W/A/S/D match chart lanes. Press for taps and keep held for holds. Extra unmatched presses are ignored by the scoring rules. Follow the countdown/audio timing rather than the character movement map.

## Input ownership

Dialogue, shops, challenges, entry modals, menus, travel, and the cheat console use blocking flags. A key used inside an overlay should not also trigger an exploration action. Inspect NPCChallengePrompt.BlocksGameplayInput when debugging input conflicts.

## Input assets

- [InputSystem_Actions.inputactions](<C:/Users/Ezell/WiSe/Assets/InputSystem/InputSystem_Actions.inputactions>) — [included asset](SourceData/Assets/InputSystem/InputSystem_Actions.inputactions).
- [Battle.inputactions](<C:/Users/Ezell/WiSe/Assets/Resources/Battle/Battle.inputactions>) — [included asset](SourceData/Assets/Resources/Battle/Battle.inputactions).
