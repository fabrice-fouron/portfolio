import './App.css'

function App() {
  return (
    <>
      <div style={{ border: "1px dotted white", width: 250 }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          
          <div style={{ justifyItems: "center" }}>
            <img src='/assets/letter_avatar.png' style={{ height: "125px", borderRadius: "100px" }}/>
          </div>
          
          <p style={{ marginTop: 15, marginBottom: 15 }}>Social Media</p>
          
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>
            <a href='https://github.com/fabrice-fouron'>
              <img src='/assets/github.svg' style={{ height: "42px"}}/>
            </a>
            <a href='https://www.linkedin.com/in/fabrice-fouron/'>
              <img src='/assets/linkedin.svg' style={{ height: "40px"}}/>
            </a>
            <a href='https://www.instagram.com/_fabrice05_/'>
              <img src='/assets/instagram.svg' style={{ height: "40px"}}/>
            </a>
          </div>

          <p style={{ marginTop: 15, marginBottom: 15 }}>Projects</p>

          <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>
            <div>
              <img src='/assets/TRACKR.png' style={{ height: "80px"}}/>
              <h3>Trackr</h3>
            </div>

            <div>
              <img src='/assets/StFrancoisDeSales.png' style={{ height: "80px"}}/>
              <h3>Landing Page</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
