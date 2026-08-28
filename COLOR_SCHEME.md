# COLOR_SCHEME.md

This document defines the official design system tokens for Cortlet. The system enforces high-contrast canvas switches—pure white for light layouts, absolute black for terminal layouts—anchored by unified emerald green components.

## 1. DESIGN BASIS VALUES

### Light Mode (Core Canvas)
*   **System Background:** `#ffffff` (Pure White)
*   **Surface Containers:** `#f4f4f5` (Zinc 100 Panel Layer)
*   **Primary Typography:** `#09090b` (Zinc 950 High Contrast Text)
*   **Muted Metadata Text:** `#71717a` (Zinc 500 Secondary Labels)
*   **Borders & Structural Lines:** `#e4e4e7` (Zinc 200 Dividers)

### Dark Mode (Terminal Canvas)
*   **System Background:** `#000000` (Absolute Black)
*   **Surface Containers:** `#18181b` (Zinc 900 Panel Layer)
*   **Primary Typography:** `#f4f4f5` (Zinc 100 High Contrast Text)
*   **Muted Metadata Text:** `#a1a1aa` (Zinc 400 Secondary Labels)
*   **Borders & Structural Lines:** `#27272a` (Zinc 800 Dividers)

---

## 2. INTERACTIVE COMPONENT STYLING (EMERALD TOKEN CORE)

### Primary Buttons & Action Triggers
*   **Default Fill State:** `#10b981` (Tailwind Emerald 500)
*   **Light Mode Text Label:** `#ffffff` (White Text over Green Base)
*   **Dark Mode Text Label:** `#000000` (Black Text over Green Base for high contrast)
*   **Hover Interaction (Light):** `#059669` (Emerald 600 - Darker tint)
*   **Hover Interaction (Dark):** `#34d399` (Emerald 400 - Lighter glow tint)

### Focus & Validation States
*   **Focus Keyboard Rings:** `#10b981` with an isolated 2px offset border rule.
*   **System Success Metrics:** `#10b981` check icons and frame borders.
*   **Disabled Form Inputs:** 40% system opacity lock with `pointer-events-none` execution blocks.
