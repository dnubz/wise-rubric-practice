# OOP, ScriptableObjects, and event channels

[Guide home](../README.md) · [Controls](../01-controls.md) · [Script index](../ScriptReference/README.md)

**Workbook areas:** `General`.

## What this feature does

The game divides responsibilities between reusable data, live character state, controllers, and UI. Start with this chapter before reading the larger controllers.

## The four OOP pillars in your code

| Concept | Plain explanation | Your example |
| --- | --- | --- |
| Encapsulation | Keep state behind methods that apply its rules. | `CharacterBase` keeps current HP/SP private. `Heal`, `SpendSP`, and `Equip` update them and notify the HUD. Some public fields still expose configuration directly, so encapsulation is selective. |
| Inheritance | A specific type reuses the common behavior of a parent. | `WiSe`, `RandaL`, and `Druid` inherit `CharacterBase`. NPC variants inherit `NPCBase`. |
| Abstraction | Expose a useful interface without requiring callers to know every implementation detail. | `Item` and `NPCBase` are abstract base classes. A shop can work with an `Item` reference. |
| Polymorphism | The same operation can behave differently for different types. | `Equipment.Cost` and `Consumable.Cost` override `Item.Cost`; NPC subclasses override approach/dialogue behavior. `Consumable.Use(CharacterBase)` is an overload, not an override of `Use()`. |

## How ScriptableObjects work here

`CharacterData` stores starting stats. `Item`, `Equipment`, `BattleSkill`, `DungeonSettings`, and audio settings store editable asset data. A `.cs` file defines the shape; a `.asset` file contains a configured instance. Runtime HP, EXP, and ultimate unlocks belong to the character instance, so unlocking a skill does not rewrite the shared starting asset.

## How the HUD event channel works

1. A stat method changes the character.
2. `NotifyStatsChanged` raises `CharacterStatsChanged` on the assigned channel.
3. HUD scripts subscribed to that asset update their display.
4. Selection uses the separate `CharacterSelected` event.

The publisher does not need to know which HUD is listening. Both sides must use the same event-channel asset. Subscribe in `OnEnable` and unsubscribe in `OnDisable` to avoid stale listeners. `IntEventChannel` is another available channel type; its existence alone does not prove a particular scene uses it.

**Read next:** movement and character state, then inventory. These are small examples of the architecture before WFC and battle.

## Scripts to read

- [CharacterBase.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Character/CharacterBase.cs>) — [included copy](../Scripts/Assets/Scripts/Character/CharacterBase.cs).
- [CharacterData.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Character/CharacterData.cs>) — [included copy](../Scripts/Assets/Scripts/Character/CharacterData.cs).
- [Item.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Inventory/Item.cs>) — [included copy](../Scripts/Assets/Scripts/Inventory/Item.cs).
- [Consumable.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Inventory/Consumable.cs>) — [included copy](../Scripts/Assets/Scripts/Inventory/Consumable.cs).
- [NPCBase.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/NPC/NPCBase.cs>) — [included copy](../Scripts/Assets/Scripts/NPC/NPCBase.cs).
- [CharacterHudEventChannel.cs](<C:/Users/Ezell/WiSe/Assets/Events/CharacterHudEventChannel.cs>) — [included copy](../Scripts/Assets/Events/CharacterHudEventChannel.cs).
- [IntEventChannel.cs](<C:/Users/Ezell/WiSe/Assets/Events/IntEventChannel.cs>) — [included copy](../Scripts/Assets/Events/IntEventChannel.cs).
- [CurrentCharacterHud.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/CurrentCharacterHud.cs>) — [included copy](../Scripts/Assets/Scripts/UI/InGame/CurrentCharacterHud.cs).

## Small piece of the actual code

From [CharacterHudEventChannel.cs](<C:/Users/Ezell/WiSe/Assets/Events/CharacterHudEventChannel.cs:15>) (line 15). This is an excerpt; continue in the full script for context.

```csharp
    public void RaiseCharacterStatsChanged(CharacterBase character)
    {
        CharacterStatsChanged?.Invoke(character);
    }
}
```

## Demonstrate it yourself

Open `CharacterBase.Heal`, then the event channel and `CurrentCharacterHud`. Trace a heal from the private HP value to the displayed bar. Inspect a CharacterData asset and compare starting HP with the character's current HP during Play mode.

## Explain it in one answer

“OOP keeps each system responsible for its own behavior. The three characters share CharacterBase, ScriptableObjects hold editable starting data, and a HUD event channel tells listeners when live state changes.”

## Exact workbook requirements covered here

The row number is the source locator. The rubric file preserves recorded scores separately.

- `General!B7`: Using OOP inside project — [rubric row](../Rubric/General.md#row-7).
- `General!B8`: Understand about OOP (what is OOP, why is OOP, each pillar) — [rubric row](../Rubric/General.md#row-8).
- `General!B9`: Game is optimized — [rubric row](../Rubric/General.md#row-9).
- `General!B10`: Using Scriptable Object — [rubric row](../Rubric/General.md#row-10).
- `General!B11`: Using Event Channel — [rubric row](../Rubric/General.md#row-11).
