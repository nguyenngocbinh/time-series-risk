# Time Series Risk Lab — Authoring Instructions

## 1. Mục tiêu

`time-series-risk` là tài liệu phương pháp luận tương tác về Time Series, Financial Econometrics và Risk Modeling. Website phải giúp người đọc trả lời câu hỏi nghiệp vụ trước khi đi vào code.

Nguyên tắc cốt lõi:

> **Câu hỏi → Trực giác → Công thức → Giả định → Phương pháp → Chẩn đoán → Validation → Diễn giải → Limitations**

Notebook là lớp thực hành và kiểm chứng; website là lớp kiến thức và phương pháp luận.

## 2. Ngôn ngữ

- Nội dung chính: tiếng Việt.
- Giữ thuật ngữ tiếng Anh chuẩn trong ngoặc khi cần: stationarity, volatility clustering, conditional variance, backtesting...
- Công thức dùng LaTeX.
- Không dịch máy móc thuật ngữ econometrics.
- Không biến trang thành bản dịch giáo trình dài; ưu tiên notes, cards, câu hỏi và ví dụ.

## 3. Template bắt buộc cho một topic

Mỗi topic nên có các khối:

1. `❓ Câu hỏi chính` — vấn đề model giải quyết.
2. `💡 Key Idea` — câu trả lời 2–5 dòng.
3. `📐 Công thức` — mathematical formulation.
4. `🧠 Trực giác` — giải thích bằng ngôn ngữ đời thường/nghiệp vụ.
5. `📋 Giả định` — assumptions và điều kiện áp dụng.
6. `🎛️ Interactive` — slider/simulation/chart nếu topic phù hợp.
7. `🔍 Diagnostics` — test và điều kiện chấp nhận.
8. `⚖️ Model Selection` — model alternatives và tiêu chí chọn.
9. `💰 Risk Application` — ứng dụng trong risk.
10. `⚠️ Common Mistakes` — lỗi phổ biến.
11. `📊 Out-of-Sample` — validation nếu có forecasting.
12. `📚 References` — nguồn học thuật.
13. `🐍 Python Notebook` — link tới notebook tương ứng.

## 4. Quy tắc methodology

Không được kết luận model tốt chỉ vì AIC/BIC thấp.

Luôn phân biệt:
- in-sample fit và out-of-sample performance;
- statistical significance và economic significance;
- correlation và causality;
- forecast và stress scenario;
- VaR và Expected Shortfall.

Với volatility model, tối thiểu xem xét:
- ARCH-LM;
- Ljung-Box residuals;
- Ljung-Box squared residuals;
- standardized residuals;
- distribution/tail behavior;
- volatility forecast;
- VaR/ES backtesting khi model được dùng cho risk.

Với VAR/VECM, xem xét:
- stationarity/cointegration;
- lag selection;
- stability;
- residual diagnostics;
- Granger causality;
- IRF;
- FEVD;
- out-of-sample forecast.

## 5. Interactive visualization

Chỉ dùng visualization khi nó giúp trả lời câu hỏi. Không thêm chart để trang trí.

Ưu tiên:
- volatility path;
- ACF/PACF;
- impulse response;
- correlation matrix;
- VaR threshold và exceptions;
- parameter sensitivity;
- rolling forecast.

Các chart phải có:
- title;
- đơn vị;
- trục rõ ràng;
- chú thích ngắn;
- explanation về ý nghĩa risk.

## 6. UI conventions

- Dark analytical dashboard.
- Sidebar cho navigation.
- Main area cho lesson.
- Right rail cho notes, references và warnings.
- Cards dùng cho các ý độc lập.
- Không đặt quá nhiều chữ trong một card.
- Responsive cho desktop/tablet/mobile.
- Màu chỉ dùng để biểu thị trạng thái/ý nghĩa: success, warning, risk, selected.

## 7. Cấu trúc module

```text
Foundations
  Time Series
  Returns
  Stationarity

Mean Models
  ARIMA
  VAR
  VECM

Volatility Models
  ARCH
  GARCH
  EGARCH
  GJR-GARCH

Multivariate
  DCC-GARCH
  BEKK
  Dynamic Correlation

Risk Measures
  VaR
  Expected Shortfall
  Backtesting

Advanced
  Stress Testing
  Scenario Analysis
  Model Risk & Governance
```

## 8. Quy tắc code

- Không đưa API key hoặc secret vào repository.
- JavaScript phải progressive enhancement: nếu chart không chạy, nội dung lý thuyết vẫn đọc được.
- Không phụ thuộc backend cho các trang documentation.
- Ưu tiên static GitHub Pages.
- Notebook phải có link từ page tương ứng.
- Tên thư mục phải phân biệt `VAR` = Vector Autoregression và `VaR` = Value at Risk. Khi cần đổi tên thư mục VaR hiện tại, dùng `08_value_at_risk` hoặc `risk` thay vì `07_var` để tránh nhầm.

## 9. Definition of Done cho một topic

Một topic chỉ được xem là hoàn thành khi:

- [ ] Có câu hỏi trung tâm.
- [ ] Có câu trả lời ngắn.
- [ ] Có công thức chính.
- [ ] Giải thích từng tham số.
- [ ] Nêu assumptions.
- [ ] Nêu khi nào dùng/không dùng.
- [ ] Có diagnostics.
- [ ] Có model selection nếu có nhiều specification.
- [ ] Có validation/out-of-sample nếu có forecasting.
- [ ] Có risk interpretation.
- [ ] Có limitations.
- [ ] Có reference.
- [ ] Có link notebook.
- [ ] Nội dung tiếng Việt được kiểm tra thuật ngữ.
- [ ] Không có kết quả số liệu giả được trình bày như kết quả thực tế.

## 10. Prompt chuẩn cho AI/Agent

> Bạn đang làm việc trong repository `time-series-risk`. Hãy bổ sung topic `[TOPIC]` theo đúng `docs/INSTRUCTIONS.md`. Viết nội dung bằng tiếng Việt theo format Question → Key Idea → Formula → Intuition → Assumptions → Methodology → Diagnostics → Model Selection → Validation → Risk Interpretation → Limitations → References → Notebook. Tạo/cập nhật HTML theo component system hiện có, giữ dark analytical dashboard, responsive và không phá vỡ navigation. Nếu topic có thể minh họa bằng simulation, thêm interactive control và chart nhưng không dùng chart chỉ để trang trí. Không thay đổi công thức hoặc kết luận thống kê nếu chưa kiểm tra tính đúng đắn. Sau khi hoàn thành, kiểm tra tất cả link tương đối tới notebook và asset.

## 11. Review prompt

> Review topic `[TOPIC]` như Senior Quantitative Risk Reviewer. Kiểm tra mathematical correctness, statistical assumptions, model specification, diagnostics, validation, interpretation, limitations, terminology và consistency với các topic khác. Liệt kê issue theo Critical/High/Medium/Low và đề xuất sửa. Không coi AIC/BIC là bằng chứng duy nhất để chọn model.
