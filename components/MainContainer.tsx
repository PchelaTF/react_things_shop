import Header from "./Header";
import SideBar from "./SideBar";
import Footer from "./Footer";

interface IMainContainerProps {
    children: JSX.Element
}

const MainContainer = ({children}: IMainContainerProps) => {
    return (
        <>
            <Header/>
            {/*<SideBar>*/}
                {children}
            {/*</SideBar>*/}
            <Footer/>
        </>
    );
};

export default MainContainer;