export const tukan = (fontName, primary, secondary, accent) => {
	return <style jsx global>{`

:root {
    --primary: ${primary};
    --secondary: ${secondary};
    --accent: ${accent};
    --white: #ffffff;
	--background: #ffffff;
	--font-color: #7E8082;
    --all-gray-10: #f5f5f5;
    --all-gray-20: #ECEDEE;
    --all-gray-30: #C8CBCE;
    --all-gray-40: #7E8082;
}

html, body {
	height: 100%;
	background-color: var(--background);
	margin: 0 auto;
	width: 100%;
	font-family: ${fontName}, sans-serif;
}

h1, h2, h3, h4, h5, h6, p {
	font-style: normal;
	margin: 0px;
}

h1 {
	font-size: 2.5em;
    color: var(--primary);
    letter-spacing: -0.2px;
  	line-height: 1.2;
    margin-top: 0.333em;
    margin-bottom: 0.333em;
}

h2 {
	font-size: 2.25em;
    color: var(--primary);
    font-weight: bold;
	letter-spacing: 0.2px;
    line-height: 1.2;
    margin-bottom: 0.4444444444em;
	margin-top: 0.4444444444em;
}

h3 {
	color: var(--primary);
	font-size: 1.5em;
    font-weight: bold;
    letter-spacing: 0.2px;
    line-height: 1.2;
    margin-bottom: 0.6666666666em;
	margin-top: 0.6666666666em;
}

h4 {
	color: var(--primary);
	font-size: 1.25em;
	letter-spacing: 0.2px;
	line-height: 1.2;
    margin-bottom: 0.4em;
    margin-top: 0.4em;
}

p {
	color: var(--font-color);
	font-size: 1em;
	letter-spacing: 0.2px;
    line-height: 1.5;
    margin-bottom: 0.5em;
    margin-top: 0.5em;
}

ul {
	line-height: 1.5;
	color: var(--font-color);
}

a {
	color: var(--accent);
	text-decoration: none;
	font-weight: regular;
    letter-spacing: 0.5px;
    line-height: 1.2;
}

hr {
	background-color: #000000;
	height: 4px;
	margin-bottom: 3em;
	margin-top: 3em;
	width: 90%;
	border: 0px;
	box-sizing: content-box;
}

img {
	height: 100%;
	width: 100%;
	object-fit: cover;
}

.h-100 {
	height: 100%;
}

.text-center {
	text-align: center;
}

.page-container {
	margin-top: 48px;
}

.call-to-action {
	font-size: 1.25em;
}

`}</style>
}