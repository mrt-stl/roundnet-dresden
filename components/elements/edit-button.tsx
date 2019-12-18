interface IEditButtonProps {
    docId: string
}

const EditButton = (props: IEditButtonProps) => {
    const { docId } = props

    return (
        <div
            className="edit-button"
            data-wio-id={docId} />
    )
}

export default EditButton