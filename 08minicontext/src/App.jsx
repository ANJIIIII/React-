import UserContextProvider from "./context/UserContextProvider"
function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h1>React with Anjali, Enjoy!!</h1>
    </UserContextProvider>
  )
}

export default App
