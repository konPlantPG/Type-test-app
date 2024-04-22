import React from 'react';
import { render, waitFor, screen, within} from '@testing-library/react';
import '@testing-library/jest-dom';
import Ranking from '../pages/ranking';
import { API } from '@aws-amplify/api';
import { act } from 'react-dom/test-utils';

interface Stock {
  createdAt: string;
  dividend: number;
  id: string;
  name: string;
  price: number;
  updatedAt: string;
}

// API.graphqlの呼び出しをモック化
jest.mock('@aws-amplify/api', () => ({
  API: {
    graphql: jest.fn(() => Promise.resolve({
      data: {
        listStocks: {
          items: mockData
        },
      },
    })),
  },
  graphqlOperation: jest.fn(),
}));



const mockData:Stock[]= [
  {
    createdAt: '2021-01-01',
    dividend: 5,
    id: '1',
    name: 'Test Stock1',
    price: 100,
    updatedAt: '2021-01-02',
  },
  {
    createdAt: '2021-01-02',
    dividend: 10,
    id: '2',
    name: 'Test Stock2',
    price: 100,
    updatedAt: '2021-01-02',
  },
  {
    createdAt: '2021-01-10',
    dividend: 15,
    id: '2',
    name: 'Test Stock2',
    price: 100,
    updatedAt: '2021-01-10',
  },
  {
    createdAt: '2021-01-02',
    dividend: 30,
    id: '3',
    name: 'Test Stock3',
    price: 100,
    updatedAt: '2021-01-03',
  },
]

const mockData_empty: Stock[] = [];

describe('ランキングページの確認', () => {
  beforeEach(async () => {
    render(<Ranking />);
    await waitFor(() => expect(API.graphql).toHaveBeenCalled());
  });
  describe('APIの確認', () =>{
    it('items配列の最初の要素中のキーの数が正しい', async () => {
      const mockQuery = { query: 'query ListStocks { listStocks { items { id } } }' };
      const response = await API.graphql(mockQuery);
      const items = (response as any).data.listStocks.items;
      expect(Object.keys(items[0])).toHaveLength(6);
    });
  });

  describe('表の確認', () => {
  it('表のヘッダーが正しく表示されている', async () => {

    expect(screen.getByText('名前')).toBeInTheDocument();
    expect(screen.getByText('株価')).toBeInTheDocument();
    expect(screen.getByText('分配金')).toBeInTheDocument();
    expect(screen.getByText('分配利回り (%)')).toBeInTheDocument();
  });

  it('APIで取得したデータが表示されている', async () => {
    await waitFor(() => {
      const grid = screen.getByRole('grid');
      const rows = within(grid).getAllByRole('row', { hidden: true });
      expect(rows.length).toBeGreaterThanOrEqual(4);
    });
  })

  it('APIで取得したデータが分配利回りが高い順になっている', async () => {
    await waitFor(() => {
      const grid = screen.getByRole('grid');
      const rows = within(grid).getAllByRole('row', { hidden: true });
      expect(within(rows[1]).getByText('Test Stock3')).toBeInTheDocument();
      expect(within(rows[2]).getByText('Test Stock2')).toBeInTheDocument();
      expect(within(rows[3]).getByText('Test Stock1')).toBeInTheDocument();
    }); 
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
  })

});