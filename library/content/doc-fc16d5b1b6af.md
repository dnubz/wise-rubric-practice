# Two equipment slots, stat differences, and removing gear

[Guide home](../README.md) · [Controls](../01-controls.md) · [Script index](../ScriptReference/README.md)

**Workbook areas:** `Equipment`.

## What equipment does

Equipment assets hold HP, SP, attack, defense, and crit bonuses plus their shop cost. A character has two equipped slots. Equipment is equipped through its menu, rather than consumed like a potion.

## How the menu works

EquipmentUI presents owned gear, the selected character/slot, the item's description, and differences between current and proposed stats. Confirming delegates the actual stat assignment to `CharacterBase.Equip`; Remove calls `Unequip`.

## The stat calculation

For a stat such as attack: **total attack = CharacterData.attack + slot 0 bonus + slot 1 bonus**. The same pattern applies to max HP/SP, defense, and crit. Compare the replaced slot as well as the incoming gear when explaining a preview.

Example: base attack 20, old gear +5, other slot +3 gives 28. Replacing +5 with +8 gives 31, a +3 difference. These are teaching numbers, not the actual asset values.

## Why swapping gear does not heal endlessly

After Equip/Unequip, `ClampStats` reduces current HP/SP only if they exceed the new maximum. Increasing maximum HP does not fill the new space. Removing an HP bonus may reduce current HP to the smaller limit. HUD events then refresh displays.

## Where the gear comes from

Inventory ignores starting Equipment references. Gear can be bought/acquired in gameplay or added with the `equipment` cheat. The cheat catalog references nine configured equipment assets; its number is a catalog fact, not a restriction imposed by the Equipment class.

When explaining “all equipment implemented,” inspect the actual asset catalog and try the UI actions. Having five bonus fields in the class does not alone prove every item is configured.

## Scripts to read

- [Equipment.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Inventory/Equipment.cs>) — [included copy](../Scripts/Assets/Scripts/Inventory/Equipment.cs).
- [EquipmentUI.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/EquipmentUI.cs>) — [included copy](../Scripts/Assets/Scripts/UI/InGame/EquipmentUI.cs).
- [CharacterBase.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Character/CharacterBase.cs>) — [included copy](../Scripts/Assets/Scripts/Character/CharacterBase.cs).
- [StatsMenuPanelUI.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/StatsMenuPanelUI.cs>) — [included copy](../Scripts/Assets/Scripts/UI/InGame/StatsMenuPanelUI.cs).
- [CheatEquipmentCatalog.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/CheatEquipmentCatalog.cs>) — [included copy](../Scripts/Assets/Scripts/UI/InGame/CheatEquipmentCatalog.cs).

## Small piece of the actual code

From [CharacterBase.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Character/CharacterBase.cs:222>) (line 222). This is an excerpt; continue in the full script for context.

```csharp
public void Equip(Equipment item, int slotIndex)
{
    if (slotIndex < 0 || slotIndex >= 2) return;
    equippedItems[slotIndex] = item;
    ClampStats(); // Clamps currHP/SP down if they now exceed the new max
    NotifyStatsChanged();
}

```

## Demonstrate it yourself

Acquire gear, open Equipment, select a slot, inspect the stat differences, and equip it. Remove it and confirm stats return correctly. Check current HP when swapping gear with different maximum-HP bonuses.

## Explain it in one answer

“Gear adds bonuses to base stats in two slots. The menu previews a replacement, and CharacterBase applies it and clamps current HP/SP without refilling them.”

## Exact workbook requirements covered here

The row number is the source locator. The rubric file preserves recorded scores separately.

- `Equipment!B6`: Equipment menu — [rubric row](../Rubric/Equipment.md#row-6).
- `Equipment!B7`: Equip the equipment — [rubric row](../Rubric/Equipment.md#row-7).
- `Equipment!B8`: Show stats difference — [rubric row](../Rubric/Equipment.md#row-8).
- `Equipment!B9`: Show remove option — [rubric row](../Rubric/Equipment.md#row-9).
- `Equipment!B10`: All equipments are implemented — [rubric row](../Rubric/Equipment.md#row-10).
