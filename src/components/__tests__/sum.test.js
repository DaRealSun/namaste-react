import {sum} from "../sum";

test("Sum funtion should cal the sum of 2 numbers", () => {
    const result = sum(3, 5);

    //Assertion
    expect(result).toBe(8);
})