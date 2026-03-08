---
layout: project
title: OptiQomm
date: 2026-02-12
author: Horizon Instrumentation Team
image: /assets/images/projects_data/optiqomm.png
excerpt: A compact scintillator-based detector designed to measure atmospheric muon flux.
tags: [Instrumentation, Cosmic Rays]
github: https://github.com/horizon/muon-detector
---

## Overview

We built a compact **cosmic ray detector** using plastic scintillators and silicon
photomultipliers (SiPMs) to measure atmospheric muon flux on campus.

The goal was to design a low-cost detector suitable for outreach demonstrations
and long-term cosmic ray measurements.

---

## Motivation

Cosmic ray muons constantly pass through the Earth’s atmosphere.
Detecting them allows us to:

- Study cosmic ray flux
- Demonstrate particle detection techniques
- Build affordable research instruments

---

## Method

The detector consists of:

- Plastic scintillator slab
- Silicon photomultiplier (SiPM)
- Amplifier circuit
- Arduino-based data acquisition

When a muon passes through the scintillator, photons are produced and detected
by the SiPM, generating an electrical pulse that is recorded.

---

## Results

The detector recorded an average muon rate of:

**~1 muon per cm² per minute**, consistent with theoretical expectations.


## Future Improvements

- Coincidence detection with two scintillators
- Temperature stabilization of SiPM
- Automated data logging to cloud

---

## Resources

- GitHub Repository: [Muon Detector Code]({{ page.github }})
- Related Article: [Cosmic Ray Physics](https://en.wikipedia.org/wiki/Cosmic_ray)