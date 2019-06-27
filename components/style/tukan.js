export const tukan = (fontName, colors, darkModeColors) => {
    return <style jsx global>{`

:root {
    --primary: ${colors.primary};
    --secondary: ${colors.secondary};
    --accent: ${colors.accent};
    --white: #ffffff;
    --dark: ${colors.dark};
	--background: ${colors.background};
	--font-color: ${colors.font};
    --all-gray-10: ${colors.allGray10};
    --all-gray-20: ${colors.allGray20};
    --all-gray-30: ${colors.allGray30};
	--all-gray-40: ${colors.allGray40};
	
	--regular: 400;
    --medium: 500;
    --bold: 600;

    --standard-spacing: 5em;
}

@media (prefers-color-scheme: dark) { 
	:root {
		--primary: ${darkModeColors.primary};
		--secondary: ${darkModeColors.secondary};
		--accent: ${colors.accent};
		--white: #ffffff;
        --dark: ${colors.dark};
		--background: ${darkModeColors.background};
		--font-color: ${darkModeColors.font};
		--all-gray-10: ${darkModeColors.allGray10};
		--all-gray-20: ${darkModeColors.allGray20};
		--all-gray-30: ${darkModeColors.allGray30};
		--all-gray-40: ${darkModeColors.allGray40};
	}
}

@media (max-width: 768px) {
    :root {
        --standard-spacing: 3em;
    }
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
	font-size: 4em;
    color: var(--font-color);
    letter-spacing: 0.1px;
    line-height: 1.25;
    margin-bottom: 0.25em;
    margin-top: 0.25em;
    font-weight: var(--medium);
}

h2 {
	font-size: 2.5em;
    color: var(--font-color);
    letter-spacing: 0;
    line-height: 1.2;
    font-weight: var(--medium);
    margin-bottom: 0.4em;
    margin-top: 0.4em;
}

h3 {
	font-size: 2em;
    color: var(--font-color);
    letter-spacing: 0.1px;
    line-height: 1.25;
    font-weight: var(--regular);
    margin-bottom: 0.5em;
    margin-top: 0.5em;
}

h4 {
	font-size: 1.5em;
    color: var(--font-color);
    letter-spacing: 0.1px;
    font-weight: var(--medium);
    line-height: 1.25em;
    margin-bottom: 0.75em;
    margin-top: 0.75em;
}

h5 {
	font-size: 1.25em;
	font-weight: var(--regular);
	letter-spacing: 0.1px;
	color: var(--all-gray-30);
	line-height: 1.5em;
	margin-bottom: 1em;
	margin-top: 1em;
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
	height: auto;
	max-width: 100%;
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

/* Burger menu */
.bm-burger-button {
    position: fixed;
    width: 48px;
    height: 48px;
    top: 0;
    right: 12px;
}

.bm-cross-button {
    position: fixed;
    width: 48px !important;
    height: 48px !important;
    top: 0 !important;
    right: 12x !important;
}
  
.bm-burger-bars {
    background: #373a47;
}
  
.bm-morph-shape {
    fill: #373a47;
}
  
.bm-menu {
    background: var(--all-gray-10);
    padding-top: 128px;
    padding-left: 64px;
}
  
.bm-menu a {
    color: #b8b7ad;
}
  
.bm-item-list a {
    padding: 0.8em;
}
  
.bm-item-list a span {
    margin-left: 10px;
    font-weight: 700;
}
  
.bm-item:focus {
    outline: none;
}
  
.bm-menu-wrap {
      top: 0;
}

.right-align {
    display: block;
    text-align: right;
}

.center-align {
    display: block;
    text-align: center;
}

.small-text {
  font-size: 0.875em;
  font-weight: var(--regular);
  color: var(--all-gray-30);
  letter-spacing: 0.2px;
  line-height: 1.5;
  margin-bottom: 0.5em;
  margin-top: 0.5em;
}

.large-text {
  font-weight: var(--medium);
  font-size: 1.25em;
  color: var(--font-color);
  letter-spacing: 0.1px;
  line-height: 1.3;
  margin-bottom: 0.8em;
  margin-top: 0.8em;
}

`}</style>
}