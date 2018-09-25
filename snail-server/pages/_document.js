// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
	static async getInitialProps (ctx) {
		const initialProps = await Document.getInitialProps(ctx)

		return {
			...initialProps
		}
	}

	render() {
		return (
			<html>
				<Head>{
					this.props.isServer && !this.props.exporting &&
					<link rel="stylesheet" href="/_next/static/style.css" />
				}
				</Head>
				<body className="has-navbar-fixed-top">
					<Main />
					<NextScript />
				</body>
			</html>
		)
	}
}
