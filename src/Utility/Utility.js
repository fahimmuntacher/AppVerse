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

export {getInstallApp, setInstallApp};