import { string } from "prop-types"

const EditButton = ({ docId }) => {
    return (
        <div
            className="edit-button"
            data-wio-id={docId} />
    )
}

EditButton.propTypes = {
    docId: string
}

export default EditButton