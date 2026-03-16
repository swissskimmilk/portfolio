---
title: "Motor Driver"
description: "PCB designed to control a wide range of motors up to 60V, including DC, BLDC, and steppers, used for controls testing"
image: "/images/projects/motor-driver.png"
slug: "motor-driver"
order: 5
pubDate: 2025-01-01
tags: ["PCB", "Digital"]
linkToPage: true 
---

## Intro 
This PCB was designed to test a variety of motors to control the Diablo engine's main ball valves. The plan was to use a 48V BLDC, but other options were being considered as well, so I designed the PCB to support up to 60V and work with DC, BLDC, and stepper with simple code and harnessing changes, the motor must just be three coils or less. It also is able to read the encoder type standard in a BLDC and an external encoder. It receives commands and sends data via an RS485 transceiver. 

## Features 
- Small form factor, at just 2 x 2.5 inches

- Supports both 5V and 3.3V push pull and open collector internal BLDC encoders, using a level shifter and pullups 

- Supports external AS5600 or other 3.3V I2C based encoder breakout 

- Uses the DRV8313 motor driver, and a INA180 for current sense amplification, read using an ESP32 ADC channel 

- Uses a spare internal comparator in the DRV8313 to trigger an interrupt when an adjustable current limit is reached 

<div class="altium-ecad-viewer"
  data-project-src="https://swissskimmilk.github.io/portfolio/designs/motor-driver.zip"
  data-active-view="3d"
  data-enabled-views="sch,pcb,3d,bom"
  style="border-radius: 8px; height: 500px; overflow: hidden; max-width: 1280px; max-height: 700px; box-sizing: border-box;">
</div>