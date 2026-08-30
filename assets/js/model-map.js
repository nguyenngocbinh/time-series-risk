document.addEventListener("DOMContentLoaded", () => {
  const map = document.querySelector("[data-model-map]");
  if (!map) return;

  const nodes = [...map.querySelectorAll("[data-model]")];
  const detail = document.querySelector("[data-model-detail]");
  const detailName = document.querySelector("[data-model-name]");
  const detailDesc = document.querySelector("[data-model-description]");
  const detailLink = document.querySelector("[data-model-link]");

  const models = {
    "time-series": { name: "Time Series", description: "Dữ liệu được quan sát theo thời gian; đây là lớp đầu vào cho toàn bộ workflow.", link: "#model-map" },
    "mean-dynamics": { name: "Mean Dynamics", description: "Mô hình hóa phần có thể dự báo của conditional mean.", link: "mean-models/" },
    "arima": { name: "ARIMA", description: "Mô hình mean dynamics cho một chuỗi, với AR, differencing và MA.", link: "mean-models/#arima" },
    "var": { name: "VAR", description: "Vector autoregression cho dynamics tương tác giữa nhiều chuỗi.", link: "mean-models/#var" },
    "vecm": { name: "VECM", description: "Mô hình error-correction giữ quan hệ cân bằng dài hạn giữa các biến cointegrated.", link: "mean-models/#vecm" },
    "volatility": { name: "Volatility Modeling", description: "Mô hình hóa conditional variance thay đổi theo thời gian.", link: "volatility-models/" },
    "arch": { name: "ARCH", description: "Volatility phụ thuộc vào các squared shocks trong quá khứ.", link: "volatility-models/#arch" },
    "garch": { name: "GARCH", description: "Generalized ARCH: volatility phụ thuộc vào cả shocks và variance trong quá khứ.", link: "volatility-models/#garch" },
    "egarch": { name: "EGARCH", description: "Volatility model cho asymmetric response và leverage effect.", link: "volatility-models/#egarch" },
    "forecast": { name: "Volatility Forecast", description: "Dùng model để dự báo conditional volatility cho các horizon tương lai.", link: "volatility-models/#forecast" },
    "risk": { name: "Risk Measures", description: "Chuyển forecast phân phối/volatility thành các thước đo tail risk như VaR và ES.", link: "risk-measures/" },
    "var-risk": { name: "VaR", description: "Value at Risk: quantile loss threshold tại một confidence level xác định.", link: "risk-measures/#var" },
    "es": { name: "Expected Shortfall", description: "Expected loss trong phần đuôi vượt quá ngưỡng VaR.", link: "risk-measures/#es" },
    "backtest": { name: "Backtesting", description: "Đánh giá xem forecast risk có phù hợp với hành vi realized losses ngoài mẫu hay không.", link: "risk-measures/#backtesting" },
    "decision": { name: "Risk Decision", description: "Risk model chỉ là đầu vào; quyết định cuối cùng cần validation, assumptions và governance.", link: "risk-measures/" }
  };

  const select = (id) => {
    const item = models[id];
    nodes.forEach((node) => node.classList.toggle("selected", node.dataset.model === id));
    map.querySelectorAll("[data-flow]").forEach((path) => {
      const targets = (path.dataset.flow || "").split(",");
      path.classList.toggle("highlight", targets.includes(id));
    });
    if (!item || !detail) return;
    detailName.textContent = item.name;
    detailDesc.textContent = item.description;
    if (detailLink) {
      detailLink.href = item.link;
      detailLink.textContent = `Mở ${item.name} →`;
    }
  };

  nodes.forEach((node) => {
    node.setAttribute("role", "button");
    node.setAttribute("tabindex", "0");
    node.addEventListener("click", () => select(node.dataset.model));
    node.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        select(node.dataset.model);
      }
    });
  });

  select("garch");
});
