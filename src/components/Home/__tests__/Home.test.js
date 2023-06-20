import { render } from "@testing-library/react-native";
import Totals from "../Totals";
import Banner from "../Banner";
import { handleXLabels } from "../Chart";
import { testingData } from "../../../utils/testingData";

describe("Totals", () => {
  it("the component rendered", () => {
    render(<Totals data={testingData} />);
  });
});

describe("Chart", () => {
  it("the component rendered", () => {
    render(<Totals data={testingData} />);
  });
  test("change info 00:00:00 to 00:00", () => {
    expect(handleXLabels(["00:00:00"])).toStrictEqual(["00:00"]);
  });
});

describe("Banner", () => {
  it("the component rendered", () => {
    render(<Banner data={testingData} />);
  });
});
