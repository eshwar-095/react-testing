import { render, screen } from "@testing-library/react"
import { Application } from "./Application"

describe("Application", () => {
  test("renders correctly", () => {
    render(<Application />)

    /** getByRole */
    const nameElement = screen.getByRole("textbox", {
      name: "Name",
    })
    expect(nameElement).toBeInTheDocument()

    const bioElement = screen.getByRole("textbox", {
      name: "Bio",
    })
    expect(bioElement).toBeInTheDocument()

    const jobLocationElement = screen.getByRole("combobox")
    expect(jobLocationElement).toBeInTheDocument()

    const termsElement = screen.getByRole("checkbox")
    expect(termsElement).toBeInTheDocument()

    const submitBUttonElement = screen.getByRole("button")
    expect(submitBUttonElement).toBeInTheDocument()

    //commit
    expect(submitBUttonElement).toBeDisabled()

    const pageHeading = screen.getByRole("heading", {
      level: 1,
    })
    expect(pageHeading).toBeInTheDocument()

    const sectionHeading = screen.getByRole("heading", {
      level: 2,
    })
    expect(sectionHeading).toBeInTheDocument()

    /** getByLabelText */
    const nameElement2 = screen.getByLabelText("Name", {
      selector: "input",
    })
    expect(nameElement2).toBeInTheDocument()

    const termsElement2 = screen.getByLabelText(
      "I agree to the terms and conditions",
    )
    expect(termsElement2).toBeInTheDocument()

    /** getByPlaceholderText */
    const nameElement3 = screen.getByPlaceholderText("Fullname")
    expect(nameElement3).toBeInTheDocument()

    /** getByText */
    const paraElement = screen.getByText("All fields are mandatory")
    expect(paraElement).toBeInTheDocument()

    /** getByAltText */
    const imageElement = screen.getByAltText("a person with a laptop")
    expect(imageElement).toBeInTheDocument()

    /** getByTitle */
    const spanElement = screen.getByTitle("close")
    expect(spanElement).toBeInTheDocument()

    /** getByTestId */

    const customElement = screen.getByTestId("custom-element")
    expect(customElement).toBeInTheDocument()
  })
})
