import { LoginPage as Login } from '@utd-argo/ux-master-library';

export type LoginPageProps = {
	children: React.ReactNode;
};

const LoginPage = (props: LoginPageProps) => {
	return (
		<Login
			logo={
				<h1
					style={{
						color: '#0048fd',
						fontSize: '3.5rem',
						fontWeight: 'bold',
						fontFamily: 'Poppins'
					}}
				>
					Socialyze!
				</h1>
			}
			bgColor1="#e6f7ff"
			bgColor2="#91d5ff"
		>
			{props.children}
		</Login>
	);
};

export default LoginPage;
