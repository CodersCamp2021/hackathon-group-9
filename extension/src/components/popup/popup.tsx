import { PopupWrapper, FlagWrapper, ArrowsWrapper ,Footer } from "./popup.styled";
import { useState, useEffect } from "react";
import  { ImArrowUp, ImArrowDown } from "react-icons/im";
import { Button } from "@nextui-org/react";



export type SelectedFlag = "red" | "yellow" | "green";

const Popup = () => {
    const [selectedFlag, setSelectedFlag] = useState<SelectedFlag>("green");
    const [opinions, setOpinions] = useState<{positive: number, negative: number}>({
        positive: 2,
        negative: 3
    });
    const [domainInfo, setDomainInfo] = useState({
        domainOwner: "dupa1234",
        registeredCountry: "Russia",
        creationDate: "22.01.1945"
    })

    useEffect(() => {
        const fetchData = () => {

        }
    }, [])

    return (
        <PopupWrapper>
            <FlagWrapper selectedFlag={selectedFlag} />
            <ArrowsWrapper>
                <span>{opinions.negative}</span>
                <Button auto flat color="error" icon={<ImArrowDown style={{transform: "scale(1.5)"}}/>}/>
                <Button auto flat color="success" icon={<ImArrowUp style={{transform: "scale(1.5)"}} />} />
                <span>{opinions.positive}</span>
            </ArrowsWrapper>
            <p>
                <span>
                    Domain owner: {domainInfo.domainOwner || "No data available"}
                </span>
                <span>
                    country: {domainInfo.registeredCountry || "No data available"}
                </span>
                <span>
                    Creation date: {domainInfo.creationDate || "No data available"}
                </span>
            </p>
            <Footer>
                <Button 
                    as="a" 
                    href="https://earnest-palmier-0fac39.netlify.app/" 
                    target="_blank" 
                    size="xs" 
                    style={{textDecoration: "none"}}>
                        Show More
                    </Button>
            </Footer>
        </PopupWrapper>
    )
}

export default Popup;