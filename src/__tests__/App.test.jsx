import { render, screen } from "@testing-library/react";
import App from "../App";
import { describe, it, expect, vi } from "vitest";

// Global Mocks
vi.mock("@gsap/react", () => ({
  useGSAP: vi.fn(),
}));

vi.mock("gsap", () => ({
  default: {
    registerPlugin: vi.fn(),
    timeline: () => ({
      fromTo: vi.fn().mockReturnThis(),
      to: vi.fn().mockReturnThis(),
      from: vi.fn().mockReturnThis(),
    }),
    from: vi.fn(),
    to: vi.fn(),
  },
}));

vi.mock("gsap/all", () => ({
  ScrollTrigger: {},
  SplitText: class {
    constructor() {
      this.chars = [];
      this.lines = [];
    }
  },
}));

// Mock child components that might have complex logic/animations
// For integration testing, we might want to check if they are rendered.
// But if they have GSAP inside, we need the mocks above.

describe("App Integration", () => {
  it("renders main application sections", () => {
    render(<App />);

    // Check for presence of Navbar content
    expect(screen.getByText("Velvet Pour")).toBeInTheDocument();

    // Check for Hero content
    expect(screen.getByText("MOJITO")).toBeInTheDocument();
  });
});
