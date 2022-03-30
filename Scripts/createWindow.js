function createWindow(bartext, text, source, width, height, left, top) {
    /*Main window*/
    
    const mainWindow = document.createElement("div");
    
    document.body.appendChild(mainWindow);
    
    mainWindow.style.position = "absolute";
    
    mainWindow.style.backgroundColor = "rgb(191,191,191)";
    
    mainWindow.style.width = width;
    mainWindow.style.height = height;
    mainWindow.style.marginLeft = left;
    mainWindow.style.marginTop = top;
    
    /*Borders*/
    
    const layerOneLeft = document.createElement("div");
    const layerTwoLeft = document.createElement("div");
    const layerThreeLeft = document.createElement("div");
    
    const layerOneRight = document.createElement("div");
    const layerTwoRight = document.createElement("div");
    const layerThreeRight = document.createElement("div");
    
    const layerOneTop = document.createElement("div");
    const layerTwoTop = document.createElement("div");
    const layerThreeTop = document.createElement("div");
    
    const layerOneBottom = document.createElement("div");
    const layerTwoBottom = document.createElement("div");
    const layerThreeBottom = document.createElement("div");
    
    mainWindow.appendChild(layerOneLeft);
    mainWindow.appendChild(layerTwoLeft);
    mainWindow.appendChild(layerThreeLeft);
    
    mainWindow.appendChild(layerOneRight);
    mainWindow.appendChild(layerTwoRight);
    mainWindow.appendChild(layerThreeRight);
    
    mainWindow.appendChild(layerOneTop);
    mainWindow.appendChild(layerTwoTop);
    mainWindow.appendChild(layerThreeTop);
    
    mainWindow.appendChild(layerOneBottom);
    mainWindow.appendChild(layerTwoBottom);
    mainWindow.appendChild(layerThreeBottom);
    
    /*Left borders*/
    
    /*Layer one*/
    
    layerOneLeft.style.position = "absolute";
    
    layerOneLeft.style.backgroundColor = "rgb(223,223,223)";
    
    layerOneLeft.style.height = "calc(100% - 1px)";
    layerOneLeft.style.width = "1px";
    
    layerOneLeft.style.left = "0";
    layerOneLeft.style.top = "0";
    
    /*Layer two*/
    
    layerTwoLeft.style.position = "absolute";
    
    layerTwoLeft.style.backgroundColor = "rgb(255,255,255)";
    
    layerTwoLeft.style.height = "calc(100% - 3px)";
    layerTwoLeft.style.width = "1px";
    
    layerTwoLeft.style.left = "1px";
    layerTwoLeft.style.top = "1px";
    
    /*Layer three*/
    
    layerThreeLeft.style.position = "absolute";
    
    layerThreeLeft.style.backgroundColor = "rgb(191,191,191)";
    
    layerThreeLeft.style.height = "calc(100% - 4px)";
    layerThreeLeft.style.width = "1px";
    
    layerThreeLeft.style.left = "2px";
    layerThreeLeft.style.top = "2px";
    
    /*Right Borders*/
    
    /*Layer one*/
    
    layerOneRight.style.position = "absolute";
    
    layerOneRight.style.backgroundColor = "rgb(0,0,0)";
    
    layerOneRight.style.height = "100%";
    layerOneRight.style.width = "1px";
    
    layerOneRight.style.left = "calc(100% - 1px)";
    layerOneRight.style.top = "0";
    
    /*Layer two*/
    
    layerTwoRight.style.position = "absolute";
    
    layerTwoRight.style.backgroundColor = "rgb(127,127,127)";
    
    layerTwoRight.style.height = "calc(100% - 2px)";
    layerTwoRight.style.width = "1px";
    
    layerTwoRight.style.left = "calc(100% - 2px)";
    layerTwoRight.style.top = "1px";
    
    /*Layer three*/
    
    layerThreeRight.style.position = "absolute";
    
    layerThreeRight.style.backgroundColor = "rgb(191,191,191)";
    
    layerThreeRight.style.height = "calc(100% - 4px)";
    layerThreeRight.style.width = "1px";
    
    layerThreeRight.style.left = "calc(100% - 3px)";
    layerThreeRight.style.top = "2px";
    
    /*Top borders*/
    
    /*Layer one*/
    
    layerOneTop.style.position = "absolute";
    
    layerOneTop.style.backgroundColor = "rgb(223,223,223)";
    
    layerOneTop.style.height = "1px";
    layerOneTop.style.width = "calc(100% - 1px)";
    
    layerOneTop.style.left = "0";
    layerOneTop.style.top = "0";
    
    /*Layer two*/
    
    layerTwoTop.style.position = "absolute";
    
    layerTwoTop.style.backgroundColor = "rgb(255,255,255)";
    
    layerTwoTop.style.height = "1px";
    layerOneTop.style.width = "calc(100% - 3px)";
    
    layerOneTop.style.left = "1px";
    layerOneTop.style.top = "1px";
    
    /*Layer three*/
    
    layerTwoTop.style.position = "absolute";
    
    layerTwoTop.style.backgroundColor = "rgb(191,191,191)";
    
    layerTwoTop.style.height = "1px";
    layerOneTop.style.width = "calc(100% - 4px)";
    
    layerOneTop.style.left = "2px";
    layerOneTop.style.top = "2px";
    
    /*Bottom borders*/
    
    /*Layer one*/
    
    layerOneBottom.style.position = "absolute";
    
    layerOneBottom.style.backgroundColor = "rgb(0,0,0)";
    
    layerOneBottom.style.height = "1px";
    layerOneBottom.style.width = "100%";
    
    layerOneBottom.style.left = "0";
    layerOneBottom.style.top = "calc(100% - 1px)";
    
    /*Layer two*/
    
    layerTwoBottom.style.position = "absolute";
    
    layerTwoBottom.style.backgroundColor = "rgb(127,127,127)";
    
    layerTwoBottom.style.height = "1px";
    layerTwoBottom.style.width = "calc(100% - 2px)";
    
    layerTwoBottom.style.left = "1px";
    layerTwoBottom.style.top = "calc(100% - 2px)";
    
    /*Layer three*/
    
    layerThreeBottom.style.position = "absolute";
    
    layerThreeBottom.style.backgroundColor = "rgb(191,191,191)";
    
    layerThreeBottom.style.height = "1px";
    layerThreeBottom.style.width = "calc(100% - 4px)";
    
    layerThreeBottom.style.left = "2px";
    layerThreeBottom.style.top = "calc(100% - 3px)";
    
    /*Top bar*/
    
    const topBar = document.createElement("div");
    
    mainWindow.appendChild(topBar);
    
    topBar.style.position = "absolute";
    
    topBar.style.backgroundColor = "rgb(0,0,127)";
    
    topBar.style.height = "18px";
    topBar.style.width = "calc(100% - 6px)";
    
    topBar.style.left = "3px";
    topBar.style.top = "3px";
    
    const topBarDivTxt = document.createElement("div");
    
    topBar.appendChild(topBarDivTxt);
    
    topBarDivTxt.style.position = "absolute";
    topBarDivTxt.style.height = "100%";
    topBarDivTxt.style.width = "calc(100% - 6px)";
    
    topBarDivTxt.style.left = "6px";
    /*
    topBarDivTxt.style.top = "9px";
    */
    
    const topBarTxt = document.createElement("p");
    
    topBarDivTxt.appendChild(topBarTxt);
    
    topBarTxt.innerText = bartext;
    
    topBarTxt.style.position = "absolute";
    topBarTxt.style.width = "calc(100% - 6px)";
    topBarTxt.style.height = "100%";
    topBarTxt.style.left = "6px";
    topBarTxt.style.top = "3px";
    topBarTxt.style.marginTop = "0";
    topBarTxt.style.marginBottom = "0";
    
    topBarTxt.style.fontFamily = "Win95";
    topBarTxt.style.fontSize = "12px";
    topBarTxt.style.color = "rgb(255,255,255)";
    
    /*Buttons*/
    
    /*X button*/
    
    const xButton = document.createElement("div");
    
    mainWindow.appendChild(xButton);
    
    xButton.onclick = function() { closeBox(xButton); };
    
    xButton.style.position = "absolute";
    
    xButton.style.backgroundColor = "rgb(191,191,191)";
    
    xButton.style.height = "14px";
    xButton.style.width = "16px";
    
    xButton.style.left = "calc(100% - 21px)";
    xButton.style.top = "5px";
    
    /*X button borders*/
    
    const xButtonLayerOneLeft = document.createElement("div");
    const xButtonLayerTwoLeft = document.createElement("div");
    
    const xButtonLayerOneRight = document.createElement("div");
    const xButtonLayerTwoRight = document.createElement("div");
    
    const xButtonLayerOneTop = document.createElement("div");
    const xButtonLayerTwoTop = document.createElement("div");
    
    const xButtonLayerOneBottom = document.createElement("div");
    const xButtonLayerTwoBottom = document.createElement("div");
    
    xButton.appendChild(xButtonLayerOneLeft);
    xButton.appendChild(xButtonLayerTwoLeft);
    
    xButton.appendChild(xButtonLayerOneRight);
    xButton.appendChild(xButtonLayerTwoRight);
    
    xButton.appendChild(xButtonLayerOneTop);
    xButton.appendChild(xButtonLayerTwoTop);
    
    xButton.appendChild(xButtonLayerOneBottom);
    xButton.appendChild(xButtonLayerTwoBottom);
    
    /*Left border*/
    
    /*Layer one*/
    
    xButtonLayerOneLeft.style.position = "absolute";
    
    xButtonLayerOneLeft.style.backgroundColor = "rgb(255,255,255)";
    
    xButtonLayerOneLeft.style.height = "13px";
    xButtonLayerOneLeft.style.width = "1px";
    
    xButtonLayerOneLeft.style.left = "0";
    xButtonLayerOneLeft.style.top = "0";
    
    /*Layer two*/
    
    xButtonLayerTwoLeft.style.position = "absolute";
    
    xButtonLayerTwoLeft.style.backgroundColor = "rgb(223,223,223)";
    
    xButtonLayerTwoLeft.style.height = "11px";
    xButtonLayerTwoLeft.style.width = "1px";
    
    xButtonLayerTwoLeft.style.left = "1px";
    xButtonLayerTwoLeft.style.top = "1px";
    
    /*Right border*/
    
    /*Layer one*/
    
    xButtonLayerOneRight.style.position = "absolute";
    
    xButtonLayerOneRight.style.backgroundColor = "rgb(0,0,0)";
    
    xButtonLayerOneRight.style.height = "14px";
    xButtonLayerOneRight.style.width = "1px";
    
    xButtonLayerOneRight.style.left = "15px";
    xButtonLayerOneRight.style.top = "0";
    
    /*Layer two*/
    
    xButtonLayerTwoRight.style.position = "absolute";
    
    xButtonLayerTwoRight.style.backgroundColor = "rgb(127,127,127)";
    
    xButtonLayerTwoRight.style.height = "12px";
    xButtonLayerTwoRight.style.width = "1px";
    
    xButtonLayerTwoRight.style.left = "14px";
    xButtonLayerTwoRight.style.top = "1x";
    
    /*Top border*/
    
    /*Layer one*/
    
    xButtonLayerOneTop.style.position = "absolute";
    
    xButtonLayerOneTop.style.backgroundColor = "rgb(255,255,255)";
    
    xButtonLayerOneTop.style.height = "1px";
    xButtonLayerOneTop.style.width = "15px";
    
    xButtonLayerOneTop.style.left = "0";
    xButtonLayerOneTop.style.top = "0";
    
    /*Layer two*/
    
    xButtonLayerTwoTop.style.position = "absolute";
    
    xButtonLayerTwoTop.style.backgroundColor = "rgb(223,223,223)";
    
    xButtonLayerTwoTop.style.height = "1px";
    xButtonLayerTwoTop.style.width = "13px";
    
    xButtonLayerTwoTop.style.left = "1px";
    xButtonLayerTwoTop.style.top = "1px";
    
    /*Bottom border*/
    
    /*Layer one*/
    
    xButtonLayerOneBottom.style.position = "absolute";
    
    xButtonLayerOneBottom.style.backgroundColor = "rgb(0,0,0)";
    
    xButtonLayerOneBottom.style.height = "1px";
    xButtonLayerOneBottom.style.width = "16px";
    
    xButtonLayerOneBottom.style.left = "0";
    xButtonLayerOneBottom.style.top = "13px";
    
    /*Layer two*/
    
    xButtonLayerTwoBottom.style.position = "absolute";
    
    xButtonLayerTwoBottom.style.backgroundColor = "rgb(127,127,127)";
    
    xButtonLayerTwoBottom.style.height = "1px";
    xButtonLayerTwoBottom.style.width = "14px";
    
    xButtonLayerTwoBottom.style.left = "1px";
    xButtonLayerTwoBottom.style.top = "12px";
    
    /*X button image*/
    
    const xImg = document.createElement("img");
    
    xButton.appendChild(xImg);
    
    xImg.src = "Images/Icons/x.png";
    
    xImg.style.position = "absolute";
    
    xImg.style.width = "8px";
    xImg.style.height = "7px";
    
    xImg.style.left = "4px";
    xImg.style.top = "3px";
    
    
    /*Question button*/
    
    const qButton = document.createElement("div");
    
    mainWindow.appendChild(qButton);
    
    qButton.style.position = "absolute";
    
    qButton.style.backgroundColor = "rgb(191,191,191)";
    
    qButton.style.height = "14px";
    qButton.style.width = "16px";
    
    qButton.style.left = "calc(100% - 39px)";
    qButton.style.top = "5px";
    
    /*Question button borders*/
    
    const qButtonLayerOneLeft = document.createElement("div");
    const qButtonLayerTwoLeft = document.createElement("div");
    
    const qButtonLayerOneRight = document.createElement("div");
    const qButtonLayerTwoRight = document.createElement("div");
    
    const qButtonLayerOneTop = document.createElement("div");
    const qButtonLayerTwoTop = document.createElement("div");
    
    const qButtonLayerOneBottom = document.createElement("div");
    const qButtonLayerTwoBottom = document.createElement("div");
    
    qButton.appendChild(qButtonLayerOneLeft);
    qButton.appendChild(qButtonLayerTwoLeft);
    
    qButton.appendChild(qButtonLayerOneRight);
    qButton.appendChild(qButtonLayerTwoRight);
    
    qButton.appendChild(qButtonLayerOneTop);
    qButton.appendChild(qButtonLayerTwoTop);
    
    qButton.appendChild(qButtonLayerOneBottom);
    qButton.appendChild(qButtonLayerTwoBottom);
    
    /*Left border*/
    
    /*Layer one*/
    
    qButtonLayerOneLeft.style.position = "absolute";
    
    qButtonLayerOneLeft.style.backgroundColor = "rgb(255,255,255)";
    
    qButtonLayerOneLeft.style.height = "13px";
    qButtonLayerOneLeft.style.width = "1px";
    
    qButtonLayerOneLeft.style.left = "0";
    qButtonLayerOneLeft.style.top = "0";
    
    /*Layer two*/
    
    qButtonLayerTwoLeft.style.position = "absolute";
    
    qButtonLayerTwoLeft.style.backgroundColor = "rgb(223,223,223)";
    
    qButtonLayerTwoLeft.style.height = "11px";
    qButtonLayerTwoLeft.style.width = "1px";
    
    qButtonLayerTwoLeft.style.left = "1px";
    qButtonLayerTwoLeft.style.top = "1px";
    
    /*Right border*/
    
    /*Layer one*/
    
    qButtonLayerOneRight.style.position = "absolute";
    
    qButtonLayerOneRight.style.backgroundColor = "rgb(0,0,0)";
    
    qButtonLayerOneRight.style.height = "14px";
    qButtonLayerOneRight.style.width = "1px";
    
    qButtonLayerOneRight.style.left = "15px";
    qButtonLayerOneRight.style.top = "0";
    
    /*Layer two*/
    
    qButtonLayerTwoRight.style.position = "absolute";
    
    qButtonLayerTwoRight.style.backgroundColor = "rgb(127,127,127)";
    
    qButtonLayerTwoRight.style.height = "12px";
    qButtonLayerTwoRight.style.width = "1px";
    
    qButtonLayerTwoRight.style.left = "14px";
    qButtonLayerTwoRight.style.top = "1x";
    
    /*Top border*/
    
    /*Layer one*/
    
    qButtonLayerOneTop.style.position = "absolute";
    
    qButtonLayerOneTop.style.backgroundColor = "rgb(255,255,255)";
    
    qButtonLayerOneTop.style.height = "1px";
    qButtonLayerOneTop.style.width = "15px";
    
    qButtonLayerOneTop.style.left = "0";
    qButtonLayerOneTop.style.top = "0";
    
    /*Layer two*/
    
    qButtonLayerTwoTop.style.position = "absolute";
    
    qButtonLayerTwoTop.style.backgroundColor = "rgb(223,223,223)";
    
    qButtonLayerTwoTop.style.height = "1px";
    qButtonLayerTwoTop.style.width = "13px";
    
    qButtonLayerTwoTop.style.left = "1px";
    qButtonLayerTwoTop.style.top = "1px";
    
    /*Bottom border*/
    
    /*Layer one*/
    
    qButtonLayerOneBottom.style.position = "absolute";
    
    qButtonLayerOneBottom.style.backgroundColor = "rgb(0,0,0)";
    
    qButtonLayerOneBottom.style.height = "1px";
    qButtonLayerOneBottom.style.width = "16px";
    
    qButtonLayerOneBottom.style.left = "0";
    qButtonLayerOneBottom.style.top = "13px";
    
    /*Layer two*/
    
    qButtonLayerTwoBottom.style.position = "absolute";
    
    qButtonLayerTwoBottom.style.backgroundColor = "rgb(127,127,127)";
    
    qButtonLayerTwoBottom.style.height = "1px";
    qButtonLayerTwoBottom.style.width = "14px";
    
    qButtonLayerTwoBottom.style.left = "1px";
    qButtonLayerTwoBottom.style.top = "12px";
    
    /*X button image*/
    
    const qImg = document.createElement("img");
    
    qButton.appendChild(qImg);
    
    qImg.src = "Images/Icons/questionMark.png";
    
    qImg.style.position = "absolute";
    
    qImg.style.width = "6px";
    qImg.style.height = "9px";
    
    qImg.style.left = "5px";
    qImg.style.top = "2px";
    
    /*Icon*/
    
    const icon = document.createElement("img");
    
    mainWindow.appendChild(icon);
    
    icon.src = source;
    
    icon.style.position = "absolute";
    
    icon.style.width = "32px";
    icon.style.height = "32px";
    
    icon.style.left = "14px";
    icon.style.top = "33px";
    
    
    /*Textbox*/
    
    /*Text div*/
    
    const txtDiv = document.createElement("div");
    
    mainWindow.appendChild(txtDiv);
    
    txtDiv.style.position = "absolute";
    
    txtDiv.style.width = "82.56%";
    txtDiv.style.height = "17.32%";
    
    txtDiv.style.left = "62px";
    txtDiv.style.top = "35px";
    
    /*Paragraph element*/
    
    const boxText = document.createElement("p");
    
    txtDiv.appendChild(boxText);
    
    boxText.style.position = "absolute";
    
    boxText.style.height = "100%";
    boxText.style.width = "100%";
    
    boxText.style.fontFamily = "Win95";
    boxText.style.fontSize = "12px";
    boxText.style.color = "rgb(0,0,0)";
    
    boxText.innerText = text;
    
}