@echo off
chcp 65001 >nul
REM Render thu 1 video. Cach dung:
REM   2-render-thu.bat                         -> start-selling-online--w01, ban 1280x720
REM   2-render-thu.bat ten-bai--w01            -> bai khac
REM   2-render-thu.bat ten-bai--w01 0.5        -> ban nhe 960x540 (xem nhanh)
set "ID=%~1"
if "%ID%"=="" set "ID=start-selling-online--w01"
set "SC=%~2"
if "%SC%"=="" set "SC=2/3"
cd /d "%~dp0"
if not exist "public\illus\LICENSE.txt" (
  echo Chua co hinh public\illus - dang giai nen illus.zip ...
  powershell -NoProfile -Command "Expand-Archive -LiteralPath '%~dp0public\illus.zip' -DestinationPath '%~dp0public' -Force"
)
echo Render %ID% (scale %SC%) ...
if not exist "public\illus\laptop.svg" (
  echo Van chua co hinh. Chuot phai public\illus.zip - Extract All - chon thu muc public, roi chay lai.
  pause
  exit /b 1
)
call npm run renderw -- --only=%ID% --scale=%SC%
if exist "renders\dp\%ID%.mp4" (
  echo Xong: renders\dp\%ID%.mp4
  start "" "renders\dp\%ID%.mp4"
) else (
  echo Khong thay tep video, xem loi phia tren.
)
pause
