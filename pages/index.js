import Meta from '../components/meta'
export default () => (
  <div>
    <Meta />
    <div>
      <div className="grid">
        <h1>Binary Grid</h1>
      </div>


      <div className="grid">
        <div className="col-1 justify-content-center align-items-center">
          <div>col-1</div>
        </div>
      </div>

      <div className="grid">
        <div className="col-2 justify-content-center align-items-center">
          <div>col-2</div>
        </div>
      </div>

      <div className="grid">
        <div className="col-4 justify-content-center align-items-center">
          <div>col-4</div>
        </div>
      </div>

      <div className="grid">
        <div className="col-8 justify-content-center align-items-center">
          <div>col-8</div>
        </div>
      </div>

      <div className="grid">
        <div className="row">
          <div className="col-1 justify-content-center align-items-center">
            <div>col-1</div>
          </div>
          <div className="col-2 justify-content-center align-items-center">
            <div>col-2</div>
          </div>
          <div className="col-1 justify-content-center align-items-center">
            <div>col-1</div>
          </div>
          <div className="col justify-content-center align-items-center">
            <div>col</div>
          </div>
        </div>

      </div>

    </div>
  </div>
)