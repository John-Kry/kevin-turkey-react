import React, { useCallback, useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bulma/css/bulma.css";
import { PayPalButton } from "react-paypal-button-v2";
import credentials from "./credentials/paypal.json";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import collage from "./assets/collage.jpg";
import turkey from "./assets/turkey-header.jpg";
import Footer from "./footer";
import emblem from "./assets/emblem.png";
function App() {
	const client = {
		sandbox: credentials.client_id
	};

	return (
		<div className="App">
			<header className="App-header">
				<img className="header-img" src={emblem}></img>
				<span className="header-text">Kevin the Turkey</span>
			</header>
			<section class="section">
				<div class="container">
					Hello, welcome to Kevin the Turkey's website!
					<br />
					If you would like to order the Kevin the Turky book please
					press the Paypal button at the bottom of the page!
				</div>
			</section>
			<section class="section">
				<div class="container">
					<div class="columns">
						<div class="column">
							<Carousel>
								<div>{<img src={collage} />} </div>
								<div>
									<img src={turkey} />
								</div>
							</Carousel>
						</div>
						<div class="column">
							<div style={{ borderBottom: "1px solid black" }}>
								This book is a x page childrens book about the
								Wethersfield turkey. We reccommend reading this
								with your child in order to celebrate the
								thanksgiving spirit.
							</div>
							<div>
								Buy our book directly from us using paypal and
								we will ship you Kevin the Turkey through UPS?.
								Expect to recieve your books up to two weeks
								after ordering.
							</div>
							<PayPalButton
								amount="0.01"
								// shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
								onSuccess={(details, data) => {
									alert(
										"Transaction completed by " +
											details.payer.name.given_name
									);
									// OPTIONAL: Call your server to save the transaction
									// return fetch("/paypal-transaction-complete", {
									//   method: "post",
									//   body: JSON.stringify({
									//     orderID: data.orderID
									//   })
									// });
									// }}
								}}
								options={{ clientId: client.sandbox }}
							/>
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
}

export default App;
