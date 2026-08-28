# Time Series Risk

A structured collection of Jupyter notebooks covering time series analysis and financial risk modeling topics.

## 📚 Contents

| Module | Topic | Notebooks |
|--------|-------|-----------|
| [01_stationarity](01_stationarity/) | Stationarity Testing | [ADF](01_stationarity/adf.ipynb) · [KPSS](01_stationarity/kpss.ipynb) · [Differencing](01_stationarity/differencing.ipynb) |
| [02_arima](02_arima/) | ARIMA Models | [ARIMA](02_arima/arima.ipynb) |
| [03_var](03_var/) | Vector Autoregression | [VAR Basics](03_var/var_basic.ipynb) · [Lag Selection](03_var/lag_selection.ipynb) · [Granger Causality](03_var/granger_causality.ipynb) · [Impulse Response](03_var/impulse_response.ipynb) · [FEVD](03_var/forecast_error_variance.ipynb) |
| [04_arch](04_arch/) | ARCH Models | [ARCH Effect](04_arch/arch_effect.ipynb) · [ARCH Model](04_arch/arch_model.ipynb) |
| [05_garch](05_garch/) | GARCH Models | [GARCH(1,1)](05_garch/garch11.ipynb) · [EGARCH](05_garch/egarch.ipynb) · [GJR-GARCH](05_garch/gjr_garch.ipynb) · [Forecast](05_garch/garch_forecast.ipynb) |
| [06_var_garch](06_var_garch/) | Multivariate Volatility | [VAR-GARCH](06_var_garch/multivariate_volatility.ipynb) |
| [07_var](07_var/) | Value at Risk | [Historical VaR](07_var/historical_var.ipynb) · [Parametric VaR](07_var/parametric_var.ipynb) · [GARCH VaR](07_var/garch_var.ipynb) |

## 🗂️ Project Structure

```
time-series-risk/
│
├── 01_stationarity/
│   ├── adf.ipynb
│   ├── kpss.ipynb
│   └── differencing.ipynb
│
├── 02_arima/
│   └── arima.ipynb
│
├── 03_var/
│   ├── var_basic.ipynb
│   ├── lag_selection.ipynb
│   ├── granger_causality.ipynb
│   ├── impulse_response.ipynb
│   └── forecast_error_variance.ipynb
│
├── 04_arch/
│   ├── arch_effect.ipynb
│   └── arch_model.ipynb
│
├── 05_garch/
│   ├── garch11.ipynb
│   ├── egarch.ipynb
│   ├── gjr_garch.ipynb
│   └── garch_forecast.ipynb
│
├── 06_var_garch/
│   └── multivariate_volatility.ipynb
│
└── 07_var/
    ├── historical_var.ipynb
    ├── parametric_var.ipynb
    └── garch_var.ipynb
```

## 🚀 Getting Started

```bash
pip install statsmodels arch scipy pandas numpy matplotlib jupyter
jupyter notebook
```

## 📖 GitHub Pages

Project documentation is published at: [https://nguyenngocbinh.github.io/time-series-risk/](https://nguyenngocbinh.github.io/time-series-risk/)