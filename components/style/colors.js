export const colors = (primary, secondary, accent) => {

    return (<style jsx global>{`

:root {
    --primary: ${primary};
    --secondary: ${secondary};
    --accent: ${accent};
    --white: #ffffff;
    --background: #ffffff;
    --all-gray-10: #f5f5f5;
    --all-gray-20: #ECEDEE;
    --all-gray-30: #C8CBCE;
    --all-gray-40: #7E8082;
}

`}</style>)
}