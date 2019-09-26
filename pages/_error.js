import Meta from "../components/meta"
import Nav from "../components/navigation/nav"
import Project from "../models/config/project"


const Error = () => {
    const project = Project.getInstance()

    const meta = {
        metaTitle: "Seite nicht verfügbar",
        metaDescription: "Seite nicht verfügbar",
    }

    return (
        <div >
            <Meta
                project={project}
                data={meta} />
            <Nav />

            <div className="error-container">
                <div className="grid justify-content-center">
                    <div className="col-6">
                        <img src="../static/img/error.png" />
                        <div className="text-center">
                            <a href="/" className="link-content">Zurück zur Startseite</a>
                        </div>
                    </div>
                </div>

            </div>
            <style jsx>{`    
                    .error-container {
                        padding-top: var(--standard-spacing);
                        padding-bottom: var(--standard-spacing);
                    }
                    img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
                `}</style>
        </div>
    )
}

export default Error