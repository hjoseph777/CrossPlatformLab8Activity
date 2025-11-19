## Lab8Activity – PanResponder Gesture Demo (Expo) Project

- Author: Harry Joseph
- Class: Cross Platform Mobile Development
- Created: 2025-11-19
- Platform: Expo (React Native + TypeScript + Expo Router)
- Package Manager: npm
- Minimum React Native version (from scaffold): 0.81.x
- Routing: File-based via `expo-router`


### Download Release
*Get the complete project instantly:*

[![Download CrossPlatformLab8Activity](https://img.shields.io/badge/Download-CrossPlatformLab8Activity.zip-blue?style=for-the-badge&logo=download)](https://github.com/hjoseph777/CrossPlatformLab8Activity/archive/refs/heads/main.zip)


[![Download CROSSPLATFORMLAB8ACTIVITY](https://img.shields.io/badge/Download-CROSSPLATFORMLAB8ACTIVITY.zip-blue?style=for-the-badge&logo=download)](https://github.com/hjoseph777/CROSSPLATFORMLAB8ACTIVITY.ZIP)

### Live Demo
[![Live Demo](https://img.shields.io/badge/Live%20Demo-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://crossplatformlab8activity.vercel.app)

**Try it now:** [Live Demo on Vercel](https://crossplatformlab8activity.vercel.app) - Interactive gesture demo in your browser

## Overview
Lab8Activity demonstrates touch gesture handling in React Native using PanResponder. The project showcases how to create draggable components with smooth animations, spring-back effects, and visual feedback that work consistently across web and mobile platforms.

## Important: Where your gesture code lives
- The main gesture demo is in [`Gesture/app/(tabs)/index.tsx`](Gesture/app/(tabs)/index.tsx) with simple integration
- The draggable component is in [`Gesture/components/DraggableBox.js`](Gesture/components/DraggableBox.js) with PanResponder implementation

## Project Explorer
An interactive, collapsible view of the codebase. Click file names to open them.

<details open>
   <summary><strong>Gesture/app/ – Routes & Navigation</strong></summary>

   - 📁 <strong>app</strong>
      - 📄 [`_layout.tsx`](Gesture/app/_layout.tsx) – Root stack layout with theme provider
      - 📄 [`modal.tsx`](Gesture/app/modal.tsx) – Example modal screen
      - 📁 <strong>(tabs)</strong>
         - 📄 [`_layout.tsx`](Gesture/app/(tabs)/_layout.tsx) – Bottom tab navigator config
         - 🏠 [`index.tsx`](Gesture/app/(tabs)/index.tsx) – **Main gesture demo screen**
         - 🔍 [`explore.tsx`](Gesture/app/(tabs)/explore.tsx) – Explore screen placeholder
</details>

<details>
   <summary><strong>Gesture/components/ – Reusable UI</strong></summary>

   - 📁 <strong>components</strong>
      - 🎯 [`DraggableBox.js`](Gesture/components/DraggableBox.js) – **Main PanResponder draggable component**
      - 🖼️ [`parallax-scroll-view.tsx`](Gesture/components/parallax-scroll-view.tsx) – Parallax header wrapper
      - ✨ [`themed-text.tsx`](Gesture/components/themed-text.tsx) – Theme aware text
      - 🎨 [`themed-view.tsx`](Gesture/components/themed-view.tsx) – Theme aware container
      - 🔔 [`haptic-tab.tsx`](Gesture/components/haptic-tab.tsx) – Haptic feedback for tabs
      - 🔗 [`external-link.tsx`](Gesture/components/external-link.tsx) – External URL opener
      - 👋 [`hello-wave.tsx`](Gesture/components/hello-wave.tsx) – Animated wave component
      - 📁 ui
         - 📂 [`collapsible.tsx`](Gesture/components/ui/collapsible.tsx) – Expand/collapse content region
         - 🧩 [`icon-symbol.tsx`](Gesture/components/ui/icon-symbol.tsx) – Generic platform icon
         - 🧩 [`icon-symbol.ios.tsx`](Gesture/components/ui/icon-symbol.ios.tsx) – iOS variant icon
</details>

<details>
   <summary><strong>Gesture/constants/ & hooks/ – Theming & Utilities</strong></summary>

   - 🎛️ [`constants/theme.ts`](Gesture/constants/theme.ts) – Theme tokens & palette
   - 🧵 Hooks:
      - [`hooks/use-color-scheme.ts`](Gesture/hooks/use-color-scheme.ts) – Native color scheme
      - [`hooks/use-color-scheme.web.ts`](Gesture/hooks/use-color-scheme.web.ts) – Web override
      - [`hooks/use-theme-color.ts`](Gesture/hooks/use-theme-color.ts) – Resolve themed colors
</details>

<details>
   <summary><strong>Assets & Scripts</strong></summary>

   - 🖼️ `Gesture/assets/images/` – Icons, splash, logos
   - 🛠️ [`Gesture/scripts/reset-project.js`](Gesture/scripts/reset-project.js) – Reset scaffold helper
</details>

<details>
   <summary><strong>Config & Meta</strong></summary>

   - ⚙️ [`Gesture/app.json`](Gesture/app.json) – Expo configuration (name, icons, splash)
   - 📦 [`Gesture/package.json`](Gesture/package.json) – Dependencies & scripts
   - 🧪 [`Gesture/tsconfig.json`](Gesture/tsconfig.json) – TypeScript compiler options
   - 🔍 [`Gesture/eslint.config.js`](Gesture/eslint.config.js) – Lint rules
   - 📝 [`README.md`](README.md) – Documentation (this file)
</details>

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **Gesture/app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Gesture Demo Features

- **Touch Detection**: Immediate response to finger touch via `onStartShouldSetPanResponder`
- **Drag Following**: Smooth box movement that follows finger via `onPanResponderMove`
- **Release Animation**: Spring-back to center with color interpolation via `onPanResponderRelease`
- **Visual Feedback**: Opacity changes during dragging and color flash on release
- **Cross-platform**: Works on web, iOS, and Android

---

*This project demonstrates modern React Native PanResponder gesture handling with cross-platform compatibility in mind.*
