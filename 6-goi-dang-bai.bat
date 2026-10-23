@echo off
chcp 65001 >nul
REM #172 GOI DANG BAI Facebook / Zalo tu noi dung da co (SP11 muc 1: soan san chu + anh, anh dang tay).
REM   6-goi-dang-bai.bat                 -> moi bai da co video hoac anh bia, bo qua goi da co
REM   6-goi-dang-bai.bat ten-bai         -> chi mot bai (lam lai ke ca da co)
REM   6-goi-dang-bai.bat lai             -> lam lai tat ca
REM Ra: renders\social\TEN-BAI\index.html (trang dang tay) va renders\social\index.html (danh sach). Can may co SEO-PT-projectjs (may 01).
cd /d "%~dp0"
if "%~1"=="" (
  call npx tsx goi-dang-bai.js
) else if /i "%~1"=="lai" (
  call npx tsx goi-dang-bai.js --lai
) else (
  call npx tsx goi-dang-bai.js --only=%~1
  if exist "renders\social\%~1" start "" "renders\social\%~1"
)
echo.
if exist "renders\social\index.html" start "" "renders\social\index.html"
pause
