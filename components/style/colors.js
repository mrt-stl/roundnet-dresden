export const colors = (primary, secondary, accent) => {

    return (<style jsx global>{`

:root {
    --primary: ${primary};
    --secondary: ${secondary};
    --accent: ${accent};
    --white: #ffffff;
}

`}</style>)
}