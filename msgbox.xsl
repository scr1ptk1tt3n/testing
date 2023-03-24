<?xml version='1.0'?>
<stylesheet
xmlns="http://www.w3.org/1999/XSL/Transform" xmlns:ms="urn:schemas-microsoft-com:xslt"
xmlns:user="placeholder"
version="1.0">
<output method="text"/>
	<ms:script implements-prefix="user" language="JScript">
	<![CDATA[

	var WshShell = WScript.CreateObject("WScript.Shell");
	var BtnCode = WshShell.Popup("Microsoft Teams Successfully Updated!", 5, "Update Successful!", 0 + 64);

	]]> </ms:script>
</stylesheet>