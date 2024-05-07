import React from "react";
import RankingOrganism from "./RankingOrganisim";
import { StockData } from "../../types/stockData.types";


interface RankingTemplateProps {
    stockDatas: StockData[];
}

const RankingTemplate = (props: RankingTemplateProps) => {
    return (
        
        <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold my-8 text-center">配当利回りランキング</h1>
            <RankingOrganism
                stockDatas={props.stockDatas}
            />
        </div>
    )
}

export default RankingTemplate