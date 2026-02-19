import { render, screen } from "@testing-library/react";
import Navbar from "../Navbar";
import { describe, it, expect, vi } from "vitest";

// Mock GSAP to avoid animation issues during testing
vi.mock("@gsap/react", () => ({
  useGSAP: vi.fn(),
}));

vi.mock("gsap", () => ({
  default: {
    timeline: () => ({
      fromTo: vi.fn(),
    }),
    registerPlugin: vi.fn(),
  },
}));

// Mock constants
vi.mock("../../../constants", () => ({
  navLinks: [
    { id: "section1", title: "Section 1" },
    { id: "section2", title: "Section 2" },
  ],
}));

describe("Navbar", () => {
  it("renders the logo text", () => {
    render(<Navbar />);
    expect(screen.getByText("Velvet Pour")).toBeInTheDocument();
  });

  it("renders navigation links", () => {
    render(<Navbar />);
    expect(screen.getByText("Section 1")).toBeInTheDocument();
    expect(screen.getByText("Section 2")).toBeInTheDocument();
  });
});
