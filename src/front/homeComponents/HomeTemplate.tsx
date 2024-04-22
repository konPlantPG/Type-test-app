import React from "react";
import { StockData } from "../../types/stockData.types";
import HomeOrganism from "./HomeOrganisim";


type RankingTemplateProps = {
    stockDatas: StockData[];
}

const HomeTemplate= (props: RankingTemplateProps) => {
    return (
        <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold my-8 text-center">配当利回りランキングTop10</h1>
            <HomeOrganism
                stockDatas={props.stockDatas}
            />
        </div>
    )
}

export default HomeTemplate;