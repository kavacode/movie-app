import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer", () => {
  test("renders Footer with heading, social icons, and copyright text", () => {
    render(<Footer />);

    const headings = screen.getAllByText(/Movie-app/i);
    const facebookIcon = screen.getByLabelText("Facebook");
    const twitterIcon = screen.getByLabelText("Twitter");
    const instagramIcon = screen.getByLabelText("Instagram");
    const copyrightText = screen.getByText(
      /© \d{4} Movie-app. All rights reserved/i
    );

    expect(headings.length).toBeGreaterThan(0);
    expect(facebookIcon).toBeInTheDocument();
    expect(twitterIcon).toBeInTheDocument();
    expect(instagramIcon).toBeInTheDocument();
    expect(copyrightText).toBeInTheDocument();
  });
});
