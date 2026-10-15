# Audio routing, footsteps, particles, highlights, and UI feedback

[Guide home](../README.md) · [Controls](../01-controls.md) · [Script index](../ScriptReference/README.md)

**Workbook areas:** `General`, `Characters`, `NPC`, `Overworld`, `Main Menu`, `Skills`.

## Shared audio routing

GameAudio routes music/SFX through separate mixer groups. Title, footsteps, NPC greeting, dungeon, and battle sources use that route. OverworldMusicController tracks NPC proximity and special owners so Berdly themes, chemistry battle, and rhythm do not overlap the world track unintentionally.

## Distance-based surface sound

CharacterSurfaceAudio measures horizontal movement since the last frame. It accumulates distance and plays after the configured step spacing. Idle, airborne movement, large teleports, menus, and breaking actions reset/suppress steps. Swimming has separate splash spacing and clips; entering water can immediately play a splash.

For grounded walking it asks `WFCWorldManager.GetTerrainAt`. SurfaceAudioSettings maps grass and sand explicitly and everything else to rock. The saved asset has three distinct dry-terrain clip references and three swimming clips. The missing distinct water walking clip is documented as a requirement gap.

## What makes the feedback visible

- Character switching can instantiate a switch particle prefab.
- ObjectHighlight and renderer/outline configuration distinguish player/NPC/enemy objects.
- Battle popups display damage/healing, and status visuals display shields/buffs.
- Dungeon arrival titles, coin sounds, room fades, gate lifts, and swing/impact cues communicate changes.
- GameplayHudVisibility coordinates exploration HUD visibility around overlays and battle transitions.

## Responsive UI and post processing

Scenes contain Unity UI and global Volume objects; BattleScene has its own post-processing object. Anchors, CanvasScaler configuration, text sizing, and actual resolution determine layout. Merely using RectTransform does not establish that every screen is responsive. Inspect each major overlay at different supported aspect ratios.

Visual feedback is separate from gameplay permission: a shield icon must agree with BattleUnit.shields, a door highlight must agree with lock/key state, and a blended shore must agree with WFC terrain. Asset/scene assignments determine whether the authored clips/materials actually appear in a player build.

## Scripts to read

- [GameAudio.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Audio/GameAudio.cs>) — [included copy](../Scripts/Assets/Scripts/Audio/GameAudio.cs).
- [GameAudioBootstrap.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Audio/GameAudioBootstrap.cs>) — [included copy](../Scripts/Assets/Scripts/Audio/GameAudioBootstrap.cs).
- [OverworldMusicController.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Audio/OverworldMusicController.cs>) — [included copy](../Scripts/Assets/Scripts/Audio/OverworldMusicController.cs).
- [CharacterSurfaceAudio.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Audio/CharacterSurfaceAudio.cs>) — [included copy](../Scripts/Assets/Scripts/Audio/CharacterSurfaceAudio.cs).
- [SurfaceAudioSettings.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Audio/SurfaceAudioSettings.cs>) — [included copy](../Scripts/Assets/Scripts/Audio/SurfaceAudioSettings.cs).
- [ObjectHighlight.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Highlight/ObjectHighlight.cs>) — [included copy](../Scripts/Assets/Scripts/Highlight/ObjectHighlight.cs).
- [GameplayHudVisibility.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/UI/InGame/GameplayHudVisibility.cs>) — [included copy](../Scripts/Assets/Scripts/UI/InGame/GameplayHudVisibility.cs).
- [DungeonAreaTitle.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Dungeon/DungeonAreaTitle.cs>) — [included copy](../Scripts/Assets/Scripts/Dungeon/DungeonAreaTitle.cs).
- [BattleEffectVisual.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/BattleEffectVisual.cs>) — [included copy](../Scripts/Assets/Scripts/Battle/BattleEffectVisual.cs).

## Small piece of the actual code

From [CharacterSurfaceAudio.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Audio/CharacterSurfaceAudio.cs:58>) (line 58). This is an excerpt; continue in the full script for context.

```csharp
int surface = world != null && world.isActiveAndEnabled ? world.GetTerrainAt(transform.position) : 3;
Play(settings.WalkingClip(surface), settings.stepVolume);
```

## Demonstrate it yourself

Walk, stop against a wall, teleport, and swim while listening. Approach/leave Berdly and Pink to hear music ownership. Open major overlays at two resolutions and inspect text clipping, bar previews, and post-processing changes.

## Explain it in one answer

“Audio uses shared mixer routing and movement distance determines steps. Visual cues reflect actual gameplay state, while scene assets provide the specific particles, outlines, and post processing.”

## Exact workbook requirements covered here

The row number is the source locator. The rubric file preserves recorded scores separately.

- `General!B12`: Responsive UI — [rubric row](../Rubric/General.md#row-12).
- `General!B13`: Using Unity Input System — [rubric row](../Rubric/General.md#row-13).
- `General!B14`: Post Processing — [rubric row](../Rubric/General.md#row-14).
- `Overworld!B16`: Different footstep sound — [rubric row](../Rubric/Overworld.md#row-16).
