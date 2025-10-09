const remove = (id)=>{
    const getStoredData = localStorage.getItem('apps');
    const StoredData  = getStoredData ? JSON.parse(getStoredData): [];

    const newItem = StoredData.filter(remove=> remove !== id);

    localStorage.setItem('apps', JSON.stringify(newItem))
}
export default remove;