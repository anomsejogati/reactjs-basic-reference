import { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// import Header from "./components/Header"
import ProductList from "./components/ProductList"
import About from "./components/About"
import Contact from "./components/Contact"

function App() {

    // const [title, setTitle] = useState("Tanpa Titik Koma")
    // const age = 20
    // const link = "https://tanpatitikkoma.com"

    // const clickMe = () => {
    //   alert("Clicked!")
    // }

    // const myName = (name) => {
    //   alert("Hello " + name)
    // }

    // const changeTitle = () => {
    //   setTitle("Title changed")
    // }

    // const [name, setName] = useState("Anom")

    useEffect(() => {
        // dijalankan pertama kali ketika page load dan rendering
        console.log("Use effect running")
    })


    // useEffect(() => {
    // dijalankan pertama kali ketika page load
    // console.log("Use effect running")
    // }[])

    // useEffect(() => {
    //   // dijalankan setiap kali function setName dipanggil
    //   console.log("Use effect running")
    // }, [name])


    const [products, setProducts] = useState([
        { id: 1, title: 'Product 1', price: 899 },
        { id: 2, title: 'Product 2', price: 982 },
        { id: 3, title: 'Product 3', price: 322 },
        { id: 4, title: 'Product 4', price: 763 },
        { id: 5, title: 'Product 5', price: 389 }
    ]);


    const deleteProduct = (productID) => {
        const newProducts = products.filter(product => product.id !== productID)
        setProducts(newProducts)
    }


    return (
        <div>
            {/* <Header />
      <h1>Welcome to {title}</h1>
      <h2>{age * 2}</h2>
      <a href={link}>Go to tanpatitikkoma.com</a><br></br>
      <button onClick={clickMe}>Click Me</button><br></br>
      <button onClick={() => myName("Anom Sejogati")}>MyName</button><br></br>
      <button onClick={changeTitle}>Change Title</button><br></br><br></br>
      <ProductList products={products} deleteProduct={deleteProduct} />
      <button onClick={() => setName("Sejogati")}>Change Name</button><br></br><br></br>
      <p>{name}</p> */}

            <Router>
                <Routes>
                    <Route path="/" element={<ProductList products={products} deleteProduct={deleteProduct} />}>
                    </Route>
                    <Route path="/about" element={<About />}>
                    </Route>
                    <Route path="/contact" element={<Contact />}>
                    </Route>
                </Routes>
            </Router>

        </div>
    );
}

export default App;
