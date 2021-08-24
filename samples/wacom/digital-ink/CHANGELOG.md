# digital-ink ChangeLog

## 1.3.0 (3.0.3)

_2021-01-15_

### Breaking Changes
- _InkBuilder_ configure method should be called only once before starting new path building
- InkBuilderSettings onBuildComplete property is deprecated, InkBuilder onComplete property should be used instead

### Updates
- _InputListener_ - affects ink input when surface transform is available
- _Stroke_ style support implemented
- _Color_ - hex property provides color as hex
- _Matrix_
  - properties setters impl
  - is2D property impl
  - matrix3d support added
  - fromPoints static method impl
- distribution file name updated
- PipelineStage enum available
- InkBuilderSettings updated, pipeline options added:
  - lastPipelineStep - controls where pipeline to complete
  - excludedPipelineStages - excludes stages from pipeline

### Bugfixes
- _InputDevice_ - fix senosor input validation when pointer is not available
- loading BrushGL assets in Safari

## 1.2.0 (3.0.2)

_2020-09-01_

### Breaking Changes

- _InkController_ - interface is updated, registerTouches(changedTouches) method is replaced with registerInputProvider(pointerID, isPrimary), getInkBuilder(changedTouches) with getInkBuilder(pointerID), implementation update is required
- _InkBuilderAbstract_ - property touchID is renamed to pointerID

### Updates

- _InputListener_ - based on PointerEvent only, fallback class is provided when PointerEvent is not available which implementation is based on MouseEvent and TouchEvent
- _SensorPoint_ - PointerEvent based InputListener extends SensorPoint with coalesced and predicted points, when available
- _Matrix_ - provides access to additional properties like scaleX, translateX, etc.
- _InkPath2D_ - 2D ink path type implemented and integrated
- Layer and StrokeRender implementations extended with setTransform method

### Bugfixes

- _PathPoint_ - transform properly applied rotation when available

## 1.1.0 (3.0.1)

_2020-08-11_

### Updates

- _Spline_ - transfrom functionallity provided
- _Stroke_ - transform functionality updated - transform underlying spline and path if available
- _Intersector_ - intersect2 method renamed to intersectSegmentation, doc update
- _InkContext_ - drawSprite is replaced from drawSpritesBatch (batching points sprites)
- _InputDevice_ - decouple sensor point building from ink builder, InputDevice handles building, validation and provides sensor layout as string array
- _InkCanvas2D_ - context attributes support (Layers inherits canvas attributes)

### Bugfixes

- _InkModel_ - provide proper strokes order after manipulations
- _StrokeDrawContext_ - randomSeed fix (int number instead long)
- _StrokeRendererGL_ - renderer configuration color update, overrides path color
- _InkGLContext_ - blend mode MIN fixed, blendMode as property instead method
- _Matrix_ - fromMatrix method do not recreates Matrix when data is Matrix instance
- _PathPointContext_ - improved attributes values analyse, added suppot for tocuh devices with radius range (0, 1)
- _CurvatureBasedInterpolator_ - rotation bug-fix, ts and tf aplyed

## 1.0.0 (3.0.0)

_2020-07-01_

- First release
