/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useRef } from 'react';
import {
	SafeAreaView,
	StyleSheet,
	ScrollView,
	View,
	Text,
	StatusBar,
	Image,
	Animated
} from 'react-native';

import {
	Header,
	LearnMoreLinks,
	Colors,
	DebugInstructions,
	ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const BANNER_H = 460;

const App = () => {
	const scrollA = useRef(new Animated.Value(0)).current;
	return (
		<>
			<StatusBar barStyle="dark-content" />
			<Animated.ScrollView
			showsVerticalScrollIndicator={false}
				// onScroll={e => console.log(e.nativeEvent.contentOffset.y)}
				onScroll={Animated.event(
					[{ nativeEvent: { contentOffset: { y: scrollA } } }],
					{ useNativeDriver: true }
				)}
				style={styles.scrollView}
			>
				<View style={styles.container}>
					<Animated.Image
						style={styles.banner(scrollA)}
						width="100%"
						height={BANNER_H}
						source={{
							uri: 'https://m.media-amazon.com/images/M/MV5BZGFkMDJkOWMtNGI4MS00ZTQ0LWJkMjktYTM2YTQ1MTA3NTRiXkEyXkFqcGdeQXVyMDc2NTEzMw@@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
						}}
					/>
					<View style={styles.TextView}>
						<Text style={styles.title}>
							Chemical Hearts
						</Text>
						<Text style={styles.footer}>
							Storyline
							Seventeen-year-old Henry Page (Austin Abrams) has never been in love.
							He fancies himself a romantic, but the kind of once-in-a-lifetime love he's been hoping for just hasn't happened yet.
							Then, on the first day of senior year, he meets transfer student Grace Town (Lili Reinhart) and it seems all that is about to change.
							When Grace and Henry are chosen to co-edit the school paper,
							he is immediately drawn to the mysterious newcomer.
							As he learns the heartbreaking secret that has changed her life, he finds himself falling in love with her - or at least the person he thinks she is.
							</Text>
					</View>
				</View>
			</Animated.ScrollView>
		</>
	);
};

const styles = StyleSheet.create({
	scrollView: {
		backgroundColor: '#fff',
		flex: 1,
	},
	title: {
		color: '#000',
		fontSize: 24,
		fontWeight: '600',
		lineHeight: 26,
		padding: 20,
		paddingBottom: 0,

	},
	TextView: {
		justifyContent: 'center',
		backgroundColor: '#fff',
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
		top: -30,

	},
	banner: scrollA => ({
		height: BANNER_H,
		width: "300%",
		transform: [{
			translateY: scrollA,
		},
		{
			scale: scrollA.interpolate({
				inputRange: [-BANNER_H, 5, BANNER_H, BANNER_H + 2],
				outputRange: [3, 1, 1.5, 3]
			})
		}
		]
	}),
	sectionContainer: {
		marginTop: 32,
		paddingHorizontal: 24,
	},
	sectionTitle: {
		fontSize: 24,
		fontWeight: '600',
		color: Colors.black,
	},
	sectionDescription: {
		marginTop: 8,
		fontSize: 18,
		fontWeight: '400',
		color: Colors.dark,
	},
	highlight: {
		fontWeight: '700',
	},
	footer: {
		color: '#000',
		fontSize: 16,
		fontWeight: '400',
		lineHeight: 24,
		padding: 20,
		marginBottom: 100,

	},
});

export default App;
