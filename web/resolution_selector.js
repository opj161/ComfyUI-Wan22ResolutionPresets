import { app } from "../../scripts/app.js";

// =================================================================================
// FINAL CURATED MASTER RESOLUTIONS LIST
//
// This is the definitive list, focused on standard aspect ratios for the best UX.
// It removes niche/legacy resolutions in favor of clarity and ease of use.
//
// =================================================================================
const MASTER_RESOLUTIONS_LIST = [
    // --- 1:1 Square ---
    { w: 480, h: 480, aspect_ratio: "1:1 Square", rule16: true, rule32: true },
    { w: 512, h: 512, aspect_ratio: "1:1 Square", rule16: true, rule32: true },
    { w: 768, h: 768, aspect_ratio: "1:1 Square", rule16: true, rule32: true },
    { w: 896, h: 896, aspect_ratio: "1:1 Square", rule16: true, rule32: true },
    { w: 1024, h: 1024, aspect_ratio: "1:1 Square", rule16: true, rule32: true },
    { w: 1280, h: 1280, aspect_ratio: "1:1 Square", rule16: true, rule32: true },
    { w: 1440, h: 1440, aspect_ratio: "1:1 Square", rule16: true, rule32: true },

    // --- 16:9 Landscape ---
    { w: 512, h: 288, aspect_ratio: "16:9 Landscape", rule16: true, rule32: true },
    { w: 768, h: 432, aspect_ratio: "16:9 Landscape", rule16: true, rule32: false },
    { w: 896, h: 512, aspect_ratio: "16:9 Landscape", rule16: true, rule32: true }, // Good for 5B
    { w: 1024, h: 576, aspect_ratio: "16:9 Landscape", rule16: true, rule32: true },
    { w: 1280, h: 704, aspect_ratio: "16:9 Landscape", rule16: true, rule32: true }, // Official 5B HD
    { w: 1280, h: 720, aspect_ratio: "16:9 Landscape", rule16: true, rule32: false },// Official 14B HD
    { w: 1344, h: 768, aspect_ratio: "16:9 Landscape", rule16: true, rule32: true },
    { w: 1536, h: 864, aspect_ratio: "16:9 Landscape", rule16: true, rule32: false },
    { w: 1600, h: 896, aspect_ratio: "16:9 Landscape", rule16: true, rule32: true },

    // --- 9:16 Portrait ---
    { w: 288, h: 512, aspect_ratio: "9:16 Portrait", rule16: true, rule32: true },
    { w: 432, h: 768, aspect_ratio: "9:16 Portrait", rule16: true, rule32: false },
    { w: 512, h: 896, aspect_ratio: "9:16 Portrait", rule16: true, rule32: true }, // Good for 5B
    { w: 576, h: 1024, aspect_ratio: "9:16 Portrait", rule16: true, rule32: true },
    { w: 704, h: 1280, aspect_ratio: "9:16 Portrait", rule16: true, rule32: true }, // Official 5B HD
    { w: 720, h: 1280, aspect_ratio: "9:16 Portrait", rule16: true, rule32: false },// Official 14B HD
    { w: 768, h: 1344, aspect_ratio: "9:16 Portrait", rule16: true, rule32: true },
    { w: 864, h: 1536, aspect_ratio: "9:16 Portrait", rule16: true, rule32: false },
    { w: 896, h: 1600, aspect_ratio: "9:16 Portrait", rule16: true, rule32: true },
    
    // --- 4:3 Landscape ---
    { w: 512, h: 384, aspect_ratio: "4:3 Landscape", rule16: true, rule32: true },
    { w: 640, h: 480, aspect_ratio: "4:3 Landscape", rule16: true, rule32: true },
    { w: 768, h: 576, aspect_ratio: "4:3 Landscape", rule16: true, rule32: true },
    { w: 960, h: 720, aspect_ratio: "4:3 Landscape", rule16: true, rule32: false },
    { w: 1024, h: 768, aspect_ratio: "4:3 Landscape", rule16: true, rule32: true },
    { w: 1152, h: 864, aspect_ratio: "4:3 Landscape", rule16: true, rule32: true },
    { w: 1280, h: 960, aspect_ratio: "4:3 Landscape", rule16: true, rule32: true },
    { w: 1408, h: 1056, aspect_ratio: "4:3 Landscape", rule16: true, rule32: true },
    { w: 1536, h: 1152, aspect_ratio: "4:3 Landscape", rule16: true, rule32: true },
    { w: 1600, h: 1200, aspect_ratio: "4:3 Landscape", rule16: true, rule32: true },

    // --- 3:4 Portrait ---
    { w: 384, h: 512, aspect_ratio: "3:4 Portrait", rule16: true, rule32: true },
    { w: 480, h: 640, aspect_ratio: "3:4 Portrait", rule16: true, rule32: true },
    { w: 576, h: 768, aspect_ratio: "3:4 Portrait", rule16: true, rule32: true },
    { w: 720, h: 960, aspect_ratio: "3:4 Portrait", rule16: true, rule32: false },
    { w: 768, h: 1024, aspect_ratio: "3:4 Portrait", rule16: true, rule32: true },
    { w: 864, h: 1152, aspect_ratio: "3:4 Portrait", rule16: true, rule32: true },
    { w: 960, h: 1280, aspect_ratio: "3:4 Portrait", rule16: true, rule32: true },
    { w: 1056, h: 1408, aspect_ratio: "3:4 Portrait", rule16: true, rule32: true },
    { w: 1152, h: 1536, aspect_ratio: "3:4 Portrait", rule16: true, rule32: true },
    { w: 1200, h: 1600, aspect_ratio: "3:4 Portrait", rule16: true, rule32: true },
    
    // --- 3:2 Landscape ---
    { w: 480, h: 320, aspect_ratio: "3:2 Landscape", rule16: true, rule32: true },
    { w: 720, h: 480, aspect_ratio: "3:2 Landscape", rule16: true, rule32: false },
    { w: 768, h: 512, aspect_ratio: "3:2 Landscape", rule16: true, rule32: true }, // Good for 5B
    { w: 960, h: 640, aspect_ratio: "3:2 Landscape", rule16: true, rule32: true },
    { w: 1152, h: 768, aspect_ratio: "3:2 Landscape", rule16: true, rule32: true },
    { w: 1200, h: 800, aspect_ratio: "3:2 Landscape", rule16: true, rule32: false },
    { w: 1344, h: 896, aspect_ratio: "3:2 Landscape", rule16: true, rule32: true },
    { w: 1440, h: 960, aspect_ratio: "3:2 Landscape", rule16: true, rule32: true },
    { w: 1536, h: 1024, aspect_ratio: "3:2 Landscape", rule16: true, rule32: true },

    // --- 2:3 Portrait ---
    { w: 320, h: 480, aspect_ratio: "2:3 Portrait", rule16: true, rule32: true },
    { w: 480, h: 720, aspect_ratio: "2:3 Portrait", rule16: true, rule32: false },
    { w: 512, h: 768, aspect_ratio: "2:3 Portrait", rule16: true, rule32: true }, // Good for 5B
    { w: 640, h: 960, aspect_ratio: "2:3 Portrait", rule16: true, rule32: true },
    { w: 768, h: 1152, aspect_ratio: "2:3 Portrait", rule16: true, rule32: true },
    { w: 800, h: 1200, aspect_ratio: "2:3 Portrait", rule16: true, rule32: false },
    { w: 896, h: 1344, aspect_ratio: "2:3 Portrait", rule16: true, rule32: true },
    { w: 960, h: 1440, aspect_ratio: "2:3 Portrait", rule16: true, rule32: true },
    { w: 1024, h: 1536, aspect_ratio: "2:3 Portrait", rule16: true, rule32: true },

    // --- 21:9 Cinematic (approx) ---
    { w: 1024, h: 432, aspect_ratio: "21:9 Cinematic", rule16: true, rule32: false },
    { w: 1280, h: 544, aspect_ratio: "21:9 Cinematic", rule16: true, rule32: false },
    { w: 1536, h: 656, aspect_ratio: "21:9 Cinematic", rule16: true, rule32: false },
    { w: 1792, h: 768, aspect_ratio: "21:9 Cinematic", rule16: true, rule32: true },
    { w: 2048, h: 880, aspect_ratio: "21:9 Cinematic", rule16: true, rule32: false },
];

const VAE_HINTS = {
    "Wan2.2 - 14B Models (I2V/T2V)": "CRITICAL INFO: Use Wan2.1 VAE. Resolutions must be divisible by 16.",
    "Wan2.2 - 5B Model (TI2V)": "CRITICAL INFO: Use Wan2.2 VAE. Resolutions must be divisible by 32.",
};

app.registerExtension({
    name: "Wan22.ResolutionPresets.Dynamic",
    async beforeRegisterNodeDef(nodeType, nodeData, app) {
        if (nodeData.name === "Wan22ResolutionPresets") {
            const onNodeCreated = nodeType.prototype.onNodeCreated;
            
            nodeType.prototype.onNodeCreated = function() {
                onNodeCreated?.apply(this, arguments);
                
                const modeWidget = this.widgets.find(w => w.name === "mode");
                const aspectRatioWidget = this.widgets.find(w => w.name === "aspect_ratio");
                const resolutionWidget = this.widgets.find(w => w.name === "resolution");

                const updateOptions = () => {
                    if (!modeWidget || !aspectRatioWidget || !resolutionWidget) return;

                    const selectedMode = modeWidget.value;
                    const is14B = selectedMode.includes("14B");
                    const is5B = selectedMode.includes("5B");

                    // Update Mode Tooltip
                    modeWidget.tooltip = VAE_HINTS[selectedMode] || "Select the model family.";

                    // Get all unique aspect ratios that are valid for the current rule
                    const validRatiosSet = new Set(MASTER_RESOLUTIONS_LIST
                        .filter(r => (is14B && r.rule16) || (is5B && r.rule32))
                        .map(r => r.aspect_ratio)
                    );
                    
                    // Sort by preferred order, ensuring future aspect ratios are still included
                    const aspectOrder = ["16:9 Landscape", "9:16 Portrait", "4:3 Landscape", "3:4 Portrait", "3:2 Landscape", "2:3 Portrait", "1:1 Square", "21:9 Cinematic"];
                    const sortedValidRatios = aspectOrder.filter(ar => validRatiosSet.has(ar));
                    
                    // This ensures the list is always correct, even if new ratios are added to the master list
                    if (JSON.stringify(aspectRatioWidget.options.values) !== JSON.stringify(sortedValidRatios)) {
                        aspectRatioWidget.options.values = sortedValidRatios;
                    }

                    if (!aspectRatioWidget.options.values.includes(aspectRatioWidget.value)) {
                        aspectRatioWidget.value = aspectRatioWidget.options.values[0] || "";
                    }
                    const selectedAspectRatio = aspectRatioWidget.value;
                    
                    // Filter resolutions based on mode and aspect ratio
                    const filteredResolutions = MASTER_RESOLUTIONS_LIST.filter(r => 
                        r.aspect_ratio === selectedAspectRatio &&
                        ((is14B && r.rule16) || (is5B && r.rule32))
                    ).sort((a, b) => (a.w * a.h) - (b.w * b.h)); // Sort by pixel area

                    const resolutionStrings = filteredResolutions.map(r => `${r.w}x${r.h}`);
                    resolutionWidget.options.values = resolutionStrings;

                    // Intelligently set a default resolution
                    if (!resolutionStrings.includes(resolutionWidget.value)) {
                        // Prioritize common resolutions: 720p height, 1280p height, or 1280x width
                        let bestDefault = resolutionStrings.find(r => r.endsWith("x720") || r.endsWith("x1280") || r.startsWith("1280x"));
                        if (!bestDefault) { // Fallback to the middle option if no standard resolution exists
                            bestDefault = resolutionStrings[Math.floor(resolutionStrings.length / 2)] || resolutionStrings[0];
                        }
                        resolutionWidget.value = bestDefault || "";
                    }
                    
                    this.setDirtyCanvas(true, true);
                };

                // Attach callbacks to mode and aspect_ratio to trigger updates
                [modeWidget, aspectRatioWidget].forEach(widget => {
                    if (widget) {
                        const originalCallback = widget.callback;
                        widget.callback = (value, ...args) => {
                            originalCallback?.call(this, value, ...args);
                            updateOptions();
                        };
                    }
                });
                
                setTimeout(updateOptions, 0); // Initial setup
            };
        }
        
        // Keep the legacy VideoResolutionSelector node working with old data structure
        if (nodeData.name === "VideoResolutionSelector") {
            // Legacy node doesn't need dynamic updates - it uses backend-defined static options
            // This section is intentionally minimal to preserve backward compatibility
        }
    }
});