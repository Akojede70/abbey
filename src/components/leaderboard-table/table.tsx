import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Up, Down, Dash } from '../../assets/images-icon'; // Import images

interface Column {
  id: 'placement' | 'player' | 'gamePlayed' | 'wins' | 'losses' | 'winLossRatio' | 'points';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'placement', label: 'Placement', minWidth: 170 },
  { id: 'player', label: 'Player', minWidth: 170 },
  { id: 'gamePlayed', label: 'Game Played', minWidth: 100, align: 'right' },
  { id: 'wins', label: 'Wins', minWidth: 100, align: 'right' },
  { id: 'losses', label: 'Losses', minWidth: 100, align: 'right' },
  { id: 'winLossRatio', label: 'W/L Ratio', minWidth: 100, align: 'right' },
  { id: 'points', label: 'Points', minWidth: 100, align: 'right' },
];

interface Data {
  placement: string | JSX.Element;
  player: string;
  gamePlayed: number;
  wins: number;
  losses: number;
  winLossRatio: string;
  points: number;
}

// Updated createData function to include icons
function createData(
  placement: JSX.Element,
  player: string,
  gamePlayed: number,
  wins: number,
  losses: number,
  points: number
): Data {
  const winLossRatio = `${Math.round((wins / gamePlayed) * 100)}%`;
  return { placement, player, gamePlayed, wins, losses, winLossRatio, points };
}

// Assigning images beside placements randomly
const rows = [
  createData(
    <div className='flex gap-2'> 
        <img src={Up} alt="Up" width={16} />
        <p>1</p></div>, 
    'Adebayo Oyeleye', 20, 20, 0, 49
  ),
  createData(
    <div className='flex gap-2'> 
    <img src={Down} alt="Up" width={16} />
    <p>1</p></div>,  
    'IBROMOVIC109', 20, 19, 1, 47
  ),
  createData(
    <div className='flex gap-2'> 
        <img src={Dash} alt="Up" width={16} />
        <p>1</p></div>, 
    'Drillz', 20, 17, 3, 46
  ),
  createData(
    <div className='flex gap-2'> 
        <img src={Up} alt="Up" width={16} />
        <p>1</p></div>, 
    'Bigbadderwilf', 20, 12, 8, 39
  ),
  createData(
    <div className='flex gap-2'> 
    <img src={Up} alt="Up" width={16} />
    <p>1</p></div>, 
    'Pirky', 20, 10, 6, 34
  ),
  createData(
    <div className='flex gap-2'> 
    <img src={Down} alt="Up" width={16} />
    <p>1</p></div>, 
    'Tom Green', 22, 8, 14, 30
  ),
];

export default function StickyHeadTable() {
  const [page ] = React.useState(0);
  const [rowsPerPage ] = React.useState(10);

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden', }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{
                    minWidth: column.minWidth,
                    backgroundColor: '#2E2E2E', 
                    color: '#7E7F7F',
                    borderBottom: '2px solid #2E2E2E',
                    padding: "13px 38px"
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.player}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          style={{
                            backgroundColor: '#242424', 
                            color: '#FFFFFF',
                            borderBottom: '2px solid #2E2E2E',
                            padding: "15px 40px"
                          }}
                        >
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
