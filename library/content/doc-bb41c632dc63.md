# Item/equipment shops and resource merchants

[Guide home](../README.md) · [Controls](../01-controls.md) · [Script index](../ScriptReference/README.md)

**Workbook areas:** `Shop`.

## What the player sees

A shop offers a grid, selected name/description, quantity controls, total cost, gold, and Buy. A resource merchant buys one configured resource type.

## Buying, step by step

1. InteractableNPC opens the ShopInventory assigned to it.
2. ShopUI creates a button for each eligible entry and selects an item.
3. Quantity is clamped between 1 and the configured maximum (class default 99).
4. Total cost is price × quantity, calculated with a long integer before checking the supported gold range.
5. `SpendGold` must succeed before items are added.
6. One inventory copy is added per purchased unit, and the gold UI refreshes.

The Buy button also updates affordability. The purchase method still validates funds, because a disabled button alone is not a reliable transaction rule. The method reports “Not enough gold” when spending fails.

## Why Diamond is excluded

`CanSell` filters out Consumable assets whose own Cost is zero. The configured Diamond is rare chest loot, so it should not appear as a free consumable purchase. This is a data-driven filter, not a string-name comparison against “Diamond.”

## Resource selling

Each merchant's `resourceToBuy` identifies wood, rock, cactus, or mushroom. ResourceSellUI shows that resource and its gold value and removes the selected resource copies through Inventory's transaction helpers. Other resource types must remain in the bag.

## UI ownership

Only one active ShopUI owns shop input. Closing records the frame so the same Esc/F event does not leak back into world gameplay. Leaving/disabling a merchant closes its selling interaction.

## Scripts to read

- [ShopInventory.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Shop/ShopInventory.cs>) — [included copy](../Scripts/Assets/Scripts/Shop/ShopInventory.cs).
- [ShopUI.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Shop/ShopUI.cs>) — [included copy](../Scripts/Assets/Scripts/Shop/ShopUI.cs).
- [ShopItemButtonUI.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Shop/ShopItemButtonUI.cs>) — [included copy](../Scripts/Assets/Scripts/Shop/ShopItemButtonUI.cs).
- [ResourceSellUI.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Shop/ResourceSellUI.cs>) — [included copy](../Scripts/Assets/Scripts/Shop/ResourceSellUI.cs).
- [InteractableNPC.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/NPC/InteractableNPC.cs>) — [included copy](../Scripts/Assets/Scripts/NPC/InteractableNPC.cs).
- [PlayerInventory.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Inventory/PlayerInventory.cs>) — [included copy](../Scripts/Assets/Scripts/Inventory/PlayerInventory.cs).

## Small piece of the actual code

From [ShopUI.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Shop/ShopUI.cs:194>) (line 194). This is an excerpt; continue in the full script for context.

```csharp
public void BuySelectedItem()
{
    ShopEntry entry = GetEntry(selectedIndex);
    if (entry == null) return;

    long totalCost = (long)Mathf.Max(0, entry.GetPrice()) * quantity;
    if (totalCost > int.MaxValue)
    {
        SetStatus("That quantity costs too much.");
        return;
    }

    PlayerInventory inventory = PlayerInventory.Instance;
    if (!inventory.SpendGold((int)totalCost))
    {
        SetStatus("Not enough gold.");
        return;
    }

    for (int i = 0; i < quantity; i++)
```

## Demonstrate it yourself

Talk to an item shop, change quantity, buy, and compare gold/item counts. Confirm Diamond is absent. Repeat with an equipment shop. At a resource merchant, sell its requested resource and confirm other resources remain.

## Explain it in one answer

“The shop calculates quantity × price and spends gold before adding copies. Merchants buy only their assigned resource. Diamond is filtered through consumable cost data.”

## Exact workbook requirements covered here

The row number is the source locator. The rubric file preserves recorded scores separately.

- `Shop!B7`: Show every item in the shop — [rubric row](../Rubric/Shop.md#row-7).
- `Shop!B8`: Exclude diamond from the shop — [rubric row](../Rubric/Shop.md#row-8).
- `Shop!B9`: Show coins — [rubric row](../Rubric/Shop.md#row-9).
- `Shop!B10`: Show current selected item's name — [rubric row](../Rubric/Shop.md#row-10).
- `Shop!B11`: Show description — [rubric row](../Rubric/Shop.md#row-11).
- `Shop!B12`: Show amount — [rubric row](../Rubric/Shop.md#row-12).
- `Shop!B13`: Decrease the amount — [rubric row](../Rubric/Shop.md#row-13).
- `Shop!B14`: Increase the amount — [rubric row](../Rubric/Shop.md#row-14).
- `Shop!B15`: Show coin cost — [rubric row](../Rubric/Shop.md#row-15).
- `Shop!B16`: Buy the item — [rubric row](../Rubric/Shop.md#row-16).
- `Shop!B17`: Show error message when player doesn't have enough coin — [rubric row](../Rubric/Shop.md#row-17).
- `Shop!B22`: Show every equipment in the shop — [rubric row](../Rubric/Shop.md#row-22).
- `Shop!B23`: Show coins — [rubric row](../Rubric/Shop.md#row-23).
- `Shop!B24`: Show current selected equipment's name — [rubric row](../Rubric/Shop.md#row-24).
- `Shop!B25`: Show description — [rubric row](../Rubric/Shop.md#row-25).
- `Shop!B26`: Show amount — [rubric row](../Rubric/Shop.md#row-26).
- `Shop!B27`: Decrease the amount — [rubric row](../Rubric/Shop.md#row-27).
- `Shop!B28`: Increase the amount — [rubric row](../Rubric/Shop.md#row-28).
- `Shop!B29`: Show coin cost — [rubric row](../Rubric/Shop.md#row-29).
- `Shop!B30`: Buy the equipment — [rubric row](../Rubric/Shop.md#row-30).
- `Shop!B31`: Show error message when player doesn't have enough coin — [rubric row](../Rubric/Shop.md#row-31).
- `Shop!B36`: Randomize merchant types (wood, rock, cactus, mushroom) — [rubric row](../Rubric/Shop.md#row-36).
- `Shop!B37`: Show modal — [rubric row](../Rubric/Shop.md#row-37).
- `Shop!B38`: Show total coin — [rubric row](../Rubric/Shop.md#row-38).
- `Shop!B39`: Sell resources — [rubric row](../Rubric/Shop.md#row-39).
