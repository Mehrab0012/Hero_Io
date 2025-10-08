
const fetchResponse = async () => {
  const response = await fetch('./data.json');
  const data = await response.json();
  return data;
};

const productDetails = async ({ params }) => {
  const data = await fetchResponse();
  const singleProductData = data.find(item => item.id === Number(params.id));
  return singleProductData;
}


export { fetchResponse, productDetails };
