export const tukan = (fontName, colors, darkModeColors) => {
	return <style jsx global>{`

:root {
    --primary: ${colors.primary};
    --secondary: ${colors.secondary};
    --accent: ${colors.accent};
    --white: #ffffff;
	--background: ${colors.background};
	--font-color: ${colors.font};
    --all-gray-10: ${colors.allGray10};
    --all-gray-20: ${colors.allGray20};
    --all-gray-30: ${colors.allGray30};
    --all-gray-40: ${colors.allGray40};
}

@media (prefers-color-scheme: dark) { 
	:root {
		--primary: ${darkModeColors.primary};
		--secondary: ${darkModeColors.secondary};
		--accent: ${colors.accent};
		--white: #ffffff;
		--background: ${darkModeColors.background};
		--font-color: ${darkModeColors.font};
		--all-gray-10: ${darkModeColors.allGray10};
		--all-gray-20: ${darkModeColors.allGray20};
		--all-gray-30: ${darkModeColors.allGray30};
		--all-gray-40: ${darkModeColors.allGray40};
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

/* Burger menu */
.bm-burger-button {
    position: fixed;
    width: 48px;
    height: 48px;
    top: 0;
    right: 0;
}

.bm-cross-button {
    position: fixed;
    width: 48px !important;
    height: 48px !important;
    top: 0 !important;
    right: 0 !important;
}
  
.bm-burger-bars {
    background: #373a47;
}
  
.bm-morph-shape {
    fill: #373a47;
}
  
.bm-menu {
    background: var(--primary);
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

`}</style>
}