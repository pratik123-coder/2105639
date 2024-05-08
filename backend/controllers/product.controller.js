import axios from 'axios';


export const getTopProducts = async (req, res) => {
    try {
        const { companyname, categoryname } = req.params;
        const { top, minPrice, maxPrice } = req.query;

        const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE1MTQ3MTI1LCJpYXQiOjE3MTUxNDY4MjUsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjhlMWNkN2YzLWNmZmUtNDY3Zi05NGNhLTRkMTkwYjQ5NmQzZCIsInN1YiI6IjIxMDU2MzlAa2lpdC5hYy5pbiJ9LCJjb21wYW55TmFtZSI6ImdvTWFydCIsImNsaWVudElEIjoiOGUxY2Q3ZjMtY2ZmZS00NjdmLTk0Y2EtNGQxOTBiNDk2ZDNkIiwiY2xpZW50U2VjcmV0IjoiTGxQeU1xYUhnU3dsSkZqbyIsIm93bmVyTmFtZSI6IlByYXRpayBNb2hhbnR5Iiwib3duZXJFbWFpbCI6IjIxMDU2MzlAa2lpdC5hYy5pbiIsInJvbGxObyI6IjIxMDU2MzkifQ.5HB-p4eUACafNzPu57hKE5jpRtO-7KAxM0lZ_V2a1T8";

        const response = await axios.get(`http://20.244.56.144/test/companies/${companyname}/categories/${categoryname}/products`, {
            params: {
                top: top,
                minPrice: minPrice,
                maxPrice: maxPrice
            },
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });

        res.json(response.data);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const getProductDetails = async (req, res) => {
    try {
        const { companyname, categoryname, productid } = req.params;

        
        const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE1MTQ3MTI1LCJpYXQiOjE3MTUxNDY4MjUsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjhlMWNkN2YzLWNmZmUtNDY3Zi05NGNhLTRkMTkwYjQ5NmQzZCIsInN1YiI6IjIxMDU2MzlAa2lpdC5hYy5pbiJ9LCJjb21wYW55TmFtZSI6ImdvTWFydCIsImNsaWVudElEIjoiOGUxY2Q3ZjMtY2ZmZS00NjdmLTk0Y2EtNGQxOTBiNDk2ZDNkIiwiY2xpZW50U2VjcmV0IjoiTGxQeU1xYUhnU3dsSkZqbyIsIm93bmVyTmFtZSI6IlByYXRpayBNb2hhbnR5Iiwib3duZXJFbWFpbCI6IjIxMDU2MzlAa2lpdC5hYy5pbiIsInJvbGxObyI6IjIxMDU2MzkifQ.5HB-p4eUACafNzPu57hKE5jpRtO-7KAxM0lZ_V2a1T8"; 

        
        const response = await axios.get(`http://20.244.56.144/test/companies/${companyname}/categories/${categoryname}/products/${productid}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching product details:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
