const addToLocalStorage = (appsId)=>{
    const getStore = localStorage.getItem('apps') ;
    const store =getStore ? JSON.parse(getStore): [];

    if(!store.includes(appsId)){
        store.push(appsId)
    }
    localStorage.setItem("apps", JSON.stringify(store))
}
export default addToLocalStorage;