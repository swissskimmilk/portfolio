---
title: "DAN-E Avionics"
description: "PCB to actuate pneumatic actuators using an IMU to detect rocket orientation, flying with the DAN-E payload"
image: "/images/projects/dane-avionics.png"
slug: "dane-avionics"
order: 3
pubDate: 2025-01-01
tags: ["PCB", "Analog", "Digital"]
linkToPage: true
---

## Intro 
The goal of DAN-E is to use four pneumatic actuators, one on each side of a rocket's nosecone, and a tank filled with pressured gas, to actively stabilize a rocket. The avionics I designed are able to control up to six 12V pneumatic actuators (since we may need additional for venting / more advanced control schemes), while collecting information from a barometer, IMU, accelerometer (for high acceleration events, such as launch), and a pressure transducer. The pressure transducer is so that we can telemeter how full the tank is, and relies on a single-channel SAR ADC. The board had to fit into a small form factor of roughly 2x2 inches and regulate the ~12V battery input to 3.3V and 5V. The system also needs to be very low power, since the rocket could sit on the pad for hours before launch. 

## Features 
- Seperate buck regulators to 3.3V and 5V, avoid LDOs to improve efficiency 

- Post buck regulator power filterring with ferrite beads, to improve noise on the rails and thus sensor performance 

- LIS3DHTR accelometer with programmable interrupts, so we can have the MCU in sleep and wake it when launch is detected 

- ~1000uF of bulk capacitance to support fast switching without voltage sag 

- A PMOS soft start circuit, so the large bulk capacitance doesn't cause problems 

- 32MB QSPI storage to store data during flight, since there is no RF solution included 

<div class="altium-ecad-viewer"
  data-project-src="https://swissskimmilk.github.io/portfolio/designs/dane-avionics.zip"
  data-active-view="3d"
  data-enabled-views="sch,pcb,3d,bom"
  style="border-radius: 8px; height: 500px; overflow: hidden; max-width: 1280px; max-height: 700px; box-sizing: border-box;">
</div>
