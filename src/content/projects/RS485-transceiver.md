---
title: "RS485 Transceiver"
description: "Simple PCB that can gather information over I2C / SPI and transmit it over RS485. Made for testing purposes."
image: "/images/projects/RS485-transceiver.png"
slug: "RS485-transceiver"
order: 7
pubDate: 2025-01-01
tags: ["PCB", "Small"]
linkToPage: true
---
## Intro 
A simple PCB designed to take in information from a 3.3V motor encoder breakout that is either I2C or SPI based, and transmit readings over RS485. Since the pins can be multiplexed, can read from anything that runs off 3.3V and uses three GPIO or less. This project was a precursor to the [motor driver](/portfolio/projects/motor-driver), which has the same functionality as this board, but with the ability to drive motors. 

**Credit to Rohith Chikka for helping with the schematic for this board, and bringing it up**

## Features 
- Designed to be powered from a 2S LiPo or similar 

    - Just uses an LDO, but current is low so efficiency is fine 

- Uses a MAX3485 transceiver with proper termination and ESD protection

## Altium Viewer
<div class="altium-ecad-viewer"
  data-project-src="https://swissskimmilk.github.io/portfolio/designs/RS485-transceiver.zip?v=2"
  data-active-view="3d"
  data-enabled-views="sch,pcb,3d,bom"
  style="border-radius: 8px; height: 500px; overflow: hidden; max-width: 1280px; max-height: 700px; box-sizing: border-box;">
</div>
