var fso  = new ActiveXObject("Scripting.FileSystemObject"); 
var fh = fso.CreateTextFile("C:\\Users\\Public\\Hello.txt", 2, true);
fh.WriteLine("h3y"); 
fh.Close();