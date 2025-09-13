
import { CountDown } from "../../components/CountDown";
import { MainForm } from "../../components/Mainform";
import { MainTemplate } from "../../templates/MainTemplate";


export function Home() {
    return (
        <MainTemplate>
                <CountDown />,
                <MainForm/>
        </MainTemplate>
        
    )
}