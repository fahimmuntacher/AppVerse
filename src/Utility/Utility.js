const getInstallApp = (key) => {
    const storeInstallAppSTR = localStorage.getItem(key);
    if(storeInstallAppSTR) {
        const storedInstallApp = JSON.parse(storeInstallAppSTR);
        return storedInstallApp;
    }else{
        return [];
    }
}

const setInstallApp = (key, id) => {
    const storeInstallApp = getInstallApp(key);
    if(storeInstallApp.includes(id)){
        return;
    }else{
        storeInstallApp.push(id);
        const data = JSON.stringify(storeInstallApp);
        localStorage.setItem(key, data);
    }
}

const unInstallApp = (key, id) => {
  const storedInstallApp = getInstallApp(key);
  const updatedAppList = storedInstallApp.filter(appId => parseInt(appId) !== id);
  localStorage.setItem(key, JSON.stringify(updatedAppList));
};

export {getInstallApp, setInstallApp, unInstallApp};