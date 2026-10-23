@echo off
chcp 65001 >nul
REM #179 LAY KHOA DOC DRIVE VE REMOTION: doc apiKey trong SEO-PT-projectjs\client\...\HocKienThuc\config.js (may 01)
REM   va ghi vao tools\drive\drive-key.txt (da chan git: dong drive-key.txt trong .gitignore). Khoa khong hien ra man hinh.
REM May khong co SEO-PT-projectjs: lenh se hoi khoa de dan vao.
cd /d "%~dp0"
node tools\drive\kiem-drive.mjs --lay-khoa
pause
