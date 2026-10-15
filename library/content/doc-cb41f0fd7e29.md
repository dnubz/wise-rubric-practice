# In-game menu, Resources, Stats, previews, and Save & Quit

[Guide home](../README.md) · [Controls](../01-controls.md) · [Script index](../ScriptReference/README.md)

**Workbook areas:** `Battle`, `Overworld`, `Dungeon`.

## What the player opens

Esc opens the gameplay menu. MenuTabManager selects the default tab and switches between configured panels. Items, equipment, resources, stats, audio settings, and quit each have a separate UI owner.

## Panel responsibilities

- InventoryUI selects consumables and their character targets, validates use, and refreshes quantities/HP/SP.
- EquipmentUI selects gear/slots and shows stat differences.
- ResourceMenuPanelUI reads resource counts from Inventory; it does not generate world resources.
- StatsMenuPanelUI reads CharacterBase's current/base-plus-equipment stats.
- GameAudioMenuUI changes shared audio settings.
- QuitMenuUI offers Keep Playing or Save & Quit and displays save failures.
- MenuStatBar applies current values and preview presentation to the configured UI bars.

## Input and battle behavior

MenuToggle subscribes to the Player Menu action. In a 3D battle it delegates to BattleSession.OpenMenu instead of using the ordinary exploration toggle. Battle controllers check MenuOpen to suspend action timing and refresh party state when returning.

Outside battle, NPCChallengePrompt.BlocksGameplayInput combines active menus/modal systems to stop world movement/interactions. Do not assume every overlay pauses global time: the cheat console explicitly allows time/music to continue, while individual systems have their own blocking/pause rules.

## Preview is not a purchase/use

Hovering/selecting an item or gear shows a possible stat change. Confirming a consumable removes one copy; equipping modifies a slot. Reading a preview must not alter actual HP/SP or spend gold. The character's methods remain authoritative for applied state.

## Saving and quitting

QuitMenuUI calls the save operation, waits for success, then returns to TitleScene. Failure leaves the player in the current game with a message. Saving during dungeon/scene travel is rejected until travel finishes.

## Scripts to read

- [MenuToggle.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/MenuToggle.cs>) — [included copy](../Scripts/Assets/Scripts/UI/InGame/MenuToggle.cs).
- [MenuTabManager.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/MenuTabManager.cs>) — [included copy](../Scripts/Assets/Scripts/UI/InGame/MenuTabManager.cs).
- [ResourceMenuPanelUI.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/ResourceMenuPanelUI.cs>) — [included copy](../Scripts/Assets/Scripts/UI/InGame/ResourceMenuPanelUI.cs).
- [StatsMenuPanelUI.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/StatsMenuPanelUI.cs>) — [included copy](../Scripts/Assets/Scripts/UI/InGame/StatsMenuPanelUI.cs).
- [InventoryUI.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/InventoryUI.cs>) — [included copy](../Scripts/Assets/Scripts/UI/InGame/InventoryUI.cs).
- [EquipmentUI.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/EquipmentUI.cs>) — [included copy](../Scripts/Assets/Scripts/UI/InGame/EquipmentUI.cs).
- [QuitMenuUI.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/QuitMenuUI.cs>) — [included copy](../Scripts/Assets/Scripts/UI/InGame/QuitMenuUI.cs).
- [MenuStatBar.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/MenuStatBar.cs>) — [included copy](../Scripts/Assets/Scripts/UI/InGame/MenuStatBar.cs).
- [GameplayHudVisibility.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/GameplayHudVisibility.cs>) — [included copy](../Scripts/Assets/Scripts/UI/InGame/GameplayHudVisibility.cs).

## Small piece of the actual code

From [MenuToggle.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/MenuToggle.cs:43>) (line 43). This is an excerpt; continue in the full script for context.

```csharp
public void ToggleMenu()
{
    if (BattleSession.IsActive) { BattleSession.Instance.OpenMenu(); return; }
    if (NPCChallengePrompt.BlocksGameplayInput) return;
    if (menuUI != null)
    {
        bool opening = !menuUI.activeSelf;
        if (opening && menuTabs != null)
            menuTabs.ShowDefaultTab();

        menuUI.SetActive(opening);
    }
}
```

## Demonstrate it yourself

Open Esc, switch every configured tab, and inspect current values versus previews. Close the menu and confirm controls resume. In battle, use an item through the same menu and observe updated HUD state. Save & Quit through a spare slot.

## Explain it in one answer

“The menu coordinates separate panels. They read shared live state, previews are temporary, and only confirmed actions change inventory/equipment or save the playthrough.”

## Exact workbook requirements covered here

The row number is the source locator. The rubric file preserves recorded scores separately.

- `Dungeon!B55`: Menu — [rubric row](../Rubric/Dungeon.md#row-55).
- `Overworld!B44`: Open menu — [rubric row](../Rubric/Overworld.md#row-44).
