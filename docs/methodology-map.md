# Methodology Map

## Learning path

```text
Time Series
    ↓
Data & Returns
    ↓
Stationarity
    ↓
Mean Model
 ┌──┴───────────┐
ARIMA        VAR/VECM
 └──┬───────────┘
    ↓
Residual Diagnostics
    ↓
ARCH Effect?
    ↓
Volatility Model
 ┌──┼──────────────┐
GARCH  EGARCH  GJR-GARCH
 └──┬──────────────┘
    ↓
Multivariate Volatility
    ↓
VaR / Expected Shortfall
    ↓
Backtesting
    ↓
Stress Testing
    ↓
Model Risk & Governance
```

## Question-driven structure

| Topic | Câu hỏi trung tâm | Output |
|---|---|---|
| Time Series | Chuỗi thời gian khác dữ liệu cross-section như thế nào? | Data intuition |
| Returns | Vì sao financial modeling thường dùng return? | Return series |
| Stationarity | Chuỗi có dừng không và vì sao cần biết? | Transformation decision |
| ARIMA | Có thể mô hình hóa conditional mean như thế nào? | Mean forecast |
| VAR | Các biến kinh tế tác động động lẫn nhau ra sao? | IRF/FEVD/forecast |
| VECM | Các biến non-stationary có quan hệ dài hạn không? | Long-run dynamics |
| ARCH | Volatility có phụ thuộc vào shock quá khứ không? | ARCH evidence |
| GARCH | Volatility clustering được mô hình hóa thế nào? | Conditional volatility |
| EGARCH/GJR | Shock âm và dương có tác động khác nhau không? | Asymmetric volatility |
| DCC-GARCH | Correlation giữa các tài sản thay đổi thế nào? | Dynamic covariance |
| VaR | Mức lỗ cực đoan tại confidence level là bao nhiêu? | VaR |
| ES | Khi vượt VaR, mức lỗ kỳ vọng là bao nhiêu? | ES |
| Backtesting | Model dự báo risk có đáng tin không? | Validation decision |
| Stress Testing | Điều gì xảy ra trong scenario cực đoan? | Stress loss |
| Governance | Model có thể được sử dụng và giám sát như thế nào? | Model lifecycle |

## Content roadmap

### Phase 1 — Foundation

- [ ] Time Series
- [ ] Returns & Log Returns
- [ ] Stationarity
- [ ] ADF / KPSS
- [ ] Differencing

### Phase 2 — Mean Models

- [ ] ARIMA
- [ ] VAR
- [ ] Lag selection
- [ ] VAR stability
- [ ] Granger causality
- [ ] IRF
- [ ] FEVD
- [ ] Cointegration
- [ ] VECM

### Phase 3 — Volatility

- [ ] ARCH effect
- [ ] ARCH
- [ ] GARCH(1,1)
- [ ] Distribution selection
- [ ] EGARCH
- [ ] GJR-GARCH
- [ ] Volatility forecast
- [ ] Residual diagnostics

### Phase 4 — Risk

- [ ] Historical VaR
- [ ] Parametric VaR
- [ ] GARCH VaR
- [ ] Filtered Historical Simulation
- [ ] Expected Shortfall
- [ ] VaR backtesting
- [ ] ES validation

### Phase 5 — Advanced Risk

- [ ] DCC-GARCH
- [ ] BEKK
- [ ] Portfolio volatility
- [ ] Stress testing
- [ ] Scenario analysis
- [ ] Model risk
- [ ] Governance

### Phase 6 — Integrated Case Study

Một case study phải đi xuyên suốt:

`Data → Stationarity → Mean Model → Volatility → Forecast → VaR/ES → Backtesting → Stress → Final Model Selection`.
