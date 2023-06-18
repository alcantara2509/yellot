import api from "./api";

const getByPeriod = async (period = "daily") =>
  await api.get("test-2023?dataType=" + period);

export const infoService = {
  getByPeriod,
};
