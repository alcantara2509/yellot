import { useState, useEffect } from "react";
import { infoService } from "../../services/info.services";
import { useMyStore } from "../../store";

export const useGetAll = (period) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = () => {
    setLoading(true);
    infoService
      .getByPeriod(period)
      .then((res) => {
        setData(res?.data.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => fetchData(), [period]);

  return [data, loading, fetchData];
};
