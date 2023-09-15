import Todo from "./todo"
import Card from "./list "
import Movies from "./effects"
import Form from "./form"
import Products from "./products"

export default function Home() {
  return (
    <>
     <h1>My React</h1> 
      <Todo todo='learn usestate'/>
      <Todo todo='learn usestate'/>
      <Todo todo='learn usestate'/>
      <Card/>
      <Movies/>
      <Form/>
      <Products/> 
    </>
  )
}
