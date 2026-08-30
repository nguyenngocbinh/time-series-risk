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
| [notebooks/01_foundations/stationarity](notebooks/01_foundations/stationarity/) | Stationarity Testing | [ADF](notebooks/01_foundations/stationarity/adf.ipynb) · [KPSS](notebooks/01_foundations/stationarity/kpss.ipynb) · [Differencing](notebooks/01_foundations/stationarity/differencing.ipynb) |
| [notebooks/02_mean-models/arima](notebooks/02_mean-models/arima/) | ARIMA Models | [ARIMA](notebooks/02_mean-models/arima/arima.ipynb) |
| [notebooks/02_mean-models/vector-autoregression](notebooks/02_mean-models/vector-autoregression/) | Vector Autoregression | [VAR Basics](notebooks/02_mean-models/vector-autoregression/var_basic.ipynb) · [Lag Selection](notebooks/02_mean-models/vector-autoregression/lag_selection.ipynb) · [Granger Causality](notebooks/02_mean-models/vector-autoregression/granger_causality.ipynb) · [Impulse Response](notebooks/02_mean-models/vector-autoregression/impulse_response.ipynb) · [FEVD](notebooks/02_mean-models/vector-autoregression/forecast_error_variance.ipynb) |
| [notebooks/03_volatility-models/arch](notebooks/03_volatility-models/arch/) | ARCH Models | [ARCH Effect](notebooks/03_volatility-models/arch/arch_effect.ipynb) · [ARCH Model](notebooks/03_volatility-models/arch/arch_model.ipynb) |
| [notebooks/03_volatility-models/garch](notebooks/03_volatility-models/garch/) | GARCH Models | [GARCH(1,1)](notebooks/03_volatility-models/garch/garch11.ipynb) · [EGARCH](notebooks/03_volatility-models/garch/egarch.ipynb) · [GJR-GARCH](notebooks/03_volatility-models/garch/gjr_garch.ipynb) · [Forecast](notebooks/03_volatility-models/garch/garch_forecast.ipynb) |
| [notebooks/04_multivariate/var-garch](notebooks/04_multivariate/var-garch/) | Multivariate Volatility | [VAR-GARCH](notebooks/04_multivariate/var-garch/multivariate_volatility.ipynb) |
| [notebooks/05_risk-measures/value-at-risk](notebooks/05_risk-measures/value-at-risk/) | Value at Risk | [Historical VaR](notebooks/05_risk-measures/value-at-risk/historical_var.ipynb) · [Parametric VaR](notebooks/05_risk-measures/value-at-risk/parametric_var.ipynb) · [GARCH VaR](notebooks/05_risk-measures/value-at-risk/garch_var.ipynb) |

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
├── docs/                         # Static documentation and GitHub Pages
│   ├── foundations/
│   ├── mean-models/
│   ├── volatility-models/
│   ├── multivariate/
│   ├── risk-measures/
│   ├── assets/
│   └── index.html
├── notebooks/
│   ├── 01_foundations/stationarity/
│   ├── 02_mean-models/
│   │   ├── arima/
│   │   ├── vector-autoregression/
│   │   └── vecm/
│   ├── 03_volatility-models/
│   │   ├── arch/
│   │   └── garch/
│   ├── 04_multivariate/var-garch/
│   └── 05_risk-measures/value-at-risk/
├── data/
│   ├── raw/
│   ├── processed/
│   └── README.md
├── src/
│   ├── data/
│   ├── diagnostics/
│   ├── models/
│   └── risk/
├── tests/
└── README.md
```

## 📖 References

Core references include Tsay's *Analysis of Financial Time Series*, Hamilton's *Time Series Analysis*, and the original ARCH/GARCH literature. Specific references should be recorded on each topic page.
