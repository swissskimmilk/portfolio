---
title: "DAQ Environmental Tracker"
description: "Simple PCB to telemeter temperature, humidity, and pressure in the Diablo DAQ and transmit over Ethernet"
image: "/images/projects/daq-environmental.png"
slug: "daq-environmental"
order: 4
pubDate: 2025-01-01
tags: ["PCB", "Small"]
linkToPage: true
---
## Intro
This is a simple PCB with the purpose of telemetering the temperature, humidity, and presssure in the DAQ system via Ethernet. It was created since we plan to cool the DAQ box using GN2, which rapidly cools as it leaves its pressurized bottle. We need to make sure that the cooling is sufficient, but not too extreme, or condensation could form. We also want to know the pressure to ensure we aren't accidently pressurizing the system, and the humidity to determine what temperature we can reach before condensation forms. The server is responsible for taking in the environmental data, and using a PID control loop to release GN2 as needed. 

## Altium Viewer
<div class="altium-ecad-viewer"
  data-project-src="https://swissskimmilk.github.io/portfolio/designs/daq-environmental.zip?v=2"
  data-active-view="3d"
  data-enabled-views="sch,pcb,3d,bom"
  style="border-radius: 8px; height: 500px; overflow: hidden; max-width: 1280px; max-height: 700px; box-sizing: border-box;">
</div>