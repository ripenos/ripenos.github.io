// Installation
const appSet = {
  photopea: false,
  copilot: false,
  spotify: false,
  wiki: false,
  winR: false,
  EvIo: false,
  Bird: false,
  Mario: false,
  MC: false,
  Solt: false,
  PaperIo: false
}

const webStr = localStorage.getItem('webApps')
if(webStr){
  const webApps = JSON.parse(webStr);
  appSet.photopea = webApps.photopea
  appSet.copilot = webApps.copilot
  appSet.spotify = webApps.spotify
  appSet.wiki = webApps.wiki
  appSet.winR = webApps.winR
  appSet.EvIo = webApps.EvIo
  appSet.Bird = webApps.Bird
  appSet.Mario = webApps.Mario
  appSet.MC = webApps.MC
  appSet.Solt = webApps.Solt
  appSet.PaperIo = webApps.PaperIo

  if (webApps.photopea){
    document.getElementById('appInstallBtnPhotopea').innerHTML = 'Uninstall'
    document.getElementById('photpeaapp').style.display = 'flex'
  }else{
    document.getElementById('appInstallBtnPhotopea').innerHTML = 'Install'
    document.getElementById('photpeaapp').style.display = 'none'
  }

  if (webApps.copilot){
    document.getElementById('appInstallBtnCop').innerHTML = 'Uninstall'
    document.getElementById('copilotapp').style.display = 'flex'
  }else{
    document.getElementById('appInstallBtnCop').innerHTML = 'Install'
    document.getElementById('copilotapp').style.display = 'none'
  }
  if (webApps.spotify){
    document.getElementById('appInstallBtnSpot').innerHTML = 'Uninstall'
    document.getElementById('spotifyapp').style.display = 'flex'
  }else{
    document.getElementById('appInstallBtnSpot').innerHTML = 'Install'
    document.getElementById('spotifyapp').style.display = 'none'
  }
  if (webApps.wiki){
    document.getElementById('appInstallBtnWiki').innerHTML = 'Uninstall'
    document.getElementById('wikipediaapp').style.display = 'flex'
  }else{
    document.getElementById('appInstallBtnWiki').innerHTML = 'Install'
    document.getElementById('wikipediaapp').style.display = 'none'
  }
  if (webApps.winR){
    document.getElementById('appInstallBtnWinR').innerHTML = 'Uninstall'
    document.getElementById('winReplicasapp').style.display = 'flex'
  }else{
    document.getElementById('appInstallBtnWinR').innerHTML = 'Install'
    document.getElementById('winReplicasapp').style.display = 'none'
  }
  if (webApps.EvIo){
    document.getElementById('appInstallBtnevIo').innerHTML = 'Uninstall'
    document.getElementById('evIoapp').style.display = 'flex'
  }else{
    document.getElementById('appInstallBtnevIo').innerHTML = 'Install'
    document.getElementById('evIoapp').style.display = 'none'
  }
  if (webApps.Bird){
    document.getElementById('appInstallBtnbird').innerHTML = 'Uninstall'
    document.getElementById('flappyBirdapp').style.display = 'flex'
  }else{
    document.getElementById('appInstallBtnbird').innerHTML = 'Install'
    document.getElementById('flappyBirdapp').style.display = 'none'
  }
  if (webApps.Mario){
    document.getElementById('appInstallBtnMario').innerHTML = 'Uninstall'
    document.getElementById('marioapp').style.display = 'flex'
  }else{
    document.getElementById('appInstallBtnMario').innerHTML = 'Install'
    document.getElementById('marioapp').style.display = 'none'
  }
  if (webApps.MC){
    document.getElementById('appInstallBtnMC').innerHTML = 'Uninstall'
    document.getElementById('Minecraftapp').style.display = 'flex'
  }else{
    document.getElementById('appInstallBtnMC').innerHTML = 'Install'
    document.getElementById('Minecraftapp').style.display = 'none'
  }
  if (webApps.Solt){
    document.getElementById('appInstallBtnSolt').innerHTML = 'Uninstall'
    document.getElementById('solitaireapp').style.display = 'flex'
  }else{
    document.getElementById('appInstallBtnSolt').innerHTML = 'Install'
    document.getElementById('solitaireapp').style.display = 'none'
  }
  if (webApps.PaperIo){
    document.getElementById('appInstallBtnPaperIo').innerHTML = 'Uninstall'
    document.getElementById('paperIoapp').style.display = 'flex'
  }else{
    document.getElementById('appInstallBtnPaperIo').innerHTML = 'Install'
    document.getElementById('paperIoapp').style.display = 'none'
  }
}

function appInstall(appSite) {
  if (appSite == "photopea") {
    btnInstallLoad("appInstallBtnPhotopea");
        
    setTimeout(() => {
      if(appSet.photopea == false){
        appSet.photopea = true;
        localStorage.setItem('webApps', JSON.stringify(appSet));
      }else{
        appSet.photopea = false;
        localStorage.setItem('webApps', JSON.stringify(appSet));
      }
    }, 8500);
  } else if (appSite == "copilot") {
    btnInstallLoad("appInstallBtnCop");
        
    setTimeout(() => {
      if(appSet.copilot == false){
        appSet.copilot = true;
        localStorage.setItem('webApps', JSON.stringify(appSet));
      }else{
        appSet.copilot = false;
        localStorage.setItem('webApps', JSON.stringify(appSet));
      }
    }, 8500);
  } else if (appSite == "spotify") {
    btnInstallLoad("appInstallBtnSpot");
        
    setTimeout(() => {
      if(appSet.spotify == false){
        appSet.spotify = true;
        localStorage.setItem('webApps', JSON.stringify(appSet));
      }else{
        appSet.spotify = false;
        localStorage.setItem('webApps', JSON.stringify(appSet));
      }
    }, 8500);
  }else if (appSite == "wiki") {
    btnInstallLoad("appInstallBtnWiki");
        
    setTimeout(() => {
      if(appSet.wiki == false){
        appSet.wiki = true;
        localStorage.setItem('webApps', JSON.stringify(appSet));
      }else{
        appSet.wiki = false;
        localStorage.setItem('webApps', JSON.stringify(appSet));
      }
    }, 8500);
  }else if (appSite == "WinR") {
    btnInstallLoad("appInstallBtnWinR");
        
    setTimeout(() => {
      if(appSet.winR == false){
        appSet.winR = true;
        localStorage.setItem('webApps', JSON.stringify(appSet));
      }else{
        appSet.winR = false;
        localStorage.setItem('webApps', JSON.stringify(appSet));
      }
    }, 8500);
  }else if (appSite == "evIo") {
    btnInstallLoad("appInstallBtnevIo");
        
    setTimeout(() => {
      if(appSet.EvIo == false){
        appSet.EvIo = true;
        localStorage.setItem('webApps', JSON.stringify(appSet));
      }else{
        appSet.EvIo = false;
        localStorage.setItem('webApps', JSON.stringify(appSet));
      }
    }, 8500);
  }else if (appSite == "bird") {
    btnInstallLoad("appInstallBtnbird");
        
    setTimeout(() => {
      if(appSet.Bird == false){
        appSet.Bird = true;
        localStorage.setItem('webApps', JSON.stringify(appSet));
      }else{
        appSet.Bird = false;
        localStorage.setItem('webApps', JSON.stringify(appSet));
      }
    }, 8500);
  }else if (appSite == "Mario") {
    btnInstallLoad("appInstallBtnMario");
        
    setTimeout(() => {
      if(appSet.Mario == false){
        appSet.Mario = true;
        localStorage.setItem('webApps', JSON.stringify(appSet));
      }else{
        appSet.Mario = false;
        localStorage.setItem('webApps', JSON.stringify(appSet));
      }
    }, 8500);
  }else if (appSite == "MC") {
    btnInstallLoad("appInstallBtnMC");
        
    setTimeout(() => {
      if(appSet.MC == false){
        appSet.MC = true;
        localStorage.setItem('webApps', JSON.stringify(appSet));
      }else{
        appSet.MC = false;
        localStorage.setItem('webApps', JSON.stringify(appSet));
      }
    }, 8500);
  }else if (appSite == "Solt") {
    btnInstallLoad("appInstallBtnSolt");
        
    setTimeout(() => {
      if(appSet.Solt == false){
        appSet.Solt = true;
        localStorage.setItem('webApps', JSON.stringify(appSet));
      }else{
        appSet.Solt = false;
        localStorage.setItem('webApps', JSON.stringify(appSet));
      }
    }, 8500);
  }else if (appSite == "PaperIo") {
    btnInstallLoad("appInstallBtnPaperIo");
        
    setTimeout(() => {
      if(appSet.PaperIo == false){
        appSet.PaperIo = true;
        localStorage.setItem('webApps', JSON.stringify(appSet));
      }else{
        appSet.PaperIo = false;
        localStorage.setItem('webApps', JSON.stringify(appSet));
      }
    }, 8500);
  }
}

function btnInstallLoad(btn){
    let btnB = document.getElementById(btn);
    btnB.innerHTML = "<img src='https://www.usj.edu.lb/16images/spinner.gif' style='border: none;width: 30px;margin: auto;'>"
    btnB.classList.add('install')
    setTimeout(() => {
        btnB.classList.remove('install')
        btnB.innerHTML = "App configured"
    }, 8500);
  }
