import moment from "moment";
import { globalStyles } from "../styles/globalStyles";

export const handleDataArray = ({ data, setReference, setDataChart }) => {
  let newArray = [];

  data?.generation?.forEach((x, i) => {
    newArray.push({
      value: x,
      label:
        data?.data_type === "daily"
          ? moment(data?.x_labels?.[i]).format("DD/MM")
          : data?.data_type === "monthly"
          ? moment(data?.x_labels?.[i]).format("MM/YY")
          : moment(data?.x_labels?.[i]).format("YYYY"),
      spacing: 2,
    });

    if (i % 1 === 0) {
      newArray.push({
        value: data?.expected?.[i] || 0,
        spacing: 16,
        frontColor: globalStyles.colors.gray,
      });
    }
  });

  setReference(data?.expected?.[0]);
  setDataChart(newArray);
};
