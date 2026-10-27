@echo off
chcp 65001 >nul
REM #203 LAY BO HINH MOI cho video (giay phep khong bat ghi cong - #198):
REM   - Noto Emoji (Google, Apache-2.0): tai bang npm, tach ra public\illus-noto\*.svg
REM   - Humaaans (Pablo Stanley, CC0): da co san trong public\humaaans\ (dau / than / chan ghep nguoi, dung + ngoi, 4 canh)
REM   - Lap muc luc chung public\illus-index.json (ma hinh: <ten> = Fluent cu, noto:<ten>, humaaans:...)
REM Chay lai bao nhieu lan cung duoc.
cd /d "%~dp0"
if not exist "node_modules\@iconify-json\noto\icons.json" (
  echo Tai bo Noto Emoji bang npm ...
  call npm i -D @iconify-json/noto@1.2.9
)
node tools\illus\lay-bo-hinh.mjs
pause
