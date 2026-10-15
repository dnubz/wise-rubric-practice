# Title screen, Play, Continue, and Exit

[Guide home](../README.md) · [Controls](../01-controls.md) · [Script index](../ScriptReference/README.md)

**Workbook areas:** `Main Menu`.

## What the player sees

`TitleScene` contains the title, Play/save-slot flow, Continue Last Played, Settings, and Exit. Title audio plays looping music and one-shot button sounds.

## How it works

1. Play exposes the saved slot cards through the title UI wiring.
2. `SaveSlotUI.SelectSlot` checks whether the chosen file exists.
3. An empty slot calls `GameSave.TryStartNewGame`; a valid occupied slot calls `TryLoadSlot`.
4. A fade covers scene loading and restoration.
5. Continue chooses the valid slot with the latest last-played timestamp.
6. Settings shows its overlay. Exit delegates to the exit component.

Button connections live in the scene's serialized UnityEvents, so the screen's behavior is not all contained in one “MainMenu” script. Look at each Button's **On Click** list in the Inspector.

## The older scene-switch helper

The file `SceneSwitch.cs` declares the class `SceneSwitcher`. Its `SwitchScene` starts a two-second fade/music-volume transition and loads `sceneName`. For the save-card flow, read `SaveSlotUI` and `GameSave` first. Do not assume every title button still uses the older helper.

## Rubric details requiring visual confirmation

The workbook also asks for all character models, different character animations, and an animation after Play. The inspected title scene/code establishes the menu and audio flow, but this documentation review does not confirm those three model/animation criteria. They are listed for an explicit title-screen playtest in the gaps chapter.

## Scripts to read

- [SaveSlotUI.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/MainMenu/SaveSlotUI.cs>) — [included copy](../Scripts/Assets/Scripts/UI/MainMenu/SaveSlotUI.cs).
- [ContinueSaveUI.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/MainMenu/ContinueSaveUI.cs>) — [included copy](../Scripts/Assets/Scripts/UI/MainMenu/ContinueSaveUI.cs).
- [SettingsUI.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/MainMenu/Settings/SettingsUI.cs>) — [included copy](../Scripts/Assets/Scripts/UI/MainMenu/Settings/SettingsUI.cs).
- [TitleAudio.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/MainMenu/Settings/TitleAudio.cs>) — [included copy](../Scripts/Assets/Scripts/UI/MainMenu/Settings/TitleAudio.cs).
- [Exit.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/MainMenu/Exit/Exit.cs>) — [included copy](../Scripts/Assets/Scripts/UI/MainMenu/Exit/Exit.cs).
- [SceneSwitch.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Scene/SceneSwitch.cs>) — [included copy](../Scripts/Assets/Scripts/Scene/SceneSwitch.cs).

## Small piece of the actual code

From [SaveSlotUI.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/MainMenu/SaveSlotUI.cs:55>) (line 55). This is an excerpt; continue in the full script for context.

```csharp
public void SelectSlot(int slot)
{
    if (loading || deletingSlot >= 0 || SceneTravelFade.IsTransitioning) return;
    string error;
    bool started = File.Exists(GameSave.SlotPath(slot)) ? GameSave.TryLoadSlot(slot, out error, LoadFailed) :
        GameSave.TryStartNewGame(slot, out error, LoadFailed);
    if (!started) { LoadFailed(error); return; }
    loading = true;
}
void LoadFailed(string error) { loading = false; if (status != null) status.text = error; }
```

## Demonstrate it yourself

Start TitleScene. Open Play, inspect all three cards, return, open Settings, and use Continue if a valid save exists. Check the actual title character display and Play animation separately. Deleting a card is optional and destroys that slot's progress.

## Explain it in one answer

“Play chooses a save slot. Empty means a fresh playthrough, occupied means restore. Continue uses last-played time, and the fade hides initialization.”

## Exact workbook requirements covered here

The row number is the source locator. The rubric file preserves recorded scores separately.

- `Main Menu!B7`: Show title — [rubric row](../Rubric/Main-Menu.md#row-7).
- `Main Menu!B8`: Play Button — [rubric row](../Rubric/Main-Menu.md#row-8).
- `Main Menu!B9`: Setting Button — [rubric row](../Rubric/Main-Menu.md#row-9).
- `Main Menu!B10`: Exit Button — [rubric row](../Rubric/Main-Menu.md#row-10).
- `Main Menu!B15`: Show every character's model — [rubric row](../Rubric/Main-Menu.md#row-15).
- `Main Menu!B16`: Every character have different animation — [rubric row](../Rubric/Main-Menu.md#row-16).
- `Main Menu!B17`: Play animation after pressing play game — [rubric row](../Rubric/Main-Menu.md#row-17).
- `Main Menu!B18`: Creativity and design — [rubric row](../Rubric/Main-Menu.md#row-18).
- `Main Menu!B23`: Animation — [rubric row](../Rubric/Main-Menu.md#row-23).
- `Main Menu!B24`: Music — [rubric row](../Rubric/Main-Menu.md#row-24).
- `Main Menu!B25`: SFX — [rubric row](../Rubric/Main-Menu.md#row-25).
