import Banner from "./banner";
import ConnectContent from "./connect-content";
import ExpertsAgree from "./experts_agree";
import Newstart from "./newstart";
import SendEmails from "./send-emails";
import ShareHompage from "./share_hompage";
import Wewe from "./we`we";


function Home_page() {
    return <div className="home_page">
        <Banner/>
        <ConnectContent/>
        <ShareHompage/>
        <SendEmails/>
        <ExpertsAgree/>
        <Wewe/>
        <Newstart/>
    </div>;
}

export default Home_page