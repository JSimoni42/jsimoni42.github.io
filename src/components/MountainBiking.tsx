import Konva from "konva"
import React from "react"
import styled from "styled-components"

function drawMoon(
  layer: Konva.Layer,
  stageWidth: number,
  stageHeight: number
): void {
  const moon = new Konva.Circle({
    x: stageWidth - 50,
    y: stageHeight * 0.15,
    radius: stageWidth / 25,
    fill: "red",
  })

  layer.add(moon)
}

function drawMountain(
  layer: Konva.Layer,
  stageWidth: number,
  ground: number
): number[] {
  const elevations = [
    ground,
    ground - 20,
    ground - 20,
    ground - 10,
    ground - 50,
    ground - 30,
    ground - 15,
    ground - 15,
    ground - 60,
    ground - 55,
    ground - 55,
    ground - 30,
    ground - 25,
    ground - 20,
    ground - 20,
    ground - 20,
    ground - 10,
    ground - 10,
    ground,
  ]

  const points: number[] = []
  for (let i = 0; i < elevations.length; i++) {
    points.push(stageWidth * (i / elevations.length), elevations[i])
  }

  const mountain = new Konva.Line({
    points,
    stroke: "white",
    strokeWidth: 1,
  })

  layer.add(mountain)

  return points
}

function createCyclist(size: number): Konva.Group {
  const wheelRadius = size
  const rearWheelX = -size * 1.5
  const frontWheelX = size * 1.5
  const wheelY = -wheelRadius
  const seatX = -size * 0.3
  const seatY = wheelY - size * 1.8
  const handlebarX = frontWheelX - size * 0.3
  const handlebarY = wheelY - size * 1.6
  const headRadius = size * 0.6
  const headY = seatY - size * 1.6

  const rearWheel = new Konva.Circle({
    x: rearWheelX,
    y: wheelY,
    radius: wheelRadius,
    stroke: "white",
    strokeWidth: 1,
  })

  const frontWheel = new Konva.Circle({
    x: frontWheelX,
    y: wheelY,
    radius: wheelRadius,
    stroke: "white",
    strokeWidth: 1,
  })

  const frame = new Konva.Line({
    points: [
      rearWheelX,
      wheelY,
      seatX,
      seatY,
      frontWheelX,
      wheelY,
      handlebarX,
      handlebarY,
      seatX,
      seatY,
    ],
    stroke: "white",
    strokeWidth: 1,
  })

  const head = new Konva.Circle({
    x: seatX,
    y: headY,
    radius: headRadius,
    stroke: "white",
    strokeWidth: 1,
  })

  const body = new Konva.Line({
    points: [seatX, seatY, seatX, headY + headRadius],
    stroke: "white",
    strokeWidth: 1,
  })

  const group = new Konva.Group()
  group.add(rearWheel, frontWheel, frame, head, body)

  return group
}

function getTerrainAt(
  points: number[],
  x: number
): { y: number; angleDeg: number } {
  for (let i = 0; i < points.length - 2; i += 2) {
    const x0 = points[i]
    const x1 = points[i + 2]

    if (x >= x0 && x <= x1) {
      const y0 = points[i + 1]
      const y1 = points[i + 3]
      const t = (x - x0) / (x1 - x0)
      const angleDeg = (Math.atan2(y1 - y0, x1 - x0) * 180) / Math.PI
      return { y: y0 + t * (y1 - y0), angleDeg }
    }
  }

  return { y: points[points.length - 1], angleDeg: 0 }
}

const CYCLIST_ENTRY_DELAY_MS = 15 * 1000
const CYCLIST_CYCLE_DURATION_MS = 5 * 60 * 1000
const CYCLIST_RIDE_DURATION_MS = 60 * 1000
const CYCLIST_ROTATION_SMOOTHING_MS = 150

function animateCyclist(
  layer: Konva.Layer,
  cyclist: Konva.Group,
  mountainPoints: number[],
  stageWidth: number
): Konva.Animation {
  let smoothedAngleDeg = 0
  let wasRiding = false

  const anim = new Konva.Animation(frame => {
    if (!frame) return

    const cyclePosition = frame.time % CYCLIST_CYCLE_DURATION_MS
    const ridePosition = cyclePosition - CYCLIST_ENTRY_DELAY_MS
    const isRiding =
      ridePosition >= 0 && ridePosition <= CYCLIST_RIDE_DURATION_MS

    if (!isRiding) {
      cyclist.visible(false)
      wasRiding = false
      return
    }

    const x = (ridePosition / CYCLIST_RIDE_DURATION_MS) * stageWidth
    const { y, angleDeg } = getTerrainAt(mountainPoints, x)

    if (wasRiding) {
      const smoothing =
        1 - Math.exp(-frame.timeDiff / CYCLIST_ROTATION_SMOOTHING_MS)
      smoothedAngleDeg += (angleDeg - smoothedAngleDeg) * smoothing
    } else {
      smoothedAngleDeg = angleDeg
    }

    cyclist.visible(true)
    cyclist.position({ x, y })
    cyclist.rotation(smoothedAngleDeg)
    wasRiding = true
  }, layer)

  anim.start()

  return anim
}

function drawGrid(
  layer: Konva.Layer,
  stageWidth: number,
  stageHeight: number
): void {
  const gridFactor = 10

  for (let x = 0; x < stageWidth; x += gridFactor) {
    const line = new Konva.Line({
      points: [x, 0, x, stageHeight],
      stroke: "white",
      strokeWidth: 1,
    })

    layer.add(line)
  }

  for (let y = 0; y < stageHeight; y += gridFactor) {
    const line = new Konva.Line({
      points: [0, y, stageWidth, y],
      stroke: "white",
      strokeWidth: 1,
    })

    layer.add(line)
  }
}

function createStage(
  container: HTMLDivElement | null
): Konva.Stage | undefined {
  if (container) {
    const stage = new Konva.Stage({
      container,
      width: container.clientWidth,
      height: container.clientHeight,
    })

    const layer = new Konva.Layer()

    // drawGrid(layer, stage.width(), stage.height())
    const mountainPoints = drawMountain(layer, stage.width(), stage.height())
    drawMoon(layer, stage.width(), stage.height())

    const cyclist = createCyclist(stage.width() / 80)
    layer.add(cyclist)
    animateCyclist(layer, cyclist, mountainPoints, stage.width())

    stage.add(layer)
    layer.draw()

    return stage
  }

  return undefined
}

export default function MountainBiking({ className }: { className?: string }) {
  return (
    <Stage
      aria-label="Line drawing of a mountain with the moon behind it"
      ref={createStage}
      className={className}
    ></Stage>
  )
}

const Stage = styled.div``
