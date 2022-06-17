import Konva from "konva"
import React from "react"
import styled from "styled-components"

function drawMoon(layer: Konva.Layer, stageWidth: number): void {
  const moon = new Konva.Circle({
    x: stageWidth - 50,
    y: 25,
    radius: 25,
    fill: "red",
  })

  layer.add(moon)
}

function drawMountain(
  layer: Konva.Layer,
  stageWidth: number,
  ground: number
): void {
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
    drawMountain(layer, stage.width(), stage.height())
    drawMoon(layer, stage.width())

    stage.add(layer)
    layer.draw()

    return stage
  }

  return undefined
}

export default function MountainBiking({ className }: { className?: string }) {
  return <Stage ref={createStage} className={className}></Stage>
}

const Stage = styled.div``
