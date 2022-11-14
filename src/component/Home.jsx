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
        console.log(dataLogin);
      });
  };

  useEffect(() => {
    masuk();
  }, []);
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
                  <td>{product.id}</td>
                  <td>9999</td>
                  <td>indonesia</td>
                  <td>tesla</td>
                  <td>
                    <button>Details</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
