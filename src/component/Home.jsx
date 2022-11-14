import { useState, useEffect } from 'react';
export default function Home() {
  const [products, setProducts] = useState(null);
  const masuk = () => {
    // method: 'GET',
    fetch('https://vpic.nhtsa.dot.gov/api/vehicles/getallmanufacturers?format=json', { method: 'GET' })
      .then((response) => {
        return response.json();
      })
      .then((dataLogin) => {
        setProducts(dataLogin.Results);
        // console.log(dataLogin);
      });
  };

  useEffect(() => {
    masuk();
  }, []);

  const findProduct = (id) => {
    return products.filter((product) => {
      console.log(product.Mfr_ID);
      return product.Mfr_ID === id;
    });
  };

  return (
    <div>
      <header>
        <nav>
          <label htmlFor="">Home</label>
          <label htmlFor="">nama</label>
          <button>Log Out</button>
        </nav>
      </header>
      <div>
        <input type="text" />
        <button>Cari</button>
      </div>
      <div className="tabelIsi">
        <table border="1">
          <thead>
            <tr className="judulTabel">
              <td>No</td>
              <td>Manufaktur ID</td>
              <td>Country</td>
              <td>Manufaktur name</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {products &&
              products.map((product) => (
                <tr>
                  <td>{product.Id}</td>
                  <td>{product.Mfr_ID}</td>
                  <td>{product.Country}</td>
                  <td>{product.Mfr_Name}</td>
                  <td>
                    <button
                      onClick={() => {
                        findProduct(product.id);
                      }}
                    >
                      Details
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
