import { TREBUCHET_INPUT } from "./assets/trebuchet-input";

const calibrate = (input: string) => {
  const inputArray = input.split("\n");
  inputArray.pop();

  let total = 0;
  inputArray.forEach((line) => {
    const letters = line.split("");
    const fileteredNumbers = letters.filter((letter) => {
      const intoNumber: any = Number(letter);
      if (!isNaN(intoNumber)) return intoNumber;
    });

    // find first and last number of the array
    const first = fileteredNumbers[0];
    const last = fileteredNumbers[fileteredNumbers.length - 1];
    const calibrationValue = first + last;
    total = total + Number(calibrationValue);
  });
  console.log("Sum of calibration values:", total);
  return total;
};

calibrate(TREBUCHET_INPUT);
