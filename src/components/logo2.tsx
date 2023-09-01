import { useMediaQuery } from "@mantine/hooks";

interface Logo2Props {}

const Logo2 = (props: Logo2Props) => {
	const widthMatches = useMediaQuery("(max-width: 740px)");

	return (
		<svg
			width={widthMatches ? "200px" : "25%"}
			height="33"
			viewBox="0 0 315 33"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect x="263.703" y="4.27048" width="51.2459" height="23.4877" rx="6.40574" fill="#E94A47" />
			<path
				d="M277.535 20.6179C279.136 20.6179 280.34 19.8748 281.122 18.9011L279.982 17.9274C279.405 18.6449 278.559 19.1702 277.535 19.1702C275.805 19.1702 274.562 17.889 274.562 16.0185C274.562 14.0968 275.779 12.8029 277.509 12.8029C278.47 12.8029 279.277 13.2128 279.956 14.0456L281.096 13.0847C280.148 11.9189 278.841 11.3423 277.509 11.3423C274.588 11.3423 272.948 13.4306 272.948 16.0185C272.948 19.0036 275.062 20.6179 277.535 20.6179ZM282.691 20.541H288.457V19.1573H284.242V11.4448H282.691V20.541ZM293.27 20.6435C295.538 20.6435 296.908 19.1573 296.908 16.8V11.4448H295.358V16.6847C295.358 18.2477 294.487 19.183 293.27 19.183C291.963 19.183 291.194 18.1324 291.194 16.6847V11.4448H289.657V16.8C289.657 19.247 291.118 20.6435 293.27 20.6435ZM298.993 20.541H302.593C304.605 20.541 305.579 19.4904 305.579 18.0427C305.579 16.7872 304.835 15.9929 303.772 15.7367V15.7239C304.707 15.3523 305.117 14.5068 305.117 13.6612C305.117 12.1751 304.028 11.4448 302.158 11.4448H298.993V20.541ZM300.544 15.2114V12.8285L301.991 12.8157C303.055 12.8157 303.542 13.2897 303.542 14.0071C303.542 14.8655 302.914 15.2114 302.043 15.2114H300.544ZM300.544 19.1573V16.5438H302.158C303.362 16.5438 303.964 17.0691 303.964 17.8762C303.964 18.7346 303.362 19.1573 302.401 19.1573H300.544Z"
				fill="white"
			/>
			<path
				d="M59.4254 0L62.6198 1.31883L88.3516 30.5089C89.2016 31.476 88.5275 33 87.238 33H30.3818L59.4254 0Z"
				fill="#2044A0"
			/>
			<path
				d="M28.7114 32.9707H39.7603L62.7372 6.88721C65.1111 4.22025 63.2061 0 59.6306 0C58.429 0 57.3153 0.498224 56.524 1.40675L28.7114 32.9707Z"
				fill="#C7DAFF"
			/>
			<path d="M29.8248 0L33.0193 1.31883L60.9198 32.9707H0.78125L29.8248 0Z" fill="#3366FF" />
			<path
				d="M0.752397 32.9707H10.16L33.1369 6.88721C35.4815 4.22025 33.5766 0 30.0011 0C28.7995 0 27.6858 0.498224 26.8945 1.40675L0.19556 31.7398C-0.244049 32.2087 0.107637 32.9707 0.752397 32.9707Z"
				fill="#C7DAFF"
			/>
			<path
				d="M124.412 13.6028L119.371 24.0655H116.089L110.99 13.5735L109.495 26.4101H105.216L107.766 5.71913H111.312L117.701 19.2884L124.031 5.71913H127.636L130.157 26.4101H125.907L124.412 13.6028Z"
				fill="#28293D"
			/>
			<path
				d="M147.36 26.4101H134.113V5.71913H147.096V9.41185H138.304V14.3355H146.012V18.0868H138.304V22.7174H147.389V26.4101H147.36Z"
				fill="#28293D"
			/>
			<path
				d="M159.317 9.41185V26.4101H155.156V9.41185H149.441V5.71913H165.032V9.41185H159.317Z"
				fill="#28293D"
			/>
			<path
				d="M166.732 20.4021H170.894C170.923 21.8674 172.359 23.0983 174.293 23.0983C176.198 23.0983 177.4 22.0726 177.4 20.6072C177.4 19.4936 176.521 18.6436 174.792 18.1161L172.271 17.3834C167.729 16.1818 166.937 13.4269 166.937 11.5806C166.937 7.85856 170.132 5.33813 174.088 5.33813C178.015 5.33813 181.005 7.71202 181.005 11.6392H176.843C176.843 10.1738 175.817 9.03085 174.03 9.03085C172.388 9.03085 171.187 10.0859 171.187 11.4927C171.187 12.0202 171.333 13.046 173.502 13.6907L175.817 14.3648C178.953 15.244 181.679 16.8559 181.679 20.4021C181.679 24.4758 178.162 26.7618 174.264 26.7618C169.78 26.7618 166.732 24.0362 166.732 20.4021Z"
				fill="#28293D"
			/>
			<path
				d="M198.618 26.4101H185.371V5.71913H198.354V9.41185H189.562V14.3355H197.27V18.0868H189.562V22.7174H198.648V26.4101H198.618Z"
				fill="#28293D"
			/>
			<path
				d="M218.078 26.4101H214.327L206.824 13.4269V26.4101H202.663V5.71913H206.531L213.917 18.5557V5.71913H218.078V26.4101Z"
				fill="#28293D"
			/>
			<path
				d="M226.548 21.4571L224.907 26.4101H220.452L228.16 5.71913H232.673L240.352 26.4101H235.956L234.285 21.4571H226.548ZM230.387 10.0566L227.779 17.823H233.025L230.387 10.0566Z"
				fill="#28293D"
			/>
			<path
				d="M248.968 9.41185V26.4101H244.806V9.41185H239.092V5.71913H254.683V9.41185H248.968Z"
				fill="#28293D"
			/>
		</svg>
	);
};

export default Logo2;