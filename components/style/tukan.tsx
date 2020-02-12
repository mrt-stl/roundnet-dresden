export const tukanConfig = {
    navHeight: "48px"
}

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
    --font-color-invert: ${darkModeColors.font};
    --all-gray-10: ${colors.allGray10};
    --all-gray-20: ${colors.allGray20};
    --all-gray-30: ${colors.allGray30};
    --all-gray-40: ${colors.allGray40};

	--regular: 400;
    --medium: 500;
    --bold: 600;

    --small-spacing: 1em;
    --standard-spacing: 5em;
    --large-spacing: 6em;
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
        --font-color-invert: ${colors.font};
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
    -webkit-font-smoothing: antialiased;
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
    background-color: var(--all-gray-10);
    padding-top: 32px;
    padding-right: 24px;
    padding-bottom: 32px;
    padding-left: 60px !important;
    line-height: 2;
    color: var(--font-color);
}

li {
    padding-left: 8px;
}

@media (max-width: 768px) {
    ul {
        font-size: 14px;
    }
}

a {
	color: var(--accent);
	text-decoration: none;
	font-weight: regular;
    letter-spacing: 0.5px;
    line-height: 1.2;

    background-image: linear-gradient(currentColor, currentColor);
    background-position: 0% 100%;
    background-repeat: no-repeat;
    background-size: 0% 1px;
    transition: background-size .4s;
}

a:hover {
    background-size: 100% 1px;
}

h2 a:hover {
    background-size: 100% 2px;
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

pre {
    word-wrap: break-word;
    word-break: break-word;
    padding: 16px;
    margin: 1em 0;
    line-height: 1.65;
    border: 1px solid var(--all-gray-20);
    color: #bd10e0;
    background: #f8f8f8;
    overflow: auto;
    border-radius: 4px;
}

.code {
    font-family: monospace,monospace;
    color: #bd10e0
}

img {
	max-width: 100%;
	object-fit: cover;
}

.block-img {
    margin-top: 0px;
    margin-bottom: 0px;
}

.h-100 {
	height: 100%;
}

.text-center {
	text-align: center;
}

.tukan-container {
	margin-top: ${tukanConfig.navHeight};
}

.banner-container {
    background-color: var(--primary);
    height: 36px;
    z-index: 100;
    overflow: hidden;
    position: fixed;
    top: ${tukanConfig.navHeight};
    width: 100%;
}

.banner-container p {
    color: var(--font-color-invert);
    font-size: 14px;
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
  font-size: 1.25em;
  color: var(--font-color);
  margin-bottom: 0.8em;
  margin-top: 0.8em;
}

.logo-img {
    height: 40px;
}

.logo-img img {
    height: 100%;
}

/* This is needed twice, first for Firefox and second for other browsers */
.button a, a .button {
    background-color: var(--primary);
    padding: 13px 24px 16px 24px;
    color: var(--background);
    margin-top: 1em;
    display: inline-block;
}

.button a:hover, a .button:hover {
    background-color: var(--accent);
    transition: .5s;
}

textarea {
    box-shadow: none;
}

textarea:focus {
    outline: none;
}

textarea::placeholder {
    color: var(--all-gray-30);
}

textarea::-ms-input-placeholder {
    color: var(--all-gray-30);
}

.edit-button a {
    z-index: 1000;
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: var(--accent);
    padding-top: 15px;
    padding-bottom: 15px;
    padding-right: 17px;
    padding-left: 17px;
    border-radius: 50%;
    box-shadow: 0 2px 5px rgba(0,0,0,.25);
}

/* Lazy load opacity effect */

.lazy-load-image-background.opacity {
    background-image: none !important;
    opacity: 0;
}

.lazy-load-image-background.opacity.lazy-load-image-loaded {
    opacity: 1;
    transition: opacity 1s linear;
}

.image-with-caption-container .lazy-load-image-loaded {
    width: 100% !important;
    height: 100% !important;
}

.image-with-caption-container .lazy-load-image-loaded img {
    display: block;
    max-height: 60vh;
    margin-left: auto;
    margin-right: auto;
}

.product-container {
    padding-top: var(--standard-spacing);
}

.product-container button {
    padding: 0px 24px;
    height: 48px;
    background-color: var(--accent);
    margin: 16px 0px;
    border: none;
    border-radius: 0px;
    cursor: pointer;
    color: var(--white);
}

.cart-link-container {
    margin-right: 12px;
    margin-left: auto;
}

.cart-link-container a {
    background-image: none !important;
}

.cart-link-container a:hover {
    transition: 0.2s;
    color: var(--accent);
}

@media (max-width: 768px) {
    .cart-link-container {
        margin-left: 12px;
        margin-right: auto;
    }
}

.cart-link-container a {
    color: var(--font-color);
}

.cart-head-container {
    border-bottom: var(--all-gray-20) 1px solid;
}

.cart-element-container {
    border-bottom: var(--all-gray-20) 1px solid;
    padding-top: 1em;
    padding-bottom: 1em;
}

.cart-element-container p {
    padding-top: 1em;
}

.cart-container button {
    padding: 0px 24px;
    height: 48px;
    background-color: var(--accent);
    margin: 16px 0px;
    border: none;
    border-radius: 0px;
    cursor: pointer;
    color: var(--white);
}

.footer-container {
    padding-top: var(--large-spacing);
    padding-bottom: var(--large-spacing);
}

@media (prefers-color-scheme: dark) {
    .footer-container {
        background-color: var(--background);
    }
}


@keyframes zoomIn {
    from {
      transform: scale(1);
    }

    60% {
      transform: scale(1.08);
    }

    100% {
        transform: scale(1);
    }
  }

.zoomIn {
    animation-name: zoomIn;
    animation-duration: 1.6s;
    animation-timing-function: ease;
    animation-delay: 0.4s;
}

@-webkit-keyframes pulse {
    from {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }

    50% {
      -webkit-transform: scale3d(1.05, 1.05, 1.05);
      transform: scale3d(1.05, 1.05, 1.05);
    }

    to {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
  }

  @keyframes pulse {
    from {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }

    50% {
      -webkit-transform: scale3d(1.05, 1.05, 1.05);
      transform: scale3d(1.05, 1.05, 1.05);
    }

    to {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
  }

.pulse {
    animation-name: pulse;
    animation-duration: 0.8s;
    animation-timing-function: ease;
}


/* Utils */

.hide {
    display: none !important;
}

`}</style>
}