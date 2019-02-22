import Meta from "../components/meta"

const Index = () => (
  <div>
    <Meta />
    <div>
      <div className="grid">
        <div className="col">
          <h1>Example Project</h1>
        </div>
      </div>
    </div>
  </div>
)

Index.getInitialProps = async () => {
  
  return {
    
  }
}

export default Index