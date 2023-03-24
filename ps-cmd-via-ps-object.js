var powerShell = new ActiveXObject("WScript.Shell").Exec("powershell.exe -Command -");
powerShell.StdIn.WriteLine("Add-Type -AssemblyName PresentationFramework;[System.Windows.MessageBox]::Show('w0rks!')");
powerShell.StdIn.WriteLine("exit");
var output = powerShell.StdOut.ReadAll();