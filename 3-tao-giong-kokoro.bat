@echo off
chcp 65001 >nul
rem #137 Tạo giọng Kokoro ngay trên máy → public\audio\kokoro (Remotion đọc được luôn, không cần chép, không cần server)
rem Dùng: 3-tao-giong-kokoro.bat a-day-within-a-day     (một bài)
rem       3-tao-giong-kokoro.bat all                     (mọi bài đã có kịch bản video)
cd /d %~dp0
where python >nul 2>nul || (echo Chua co Python. Cai Python 3.10+ tu python.org, nho tick "Add python.exe to PATH". & pause & exit /b 1)
python -c "import kokoro_onnx, soundfile, imageio_ffmpeg" 2>nul || (echo Cai thu vien lan dau... & python -m pip install kokoro-onnx soundfile imageio-ffmpeg || (pause & exit /b 1))
set SLUG=%~1
if "%SLUG%"=="" set /p SLUG=Ten bai (vd a-day-within-a-day, hoac all): 
if /i "%SLUG%"=="all" (python tools\kokoro\kokoro-dp.py --all-scripts %2 %3) else (python tools\kokoro\kokoro-dp.py --slug %SLUG% %2 %3)
pause
