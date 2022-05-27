# seperated-frontends-poc

## Overview

Proof of Concept for a Product with seperated frontends connected over an NGINX and a unified navigation bar

| Frontend        | Framework/Technologie          |
|-----------------|--------------------------------|
| Reporting       | Vite / Static File Serving     |
| Scan Management | NextJs / Server Side Rendering |
| User Management | Vite / Static File Serving     |

## Installation

`npm install` in each project

> Or start `install.sh` script in project root


## Build / Start (PROD Mode)

| Frontend        | Build command                                                   |
|-----------------|-----------------------------------------------------------------|
| Reporting       | `cd reporting; npm run build; cd -`                             |
| Scan Management | `cd docker; docker-compose up --build -d scan-management; cd -` |
| User Management | `cd user-management; npm run build; cd -`                       |
| NGINX | `cd docker; docker-compose up -d nginx; cd -`                   |

> Or start `start.sh` script in project root

> Project will be available at `http://localhost:8080`
