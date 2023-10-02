var fileName = document.getElementById("txtHeader");
var fileContent = document.getElementById("txtContent");

fileName.value="";
fileContent.value="";
function downloadFile()
 {
     if(fileName.value === "" || fileContent.value ==="")
     window.alert("Please enter File name and content");
     else
     {
  var e = fileContent.value;
  var c = document.createElement("a");
  c.download = fileName.value + ".txt";
  var t = new Blob([e], {
    type: "text/plain"
  });
  c.href = window.URL.createObjectURL(t);
  c.click();
}
}


function changeStyle(propertyName)
{
    switch(propertyName)
    {
        case "b":
            if(fileContent.style.fontWeight === "bold")
        fileContent.style.fontWeight = "normal";
        else
        fileContent.style.fontWeight = "bold";
        break;
        case "i":
            if(fileContent.style.fontStyle === "italic")
        fileContent.style.fontStyle = "normal";
        else
        fileContent.style.fontStyle = "italic";
        break;
        case "n":
        fileContent.style.fontWeight = "normal";
        fileContent.style.fontStyle = "normal";
        fileContent.style.textDecoration = "none";
        break;
        case "u":
if(fileContent.style.textDecoration === "underline")
        fileContent.style.textDecoration = "none";
        else
        fileContent.style.textDecoration = "underline"
        break;

    }
    
    
}