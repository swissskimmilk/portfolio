---
title: "Diablo DAQ"
description: "Data acquisition and control system for the Diablo liquid bipropellant engine"
image: "/images/projects/diablo-daq.jpg"
slug: "diablo-daq"
order: 1
pubDate: 2025-01-01
tags: ["PCB", "Analog", "Digital"]
---
## Intro
The Diablo DAQ is a data acquisition and control system for the Diablo liquid bipropellant engine developed by the [STAR rocketry team](https://stars.studentorg.berkeley.edu/) at Uc Berkeley. 

The design goals of the system were: 
1. **Scalability**: easily able to add additional sensors, actuators, etc without a hard-cap
2. **Modularity**: each board is a complete, independent node, only requiring power and Ethernet
3. **Sensor-agnostic**: works with virtually any sensor type (0-5V, 4-20mA, etc)

Despite being sensor agnostic, we did make a separate PCB for each sensor type, for the sake of each having different connectors. 

*Disclaimer: I managed and led this projec but by no means did it on my own. See the acknowledgements section for more info!*

## Custom PCBs
1. **Pressure Transducer**: reads data from single-ended 0-5V or 4-20mA PTs
2. **Thermocouple**: reads mV level signals from TCs
3. **RTD (Resistance Temperature Detector)**: reads RTDs using lead wire compensation
4. **Load Cell**: reads mV level differential signals from load cells
5. **Actuator**: controls actuators up to 24V
6. **Power Distribution**: regulates and distributions LV (5.5V) and HV (12-24V)
7. **PT Excitation Generator**: takes in 12V and regulates and filters it to 24V for PT excitation rails

## Acknowledgements
**Rohith Chikka**: LOTS of soldering and layout of the pressure transducer board 

**Adnan Kapadia**: React GUI and schematic of the power distribution board 

**Zeel Bhayani**: schematic and layout of the thermocouple board

**Vidushi Gautam**: schematic and layout of the load cell board

**Steven Perez** and **Joey Lee**: PT excitation generator board 

And thank you Ryan Ames, Rohith Chikka, and Adnan Kapadia for your help with integration and testing 


<!--
  draw.io iframe settings reference
  ==================================
  These URL parameters control the viewer appearance:

  Dark/Light mode  — &dark=0 (light) | &dark=1 (dark) | &dark=auto (follows system)
  Transparency     — add &transparent=1 to the URL and allowtransparency="true" to the <iframe> tag
  Background color — &bg=%23RRGGBB (hex color, %23 = #)

  Example – dark mode, transparent:
    src="...&transparent=1&dark=1#U..."  allowtransparency="true"

  Example – light mode, opaque (current):
    src="...&dark=0#U..."
-->

## State Machine Diagram

<iframe frameborder="0" style="width:100%;height:760px;" src="https://viewer.diagrams.net/?tags=%7B%7D&lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1&title=Diablo_DAQ_State_Machine.drawio&dark=0#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1M4Al9Wm-kXPaxn7iuRsh8iouhcImWHp7%26export%3Ddownload"></iframe>

## Power System Diagram

<iframe frameborder="0" style="width:100%;height:438px;" src="https://viewer.diagrams.net/?tags=%7B%7D&lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1&title=Public_Diablo_DAQ_Power.drawio&dark=0#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1cd8t9lESG09jJicOv_mi53ztsrjJXvBs%26export%3Ddownload"></iframe>

## Hotfire Setup Diagram

<iframe frameborder="0" style="width:100%;height:409px;" src="https://viewer.diagrams.net/?tags=%7B%7D&lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1&title=Public_Diablo_DAQ.drawio&dark=0#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1Ikx8DY9d-sXBDiAdfg58HLqTHp6QQHbj%26export%3Ddownload"></iframe>