---
layout: default
title: Home
---

# Time Series Risk

A structured collection of Jupyter notebooks covering time series analysis and financial risk modeling topics.

---

## 📚 Modules

### [01 — Stationarity Testing](https://github.com/nguyenngocbinh/time-series-risk/tree/main/notebooks/01_foundations/stationarity)

| Notebook | Description |
|----------|-------------|
| [adf.ipynb](https://github.com/nguyenngocbinh/time-series-risk/blob/main/notebooks/01_foundations/stationarity/adf.ipynb) | Augmented Dickey-Fuller test |
| [kpss.ipynb](https://github.com/nguyenngocbinh/time-series-risk/blob/main/notebooks/01_foundations/stationarity/kpss.ipynb) | KPSS stationarity test |
| [differencing.ipynb](https://github.com/nguyenngocbinh/time-series-risk/blob/main/notebooks/01_foundations/stationarity/differencing.ipynb) | Differencing to achieve stationarity |

---

### [02 — ARIMA Models](https://github.com/nguyenngocbinh/time-series-risk/tree/main/notebooks/02_mean-models/arima)

| Notebook | Description |
|----------|-------------|
| [arima.ipynb](https://github.com/nguyenngocbinh/time-series-risk/blob/main/notebooks/02_mean-models/arima/arima.ipynb) | Fitting and forecasting with ARIMA |

---

### [03 — Vector Autoregression (VAR)](https://github.com/nguyenngocbinh/time-series-risk/tree/main/notebooks/02_mean-models/vector-autoregression)

| Notebook | Description |
|----------|-------------|
| [var_basic.ipynb](https://github.com/nguyenngocbinh/time-series-risk/blob/main/notebooks/02_mean-models/vector-autoregression/var_basic.ipynb) | Introduction to VAR models |
| [lag_selection.ipynb](https://github.com/nguyenngocbinh/time-series-risk/blob/main/notebooks/02_mean-models/vector-autoregression/lag_selection.ipynb) | Optimal lag selection |
| [granger_causality.ipynb](https://github.com/nguyenngocbinh/time-series-risk/blob/main/notebooks/02_mean-models/vector-autoregression/granger_causality.ipynb) | Granger causality tests |
| [impulse_response.ipynb](https://github.com/nguyenngocbinh/time-series-risk/blob/main/notebooks/02_mean-models/vector-autoregression/impulse_response.ipynb) | Impulse response functions |
| [forecast_error_variance.ipynb](https://github.com/nguyenngocbinh/time-series-risk/blob/main/notebooks/02_mean-models/vector-autoregression/forecast_error_variance.ipynb) | Forecast error variance decomposition |

---

### [04 — ARCH Models](https://github.com/nguyenngocbinh/time-series-risk/tree/main/notebooks/03_volatility-models/arch)

| Notebook | Description |
|----------|-------------|
| [arch_effect.ipynb](https://github.com/nguyenngocbinh/time-series-risk/blob/main/notebooks/03_volatility-models/arch/arch_effect.ipynb) | Testing for ARCH effects |
| [arch_model.ipynb](https://github.com/nguyenngocbinh/time-series-risk/blob/main/notebooks/03_volatility-models/arch/arch_model.ipynb) | Fitting ARCH models |

---

### [05 — GARCH Models](https://github.com/nguyenngocbinh/time-series-risk/tree/main/notebooks/03_volatility-models/garch)

| Notebook | Description |
|----------|-------------|
| [garch11.ipynb](https://github.com/nguyenngocbinh/time-series-risk/blob/main/notebooks/03_volatility-models/garch/garch11.ipynb) | Standard GARCH(1,1) model |
| [egarch.ipynb](https://github.com/nguyenngocbinh/time-series-risk/blob/main/notebooks/03_volatility-models/garch/egarch.ipynb) | Exponential GARCH |
| [gjr_garch.ipynb](https://github.com/nguyenngocbinh/time-series-risk/blob/main/notebooks/03_volatility-models/garch/gjr_garch.ipynb) | GJR-GARCH (leverage effect) |
| [garch_forecast.ipynb](https://github.com/nguyenngocbinh/time-series-risk/blob/main/notebooks/03_volatility-models/garch/garch_forecast.ipynb) | Volatility forecasting |

---

### [06 — Multivariate Volatility](https://github.com/nguyenngocbinh/time-series-risk/tree/main/notebooks/04_multivariate/var-garch)

| Notebook | Description |
|----------|-------------|
| [multivariate_volatility.ipynb](https://github.com/nguyenngocbinh/time-series-risk/blob/main/notebooks/04_multivariate/var-garch/multivariate_volatility.ipynb) | VAR-GARCH multivariate volatility |

---

### [07 — Value at Risk (VaR)](https://github.com/nguyenngocbinh/time-series-risk/tree/main/notebooks/05_risk-measures/value-at-risk)

| Notebook | Description |
|----------|-------------|
| [historical_var.ipynb](https://github.com/nguyenngocbinh/time-series-risk/blob/main/notebooks/05_risk-measures/value-at-risk/historical_var.ipynb) | Historical simulation VaR |
| [parametric_var.ipynb](https://github.com/nguyenngocbinh/time-series-risk/blob/main/notebooks/05_risk-measures/value-at-risk/parametric_var.ipynb) | Parametric (variance-covariance) VaR |
| [garch_var.ipynb](https://github.com/nguyenngocbinh/time-series-risk/blob/main/notebooks/05_risk-measures/value-at-risk/garch_var.ipynb) | GARCH-based conditional VaR |

---

## 🚀 Getting Started

```bash
pip install statsmodels arch scipy pandas numpy matplotlib jupyter
jupyter notebook
```
