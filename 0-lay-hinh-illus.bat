@echo off
chcp 65001 >nul
REM Giai nen public\illus.zip -> public\illus\ (1.585 hinh SVG + LICENSE.txt dung cho video CSK004).
REM Chay 1 lan; chay lai se ghi de (khong sao).
cd /d "%~dp0public"
if not exist "illus.zip" (
  echo Khong thay public\illus.zip
  pause
  exit /b 1
)
powershell -NoProfile -Command "Expand-Archive -LiteralPath '%~dp0public\illus.zip' -DestinationPath '%~dp0public' -Force"
if exist "illus\LICENSE.txt" (
  echo Da giai nen xong: public\illus
) else (
  echo Giai nen chua duoc. Thu cach khac: chuot phai illus.zip - Extract All - chon thu muc public.
)
pause
