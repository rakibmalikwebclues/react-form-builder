import {render} from "@testing-library/react";
import input from "./Input";


describe("Input Component",() => {
    it("redered input",()=>{
        const {getByTestId} = render(<Input showDiv={false} />);
        const input = getByTestId();

    })
} )