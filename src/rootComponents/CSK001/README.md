# Refactored Data Pipeline

## Cấu trúc

- `data.js`: entry point
- `pipeline/dataLoader.js`: load DataFront, merge library, transitions
- `pipeline/randomResolver.js`: RANDOM / RANDOMfixed / seed
- `pipeline/cssParser.js`: CSS parser
- `pipeline/starSyntaxResolver.js`: **TOKEN**
- `pipeline/specialValueResolver.js`: ADD / MODEOBJ / RANDOM / JSON / Boolean / Number
- `pipeline/propertyResolver.js`: resolve properties
- `pipeline/contentBuilder.js`: content → action
- `pipeline/styleBuilder.js`: style → styleCss
- `pipeline/configResolver.js`: content-XX và ADD lookup
- `pipeline/modeProcessor.js`: modeOBJ / mode / subMode / MODE actions
- `pipeline/segmentBuilder.js`: config → segment
- `pipeline/inmodeSplitter.js`: INMODE splitting
- `pipeline/validator.js`: NULLA validation
- `pipeline/metadataCleaner.js`: remove internal metadata
- `pipeline/index.js`: orchestration

## Lưu ý đường dẫn

Các file trong ZIP giả định cấu trúc thư mục giữ nguyên tương đối với file `data.js` hiện tại.

Nếu `data.js` nằm ở:
`.../data/data.js`

thì:
`data_Front_001.json` nằm cùng thư mục với `data.js`.

Đường dẫn transition trong `dataLoader.js` giữ theo đường dẫn tương đối từ `data.js`:
`../../../components/ActionOrchestrator/utils/transitions/transitionResolver.js`

Nếu thư mục thực tế khác vị trí, chỉ cần sửa import này.
