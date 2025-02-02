export const setColorSchemeForTest = (colorScheme: "light" | "dark") => {
  Object.defineProperty(window, "matchMedia", {
    value: vi.fn().mockImplementation((query) => {
      return {
        addEventListener: vi.fn(),
        addListener: vi.fn(), // deprecated
        dispatchEvent: vi.fn(),
        matches: colorScheme === "dark",
        // our file checks against darkness
        media: query,
        onchange: null,
        removeEventListener: vi.fn(),
        removeListener: vi.fn(), // deprecated
      };
    }),
    writable: true,
  });
};
