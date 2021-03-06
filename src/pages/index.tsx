import React, { StrictMode, ReactElement } from 'react';
import DocumentHead from '../components/document-head';
import Layout from '../components/layout';
import HeroIntro from '../components/home/hero-intro';

export default function Home(): ReactElement {
	return (
		<StrictMode>
			<DocumentHead title="Home" />
			<Layout>
				<HeroIntro />
			</Layout>
		</StrictMode>
	);
}
