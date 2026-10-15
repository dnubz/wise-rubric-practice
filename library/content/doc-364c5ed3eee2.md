# Inventory, consumables, HP/SP preview, and Diamond

[Guide home](../README.md) · [Controls](../01-controls.md) · [Script index](../ScriptReference/README.md)

**Workbook areas:** `Item`.

## What the player does

Open Esc → Items, select a consumable, inspect its effect/HP/SP preview, and choose the target character. The UI hides consumable types with zero quantity.

## How quantities work

The Inventory list contains **one InventorySlot per item copy**. Quantity is calculated by counting matching item references/names. It is not stored as a single stack with a quantity field. `OnChanged` tells UI listeners to refresh.

## Using an item

1. InventoryUI verifies that an owned consumable and a valid target are selected.
2. Regular potions cannot target a dead character.
3. An HP-only potion is blocked at full HP; an SP-only potion at full SP; a hybrid at both full.
4. `Consumable.Use(target)` applies configured healing/SP values.
5. Diamond's revive/full-restore flag fills HP and SP.
6. The UI removes one inventory copy, refreshes quantities, and updates the bars.

The current UI supports up to five visible owned consumable types. Effects and descriptions come from the corresponding assets; adding a new asset alone does not automatically add a new configured UI slot.

## Preview versus applying the effect

Preview should show the possible change without spending an item. Only the target action calls Use and removes a copy. Current values are clamped to their maximum by CharacterBase.

## In battle

The same item menu can heal/revive the existing party. After use, InventoryUI refreshes BattleUnit and BattleHUD and emits healing/SP popups. The item data remains shared; the target's live state changes.

## Scripts to read

- [Item.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Inventory/Item.cs>) — [included copy](../Scripts/Assets/Scripts/Inventory/Item.cs).
- [Consumable.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Inventory/Consumable.cs>) — [included copy](../Scripts/Assets/Scripts/Inventory/Consumable.cs).
- [Inventory.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Inventory/Inventory.cs>) — [included copy](../Scripts/Assets/Scripts/Inventory/Inventory.cs).
- [InventorySlot.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Inventory/InventorySlot.cs>) — [included copy](../Scripts/Assets/Scripts/Inventory/InventorySlot.cs).
- [PlayerInventory.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Inventory/PlayerInventory.cs>) — [included copy](../Scripts/Assets/Scripts/Inventory/PlayerInventory.cs).
- [InventoryUI.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/InventoryUI.cs>) — [included copy](../Scripts/Assets/Scripts/UI/InGame/InventoryUI.cs).
- [ItemSlotUI.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/ItemSlotUI.cs>) — [included copy](../Scripts/Assets/Scripts/UI/InGame/ItemSlotUI.cs).
- [MenuStatBar.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/MenuStatBar.cs>) — [included copy](../Scripts/Assets/Scripts/UI/InGame/MenuStatBar.cs).

## Small piece of the actual code

From [InventoryUI.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/InventoryUI.cs:122>) (line 122). This is an excerpt; continue in the full script for context.

```csharp
public void UseOnCharacter(int index)
{
    if (selectedConsumable == null) return;
    if (playerInventory == null) return;
    if (characters == null || index < 0 || index >= characters.Length || characters[index] == null) return;
    if (playerInventory.GetItemCount(selectedConsumable) <= 0) return;

    CharacterBase target = characters[index];

    // Cannot use regular potions on a knocked out character
    if (target.IsDead() && !selectedConsumable.RevivesAndFullRestore)
    {
        Debug.Log(target.gameObject.name + " is knocked out! Needs a revive.");
        return;
    }
```

## Demonstrate it yourself

Damage a character, choose an owned potion, hover/select the target to inspect preview, then use it and confirm quantity falls by one. Use the last copy and confirm its type disappears. A dead character needs Diamond.

## Explain it in one answer

“Inventory counts individual copies. The UI validates the target, Consumable changes that character's stats, and one copy is removed only after use.”

## Exact workbook requirements covered here

The row number is the source locator. The rubric file preserves recorded scores separately.

- `Item!B6`: Item Menu — [rubric row](../Rubric/Item.md#row-6).
- `Item!B7`: Using each item to increase HP & SP — [rubric row](../Rubric/Item.md#row-7).
- `Item!B8`: Show preview when increasing HP & SP — [rubric row](../Rubric/Item.md#row-8).
- `Item!B9`: Not showing item that have quantity of 0 — [rubric row](../Rubric/Item.md#row-9).
- `Item!B10`: All items are implemented — [rubric row](../Rubric/Item.md#row-10).
