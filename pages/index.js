import Meta from "../components/meta"
import ExampleColContent from "../components/example-col-element"
export default () => (
  <div>
    <Meta />
    <div>
      <div className="grid">
        <div className="col">
          <h1>Binary Grid</h1>
        </div>
      </div>

      <div className="grid">
        <div className="col-1">
          <ExampleColContent
            content="col-1" />
        </div>
      </div>

      <div className="grid">
        <div className="col-2 justify-content-center align-items-center">
          <ExampleColContent
            content="col-2" />
        </div>
      </div>

      <div className="grid">
        <div className="col-4 justify-content-center align-items-center">
          <ExampleColContent
            content="col-4" />
        </div>
      </div>

      <div className="grid">
        <div className="col-8 justify-content-center align-items-center">
          <ExampleColContent
            content="col-8" />
        </div>
      </div>

      <div className="grid">
        <div className="row">
          <div className="col-1 justify-content-center align-items-center">
            <ExampleColContent
              content="col-1" />
          </div>
          <div className="col-2 justify-content-center align-items-center">
            <ExampleColContent
              content="col-2" />
          </div>
          <div className="col-1 justify-content-center align-items-center">
            <ExampleColContent
              content="col-1" />
          </div>
          <div className="col justify-content-center align-items-center">
            <ExampleColContent
              content="col" />
          </div>
        </div>

      </div>

    </div>
  </div>
)