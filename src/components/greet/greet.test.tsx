import { render, screen } from "@testing-library/react"
import Greet from "./greet"

test("greet rensers correctly",()=>{
    render(<Greet/>)
    const testEle=screen.getByText(/hello/i)
    expect(testEle).toBeInTheDocument()
})

test("greet rensers correctly with name",()=>{
    render(<Greet name="Tommy"/>)
    const testEle=screen.getByText(/Hello Tommy/i)
    expect(testEle).toBeInTheDocument()
})