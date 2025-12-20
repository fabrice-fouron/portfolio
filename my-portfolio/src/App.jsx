import './App.css'

function App() {
  return (
    <>
      <div style={{ border: "1px dotted white", width: 250 }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ justifyItems: "center" }}>
            <img src='/src/assets/letter_avatar.png' style={{ height: "125px", borderRadius: "100px" }}/>
          </div>
          <p style={{ marginTop: 15, marginBottom: 15 }}>Links</p>
          <div style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly"}}>
            <img src='/src/assets/github.svg' style={{ height: "42px"}}/>
            <img src='/src/assets/linkedin.svg' style={{ height: "40px"}}/>
            <img src='/src/assets/instagram.svg' style={{ height: "40px"}}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
