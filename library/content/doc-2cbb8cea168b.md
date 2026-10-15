# RandaL: book preview, raycasts, and placement constraints

[Guide home](../README.md) · [Controls](../01-controls.md) · [Script index](../ScriptReference/README.md)

**Workbook areas:** `Characters`.

## What the player sees

With RandaL selected, F toggles placement mode. The ghost book turns green on a valid location and red on an invalid location. Left-click commits a valid placement; F cancels.

## What a raycast means here

A raycast asks which collider a line from an origin in a direction intersects. `Camera.ScreenPointToRay` turns the cursor into a world ray. `RaycastNonAlloc` stores its hits in a reusable array. The code picks the nearest acceptable hit instead of assuming the returned array is sorted.

## Placement checks, in order

1. A usable camera and mouse exist and the cursor is inside the camera view.
2. A solid hit exists; a filled hit buffer is rejected conservatively.
3. The hit is within the maximum distance from RandaL.
4. Its layer and slope are allowed. In the active overworld it must be a TerrainCollider.
5. The preview's visible bounds produce an overlap box.
6. Other solid objects must not overlap that box; a filled overlap buffer is rejected.

The preview ignores its own colliders. Visual bounds align the bottom of the book with the hit surface. The placement camera, ground layers, distance, and slope limits are Inspector configuration.

## Committing a placement

`TryPlaceBook` runs the checks again on the click so a stale green preview cannot bypass a newly moved blocker. It instantiates the authored book, ensures solid collision, replaces the prior active book only after success, and requests navigation rebuilding. A simple fallback book exists if the prefab reference is missing.

**Example:** pointing at terrain behind a solid prop should not let the book pass through that prop. This is why nearest-hit and overlap checks are both needed.

## Scripts to read

- [RandaL.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Character/RandaL.cs>) — [included copy](../Scripts/Assets/Scripts/Character/RandaL.cs).
- [ExplorationNavigation.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Battle/ExplorationNavigation.cs>) — [included copy](../Scripts/Assets/Scripts/Battle/ExplorationNavigation.cs).

## Small piece of the actual code

From [RandaL.cs](<C:/Users/Ezell/WiSe/Assets/Scripts/Character/RandaL.cs:218>) (line 218). This is an excerpt; continue in the full script for context.

```csharp
Ray cursorRay = camera.ScreenPointToRay(cursor);
placementRotation = bookRotation;

// Query every solid layer so a prop in front of the ground blocks placement.
int count = Physics.RaycastNonAlloc(cursorRay, groundHits,
    cursorRayDistance, Physics.DefaultRaycastLayers, QueryTriggerInteraction.Ignore);

RaycastHit surfaceHit = default;
float closest = float.MaxValue;
for (int i = 0; i < count; i++)
{
    RaycastHit hit = groundHits[i];
    if (hit.collider == null || hit.collider.transform.IsChildOf(transform))
        continue;
```

## Demonstrate it yourself

Place on clear terrain, then aim at a steep/blocked/out-of-range point. Explain the red preview using the checks above. Move the cursor back to clear ground and left-click; verify the old book is replaced only after a successful placement.

## Explain it in one answer

“The cursor ray finds ground, then layer, slope, distance, and overlap checks validate the book's footprint. The click rechecks the result before instantiating the solid book.”

## Exact workbook requirements covered here

The row number is the source locator. The rubric file preserves recorded scores separately.

- `Characters!B22`: RandaL summoning book — [rubric row](../Rubric/Characters.md#row-22).
- `Characters!B23`: Book placement review — [rubric row](../Rubric/Characters.md#row-23).
- `Characters!B24`: Book placement constraint with Raycast — [rubric row](../Rubric/Characters.md#row-24).
- `Characters!B25`: Explain Raycast — [rubric row](../Rubric/Characters.md#row-25).
