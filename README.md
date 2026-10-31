# Fawaz Sobowale Portfolio

Static portfolio for an early-career AI/ML engineer based in Lagos, Nigeria, with a focus on applied AI and Python backend systems.

## Website

https://portfolio.korexdev.workers.dev/

## Featured work

- [LoreForge](https://github.com/FawazDev-cmd/loreforge): document retrieval and grounded answers.
- [Fraud Detection API](https://github.com/FawazDev-cmd/Fraud-Detection-API): scikit-learn inference behind FastAPI.
- [SentinelStream](https://github.com/FawazDev-cmd/sentinelstream): event processing and deterministic incident detection.
- [Community Intelligence Agent](https://github.com/FawazDev-cmd/community-intelligence-agent): Slack AI automation with reviewed outputs.

## Local preview

Serve this directory with a static HTTP server, for example:

```sh
python -m http.server 8000
```

Open http://localhost:8000. No build or package installation is required.

## Structure

- `index.html`: content, metadata, and accessible navigation.
- `style.css`: responsive styling and reduced-motion support.
- `index.js`: mobile navigation, optional animations, and manual project browsing.
- `assets/`: portrait, project screenshots, and downloadable CV.

Fonts, icons, and optional GSAP animations use external CDNs. Core content and manual project navigation remain available without GSAP. The download button is labelled CV to match the existing two-page document.

## Publishing and rollback

This repository identifies the public Workers address but contains no deployment workflow or Wrangler configuration. A GitHub merge alone does not establish that the Workers site was updated; check the existing hosting setup before publishing.

Use reviewed commits and pull requests. To undo an applied change, revert its merge or squash commit on a new branch, verify the result, and redeploy through the same hosting setup. Avoid force-pushing shared history.
