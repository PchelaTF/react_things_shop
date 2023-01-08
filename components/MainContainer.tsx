import Header from "./Header";
import SideBar from "./SideBar";
import Footer from "./Footer";
import Head from "next/head";

interface IMainContainerProps {
    children: JSX.Element
    title?: string
}

const MainContainer = ({title, children}: IMainContainerProps) => {
    return (
        <>
            <Head>
                <title>{title ? title + ' - Shop name' : 'Shop name'}</title>
                <meta name={'description'} content={'Ecommerce Website'}/>
                <link rel="icon" href=""/>
            </Head>

            <Header/>
            {/*<SideBar>*/}
                {children}
            {/*</SideBar>*/}
            <Footer/>
        </>
    );
};

export default MainContainer;