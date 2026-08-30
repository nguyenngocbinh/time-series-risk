# Time Series Risk Lab

**Econometrics • Volatility • VaR • Risk Modeling**

Repository học và tham chiếu về Time Series & Financial Risk Modeling, kết hợp **tài liệu phương pháp luận tiếng Việt + interactive cheatsheet/dashboard + Jupyter notebooks**.

## 🌐 Time Series Risk Lab

GitHub Pages: https://nguyenngocbinh.github.io/time-series-risk/

Website được thiết kế theo mô hình **Question-Driven Interactive Methodology**:

> **Câu hỏi → Trực giác → Công thức → Giả định → Phương pháp → Chẩn đoán → Validation → Risk Interpretation → Limitations**

Trang web dùng sidebar navigation, methodology cards, model map và interactive volatility simulation. Notebook là lớp thực hành/kiểm chứng cho phần lý thuyết.

## 📚 Learning Path

| Phase | Topics |
|---|---|
| Foundations | Time Series · Returns · Stationarity · ADF · KPSS |
| Mean Models | ARIMA · VAR · VECM · Granger · IRF · FEVD |
| Volatility | ARCH · GARCH · EGARCH · GJR-GARCH · Forecasting |
| Multivariate | VAR-GARCH · DCC-GARCH · Dynamic Correlation |
| Risk | VaR · Expected Shortfall · Backtesting |
| Advanced | Stress Testing · Scenario Analysis · Model Risk · Governance |

## 📓 Existing Notebooks

| Module | Topic | Notebooks |
|---|---|---|
| [01_stationarity](01_stationarity/) | Stationarity Testing | [ADF](01_stationarity/adf.ipynb) · [KPSS](01_stationarity/kpss.ipynb) · [Differencing](01_stationarity/differencing.ipynb) |
| [02_arima](02_arima/) | ARIMA Models | [ARIMA](02_arima/arima.ipynb) |
| [03_var](03_var/) | Vector Autoregression | [VAR Basics](03_var/var_basic.ipynb) · [Lag Selection](03_var/lag_selection.ipynb) · [Granger Causality](03_var/granger_causality.ipynb) · [Impulse Response](03_var/impulse_response.ipynb) · [FEVD](03_var/forecast_error_variance.ipynb) |
| [04_arch](04_arch/) | ARCH Models | [ARCH Effect](04_arch/arch_effect.ipynb) · [ARCH Model](04_arch/arch_model.ipynb) |
| [05_garch](05_garch/) | GARCH Models | [GARCH(1,1)](05_garch/garch11.ipynb) · [EGARCH](05_garch/egarch.ipynb) · [GJR-GARCH](05_garch/gjr_garch.ipynb) · [Forecast](05_garch/garch_forecast.ipynb) |
| [06_var_garch](06_var_garch/) | Multivariate Volatility | [VAR-GARCH](06_var_garch/multivariate_volatility.ipynb) |
| [07_var](07_var/) | Value at Risk | [Historical VaR](07_var/historical_var.ipynb) · [Parametric VaR](07_var/parametric_var.ipynb) · [GARCH VaR](07_var/garch_var.ipynb) |

> **Naming note:** `VAR` means Vector Autoregression; `VaR` means Value at Risk. Future web pages should use the full names when ambiguity is possible.

## 🧭 Methodology Documentation

- [Authoring & AI instructions](docs/INSTRUCTIONS.md)
- [Methodology map & roadmap](docs/methodology-map.md)

## 🚀 Local Development

The documentation is static and designed for GitHub Pages. No backend is required.

```bash
pip install statsmodels arch scipy pandas numpy matplotlib jupyter
jupyter notebook
```

For the web layer, open `docs/index.html` directly or serve `docs/` with any static HTTP server.

## 🧩 Design Principles

1. **Question-first:** mỗi topic bắt đầu bằng câu hỏi.
2. **Methodology-first:** không chỉ hướng dẫn chạy code.
3. **Interactive where useful:** simulation/visualization chỉ được thêm khi giúp hiểu model.
4. **Validation matters:** in-sample fit không đủ để kết luận model tốt.
5. **Risk interpretation:** mọi model phải giải thích được ý nghĩa đối với risk.
6. **Reproducibility:** notebook và web documentation phải liên kết với nhau.

## 📌 Project Structure

```text
time-series-risk/
├── 01_stationarity/
├── 02_arima/
├── 03_var/
├── 04_arch/
├── 05_garch/
├── 06_var_garch/
├── 07_var/
├── docs/
│   ├── index.html
│   ├── INSTRUCTIONS.md
│   ├── methodology-map.md
│   └── assets/
│       ├── css/lab.css
│       └── js/lab.js
└── README.md
```

## 📖 References

Core references include Tsay's *Analysis of Financial Time Series*, Hamilton's *Time Series Analysis*, and the original ARCH/GARCH literature. Specific references should be recorded on each topic page.
