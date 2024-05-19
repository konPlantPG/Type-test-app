import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import MoneyIcon from '@mui/icons-material/Money'; 
import PercentIcon from '@mui/icons-material/Percent';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

type Props = {
    totalPrice: number;
    totalDividend: number;
}

const SimulationText: React.FC<Props> = ({ totalPrice, totalDividend }) => {
    return (
        <Card style={{ width: '50%', margin: '20px auto', boxShadow: '0px 4px 6px rgba(0,0,0,0.1)' }}>
            <CardContent style={{ textAlign: 'center' }}>
                <Typography variant="h6" component="p" gutterBottom>
                    <MoneyIcon /> 年間配当金：{totalDividend.toLocaleString()}円
                </Typography>
                <Typography variant="h6" component="p" gutterBottom>
                    <PercentIcon /> 配当利回り：{totalPrice === 0 ? '0.00' : (totalDividend / totalPrice * 100).toFixed(2)}%
                </Typography>
                <Typography variant="h6" component="p">
                    <AccountBalanceIcon /> 必要金額：{totalPrice.toLocaleString()}円
                </Typography>
            </CardContent>
        </Card>
    );
}

export default SimulationText;
