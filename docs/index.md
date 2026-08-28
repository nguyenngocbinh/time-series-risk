---
layout: default
title: Home
---

# Time Series Risk

A structured collection of Jupyter notebooks covering time series analysis and financial risk modeling topics.

---

## 📚 Modules

### [01 — Stationarity Testing](https://github.com/nguyenngocbinh/time-series-risk/tree/main/01_stationarity)

| Notebook | Description |
|----------|-------------|
| [adf.ipynb](https://github.com/nguyenngocbinh/time-series-risk/blob/main/01_stationarity/adf.ipynb) | Augmented Dickey-Fuller test |
| [kpss.ipynb](https://github.com/nguyenngocbinh/time-series-risk/blob/main/01_stationarity/kpss.ipynb) | KPSS stationarity test |
| [differencing.ipynb](https://github.com/nguyenngocbinh/time-series-risk/blob/main/01_stationarity/differencing.ipynb) | Differencing to achieve stationarity |

---

### [02 — ARIMA Models](https://github.com/nguyenngocbinh/time-series-risk/tree/main/02_arima)

| Notebook | Description |
|----------|-------------|
| [arima.ipynb](https://github.com/nguyenngocbinh/time-series-risk/blob/main/02_arima/arima.ipynb) | Fitting and forecasting with ARIMA |

---

### [03 — Vector Autoregression (VAR)](https://github.com/nguyenngocbinh/time-series-risk/tree/main/03_var)

| Notebook | Description |
|----------|-------------|
| [var_basic.ipynb](https://github.com/nguyenngocbinh/time-series-risk/blob/main/03_var/var_basic.ipynb) | Introduction to VAR models |
| [lag_selection.ipynb](https://github.com/nguyenngocbinh/time-series-risk/blob/main/03_var/lag_selection.ipynb) | Optimal lag selection |
| [granger_causality.ipynb](https://github.com/nguyenngocbinh/time-series-risk/blob/main/03_var/granger_causality.ipynb) | Granger causality tests |
| [impulse_response.ipynb](https://github.com/nguyenngocbinh/time-series-risk/blob/main/03_var/impulse_response.ipynb) | Impulse response functions |
| [forecast_error_variance.ipynb](https://github.com/nguyenngocbinh/time-series-risk/blob/main/03_var/forecast_error_variance.ipynb) | Forecast error variance decomposition |

---

### [04 — ARCH Models](https://github.com/nguyenngocbinh/time-series-risk/tree/main/04_arch)

| Notebook | Description |
|----------|-------------|
| [arch_effect.ipynb](https://github.com/nguyenngocbinh/time-series-risk/blob/main/04_arch/arch_effect.ipynb) | Testing for ARCH effects |
| [arch_model.ipynb](https://github.com/nguyenngocbinh/time-series-risk/blob/main/04_arch/arch_model.ipynb) | Fitting ARCH models |

---

### [05 — GARCH Models](https://github.com/nguyenngocbinh/time-series-risk/tree/main/05_garch)

| Notebook | Description |
|----------|-------------|
| [garch11.ipynb](https://github.com/nguyenngocbinh/time-series-risk/blob/main/05_garch/garch11.ipynb) | Standard GARCH(1,1) model |
| [egarch.ipynb](https://github.com/nguyenngocbinh/time-series-risk/blob/main/05_garch/egarch.ipynb) | Exponential GARCH |
| [gjr_garch.ipynb](https://github.com/nguyenngocbinh/time-series-risk/blob/main/05_garch/gjr_garch.ipynb) | GJR-GARCH (leverage effect) |
| [garch_forecast.ipynb](https://github.com/nguyenngocbinh/time-series-risk/blob/main/05_garch/garch_forecast.ipynb) | Volatility forecasting |

---

### [06 — Multivariate Volatility](https://github.com/nguyenngocbinh/time-series-risk/tree/main/06_var_garch)

| Notebook | Description |
|----------|-------------|
| [multivariate_volatility.ipynb](https://github.com/nguyenngocbinh/time-series-risk/blob/main/06_var_garch/multivariate_volatility.ipynb) | VAR-GARCH multivariate volatility |

---

### [07 — Value at Risk (VaR)](https://github.com/nguyenngocbinh/time-series-risk/tree/main/07_var)

| Notebook | Description |
|----------|-------------|
| [historical_var.ipynb](https://github.com/nguyenngocbinh/time-series-risk/blob/main/07_var/historical_var.ipynb) | Historical simulation VaR |
| [parametric_var.ipynb](https://github.com/nguyenngocbinh/time-series-risk/blob/main/07_var/parametric_var.ipynb) | Parametric (variance-covariance) VaR |
| [garch_var.ipynb](https://github.com/nguyenngocbinh/time-series-risk/blob/main/07_var/garch_var.ipynb) | GARCH-based conditional VaR |

---

## 🚀 Getting Started

```bash
pip install statsmodels arch scipy pandas numpy matplotlib jupyter
jupyter notebook
```
